# Canada PR Regular Tasks

## Purpose
This note defines recurring research tasks that an agent can check on a schedule and write back into this vault as draft updates.

## Global Rules
- Read `oversea-pr-research/AGENTS.md` before each run.
- Read `oversea-pr-research/01-master-roadmap.md` before each run.
- Read `oversea-pr-research/02-progress-tracker.md` before each run.
- Prefer official sources first.
- Save output into draft-oriented notes first.
- Do not update stable notes, roadmap status, or the progress tracker without explicit approval.
- If no meaningful change is found, still record a dated check result.

## Output Conventions
- Default output root: `oversea-pr-research/90-research-updates`
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
- output-folder: `oversea-pr-research/90-research-updates/official-updates/ircc-and-owp`
- output-format: markdown-summary
- notes:
  - If there is no major change, record a no-change check with the date.
  - Flag anything that may affect timing, eligibility, or urgency.
  - Keep the output folder focused on federal policy and OWP-related items only.
  - Keep scheduled outputs in this folder only. Do not write directly into stable planning notes.

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
- output-folder: `oversea-pr-research/90-research-updates/job-post-updates/general-canada`
- output-format: markdown-summary
- notes:
  - Prefer practical, currently open jobs over generic market commentary.
  - Capture title, employer, location, link, and why the job may fit this profile.
  - Flag postings that appear especially realistic or strategically useful.
  - Keep the output folder focused on raw job leads and job-market signals, not pathway analysis.
  - Keep scheduled outputs in this folder only. Do not write directly into stable planning notes.

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
- output-folder: `oversea-pr-research/90-research-updates/decision-synthesis`
- output-format: markdown-summary
- notes:
  - This is a draft-only synthesis task. Do not update stable notes, roadmap status, dashboard, or progress tracker without explicit approval.
  - Do not treat old draft notes as approved conclusions.
  - Do not rank provinces based only on job volume.
  - Do not rank pathways without considering the likely occupation lane for this profile.
  - If Phase 1 facts are missing, stop at a provisional comparison and list blockers instead of guessing.
  - Use the output folder only for comparison and recommendation notes that combine multiple sources.

### Task: global-pathway-fit-scan
- status: active
- frequency: weekly
- schedule-day: saturday
- priority: high
- source-tier: official-first-with-reputable-supporting-sources
- sources:
  - Official immigration or migration program pages from target countries
  - Official skilled migration, work visa, residency, or shortage occupation pages
  - Reputable legal or migration summaries only when official pages are unclear
- objective:
  - Identify the most suitable migration pathways worldwide for this profile, with a practical focus on realistic routes rather than aspirational options
- scope:
  - Limit each run to a small shortlist of realistic countries or pathways instead of trying to cover the whole world
  - Prioritize countries with clearer work-to-residency, skilled migration, shortage occupation, or lower-barrier settlement routes
  - Consider language, cost, job-market realism, health and mental sustainability, and pathway concreteness
  - Treat Canada as one option among several, not the automatic default
- required-output:
  - Countries Reviewed This Run
  - Most Relevant Pathway Per Country
  - Practical Strengths
  - Main Barriers
  - Best Current Global Fits
  - What Needs Verification Next
- comparison-requirements:
  - country
  - pathway name
  - pathway type
  - why it may fit or not fit this profile
  - main blocker
  - confidence level: `more concrete`, `possible but weak`, or `mostly speculative`
- decision-rule:
  - End with up to three provisional recommendations in this exact format:
    - `Best current global fit: [country] + [pathway name]`
  - If no strong option exists, say that directly instead of forcing a ranking
- output-folder: `oversea-pr-research/90-research-updates/global-pathway-updates`
- output-format: markdown-summary
- notes:
  - Keep the output folder focused on country-level or cross-country pathway scouting.
  - Do not turn one run into a full world survey. Keep each run narrow and reviewable.
  - Do not rank countries based only on visa availability. Include practical employability and sustainability.
  - Use official pages as the source of truth for eligibility details.
  - Keep scheduled outputs in this folder only. Do not write directly into stable planning notes.

### Task: markdown-resume-revision
- status: active
- frequency: weekly
- schedule-day: sunday
- priority: high
- source-tier: workspace-first
- sources:
  - `oversea-pr-research/01-core/01-documents/resume-reference-copy.md`
  - Existing resume source files in the workspace
  - Resume investigation and revision notes already stored in this workspace
  - Target role strategy notes already stored in this workspace
- objective:
  - Produce a better draft resume in markdown format first, using `oversea-pr-research/01-core/01-documents/resume-reference-copy.md` as the working base and the current target role strategy as guidance
- scope:
  - Start from `oversea-pr-research/01-core/01-documents/resume-reference-copy.md` as the primary markdown source
  - Work from the existing resume source and revision notes in this workspace before introducing any new assumptions
  - Focus on rewriting and organizing the resume in markdown, not generating a final PDF or DOCX
  - Prefer a strong base version first, then role-specific emphasis only when the existing notes clearly support it
  - Keep all claims grounded in the existing resume and workspace notes
- focus:
  - improve clarity, structure, and bullet strength
  - remove weak wording, vague phrasing, and unsupported claims
  - align resume emphasis with the most realistic target job families already tracked
  - keep the revision practical for Canada-style job applications
- required-output:
  - Current Resume Issues
  - Key Revision Decisions
  - Revised Markdown Resume Draft
  - Open Questions Or Missing Facts
  - Suggested Next Revision Step
- output-folder: `oversea-pr-research/90-research-updates/resume-drafts`
- output-format: markdown-resume-draft
- notes:
  - Read the latest resume-related progress note first if one exists.
  - Treat `oversea-pr-research/01-core/01-documents/resume-reference-copy.md` as the default markdown reference copy unless the user explicitly replaces it.
  - Use markdown as the working format for revision output.
  - Do not invent metrics, achievements, or responsibilities.
  - Keep scheduled outputs in this folder only. Do not overwrite the source resume files automatically.

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
- output-folder: `oversea-pr-research/90-research-updates/province-updates/atlantic`
- output-format: markdown-summary
- notes:
  - Keep paused until Phase 1 and Phase 2 are more stable.
  - Keep the output folder limited to Atlantic-focused pathway monitoring.

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
- output-folder: `oversea-pr-research/90-research-updates/province-updates/alberta`
- output-format: markdown-summary
- notes:
  - Keep the output folder limited to Alberta-specific updates and checks.

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
- output-folder: `oversea-pr-research/90-research-updates/province-updates/manitoba`
- output-format: markdown-summary
- notes:
  - Keep the output folder limited to Manitoba-specific updates and checks.

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
- output-folder: `oversea-pr-research/90-research-updates/province-updates/saskatchewan`
- output-format: markdown-summary
- notes:
  - Keep the output folder limited to Saskatchewan-specific updates and checks.
