# Canada PR Scheduler Setup

This note explains how to run the Canada PR scheduler every 2 hours with a user-level systemd timer.

## Files

Tracked in the vault:

- `canada-pr-research/scripts/canada-pr-scheduler.js`
- `canada-pr-research/scripts/run-canada-pr-scheduler.sh`

Installed locally for the `ubuntu` user:

- `~/.config/systemd/user/canada-pr-scheduler.service`
- `~/.config/systemd/user/canada-pr-scheduler.timer`

## What Runs

The timer triggers this wrapper script:

```bash
/home/ubuntu/obsidian-vault/canada-pr-research/scripts/run-canada-pr-scheduler.sh
```

The wrapper:

- changes into the vault root
- runs the Node scheduler
- writes output to `canada-pr-research/logs/canada-pr-scheduler.log`

## Enable The Timer

Run these commands as the `ubuntu` user:

```bash
mkdir -p ~/.config/systemd/user
systemctl --user daemon-reload
systemctl --user enable --now canada-pr-scheduler.timer
systemctl --user list-timers --all | grep canada-pr-scheduler
```

## Manual Test

Before waiting for the timer, trigger the job once manually:

```bash
systemctl --user start canada-pr-scheduler.service
systemctl --user status canada-pr-scheduler.service
```

You can also run the wrapper directly:

```bash
/home/ubuntu/obsidian-vault/canada-pr-research/scripts/run-canada-pr-scheduler.sh
```

## Logs

Primary log file:

```text
/home/ubuntu/obsidian-vault/canada-pr-research/logs/canada-pr-scheduler.log
```

Journal output:

```bash
journalctl --user -u canada-pr-scheduler.service -n 100 --no-pager
journalctl --user -u canada-pr-scheduler.timer -n 50 --no-pager
```

## If `systemctl --user` Fails

Some environments do not have a running user systemd manager by default. If you see errors similar to `Failed to connect to bus` or `Failed to read server status`, use a normal login session for the `ubuntu` user first.

If the timer still does not stay active after logout, enable linger for the user:

```bash
sudo loginctl enable-linger ubuntu
```

Then reload and enable again:

```bash
systemctl --user daemon-reload
systemctl --user enable --now canada-pr-scheduler.timer
```

## Timer Schedule

The timer uses:

```ini
OnCalendar=*-*-* 00/2:00:00
Persistent=true
```

That means:

- it runs every 2 hours on the hour
- missed runs are replayed when the user manager comes back up

## Notes

- The scheduler script decides whether any tasks are due for the current date.
- If nothing is due, the run exits cleanly and logs `No due tasks ...`.
- The scheduler uses the local Codex CLI session of the user running the service.
- The service runs as `ubuntu`, not `root`.
