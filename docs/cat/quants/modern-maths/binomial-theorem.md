---
title: Binomial Theorem
description: CAT Quant formulas, shortcuts, and traps for Binomial Theorem.
slug: /cat/quants/modern-maths/binomial-theorem
tags: [CAT, Quant, Modern Maths]
---

## Binomial Theorem

Expansion:

```text
(a+b)^n = nC0*a^n + nC1*a^(n-1)b + ... + nCn*b^n
```

General term:

```text
T_(r+1) = nCr * a^(n-r) * b^r
```

Number of terms:

```text
(a+b)^n has n+1 terms
```

Middle term:

```text
If n is even: one middle term, T_(n/2 + 1)
If n is odd: two middle terms, T_((n+1)/2) and T_((n+3)/2)
```

Coefficient sum shortcuts:

```text
Sum of coefficients of polynomial f(x): put x = 1
Sum of even-power coefficients and odd-power coefficients:
Use f(1) and f(-1)
```

Useful expansions:

```text
(1+x)^n = 1 + nx + nC2*x^2 + nC3*x^3 + ...
(1-x)^n alternates signs
```

