#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

const VAULT_ROOT = path.resolve(__dirname, "../..");
const CANADA_PR_ROOT = path.join(VAULT_ROOT, "canada-pr-research");
const TASKS_FILE = path.join(CANADA_PR_ROOT, "03-regular-tasks.md");
const WORKFLOW_FILE = path.join(CANADA_PR_ROOT, "04-agent-workflow.md");
const AGENTS_FILE = path.join(CANADA_PR_ROOT, "AGENTS.md");
const ROADMAP_FILE = path.join(CANADA_PR_ROOT, "01-master-roadmap.md");
const TRACKER_FILE = path.join(CANADA_PR_ROOT, "02-progress-tracker.md");

function parseArgs(argv) {
  const args = {
    date: null,
    dryRun: false,
    taskId: null,
    force: false,
    model: null,
    codexBin: process.env.CODEX_BIN || "codex",
    search: true,
    sandbox: "workspace-write",
    approval: "on-failure",
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];

    if (arg === "--dry-run") {
      args.dryRun = true;
      continue;
    }
    if (arg === "--force") {
      args.force = true;
      continue;
    }
    if (arg === "--no-search") {
      args.search = false;
      continue;
    }
    if (arg === "--date") {
      args.date = argv[i + 1] || null;
      i += 1;
      continue;
    }
    if (arg === "--task") {
      args.taskId = argv[i + 1] || null;
      i += 1;
      continue;
    }
    if (arg === "--model") {
      args.model = argv[i + 1] || null;
      i += 1;
      continue;
    }
    if (arg === "--codex-bin") {
      args.codexBin = argv[i + 1] || null;
      i += 1;
      continue;
    }
    if (arg === "--sandbox") {
      args.sandbox = argv[i + 1] || null;
      i += 1;
      continue;
    }
    if (arg === "--approval") {
      args.approval = argv[i + 1] || null;
      i += 1;
      continue;
    }
  }

  return args;
}

function readFile(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function parseListItems(lines, startIndex, baseIndent) {
  const items = [];
  let index = startIndex;

  while (index < lines.length) {
    const line = lines[index];
    if (!line.trim()) {
      index += 1;
      continue;
    }

    const indent = line.match(/^ */)[0].length;
    if (indent <= baseIndent) {
      break;
    }

    const trimmed = line.trim();
    if (trimmed.startsWith("- ")) {
      items.push(trimmed.slice(2).trim());
    }

    index += 1;
  }

  return { items, nextIndex: index };
}

function parseTasks(markdown) {
  const lines = markdown.split(/\r?\n/);
  const tasks = [];
  let currentTask = null;

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];

    if (line.startsWith("### Task: ")) {
      if (currentTask) {
        tasks.push(currentTask);
      }
      currentTask = {
        taskId: line.replace("### Task: ", "").trim(),
        status: "active",
        frequency: null,
        scheduleDay: null,
        priority: null,
        sourceTier: null,
        sources: [],
        focus: [],
        outputFolder: null,
        outputFormat: null,
        notes: [],
      };
      continue;
    }

    if (!currentTask) {
      continue;
    }

    const trimmed = line.trim();
    if (!trimmed.startsWith("- ")) {
      continue;
    }

    const fieldMatch = trimmed.match(/^- ([a-z-]+):\s*(.*)$/);
    if (!fieldMatch) {
      continue;
    }

    const key = fieldMatch[1];
    const value = fieldMatch[2];
    const indent = line.match(/^ */)[0].length;

    if (key === "sources" || key === "focus" || key === "notes") {
      const parsed = parseListItems(lines, i + 1, indent);
      currentTask[key] = parsed.items;
      i = parsed.nextIndex - 1;
      continue;
    }

    if (key === "schedule-day") {
      currentTask.scheduleDay = value;
      continue;
    }

    if (key === "output-folder") {
      currentTask.outputFolder = value.replace(/^`|`$/g, "");
      continue;
    }

    if (key === "output-format") {
      currentTask.outputFormat = value;
      continue;
    }

    const camelKey = key.replace(/-([a-z])/g, (_, char) => char.toUpperCase());
    currentTask[camelKey] = value;
  }

  if (currentTask) {
    tasks.push(currentTask);
  }

  return tasks;
}

function toDateOnly(dateInput) {
  if (!dateInput) {
    const now = new Date();
    return new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
  }

  const parsed = new Date(`${dateInput}T00:00:00Z`);
  if (Number.isNaN(parsed.getTime())) {
    throw new Error(`Invalid --date value: ${dateInput}. Expected YYYY-MM-DD.`);
  }
  return parsed;
}

