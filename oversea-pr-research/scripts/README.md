# Canada PR Scheduler Scripts

This folder contains the automation scripts for scheduled Canada PR research updates.

## Files

- `canada-pr-scheduler.js`
  - Main scheduler entrypoint.
  - Reads `oversea-pr-research/03-regular-tasks.md`.
  - Decides which tasks are due.
  - Calls the local `codex` CLI to run each due research job.
  - Can optionally auto-commit and push the generated draft notes.

- `run-canada-pr-scheduler.sh`
  - Ubuntu-oriented wrapper script.
  - Changes into the vault root.
  - Refreshes the local vault checkout before the run.
  - Uses `gh auth setup-git` so the pull uses the Ubuntu user's GitHub CLI auth.
  - Runs the Node scheduler.
  - Appends output to `oversea-pr-research/logs/canada-pr-scheduler.log`.

## Scheduler Inputs

The scheduler always reads these files before running task work:

- `oversea-pr-research/AGENTS.md`
- `oversea-pr-research/01-master-roadmap.md`
- `oversea-pr-research/02-progress-tracker.md`
- `oversea-pr-research/03-regular-tasks.md`
- `oversea-pr-research/04-agent-workflow.md`

## Common Commands

Run a dry run:

```bash
node oversea-pr-research/scripts/canada-pr-scheduler.js --dry-run
```

Run one task manually:

```bash
node oversea-pr-research/scripts/canada-pr-scheduler.js --task owp-and-ircc-check --force
```

Run with full Codex bypass:

```bash
node oversea-pr-research/scripts/canada-pr-scheduler.js --dangerously-bypass-approvals-and-sandbox
```

Run with auto commit and push:

```bash
GIT_USER_NAME='Alan Man' \
GIT_USER_EMAIL='alanmanyin919@gmail.com' \
GIT_PUSH_URL='https://alanmanyin919:<PAT>@github.com/alanmanyin919/obsidian-vault.git' \
node oversea-pr-research/scripts/canada-pr-scheduler.js \
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
  - After successful task runs, stage only the generated output files, commit them with a Conventional Commits message, and push them.

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
- `GH_BIN`
- `GIT_REMOTE`
- `GIT_BRANCH`
- `PULL_LATEST`

Example:

```bash
export CODEX_BIN=/home/ubuntu/.nvm/versions/node/v24.1.0/bin/codex
export GIT_USER_NAME='Alan Man'
export GIT_USER_EMAIL='alanmanyin919@gmail.com'
export GIT_PUSH_URL='https://alanmanyin919:<PAT>@github.com/alanmanyin919/obsidian-vault.git'
export GH_BIN=/usr/bin/gh
export GIT_REMOTE=origin
export GIT_BRANCH=main
export PULL_LATEST=1
```

## Logs

The wrapper script writes logs here:

```text
/home/ubuntu/obsidian-vault/oversea-pr-research/logs/canada-pr-scheduler.log
```

## Ubuntu Notes

- Use absolute paths in cron or systemd.
- Cron and systemd user services usually have a minimal environment, so `CODEX_BIN` and git-related variables should be set explicitly.
- If you use `--auto-commit-and-push`, prefer a protected environment file or credential helper over hardcoding the PAT directly in the service file.
- The wrapper script now does a pre-run `git pull --ff-only` after calling `gh auth setup-git`.
- `gh auth status` for the `ubuntu` user must already be valid before the service runs.

## Related Notes

- `oversea-pr-research/systemd-scheduler-setup.md`
- `oversea-pr-research/03-regular-tasks.md`
- `oversea-pr-research/04-agent-workflow.md`
