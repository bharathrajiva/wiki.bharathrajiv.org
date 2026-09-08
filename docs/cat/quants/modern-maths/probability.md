---
title: Probability
description: CAT Quant formulas, shortcuts, and traps for Probability.
slug: /cat/quants/modern-maths/probability
tags: [CAT, Quant, Modern Maths]
---

## Probability

Core formulas:

```text
Probability = favorable outcomes / total outcomes
P(not A) = 1 - P(A)
P(A or B) = P(A) + P(B) - P(A and B)
```

Independent events:

```text
P(A and B) = P(A) * P(B)
```

Conditional probability:

```text
P(A given B) = P(A and B) / P(B)
```

At least one:

```text
P(at least one success) = 1 - P(no success)
```

Binomial probability:

```text
For n trials, success probability p:
P(exactly r successes) = nCr * p^r * (1-p)^(n-r)
```

Common traps:

- Without replacement changes probability after each draw.
- With replacement keeps probability constant.
- Probability is never below 0 or above 1.

