# Canada PR Scheduler Scripts

This folder contains the automation scripts for scheduled Canada PR research updates.

## Files

- `canada-pr-scheduler.js`
  - Main scheduler entrypoint.
  - Reads `canada-pr-research/03-regular-tasks.md`.
  - Decides which tasks are due.
  - Calls the local `codex` CLI to run each due research job.
  - Can optionally auto-commit and push the generated draft notes.

- `run-canada-pr-scheduler.sh`
  - Ubuntu-oriented wrapper script.
  - Changes into the vault root.
  - Runs the Node scheduler.
  - Appends output to `canada-pr-research/logs/canada-pr-scheduler.log`.

## Scheduler Inputs

The scheduler always reads these files before running task work:

- `canada-pr-research/AGENTS.md`
- `canada-pr-research/01-master-roadmap.md`
- `canada-pr-research/02-progress-tracker.md`
- `canada-pr-research/03-regular-tasks.md`
- `canada-pr-research/04-agent-workflow.md`

## Common Commands

Run a dry run:

```bash
node canada-pr-research/scripts/canada-pr-scheduler.js --dry-run
```

Run one task manually:

```bash
node canada-pr-research/scripts/canada-pr-scheduler.js --task owp-and-ircc-check --force
```

Run with full Codex bypass:

```bash
node canada-pr-research/scripts/canada-pr-scheduler.js --dangerously-bypass-approvals-and-sandbox
```

Run with auto commit and push:

```bash
GIT_USER_NAME='Alan Man' \
GIT_USER_EMAIL='alanmanyin919@gmail.com' \
GIT_PUSH_URL='https://alanmanyin919:<PAT>@github.com/alanmanyin919/obsidian-vault.git' \
node canada-pr-research/scripts/canada-pr-scheduler.js \
  --dangerously-bypass-approvals-and-sandbox \
  --auto-commit-and-push \
  --git-branch main
```

## Supported Flags

- `--dry-run`
  - Show which tasks would run and print the generated Codex prompt.

- `--task <task-id>`
  - Run only one configured task.

- `--force`
  - Ignore the normal due-date check.

- `--date YYYY-MM-DD`
  - Evaluate due tasks using a specific UTC date.

- `--dangerously-bypass-approvals-and-sandbox`
  - Pass full-permission bypass through to `codex`.

- `--auto-commit-and-push`
  - After successful task runs, stage only the generated output files, commit them, and push them.

- `--git-branch <branch>`
  - Override the branch used for push.

- `--git-remote <remote>`
  - Override the remote used when no explicit push URL is provided.

- `--git-user-name <name>`
  - Set local repo `user.name` before commit.

- `--git-user-email <email>`
  - Set local repo `user.email` before commit.

- `--git-push-url <url>`
  - Push using an explicit URL, for example an HTTPS URL with a runtime PAT.

- `--codex-bin <path>`
  - Use a specific local `codex` binary.

- `--model <model>`
  - Pass a specific model to `codex`.

- `--no-search`
  - Disable Codex web search for that run.

## Environment Variables

These are optional, but useful for unattended Ubuntu runs:

- `CODEX_BIN`
- `GIT_USER_NAME`
- `GIT_USER_EMAIL`
- `GIT_PUSH_URL`

Example:

```bash
export CODEX_BIN=/home/ubuntu/.nvm/versions/node/v24.1.0/bin/codex
export GIT_USER_NAME='Alan Man'
export GIT_USER_EMAIL='alanmanyin919@gmail.com'
export GIT_PUSH_URL='https://alanmanyin919:<PAT>@github.com/alanmanyin919/obsidian-vault.git'
```

## Logs

The wrapper script writes logs here:

```text
/home/ubuntu/obsidian-vault/canada-pr-research/logs/canada-pr-scheduler.log
```

## Ubuntu Notes

- Use absolute paths in cron or systemd.
- Cron and systemd user services usually have a minimal environment, so `CODEX_BIN` and git-related variables should be set explicitly.
- If you use `--auto-commit-and-push`, prefer a protected environment file or credential helper over hardcoding the PAT directly in the service file.

## Related Notes

- `canada-pr-research/systemd-scheduler-setup.md`
- `canada-pr-research/03-regular-tasks.md`
- `canada-pr-research/04-agent-workflow.md`
