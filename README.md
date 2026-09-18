# Leo Cigar Library

GitHub-hosted personal cigar archive for Leo.

## Current version

This repository now contains the migrated 2026 cigar-library data baseline:

- 47 confirmed cigar varieties/models
- Smokingpipes historical summary: 16 orders / 25 SKUs / 69 cigars
- Italian Toscano/Toscanello purchase: 14 boxes
- Drew Estate Isla del Sol Sun Blessed correction: 10-pack
- 70Cigars arrival records
- uncle-gift valuation records
- flavor preferences and avoid-list
- purchase / arrival / aging rules
- interactive filters, statistics, timeline and similar-flavor recommendations

## Files

- `index.html` — website UI and interactions
- `data.js` — inventory, history, preferences and project rules
- `README.md` — project notes

## Data policy

Historical purchase quantity is **not** treated as current stock.  
Unknown remaining inventory is marked `待盘点`.  
Unknown model/size/image/review information remains `待确认` or `待迁移`.

## Next migration pass

1. Add verified product images, priority: Smokingpipes → 70Cigars → brand website.
2. Migrate the full multi-platform review text for every cigar.
3. Backfill purchase and actual arrival dates where order evidence exists.
4. Record current on-hand quantity after physical inventory.
5. Add personal tasting notes and ratings as Leo submits them.

_Last imported baseline: 2026-09-16._
