#!/usr/bin/env bash
set -euo pipefail

VAULT_ROOT="/home/ubuntu/obsidian-vault"
SCRIPT_PATH="$VAULT_ROOT/canada-pr-research/scripts/canada-pr-scheduler.js"
LOG_DIR="$VAULT_ROOT/canada-pr-research/logs"
LOG_FILE="$LOG_DIR/canada-pr-scheduler.log"
NODE_BIN="/usr/bin/node"

mkdir -p "$LOG_DIR"

{
  echo "[$(date -u +'%Y-%m-%dT%H:%M:%SZ')] starting canada-pr scheduler"
  cd "$VAULT_ROOT"
  "$NODE_BIN" "$SCRIPT_PATH"
  echo "[$(date -u +'%Y-%m-%dT%H:%M:%SZ')] completed canada-pr scheduler"
} >> "$LOG_FILE" 2>&1
