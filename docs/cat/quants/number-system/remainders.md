---
title: Remainders
description: CAT Quant formulas, shortcuts, and traps for Remainders.
slug: /cat/quants/number-system/remainders
tags: [CAT, Quant, Number System]
---

## Remainders

Rules:

```text
(a+b) mod n = [(a mod n) + (b mod n)] mod n
(a-b) mod n = [(a mod n) - (b mod n)] mod n
(a*b) mod n = [(a mod n)*(b mod n)] mod n
```

Negative remainder handling:

```text
-2 mod 7 = 5
```

Cyclic powers:

1. Find pattern of remainders.
2. Reduce exponent using cycle length.
3. Use the matching remainder.

Fermat shortcut:

```text
If p is prime and a is not divisible by p:
a^(p-1) mod p = 1
```

