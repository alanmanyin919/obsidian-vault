# Canada PR Regular Tasks

## Purpose
This note defines recurring research tasks that an agent can check on a schedule and write back into this vault as draft updates.

## Global Rules
- Read `canada-pr-research/AGENTS.md` before each run.
- Read `canada-pr-research/01-master-roadmap.md` before each run.
- Read `canada-pr-research/02-progress-tracker.md` before each run.
- Prefer official sources first.
- Save output into draft-oriented notes first.
- Do not update stable notes, roadmap status, or the progress tracker without explicit approval.
- If no meaningful change is found, still record a dated check result.

## Output Conventions
- Default output root: `canada-pr-research/99-drafts`
- Filename pattern: `YYYY-MM-DDTHHMMSSZ-task-slug.md`
- Each update should include:
  - checked-on
  - task-id
  - sources-checked
  - what-changed
  - what-did-not-change
  - relevance-to-my-situation
  - uncertainties
  - suggested-next-step

## Active Tasks

### Task: owp-and-ircc-check
- status: active
- frequency: every-2-hours
- priority: high
- source-tier: official-only-first
- sources:
  - IRCC main immigration pages
  - IRCC news and policy updates relevant to temporary workers and PR pathways
- focus:
  - OWP-related validity, entry-window, or usage-rule changes
  - PR pathway changes relevant to OWP holders
  - Express Entry, CEC, and category-based draw changes that may affect planning
- output-folder: `canada-pr-research/99-drafts/official-updates`
- output-format: markdown-summary
- notes:
  - If there is no major change, record a no-change check with the date.
  - Flag anything that may affect timing, eligibility, or urgency.

### Task: alberta-pathway-check
- status: active
- frequency: every-2-hours
- priority: medium
- source-tier: official-only-first
- sources:
  - Alberta Advantage Immigration Program official pages
  - Alberta government news pages for immigration updates
- focus:
  - stream eligibility changes
  - intake pauses or reopenings
  - updates relevant to lower-barrier or employment-linked pathways
- output-folder: `canada-pr-research/99-drafts/province-updates`
- output-format: markdown-summary

### Task: manitoba-pathway-check
- status: active
- frequency: every-2-hours
- priority: medium
- source-tier: official-only-first
- sources:
  - Manitoba PNP official pages
  - Manitoba government immigration update pages
- focus:
  - pathway rule changes
  - EOI or draw pattern changes
  - updates relevant to overseas applicants and work-linked routes
- output-folder: `canada-pr-research/99-drafts/province-updates`
- output-format: markdown-summary

### Task: saskatchewan-pathway-check
- status: active
- frequency: every-2-hours
- priority: medium
- source-tier: official-only-first
- sources:
  - Saskatchewan immigration official pages
  - Saskatchewan government update pages
- focus:
  - pathway changes
  - occupation or eligibility updates
  - practical changes affecting feasibility for this profile
- output-folder: `canada-pr-research/99-drafts/province-updates`
- output-format: markdown-summary

### Task: suitable-job-post-check
- status: active
- frequency: every-2-hours
- priority: high
- source-tier: official-and-reputable-job-boards-first
- sources:
  - LinkedIn Jobs
  - Indeed Canada
  - Job Bank Canada
  - Provincial or regional job boards when useful
- focus:
  - job posts that fit the current target role families
  - roles with lower barriers for spoken English and local network
  - roles connected to realistic survival and PR-supporting pathways
  - opportunities in provinces currently being tracked in this workspace
- output-folder: `canada-pr-research/99-drafts/job-post-updates`
- output-format: markdown-summary
- notes:
  - Prefer practical, currently open jobs over generic market commentary.
  - Capture title, employer, location, link, and why the job may fit this profile.
  - Flag postings that appear especially realistic or strategically useful.

## Inactive Or Future Tasks

### Task: atlantic-pathway-check
- status: paused
- frequency: every-2-hours
- priority: low
- source-tier: official-only-first
- sources:
  - Atlantic province official immigration pages
  - AIP official federal pages
- focus:
  - employer-linked pathway updates
  - regional pilot or endorsement-process changes
- output-folder: `canada-pr-research/99-drafts/province-updates`
- output-format: markdown-summary
- notes:
  - Keep paused until Phase 1 and Phase 2 are more stable.
