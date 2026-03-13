# Job Post Folder Rules

## Purpose
- This note defines the standard structure for job-post folders in `04-job-application-bank`.
- Use `quorum-software-engineer-i-calgary-2026-04-18` as the reference model when creating or updating future folders.
- The goal is consistency, easy review, and lower friction when comparing postings.

## Scope
- These rules apply to each job-post folder created inside `04-job-application-bank`.
- If the same structure is reused in `04-job-application`, follow the same file rules unless a later note says otherwise.

## Folder Naming Rule
- Use kebab-case only.
- Do not use spaces.
- Preferred pattern:
  - `{company}-{role}-{location}-{yyyy-mm-dd}`
- Examples:
  - `quorum-software-engineer-i-calgary-2026-04-18`
  - `advanis-junior-programmer-computer-science-edmonton-2026-04-18`
- If the company name is missing or unreliable, use a temporary fallback:
  - `indeed-post-{job-key}-{yyyy-mm-dd}`
- Rename the folder later if the real employer name becomes known and the user approves the cleanup.

## Date Folder Grouping Rule
- Group job-post folders under a parent folder named for the note `created-on` date.
- Preferred parent-folder pattern:
  - `04-job-application-bank/{created-on}/`
- Place the job-post folder inside that date folder.
- Preferred full path pattern:
  - `04-job-application-bank/{created-on}/{company}-{role}-{location}-{yyyy-mm-dd}/`
- If the date folder does not exist yet, create it first.
- `created-on` means the date the job-post notes were created in this vault.
- Record the employer's posting date inside the job note as `posted-on` when that date is available in the source.
- If the true posted date is missing or unclear, note that uncertainty inside the draft rather than using it as the folder reference date.
- Existing older folders do not need to be renamed or moved unless the user explicitly asks for cleanup.
- Example:
  - `04-job-application-bank/2026-05-03/jastekk-it-consulting-web-developer-brampton-2026-04-29/`

## Required Files
- Every active or reviewable job-post folder should contain:
  - `job-summary.md`
  - `job-description.md`
  - `job-fit-score.md`
- Optional files:
  - `job-post-overview.md`
  - `resume-revision-advice.md`
  - `cover-letter.md`
  - `Resume.docx`
  - tailored draft resume files
  - source screenshots or copied posting text if needed

## Canonical File Roles

### `job-summary.md`
- This is the quick metadata and status note for one job target.
- It should be the fastest file to scan when reviewing the bank.
- It should summarize the key identity, current application state, and top-level fit view without replacing the deeper notes.
- This is the canonical place for ongoing application-tracking status inside a job-post folder.
- Required sections:
  - title line
  - status metadata bullets
  - `## Job Snapshot`
  - `## Status Snapshot`
  - `## Fit Snapshot`
  - `## Quick Take`
  - `## Related Notes`
  - `## Save Rule`
- `## Job Snapshot` must include:
  - `Company`
  - `Role`
  - `Location`
  - `Work model`
  - `Brief description`
- `## Status Snapshot` must include:
  - `Application status`
  - `Source`
  - `Source URL`
- Put ongoing application progress such as `not applied`, `applied`, `interviewing`, `rejected`, follow-up activity, or latest outreach action in this file only unless the user explicitly requests another tracking note.
- `## Fit Snapshot` must include:
  - `Overall Fit Score`
  - `Application Priority`
  - `Confidence`
- Keep this file short and easy to scan.

### `job-description.md`
- This is the detailed source note.
- It should capture the posting as faithfully as possible.
- It should also include the quick-review overview so this single file can be used as the main reference note by default.
- When the employer posting date is known, include `posted-on` inside `## Job Metadata`.
- Do not use this file for ongoing application-tracking status updates. Keep those in `job-summary.md`.
- Required sections:
  - title line
  - status metadata bullets
  - `## Quick Identity`
  - `## Why This Posting Matters`
  - `## Job Metadata`
  - `## Core Position Summary`
  - `## Main Responsibilities`
  - `## Stated Requirements`
  - `## Fast Screening View`
  - `## Decision Use`
  - optional sections such as:
    - `## Must-Have Signals`
    - `## Nice-To-Have Signals`
    - `## Preferred Skills`
    - `## Application Constraints`
    - `## Company Context`
    - `## Employer Signals`
    - `## Culture And Process Notes`
    - `## Immediate Screening Signals`
    - `## Resume Tailoring Priorities`
    - `## Interview Watchouts`
  - `## Related Notes`
  - `## Save Rule`

### `job-post-overview.md`
- This is the quick-review note.
- It is optional and should only be created when a separate quick-review note would be useful.
- By default, its content should be merged into `job-description.md`.
- Do not use this file for ongoing application-tracking status updates. Keep those in `job-summary.md`.
- Required sections:
  - title line
  - status metadata bullets
  - `## Quick Identity`
  - `## Why This Posting Matters`
  - `## Must-Have Signals`
  - `## Fast Screening View`
  - `## Decision Use`
- Recommended optional sections:
  - `## Nice-To-Have Signals`
  - `## Resume Tailoring Priorities`
  - `## Interview Watchouts`

