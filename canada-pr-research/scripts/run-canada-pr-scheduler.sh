#!/usr/bin/env bash
set -euo pipefail

VAULT_ROOT="/home/ubuntu/obsidian-vault"
SCRIPT_PATH="$VAULT_ROOT/canada-pr-research/scripts/canada-pr-scheduler.js"
LOG_DIR="$VAULT_ROOT/canada-pr-research/logs"
LOG_FILE="$LOG_DIR/canada-pr-scheduler.log"
NODE_BIN="/usr/bin/node"
GH_BIN="${GH_BIN:-/usr/bin/gh}"
GIT_REMOTE="${GIT_REMOTE:-origin}"
GIT_BRANCH="${GIT_BRANCH:-main}"
PULL_LATEST="${PULL_LATEST:-1}"

mkdir -p "$LOG_DIR"

{
  echo "[$(date -u +'%Y-%m-%dT%H:%M:%SZ')] starting canada-pr scheduler"
  cd "$VAULT_ROOT"
  if [ "$PULL_LATEST" = "1" ]; then
    echo "[$(date -u +'%Y-%m-%dT%H:%M:%SZ')] refreshing vault from $GIT_REMOTE/$GIT_BRANCH"
    "$GH_BIN" auth status >/dev/null
    "$GH_BIN" auth setup-git >/dev/null
    git -C "$VAULT_ROOT" pull --ff-only "$GIT_REMOTE" "$GIT_BRANCH"
  fi
  "$NODE_BIN" "$SCRIPT_PATH"
  echo "[$(date -u +'%Y-%m-%dT%H:%M:%SZ')] completed canada-pr scheduler"
} >> "$LOG_FILE" 2>&1
