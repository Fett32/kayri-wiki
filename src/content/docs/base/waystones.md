---
title: Waystones
description: Shared fast-travel network across the server — 200+ already placed.
sidebar:
  order: 4
---

**Waystones** are fast-travel points. Every player shares the same waystone network (`GLOBAL` visibility), so once a waystone is discovered by anyone, everyone can see it and use it.

The server has **200+ named waystones** already placed (mostly in villages and along roads) — so you probably don't need to craft any to get started.

## How they work

1. **Find a waystone.** They're in villages, along roads, near key structures, and in some dungeons.
2. **Right-click to activate / attune.** The waystone name appears in your waystone UI.
3. **Open the waystone menu** (waystone item **or** right-click any activated waystone) to teleport to any known one.

## Costs

- **Crafting a waystone is expensive** — worth doing only when you want a home-base waypoint.
- **Using** existing waystones is **free**. Teleport as often as you want between known stones.
- Some waystones charge XP or cooldowns per teleport (configurable, currently untuned — expect free travel).

## Naming your waystones

When you place one, give it a meaningful name — everyone sees it.

- `[Player]'s Base` or `[Player] - [Location]` is a clean convention
- Village waystones are auto-named `[Village] Village`
- Random wild waystones may get Mr-Pork-style auto-generated names if you don't name them

## Travel tips

- **Global visibility** means you can "hitchhike" on others' discoveries. When Sam activates a new waystone, you can use it too.
- **Use waystones to scout base locations** — activate as many as possible early, then teleport back to scope out terrain.
- **Exit to a village waystone** when lost — they're nearly everywhere.

## Known notable waystones

*(To be filled in as the community establishes landmarks.)*

| Name | Coords | Notes |
|---|---|---|
| **Kayri Farms** | `-1714, 88, -1941` | Near Fett's base, the ranch side |
| *(TBD)* | — | — |

## Troubleshooting

- **"Can't see the waystone I just placed"** — try right-clicking it to attune, then reopen the menu
- **Sudden cooldown** — some modded waystones reset cooldowns when damaged; avoid explosive near them
- **Missing waystones after server restart** — should auto-restore on login; if not, tell Fett

## Admin notes *(for Fett, not players)*

- Config: `defaultVisibility = GLOBAL`, `nameGenerationMode = MIXED`
- 223 waystones after border prune (of 250 originally) — removed ones outside the 5000-block border