### `job-fit-score.md`
- This is the fit and risk evaluation note.
- It must reference `01-core/00-personal-profile.md` when personal constraints or strengths matter.
- Do not use this file for ongoing application-tracking status updates. Keep those in `job-summary.md`.
- Required sections:
  - title line
  - status metadata bullets
  - `## Scorecard`
  - `## Working Summary`
  - `## Important Scoring Rule`
  - `## Why This Role Matches`
  - `## Why This Role Is Not A Strong Match Yet`
  - `## Match Breakdown`
  - `## Potential Gaps Between You And This Job`
  - `## Working Recommendation`
  - `## Save Rule`
- `## Scorecard` must include:
  - `Overall Fit Score`
  - `Application Priority`
  - `Confidence`
- `## Match Breakdown` should use a table when practical.
- Estimated percentages must always be described as directional estimates, not market facts.

### `resume-revision-advice.md`
- This is the resume-tailoring note.
- Create this only when the user asks for resume tailoring help for that posting.
- Default revision base: `01-core/01-documents/resume-reference-owp.md`
- If a different resume base is used, state the reason clearly in `## Working Resume Base`.
- Do not use this file for ongoing application-tracking status updates. Keep those in `job-summary.md`.
- Required sections:
  - title line
  - status metadata bullets
  - `## Goal`
  - `## Working Resume Base`
  - `## Main Positioning Angle`
  - `## Section-By-Section Revision Plan`
  - `## Suggested Edit Order`
  - `## Best Evidence To Highlight From Existing Draft Materials`
  - `## Save Rule`
- Inside `## Section-By-Section Revision Plan`, each major section should include:
  - `Section to revise`
  - `Why`
  - `Before`
  - `Revised version`
- This file should be practical enough to directly edit the current resume draft.
- Resume advice should assume `resume-reference-owp.md` is the starting point unless the folder explicitly uses another source.

### `cover-letter.md`
- This is the tailored cover-letter note.
- Create this only when the user asks for a cover letter for that posting.
- Default revision base: `01-core/01-documents/resume-reference-owp.md`
- The letter must stay honest and should not claim unsupported technologies, domain experience, or stakeholder seniority.
- Do not use this file for ongoing application-tracking status updates. Keep those in `job-summary.md`.
- Required sections:
  - title line
  - status metadata bullets
  - `## Goal`
  - `## Working Resume Base`
  - `## Main Positioning Angle`
  - `## Draft Cover Letter`
  - `## Customization Notes`
  - `## Save Rule`
- `## Draft Cover Letter` should contain a ready-to-edit draft, not just outline bullets.
- `## Customization Notes` should call out any risky claims, placeholders, or things that should be adjusted before sending.

## Standard Metadata Bullets
- Each file should begin with metadata bullets near the top.
- Use the relevant subset of:
  - `status`
  - `created-on`
  - `roadmap-item`
  - `small-task`
  - `baseline-reference`
  - `source-note`
- Keep date format as `YYYY-MM-DD`.

## Standard Status Values
- Use consistent statuses:
  - `pending-draft` for normal draft work
  - `pending-source-details` when the link is saved but the posting text is still missing
  - `obsolete-expired` when the deadline has passed or the target is no longer active
  - `suspicious-needs-verification` when the posting may be fake, low-trust, or low-quality
- If a file is obsolete or suspicious, say so clearly inside the body as well, not only in the status line.
- These values apply to the top metadata bullet `status` field for note-state management.
- They are separate from the ongoing application-tracking field `Application status`, which should live in `job-summary.md` only.

## Personal Profile Rule
- If fit, risk, communication, relocation, budget, work authorization, or mental-health constraints are mentioned, reference `01-core/00-personal-profile.md`.
- Do not treat a posting as a good fit without checking:
  - work authorization
  - location practicality
  - communication burden
  - actual stack overlap

## Truthfulness Rule
- Do not invent company details, deadlines, sponsorship terms, or stack experience.
- If the company name is missing, say it is missing.
- If the posting appears fake or suspicious, say so clearly and explain why.
- If a job board blocks retrieval, save the link as a placeholder and mark the note as pending until the user provides the posting text.

## Fit-Scoring Rule
- Scores are for internal comparison only.
- They are not official probabilities.
- Always explain both:
  - why the role matches
  - why it may still be a bad target
- Do not give a high score if location practicality or sponsorship makes the role unrealistic.

## Resume Advice Rule
- Keep resume advice honest and specific.
- Do not tell the user to add unsupported tools or frameworks.
- If a posting contains a large keyword dump, prioritize the real overlap instead of trying to match every item.
- Keep named tools like `Jenkins`, `Docker`, or `Kubernetes` if they are both:
  - real in the user’s experience, and
  - relevant to the posting

## Maintenance Rule
- If a newer folder format becomes better than the current one, update this rules note first or at the same time.
- Do not let newer folders drift away from the standard silently.

## Recommended Creation Order
- Create `job-summary.md` first
- Create `job-description.md` second
- Create `job-fit-score.md` third
- Add `job-post-overview.md`, `resume-revision-advice.md`, `cover-letter.md`, or other tailored assets only after the user asks for them

## Review Rule
- This rules note is itself a draft standard until the user confirms it should be treated as the default.
