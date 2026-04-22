---
title: Temperature Survival
description: Scorchful and Frostiful add real temperature mechanics — deserts cook, snow freezes, dress accordingly.
sidebar:
  order: 5
---

The pack runs **Scorchful** (heat) and **Frostiful** (cold) — both active. Vanilla deserts and snowy biomes will actually hurt you without preparation.

## Heat (Scorchful)

**Hot biomes:**
- Desert, Badlands, Savanna
- Nether (by default, though the Nether has its own logic layered on)

**What happens:**
- Your character starts **sweating** — screen effects, breath fog
- In deserts: **1.5× sweat rate**, random **sandstorms** with slowness and fog
- Extended heat exposure → **heat stroke** (damage ticks)
- Sometimes: **desert visions** (mirages, loss of orientation)

**How to cope:**
- **Drink water** regularly — craft **canteens** and keep them filled
- **Wear a sun hat** (craftable) — reduces heat accumulation
- **Turtle-shell helmet** has a cooling effect in Scorchful
- **Leather armor insulates *worse* in heat** than iron — counter-intuitive but helpful
- **Hydrating foods** help (melon, cactus-based recipes, certain Cobblemon berries)

## Cold (Frostiful)

**Cold biomes:**
- Snowy Plains, Frozen Peaks, Ice Spikes, etc.
- Nights in taiga biomes get cold even outside explicitly snowy zones

**What happens:**
- **Freezing** damage starts accumulating
- Visual effects: breath fog, shivering
- Extended exposure → frostbite damage
- Can prevent crop growth around you

**How to cope:**
- **Leather armor is WARM** (the opposite of heat — layers up)
- **Iron armor is neutral** — fine but not insulating
- **Hot foods / drinks** (stews, hot cocoa) restore warmth
- **Campfires** nearby warm you passively
- **Don't swim in ice water** — freezing damage compounds fast

## Quick gear summary

| Biome | Leather | Iron | Hot drink | Cold drink | Accessory |
|---|---|---|---|---|---|
| **Desert / hot** | ❌ worse | ✅ better | ❌ | ✅ canteen water | Sun hat, Turtle helmet |
| **Snowy / cold** | ✅ warm layer | ⚪ neutral | ✅ hot cocoa | ❌ | Warm clothing items |
| **Temperate** | ⚪ fine | ⚪ fine | ⚪ | ⚪ | — |

## Config files *(admin reference)*

- `config/scorchful.json` — heat parameters
- `config/frostiful.json` — cold parameters

## Takeaway

**Never tell yourself "vanilla MC deserts don't care about armor" — they do on this pack.** Pack a canteen before you leave for a desert biome. Pack warm food before you go to the Frozen Peaks. Don't learn this the hard way.
