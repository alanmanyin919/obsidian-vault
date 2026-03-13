#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
RESEARCH_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
VAULT_ROOT="$(cd "$RESEARCH_ROOT/.." && pwd)"
SCRIPT_PATH="$RESEARCH_ROOT/scripts/canada-pr-scheduler.js"
LOG_DIR="$RESEARCH_ROOT/logs"
LOG_FILE="$LOG_DIR/canada-pr-scheduler.log"
NODE_BIN="/usr/bin/node"
GH_BIN="${GH_BIN:-/usr/bin/gh}"
GIT_REMOTE="${GIT_REMOTE:-origin}"
GIT_BRANCH="${GIT_BRANCH:-main}"
PULL_LATEST="${PULL_LATEST:-1}"

mkdir -p "$LOG_DIR"

{
  echo "[$(date -u +'%Y-%m-%dT%H:%M:%SZ')] starting oversea-pr scheduler"
  cd "$VAULT_ROOT"
  if [ "$PULL_LATEST" = "1" ]; then
    echo "[$(date -u +'%Y-%m-%dT%H:%M:%SZ')] refreshing vault from $GIT_REMOTE/$GIT_BRANCH"
    "$GH_BIN" auth status >/dev/null
    "$GH_BIN" auth setup-git >/dev/null
    git -C "$VAULT_ROOT" pull --ff-only "$GIT_REMOTE" "$GIT_BRANCH"
  fi
  "$NODE_BIN" "$SCRIPT_PATH" "$@"
  echo "[$(date -u +'%Y-%m-%dT%H:%M:%SZ')] completed oversea-pr scheduler"
} >> "$LOG_FILE" 2>&1
