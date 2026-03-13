# Monkey Home Game Direction

## New Product Direction
The product is no longer just a calming website.

It is now closer to:
- a cozy micro-game
- a gentle interactive monkey home
- a calming digital space users can visit, influence, and care for

## Why This Direction Works
This format can help stressed users more effectively than a passive page because it gives:
- a sense of presence
- soft interaction
- a small feeling of control
- emotional attachment without high pressure

This is important for overloaded users. They often do not want a lesson. They want a place.

## Product Frame
Best framing:
- a cozy monkey sanctuary
- a calm little home you can visit
- a quiet companion space

Avoid framing it as:
- mental illness treatment
- a productivity game
- a high-pressure habit tracker

## Core Loop
The user enters the monkey's home and can:
- watch the monkey rest, breathe, stretch, play, or tidy
- interact with objects in the space
- help the monkey make the home calmer
- unlock small soothing changes over time

The emotional loop should be:
- arrive stressed
- interact gently
- feel calmer
- leave lighter

## Good Interaction Types
### Low-pressure actions
- tap to help the monkey water a plant
- drag a blanket over the monkey
- light a lantern
- open a window for breeze
- place a cushion
- choose soft music
- feed the monkey tea or fruit
- clean up a small corner

### Calm progression
Users can gradually make the home nicer by:
- earning leaves, stars, pebbles, or warm light
- unlocking cozy items
- opening new corners of the home
- collecting soothing rituals

Important:
- progression should feel safe and soft
- no punishment for absence
- no aggressive streaks
- no fear-of-missing-out mechanics

## About "Investing"
Good version of investing:
- investing time
- investing care
- investing collected soft resources into the monkey's home

Bad version for this product:
- real-money investing
- gambling-like mechanics
- speculative token systems

If "investing" means users slowly improve the monkey's world, that fits.

## Recommended Technical Direction
### Best fit now
- Next.js for the site shell and surrounding pages
- Phaser for the interactive monkey-home scene
- Howler.js for ambient audio and sound effects
- TypeScript across everything

Inference from official docs:
- Phaser is a full JavaScript game framework with setup and first-game guides, which makes it a better fit once the product includes interaction loops, scenes, and game logic.
- PixiJS is an excellent rendering layer and scene graph, but by itself it is closer to a graphics engine than a full game framework.

## Why Not Pure Rive As The Core
Rive is still useful for:
- monkey idle animation
- breathing loops
- short expressive character states

But if the home becomes a true interactive space with:
- objects
- interaction hotspots
- progression
- scene logic

Then Rive should be treated as an animation asset tool, not the whole app architecture.

## MVP Shape
### Room 1
- monkey corner
- plant
- lamp
- window
- cushion
- music player

### User actions
- tap monkey
- tap lamp
- water plant
- choose one music track
- trigger breathe mode
- trigger rest mode

### Reward loop
- calm points from gentle interaction
- points unlock visual coziness only

Good unlocks:
- rain outside window
- extra plant
- tea set
- moonlight mode
- bookshelf
- wind chime

## Design Rule
This should feel like:
- Animal Crossing energy reduced to one room
- Tamagotchi without guilt
- a mindfulness toy, not a task manager

## Build Recommendation
If we continue in this direction, the stack recommendation changes to:
- Next.js
- Phaser
- Howler.js
- optional Rive for character animation if asset workflow supports it
- no backend in v1 unless we need save data across devices

