---
title: Profit, Loss, and Discount
description: CAT Quant formulas, shortcuts, and traps for Profit, Loss, and Discount.
slug: /cat/quants/arithmetic/profit-loss-and-discount
tags: [CAT, Quant, Arithmetic]
---

## Profit, Loss, and Discount

Core formulas:

```text
Profit = SP - CP
Loss = CP - SP
Profit% = profit / CP * 100
Loss% = loss / CP * 100
Discount = MP - SP
Discount% = discount / MP * 100
```

Price conversion:

```text
SP = CP * (100 + profit%) / 100
SP = CP * (100 - loss%) / 100
SP = MP * (100 - discount%) / 100
```

Markup and discount:

```text
If CP = 100,
MP = 100 + markup%
SP = MP * (100 - discount%) / 100
Profit% = SP - 100
```

Successive discounts:

```text
Net discount = a + b - ab/100
```

False weight shortcut:

```text
If seller uses x% less weight for same price:
Profit% = x / (100 - x) * 100

Example: 20% less weight => profit = 20/80 * 100 = 25%
```

Selling two articles:

```text
One sold at x% profit, one at x% loss, same SP:
Net loss% = x^2 / 100
```

Common traps:

- Profit/loss percent is always on CP.
- Discount percent is always on MP.
- Same percentage gain and loss do not cancel when bases differ.

