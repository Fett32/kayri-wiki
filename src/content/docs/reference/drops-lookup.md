---
title: Full Drops Lookup
description: Complete item-to-Pokémon drop lookup table with rates and drop mechanics.
sidebar:
  order: 1
---

**Source packs:**
- `CobblemonVanillaDrops.zip` v3 (~900 species, 31 hand-tuned + 869 type-based + Nether/End gap fillers for blaze rod / shulker shell / wither skeleton skull)
- `CobblemonModdedDrops.zip` v1.3 (86 species, adds drops from other mods — Farmer's Delight items, etc)
- ATM x MSD legendaries layer

**Last updated:** 2026-04-20 (post Nether/End mob removal)

Because **MobsBeGone deletes all vanilla food mobs** (cow, pig, sheep, chicken, rabbit, cod, salmon, mooshroom, bee, etc.), 100% of meat/wool/leather/eggs/milk must come from Pokémon drops.

## Design pattern (three layers)

1. **Type-flavored MC items** — primary drop (60–95% rate), scales with type
2. **Species flavor** — lore-connected item (30–60% rate)
3. **Rare drops** — held items, evolution materials, type gems (2–15% rate)

Legendaries + pseudos get a separate tier via ATM x MSD: Rare Candy 2–6, type gem 50%, nether_star 8%, ability capsule 25%, ability patch 10%.

## Item → Pokémon lookup

### Food — meat

| Item | Sources | Rate |
|---|---|---|
| **Beef** | Miltank (80%), Tauros, Bouffalant, Stantler, Wyrdeer (65%), Deerling, Sawsbuck, Girafarig, Farigiraf, Mudbray, Mudsdale | 40–65% |
| **Porkchop** | Tepig / Pignite / Emboar, Spoink, Grumpig, Swinub / Piloswine / Mamoswine, Phanpy / Donphan, Lechonk (60%), Oinkologne (70%) | 30–70% |
| **Chicken** | Pidgey, Spearow, Fearow, Farfetch'd, Pidove / Tranquill / Unfezant, Doduo / Dodrio (60%), Torchic / Combusken, Fletchling / Fletchinder / Talonflame, Pikipek / Trumbeak / Toucannon, Rufflet, Ducklett / Swanna, Oricorio, Squawkabilly, Chatot, Wingull / Pelipper, Cramorant | 25–60% |
| **Mutton** | Mareep / Flaaffy / Ampharos line, Wooloo / Dubwool — plus ~116 Normal-type mons from the base vanilla-drops layer | 40%+ |
| **Rabbit** | Buneary (50%), Lopunny (60%), Bunnelby (45%), Diggersby (60%), Azumarill (30%), Azurill (20%) | 20–60% |
| **Rabbit hide** | Same bunny-coded mons as above | 35–50% |
| **Rabbit's foot** | Lopunny only | 5% (rare) |

### Food — other

| Item | Sources | Rate |
|---|---|---|
| **Egg** | Chansey (90%), Blissey, Togepi (50%), Togetic, Exeggcute (80%, 1–2), Happiny (70%), Wynaut, Wobbuffet, Mime Jr., Azurill, Munchlax | 30–90% |
| **Milk Bucket** | Miltank (50%) | 50% |
| **Honey / Honeycomb** | Combee (75% honeycomb, guaranteed 1–2), Vespiquen. Also auto-generated via Cobbleworkers honey job (120s cooldown) | — |
| **Cod** | 143 water-type mons — Magikarp, Squirtle, Totodile, Mudkip, Oshawott, Piplup, Popplio, Sobble, Quaxly, Feebas, Goldeen, Wishiwashi, basically every fish-coded mon | 30–60% |
| **Salmon** | 142 water-type mons — same pattern as cod | 10–30% |
| **Berries / crops** | Harvested via Cobbleworkers (Grass-type pasture auto-harvests + replants) — see **Cobbleworkers Reference** |

### Utility / crafting

| Item | Sources | Rate |
|---|---|---|
| **Leather** | 173 mons (heavy coverage — Normal-type default plus many others) | 40–80% |
| **White Wool** | Mareep, Flaaffy, Ampharos, Wooloo, Dubwool | 70–95% |
| **Feather** | 94 flying/bird mons — Pidgey line, Doduo line, Fletchling line, etc. | 40–70% |
| **Gunpowder** | Koffing (85%), Weezing, Voltorb, Electrode, Hisuian Electrode | 60–85% |
| **Bone** | Cubone (95%), Marowak, Alolan Marowak | 70–95% |
| **Bone Meal** | Cubone | 40% |
| **String** | Spinarak / Ariados, Joltik / Galvantula, various bug-type drops | varies |
| **Blaze Powder** | Charmander line, Ponyta line, Magby line, Magmar (15%), Magmortar (15%) | 15–25% |
| **Blaze Rod** | Magmar (5%), Magmortar (10%) — *v3 gap filler* | 5–10% |
| **Shulker Shell** | Cloyster (3%), Omastar (3%) — *v3 gap filler* | 3% |
| **Wither Skeleton Skull** | Marowak (2%) — *v3 gap filler* | 2% |
| **Ghast Tear** | Cobblemon default — various ghost/fire Pokemon | — |
| **Magma Cream** | Cobblemon default — fire/slime Pokemon | — |
| **Coal / Charcoal** | Fire-type default — Charmander (Coal 70%), Cyndaquil line, etc. | 50–70% |
| **Redstone** | Electric-type default — Pikachu (60%), Magnemite line, Voltorb, etc. | 40–70% |
| **Copper Ingot** | Electric-type — Pikachu (20%), electric line secondary drops | 15–25% |
| **Ender Pearl** | Psychic-type default — Abra line, Ralts line, Beheeyem, etc. | 20–40% |
| **Amethyst Shard** | Dragon-type default (Dragonite 25%), also via Cobbleworkers Rock-type harvesting | 20–25% |
| **Dragon Breath** | Dragon-type — Dragonite (15%), other dragons | 10–20% |
| **Prismarine Shard** | Water-type rare drop — Squirtle (10%), Magikarp line, aquatic mons | 5–15% |
| **Scute** | Dragonite (Turtle scute 15%) | 15% |
| **Phantom Membrane** | Dragonite (7%), Ghost-type mons | 5–10% |

### Cobblemon-specific items

| Item | Sources |
|---|---|
| **Rare Candy** | ATM x MSD legendaries (2–6 per drop), possibly others |
| **Type Gems** | Legendaries drop matching-type gem at 50%; also via Cobbleworkers pickup loot table (`any_type_gem`) |
| **Ability Capsule / Patch** | Legendaries (25% / 10%); also pickup loot |
| **Evolution Stones** | Via Cobbleworkers pickup loot table (`any_evo_stone`) |
| **EXP Candy** | DexRewards (Rank 3 = 16× EXP Candy S); also Cobbleworkers pickup (`any_exp_candy`) |
| **Apricorn Seeds** | Via Cobbleworkers Bug-type pastures (harvest) + pickup loot |
| **Natural Heal Items** | Pickup loot (`any_natural_heal_item`) |
| **Poké Balls (any common)** | Pickup loot (`any_common_pokeball`) |
| **Ancient Held Items** | Pickup loot (`any_ancient_held_item`) |

## Known gaps / not covered

- **Cow milk** — only Miltank drops milk_bucket. No other mon sources.
- **Slime balls** — no Pokémon drop source; get from Ditto mechanic or mining.
- **Scutes** — Dragonite drops turtle_scute; Tirtouga/Carracosta *should* but haven't been verified.
- **Nether/End mobs are ALL blacklisted** (except Ender Dragon + player-summoned Wither). Previously-assumed "kept Nether/End" sources gone. Now covered by:
  - Blaze Rods → Magmar/Magmortar (v3 gap fillers)
  - Shulker Shells → Cloyster/Omastar (v3 gap fillers)
  - Wither Skeleton Skulls → Marowak (v3 gap fillers, needed for wither summoning since wither skeletons removed)
  - Ender Pearls → Cobblemon default drops (~20 Psychic species)
  - Blaze Powder → Cobblemon default drops (~21 fire species) + Magmar/Magmortar boost
  - Ghast Tears, Magma Cream → Cobblemon default drops
  - Nether Star → still only from Wither (player-summoned, kept)
- **Villager trades** — villagers + wandering_trader + iron_golem + allay all kept (removed from blacklist carve-outs). CobbleDollars merchant villagers at ~8% village rate supplement.

## Pokemon-specific rare drops of note

- **Dragonite** — 5-entry table: Dragon Breath, Scute, Amethyst, Feather, Phantom Membrane (rare tier)
- **Chansey** line — primary egg source (90% guarantee)
- **Miltank** — beef + leather + milk (the "farm animal" substitute)
- **Komala** — Acacia Log (lore flavor)
- **Klefki** — should drop Name Tag per wiki pattern (verify — not confirmed in current pack)
- **Shuckle** — drops String/Spider Eye/Cobblestone/Flint/Raw Iron in current pack (wiki canonical is Berry Juice — **not matching community lore**; flagged as potential future patch)

## Drop mechanics recap

From `config/cobblemon/main.json`:
- `defaultDropItemMethod: on-player` — drops go directly to player inventory
- `announceDropItems: true` — player sees what dropped in chat
- `dropAfterDeathAnimation: false` — drops appear immediately on faint

Each drop table has `amount` (roll count) and `entries` (list with `percentage` per item). Roll logic: each of `amount` attempts rolls against every entry's percentage. So `amount: 2` + 5 entries = up to 2 items from 5 possibilities.
