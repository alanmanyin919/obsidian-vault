# Tech Stack Research

## Goal
Choose a framework, platform, and supporting libraries for a calm ambient website where a monkey models soothing habits in a playground with gentle animation and optional sound.

## Recommended Stack
### Best overall choice for you
- Next.js
- React
- TypeScript
- Rive for the monkey and scene animation
- Howler.js for ambient audio
- Vercel for deployment

## Why This Is The Best Default
### 1. It fits your background
- You already have strong React and TypeScript experience.
- Shipping fast matters more than theoretical elegance.
- This project is emotionally sensitive, so implementation clarity and maintainability matter.

### 2. It gives you room to grow
The same stack can handle:
- a simple landing page
- user accounts later
- saved favorite scenes
- private coping toolkit features
- analytics
- a content section or journal prompts

### 3. It keeps the animation and audio choices clean
- Rive is strong when you want a character with states and smooth reusable animation.
- Howler.js is a practical audio layer for loop, fade, mute, and cross-platform reliability.

## When This Recommendation Is Wrong
Use something else if:
- the website stays almost fully static and has only tiny interactivity
- the monkey animation is extremely simple and mostly decorative
- you want the lowest possible JavaScript footprint above all else

In that case, Astro becomes attractive.

## Framework Comparison
### Option A: Next.js
Best for:
- your current skill set
- hybrid site plus app evolution
- future logged-in features
- production deployment with low friction

Pros:
- familiar React model
- easy deployment on Vercel
- strong ecosystem
- easy to mix static content and interactive scenes

Cons:
- more framework than a tiny one-page site needs
- easy to overbuild

Official notes:
- Next.js App Router is the current primary routing model.
- Next.js can deploy as a Node.js server, Docker container, static export, or platform-specific adapter.

### Option B: Astro
Best for:
- a content-first site with a few interactive islands
- very fast initial load
- minimal JavaScript by default

Pros:
- excellent for landing pages
- selective hydration
- strong performance defaults

Cons:
- less natural if the site becomes app-like
- more decision overhead once you add richer stateful experiences

Important fit note:
- Astro is excellent if version 1 is mostly one calming scene plus static content pages.

### Option C: SvelteKit
Best for:
- a smaller-feeling frontend with elegant animation code
- teams that want lighter component ergonomics

Pros:
- very pleasant for motion and UI
- official adapter support for static, Node, Vercel, and more

Cons:
- weaker fit with your current React-heavy background
- higher context-switching cost for you right now

## Animation Layer Comparison
### Best first choice: Rive
Use Rive if:
- the monkey is a real character with different calming behaviors
- you want state machines like breathe, swing, stretch, rest, wave, sleep
- you want smooth vector animation that stays crisp

Pros:
- purpose-built for interactive animation
- multiple web runtimes
- strong control model for states and transitions

Cons:
- runtime size is meaningful because of WASM
- requires an animation production workflow

Best use here:
- monkey character
- breathing loop
- day and night states
- scene transitions

### Lightweight alternative: dotLottie or Lottie
Use this if:
- animation is mostly pre-made loops
- you do not need rich interaction
- you want easier asset handoff from designers

Pros:
- simple to embed
- good for lightweight decorative animation

Cons:
- less expressive for interactive character logic
- not as strong for stateful scenes as Rive

### Do not start with PixiJS unless the scene becomes deeply interactive
PixiJS is strong for:
- richer 2D scene systems
- particle effects
- interactive playground mechanics
- game-like canvas rendering

But for v1 it is probably too much unless the monkey playground becomes a true interactive world.

## Audio Layer Comparison
### Best first choice: Howler.js
Use Howler.js for:
- ambient music
- nature sounds
- fade in and fade out
- mute toggle
- looping scenes

Why:
- simple API
- cross-platform reliability
- Web Audio with HTML5 audio fallback

### Do not start with Tone.js
Tone.js is better for:
- procedural music
- synthesis
- timing-heavy generative sound

That is not your first need.

## Platform And Hosting
### Best first choice: Vercel
Best with:
- Next.js
- fast preview deployments
- low-friction hosting

### Good alternative: Cloudflare Pages
Best with:
- Astro or static-first builds
- global edge delivery
- simple static deployment

## Backend And Data
### For v1
You may not need a backend at all.

Possible v1 storage choices:
- no account, local-only preferences in browser storage
- simple static content plus client-side state

### For v2
If users need to save:
- favorite calming scenes
- custom routines
- private check-ins

Then add:
- Supabase for auth and Postgres-backed data

Why Supabase:
- auth and database in one system
- practical for small product teams

## Accessibility And Safety Requirements
This matters a lot for a calming site.

Required:
- respect `prefers-reduced-motion`
- keep audio opt-in because browsers often block autoplay with sound
- provide mute and low-motion modes
- avoid sudden transitions or large motion sweeps

## Final Recommendation
If we want the safest and fastest path to a strong v1:
- Next.js
- TypeScript
- Rive
- Howler.js
- Vercel

If we want the leanest possible landing page:
- Astro
- Rive or dotLottie
- Howler.js
- Cloudflare Pages

## Practical Decision
For you, I would choose:
- Next.js for the site shell
- Rive only for the monkey scene
- CSS or a very small motion layer for the surrounding UI
- Howler.js for sound
- no backend in v1

That keeps the build controlled and avoids turning the first version into a game engine project.

## Source Links
Next.js App Router:
- https://nextjs.org/docs/app

Next.js deploying:
- https://nextjs.org/docs/app/getting-started/deploying

Vercel Next.js:
- https://vercel.com/docs/frameworks/nextjs

Astro why Astro:
- https://docs.astro.build/en/concepts/why-astro/

Astro islands:
- https://docs.astro.build/en/concepts/islands/

Svelte packages and adapters:
- https://svelte.dev/packages

PixiJS intro:
- https://pixijs.com/8.x/guides/getting-started/intro

PixiJS quick start:
- https://pixijs.com/8.x/guides/getting-started/quick-start

Rive web runtime:
- https://rive.app/docs/runtimes/web

Rive runtime sizes:
- https://rive.app/docs/runtimes/runtime-sizes

Howler.js:
- https://howlerjs.com/

Supabase auth:
- https://supabase.com/docs/guides/auth

Cloudflare Pages:
- https://developers.cloudflare.com/pages/framework-guides/deploy-anything/

Cloudflare D1:
- https://developers.cloudflare.com/d1/

MDN autoplay guide:
- https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Autoplay

MDN prefers-reduced-motion:
- https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion
