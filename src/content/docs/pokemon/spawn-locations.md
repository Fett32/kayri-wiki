---
title: Spawn Locations
description: Overview of where Pokémon spawn on Kayri Ranch, plus how the datapack-stacked spawn data is structured.
sidebar:
  order: 2
---

Pokémon spawn based on **biome tags**, **time of day**, **weather**, **moon phase**, and **structure proximity**. Cobblemon uses a tag-based system — one "habitat" tag covers many vanilla + modded biomes, so a tag like `is_forest` matches plenty of forest variants.

Two ways to find a specific Pokémon:

1. **In-game**: use **Cobblepedia**, **Knowlogy**, or **Pokenav** (see [Content Overview](/pokemon/content-overview/#tools-to-look-things-up-in-game)).
2. **On this wiki**: see the [full spawn lookup](/reference/spawns-lookup/) (223-entry reference table, all 824 base Cobblemon species).

## Rough habitat → Pokémon groupings

These are tendencies — the full lookup has the exact match list.

| Habitat tag | Flavors of Pokémon |
|---|---|
| `is_forest` | Grass-types (starter lines, bug-types, early Normal-types) |
| `is_plains` / `is_grassland` | Early Normal-types, Flying-types, grazers |
| `is_desert` | Ground-types, Rock-types, heat-adapted Fire-types |
| `is_mountain` | Rock-types, some Flying, cold-adapted Ice in snowy peaks |
| `is_swamp` / `is_wetland` | Water-Poison types, Bug-Poison |
| `is_snowy` / `is_cold` | Ice-types, some Water, snowy-region regionals |
| `is_cherry` / blossom biomes | Fairy-types, Grass-types, flower Pokémon |
| `is_ocean` / `is_deep_ocean` | Water-types, deep-water legendaries |
| `is_nether` | Fire-types, Dark, Ghost (see [Nether list](/pokemon/content-overview/#nether-pokémon-yes-visit)) |
| `is_end` | Psychic-types, pseudo-legendary Beldum line (see [End list](/pokemon/content-overview/#end-pokémon-also-visit)) |

## Time- and weather-gated spawns

Some Pokémon only appear under specific conditions:

- **Night-only** — Gastly line, Umbreon, Hoothoot, Murkrow, Zubat line
- **Day-only** — Espeon, Volbeat line (inverse conditions), early-route grass Pokémon
- **Rain** — certain Water-types spawn only during rain
- **Thunderstorm** — certain Electric-types and Stormfront-themed ones
- **Moon-phase-gated** — a handful of lunar-themed Pokémon
- **Near specific structures** — dungeon-adjacent Pokémon spawn boosted near those structures

See the [full spawn lookup](/reference/spawns-lookup/) for exact conditions per species.

## Datapack-added spawns

Beyond the 824 base Cobblemon species, the server stacks several spawn datapacks:

- **AllTheMons** — adds many non-canon and anime/manga-lore Pokémon
- **Radical Gyms' own spawn table** for Gym Pokémon around gyms
- **Raid Den spawns** near raid structures

These show up in Cobblepedia correctly — in-game tools are the most reliable spawn reference.

## Structure-proximity bonus

Near certain Cobblemon structures (Gyms, Pokémon Centers, Raid Dens, Legendary Monuments), relevant Pokémon spawn at elevated rates. Hang out near a Gym to scout its themed type, or near a Raid Den to find the boss's flavor.
