# MVP Roadmap

## MVP Goal
Launch a small, useful, safe website that helps a user under pressure get immediate relief and a structured next step.

## Best First Version
Version 1 should include only 5 things:
- state-based homepage
- 3 guided relief flows
- 2 structured self-help tools
- safety and support page
- simple private progress history

## Suggested MVP Features
### Feature 1: Pressure Check-In
User picks:
- overwhelmed
- anxious
- burned out
- low
- urgent

Output:
- route to the correct flow

### Feature 2: Fast Relief Tools
Include:
- 2-minute breathing guide
- 5-4-3-2-1 grounding
- one-page decompression prompt

### Feature 3: Structured Reflection
Include:
- thought reframing worksheet
- overload triage worksheet

### Feature 4: Safety Routing
Include:
- clear crisis notice
- professional support guidance
- emergency or hotline resources page

### Feature 5: Personal Toolkit
Allow users to save:
- favorite exercises
- personal warning signs
- coping actions that help
- support contacts

## Build Sequence
### Phase 1: Research And Safety
- define scope carefully
- collect evidence-backed techniques
- draft safety copy and escalation logic
- decide what the site will not do

### Phase 2: UX Prototype
- create the core flow
- test whether the homepage routing feels clear
- make the interface calmer and simpler

### Phase 3: MVP Build
- build frontend flows
- store private user toolkit data
- add analytics focused on completion and drop-off, not addiction

### Phase 4: Pilot
- test with a very small group
- collect feedback on whether the tools actually reduce stress in the moment
- review whether any wording feels unsafe or misleading

## Tech Direction
Strong fit for your background:
- React or Next.js frontend
- TypeScript
- simple backend in FastAPI or Next.js server actions
- lightweight database for saved toolkit items

## Success Metrics
Better metrics:
- percentage of users who complete a relief flow
- percentage of users who return to a saved coping tool
- self-reported stress decrease after a session
- percentage of distressed users who successfully reach support resources

Bad metrics:
- time spent endlessly chatting
- daily streak pressure
- generic engagement without symptom relief

## Safer Product Boundary
Recommended:
- stress relief
- structured self-help
- support routing

Not recommended without clinicians:
- therapy claims
- diagnosis claims
- crisis intervention claims
- severe mental illness management

