---
title: Pasture Automation (Cobbleworkers)
description: Pokémon can automate your base. Here's how the Cobblemon Pasture block works, every job type, and how storage routes items.
sidebar:
  order: 2
---

Pokémon can do jobs around your base automatically. Put the right Pokémon in a **Cobblemon Pasture block** within 8 blocks of what you want automated — that's it. No redstone, no setup.

## The quick version

1. Craft or place a **Cobblemon Pasture block**
2. Drop the right Pokémon into it (see [Jobs by type](#jobs-by-type))
3. Set up nearby containers so output has somewhere to go
4. Walk away

## Jobs by type

Click any job for the deep-dive.

### Harvesting (passive, while in range)

- [**Grass** — Crop Harvest](/base/cobbleworkers-jobs/crop-harvest/) · wheat, carrots, potatoes, beetroot — replants
- [**Grass** — Berries](/base/cobbleworkers-jobs/berries/) · Cobblemon berries
- [**Bug** — Apricorns](/base/cobbleworkers-jobs/apricorns/) · colored apricorns from trees
- [**Rock** — Amethyst](/base/cobbleworkers-jobs/amethyst/) · amethyst clusters/geodes
- [**Steel** — Tumblestone](/base/cobbleworkers-jobs/tumblestone/) · Cobblemon tumblestone — replants
- [**Ghost** — Netherwart](/base/cobbleworkers-jobs/netherwart/) · replants
- [**Fairy** — Mints](/base/cobbleworkers-jobs/mints/) · Cobblemon mints
- [**Water** — Irrigation](/base/cobbleworkers-jobs/irrigation/) · keeps farmland watered
- [**Water** — Fire Extinguisher](/base/cobbleworkers-jobs/fire-extinguisher/) · puts out nearby fires
- [**Psychic** — Ground Item Gathering](/base/cobbleworkers-jobs/ground-item-gathering/) · picks up dropped items

### Generators (cooldown-based)

- [**Water** — Water Generation](/base/cobbleworkers-jobs/water-generation/) · every 90s
- [**Water** — Fishing Loot](/base/cobbleworkers-jobs/fishing-loot/) · every 60s
- [**Fire** — Lava Generation](/base/cobbleworkers-jobs/lava-generation/) · every 90s
- [**Fire** — Furnace Fuel](/base/cobbleworkers-jobs/furnace-fuel/) · every 80s
- [**Ice** — Snow Generation](/base/cobbleworkers-jobs/snow-generation/) · every 90s
- [**Dragon** — Brewing Fuel](/base/cobbleworkers-jobs/brewing-fuel/) · every 80s
- [**Combee line** — Honey](/base/cobbleworkers-jobs/honey/) · every 120s
- [**Any Pickup mon** — Pickup Loot](/base/cobbleworkers-jobs/pickup/) · every 120s
- [**Aquatic mons** — Diving](/base/cobbleworkers-jobs/diving/) · shipwreck loot every 210s

### Support

- [**Chansey line + healing moves** — Healing](/base/cobbleworkers-jobs/healing/) · Regen I to nearby players

## Scan zone

Each pasture scans a **17×11×17 box** (8 horizontal, 5 vertical each way from the block). One pasture usually covers a whole farm plot. Multiple pastures can overlap for redundancy.

## Storage — how items actually get into chests

**Short version:** Pokémon walk to the nearest suitable container and deposit directly. No hoppers needed.

### The deposit flow

When a Pokémon picks up or generates an item:

1. Pasture looks up every inventory block in its scan zone
2. For each container, it runs a merge check:
   - **Merge wins:** scan slots — if any non-empty slot has the *same item + same NBT/components* and has room to stack further, that container wins **immediately**. Search stops.
   - **Empty-slot fallback:** if no matching slot anywhere, use the first container with an empty slot.
3. Walk to the chosen container, insert
4. If the stack doesn't fully fit (partial merge), remainder goes back to held items, next-best container is picked
5. If deposit fails entirely, drop the item on the ground (last resort)

### What the scoring ignores

- **Distance** — not a factor. First matching container wins.
- **Available room** — a slot with 1 unit of space beats an empty container.
- **Total capacity** — bigger containers aren't preferred.
- **Block type** — chest, barrel, shulker, hopper, dropper all rank equally.

### Seed your chests

**This is the key trick.** Drop one of an item into the chest you want to be its home. Every future deposit of that item will always go there.

No filters, no redstone, no hopper arrays. Just seed once.

### What counts as a container

Anything with a BlockEntity that implements the vanilla `Inventory` interface:

- Chests (single + double), barrels, hoppers, dispensers, droppers, shulker boxes
- Furnaces / smokers / blast furnaces (via their slots)
- Brewing stands
- **Chipped barrels and chests** — they extend vanilla blocks, route identically
- Most modded storage that implements the same interface

### Gotchas

- **NBT matters.** Damaged tools, renamed items, or enchanted items won't merge with clean stacks.
- **Overflow is predictable only if every item is seeded.** Without seeds, the first-seen empty chest gets everything.
- **Shulker boxes placed as blocks** work fine. A shulker box *inside* another chest is just an item stack — not a routing target.

## Farm design template

For a self-sustaining base, one pasture per type covers most needs:

| Pasture | Place it near | Produces |
|---|---|---|
| **Grass** | Wheat field / berry patch | Auto-farms crops + berries |
| **Water** | Water source + farmland edge | Irrigation, water gen, fishing, fire safety |
| **Fire** | Isolated stone chamber | Lava + furnace fuel |
| **Ice** | Cold storage / freezer room | Snow layers |
| **Bug** | Apricorn grove | All apricorn colors |
| **Rock** | Amethyst geode | Auto-mine amethyst |
| **Steel** | Tumblestone patch | Tumblestone farming |
| **Ghost** | Nether outpost | Netherwart |
| **Fairy** | Mint garden | Mint harvesting |
| **Dragon** | Near brewing stand | Brewing fuel |
| **Psychic** | Drop zone / mob farm | Ground item pickup |
| **Chansey line** | AFK / crafting spot | Passive regen buff |
| **Any Pickup mons** | Anywhere | Loot rolls every 120s |
| **Aquatic mons** | Shore/dock | Shipwreck loot every 210s |

## Current config status

All 19 jobs are enabled at vanilla Cobbleworkers defaults. Species lists default to `["pikachu"]` as a placeholder — the **type rules are what drive actual behavior at scale**. Cooldowns untuned; report anything that feels off to Fett.
