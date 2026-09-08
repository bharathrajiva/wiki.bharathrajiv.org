---
title: Set Theory
description: CAT Quant formulas, shortcuts, and traps for Set Theory.
slug: /cat/quants/modern-maths/set-theory
tags: [CAT, Quant, Modern Maths]
---

## Set Theory

Two sets:

```text
n(A union B) = n(A) + n(B) - n(A intersection B)
```

Three sets:

```text
n(A union B union C)
= n(A) + n(B) + n(C)
- n(A intersection B) - n(B intersection C) - n(C intersection A)
+ n(A intersection B intersection C)
```

Only regions:

```text
Only A = A - AB only - AC only - ABC
Exactly two = AB only + BC only + CA only
At least two = exactly two + all three
At least one = union
None = total - union
```

Fast Venn method:

1. Fill the center first.
2. Fill exactly-two regions by subtracting center from pairwise intersections.
3. Fill only-one regions.
4. Use total to get none.

