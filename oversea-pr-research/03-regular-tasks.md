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

### Task: province-occupation-pathway-fit-comparison
- status: active
- frequency: on-demand
- priority: high
- source-tier: workspace-first-then-official
- sources:
  - Existing workspace notes on profile, OWP strategy, provinces, pathways, and job paths
  - Manitoba, Alberta, and Saskatchewan official immigration pages when a rule or pathway name needs verification
  - Job-post draft notes only as provisional supporting evidence
- objective:
  - Compare Manitoba, Alberta, and Saskatchewan and identify the most realistic current combination of province, occupation lane, and PR pathway for this profile
- scope:
  - Use only background already recorded in this workspace
  - Focus on realistic occupation lanes already supported by the notes, such as administrative support, office support, service desk, IT support, and application support
  - Include junior developer or QA only if existing notes clearly support them as realistic
  - For each province, identify the most relevant current pathway name and assess whether it is concrete, weak, or speculative for this profile
- required-output:
  - Background Factors That Matter
  - Manitoba
  - Alberta
  - Saskatchewan
  - Best Current Fit
  - Main Uncertainties
  - Phase 1 Facts That Must Be Confirmed Before Any Decision
- per-province-requirements:
  - most realistic occupation lane
  - exact pathway name
  - why the pathway is or is not concrete for this profile
  - key blocker
  - confidence level: `more concrete`, `possible but weak`, or `mostly speculative`
- decision-rule:
  - End with one provisional recommendation in this exact format:
    - `Best current fit: [province] + [occupation lane] + [pathway name]`
  - Explain why it is currently the strongest fit and why the other provinces are weaker
- output-folder: `canada-pr-research/99-drafts/province-updates`
- output-format: markdown-summary
- notes:
  - This is a draft-only synthesis task. Do not update stable notes, roadmap status, dashboard, or progress tracker without explicit approval.
  - Do not treat old draft notes as approved conclusions.
  - Do not rank provinces based only on job volume.
  - Do not rank pathways without considering the likely occupation lane for this profile.
  - If Phase 1 facts are missing, stop at a provisional comparison and list blockers instead of guessing.

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
