---
title: Permutation and Combination
description: CAT Quant formulas, shortcuts, and traps for Permutation and Combination.
slug: /cat/quants/modern-maths/permutation-and-combination
tags: [CAT, Quant, Modern Maths]
---

## Permutation and Combination

Factorial:

```text
n! = n*(n-1)*(n-2)*...*1
0! = 1
```

Permutation:

```text
nPr = n! / (n-r)!
```

Combination:

```text
nCr = n! / [r!(n-r)!]
nCr = nC(n-r)
nCr + nC(r-1) = (n+1)Cr
```

When to use:

| Wording | Use |
| --- | --- |
| Arrange, order, rank, seat | Permutation |
| Select, choose, committee, team | Combination |
| At least one | Total - none |
| Identical objects | Divide by repeated factorials |

Arrangements:

```text
n distinct in a row = n!
n distinct in a circle = (n-1)!
If clockwise and anticlockwise same, circular arrangements = (n-1)!/2
```

Repeated letters:

```text
Arrangements of n letters with repeats a,b,c:
n! / (a!b!c!)
```

Gap method:

- Use for "no two together".
- Arrange non-restricted objects first.
- Place restricted objects in gaps.

Block method:

- Use for "must be together".
- Treat grouped objects as one block.
- Multiply by internal arrangements.

