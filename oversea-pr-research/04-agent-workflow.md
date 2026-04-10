# Canada PR Agent Workflow

## Purpose
This note defines how a scheduled agent should run recurring Canada PR research tasks and write draft updates into this vault.

## Required Read Order
1. `canada-pr-research/AGENTS.md`
2. `canada-pr-research/01-master-roadmap.md`
3. `canada-pr-research/02-progress-tracker.md`
4. `canada-pr-research/03-regular-tasks.md`

## Agent Constraints
- Behave like a careful research assistant, not an autonomous decision-maker.
- Work on the smallest useful unit.
- Prefer official sources first.
- Record uncertainty clearly.
- Do not convert draft findings into stable conclusions automatically.
- Do not edit the roadmap or progress tracker unless explicit approval has been given.

## On Each Scheduled Run
1. Read the required notes in order.
2. Determine which tasks in `03-regular-tasks.md` are due for the current date.
3. Skip any task with `status: paused`.
4. For each due task, check official sources first.
5. If official sources are unclear, optionally use secondary sources only as support, not as final authority.
6. Create one markdown output note per task.
7. Save each result into the task's configured output folder.
8. If no meaningful update is found, still save a dated no-change check.

## Output Template
Use this structure for every scheduled task result.

```md
# <task-id> update

- checked-on: YYYY-MM-DD
- task-id: <task-id>
- status: completed

## Sources Checked
- <source 1>
- <source 2>

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
```

## File And Folder Rules
- Use kebab-case for any new file or folder names.
- Suggested output roots:
  - `canada-pr-research/99-drafts/official-updates`
  - `canada-pr-research/99-drafts/province-updates`
- Suggested filename format:
  - `YYYY-MM-DD-task-id.md`

## Escalation Rules
- If a task result suggests a major planning change, flag it clearly as review-needed.
- If a source cannot be verified, say so directly.
- If a change may affect timeline, cost, or eligibility, highlight that impact explicitly.

## Non-Goals
- Do not rank provinces automatically.
- Do not rewrite stable strategy notes automatically.
- Do not mark roadmap items complete automatically.
