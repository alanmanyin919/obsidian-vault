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

## Required Files
- Every active or reviewable job-post folder should contain:
  - `job-description.md`
  - `job-post-overview.md`
  - `job-fit-score.md`
  - `resume-revision-advice.md`
- `cover-letter.md`
- Optional files:
  - `Resume.docx`
  - tailored draft resume files
  - source screenshots or copied posting text if needed

## Canonical File Roles

### `job-description.md`
- This is the detailed source note.
- It should capture the posting as faithfully as possible.
- Required sections:
  - title line
  - status metadata bullets
  - `## Job Metadata`
  - `## Core Position Summary`
  - `## Main Responsibilities`
  - `## Stated Requirements`
  - optional sections such as:
    - `## Preferred Skills`
    - `## Application Constraints`
    - `## Company Context`
    - `## Employer Signals`
    - `## Culture And Process Notes`
    - `## Immediate Screening Signals`
  - `## Related Notes`
  - `## Save Rule`

### `job-post-overview.md`
- This is the quick-review note.
- It should be shorter and more decision-oriented than `job-description.md`.
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
- Required sections:
  - title line
  - status metadata bullets
  - `## Working Summary`
  - `## Important Scoring Rule`
  - `## Why This Role Matches`
  - `## Why This Role Is Not A Strong Match Yet`
  - `## Match Breakdown`
  - `## Potential Gaps Between You And This Job`
  - `## Working Recommendation`
  - `## Save Rule`
- `## Match Breakdown` should use a table when practical.
- Estimated percentages must always be described as directional estimates, not market facts.

### `resume-revision-advice.md`
- This is the resume-tailoring note.
- Default revision base: `01-core/01-documents/resume-reference-owp.md`
- If a different resume base is used, state the reason clearly in `## Working Resume Base`.
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
- Default revision base: `01-core/01-documents/resume-reference-owp.md`
- The letter must stay honest and should not claim unsupported technologies, domain experience, or stakeholder seniority.
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
- Create `job-description.md` first
- Create `job-post-overview.md` second
- Create `job-fit-score.md` third
- Create `resume-revision-advice.md` fourth
- Create `cover-letter.md` fifth
- Add other optional tailored assets after the user asks for them

## Review Rule
- This rules note is itself a draft standard until the user confirms it should be treated as the default.