function formatDate(date) {
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const day = String(date.getUTCDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function weekdayName(date) {
  return date.toLocaleDateString("en-US", { weekday: "long", timeZone: "UTC" }).toLowerCase();
}

function startOfWeek(date) {
  const normalized = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
  const day = normalized.getUTCDay();
  const diff = day === 0 ? -6 : 1 - day;
  normalized.setUTCDate(normalized.getUTCDate() + diff);
  return normalized;
}

function weeksSinceEpoch(date) {
  const weekStart = startOfWeek(date);
  const epoch = new Date(Date.UTC(1970, 0, 5));
  const diffMs = weekStart.getTime() - epoch.getTime();
  return Math.floor(diffMs / (7 * 24 * 60 * 60 * 1000));
}

function isDueToday(task, runDate) {
  if ((task.status || "").toLowerCase() !== "active") {
    return false;
  }

  const dayMatches = !task.scheduleDay || task.scheduleDay.toLowerCase() === weekdayName(runDate);
  if (!dayMatches) {
    return false;
  }

  const frequency = (task.frequency || "").toLowerCase();
  if (frequency === "weekly") {
    return true;
  }
  if (frequency === "biweekly") {
    return weeksSinceEpoch(runDate) % 2 === 0;
  }
  if (frequency === "monthly") {
    return runDate.getUTCDate() <= 7;
  }

  return false;
}

function ensureDir(dirPath, dryRun) {
  if (!dryRun) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function buildTargetFile(task, runDate) {
  if (!task.outputFolder) {
    throw new Error(`Task ${task.taskId} is missing output-folder.`);
  }

  const targetDir = path.join(VAULT_ROOT, task.outputFolder);
  const filename = `${formatDate(runDate)}-${task.taskId}.md`;
  return {
    targetDir,
    targetFile: path.join(targetDir, filename),
  };
}

function buildPrompt(task, runDate, targetFile) {
  const checkedOn = formatDate(runDate);
  const sources = task.sources.length ? task.sources.map((item) => `- ${item}`).join("\n") : "- No sources configured";
  const focus = task.focus.length ? task.focus.map((item) => `- ${item}`).join("\n") : "- No focus configured";
  const notes = task.notes.length ? task.notes.map((item) => `- ${item}`).join("\n") : "- No extra notes";

  return `You are running a scheduled Canada PR research job inside an Obsidian vault.

Task:
- task-id: ${task.taskId}
- checked-on: ${checkedOn}
- target-output-file: ${targetFile}

You must:
1. Read these files first:
   - ${AGENTS_FILE}
   - ${ROADMAP_FILE}
   - ${TRACKER_FILE}
   - ${WORKFLOW_FILE}
   - ${TASKS_FILE}
2. Research only this scheduled task.
3. Prefer official sources first and use web search when needed.
4. Write exactly one markdown note to ${targetFile}.
5. Keep the output as a draft update only. Do not modify stable notes, the roadmap, the tracker, or the dashboard.
6. If there is no meaningful change, still write a dated no-change check.

Task configuration:
- frequency: ${task.frequency || "unspecified"}
- schedule-day: ${task.scheduleDay || "unspecified"}
- priority: ${task.priority || "unspecified"}
- source-tier: ${task.sourceTier || "unspecified"}

Sources to check:
${sources}

Focus:
${focus}

Scheduler notes:
${notes}

Required output structure:
# ${task.taskId} update

- checked-on: ${checkedOn}
- task-id: ${task.taskId}
- status: completed

## Sources Checked
- ...

## What Changed
- ...

## What Did Not Change
- ...

## Relevance To My Situation
- ...

## Uncertainties
- ...

## Suggested Next Step
- ...
`;
}

function runCodexForTask(task, runDate, args) {
  const { targetDir, targetFile } = buildTargetFile(task, runDate);
  ensureDir(targetDir, args.dryRun);

  if (fs.existsSync(targetFile) && !args.force) {
    return { taskId: task.taskId, targetFile, action: "skipped-existing", code: 0 };
  }

  const prompt = buildPrompt(task, runDate, targetFile);

  if (args.dryRun) {
    return { taskId: task.taskId, targetFile, action: "dry-run", code: 0, prompt };
  }

  const codexArgs = [];

  if (args.search) {
    codexArgs.push("--search");
  }

  if (args.sandbox) {
    codexArgs.push("--sandbox", args.sandbox);
  }

  if (args.approval) {
    codexArgs.push("--ask-for-approval", args.approval);
  }

  if (args.model) {
    codexArgs.push("--model", args.model);
  }

  codexArgs.push(
    "exec",
    "-C",
    VAULT_ROOT,
    "--skip-git-repo-check",
    "-"
  );

  const result = spawnSync(args.codexBin, codexArgs, {
    cwd: VAULT_ROOT,
    input: prompt,
    encoding: "utf8",
    stdio: ["pipe", "pipe", "pipe"],
  });

  return {
    taskId: task.taskId,
    targetFile,
    action: result.status === 0 ? "codex-ran" : "codex-failed",
    code: result.status,
    stdout: result.stdout || "",
    stderr: result.stderr || "",
  };
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const runDate = toDateOnly(args.date);
  const markdown = readFile(TASKS_FILE);
  let tasks = parseTasks(markdown);

  if (args.taskId) {
    tasks = tasks.filter((task) => task.taskId === args.taskId);
  }

  if (!tasks.length) {
    console.log("No matching tasks found.");
    process.exit(0);
  }

  const dueTasks = args.force ? tasks : tasks.filter((task) => isDueToday(task, runDate));

  if (!dueTasks.length) {
    console.log(`No due tasks for ${formatDate(runDate)}.`);
    process.exit(0);
  }

  console.log(`Running scheduler for ${formatDate(runDate)}.`);

  let hadFailure = false;

  for (const task of dueTasks) {
    const result = runCodexForTask(task, runDate, args);
    console.log(`${result.action}: ${task.taskId} -> ${path.relative(VAULT_ROOT, result.targetFile)}`);

    if (args.dryRun && result.prompt) {
      console.log("--- prompt preview start ---");
      console.log(result.prompt);
      console.log("--- prompt preview end ---");
    }

    if (result.stdout && !args.dryRun) {
      console.log(result.stdout.trim());
    }

    if (result.code !== 0) {
      hadFailure = true;
      if (result.stderr) {
        console.error(result.stderr.trim());
      }
    }
  }

  if (hadFailure) {
    process.exit(1);
  }
}

try {
  main();
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
