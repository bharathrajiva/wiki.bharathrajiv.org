---
title: Percentages
description: CAT Quant formulas, shortcuts, and traps for Percentages.
slug: /cat/quants/arithmetic/percentages
tags: [CAT, Quant, Arithmetic]
---

## Percentages

Core formulas:

```text
x% = x/100
x% of y = y% of x
% change = change / original * 100
New after x% increase = old * (100 + x) / 100
New after x% decrease = old * (100 - x) / 100
```

Successive changes:

```text
Net change for +a% and +b% = a + b + ab/100
Net change for +a% and -b% = a - b - ab/100
```

Fast examples:

```text
20% increase then 20% decrease:
20 - 20 - 400/100 = -4%

10% decrease then 20% increase:
-10 + 20 - 200/100 = +8%
```

Reverse percentage:

```text
If final = old after x% increase:
old = final * 100 / (100 + x)

If final = old after x% decrease:
old = final * 100 / (100 - x)
```

Speed tricks:

- Use `x% of y = y% of x`: `18% of 50 = 50% of 18 = 9`.
- For close comparison, use percent difference on the required base.
- If value becomes `m/n` of original, percentage change is `(m - n) / n * 100`.
- If A is `x%` more than B, then B is `x/(100 + x) * 100%` less than A.
- If A is `x%` less than B, then B is `x/(100 - x) * 100%` more than A.

Common traps:

- Percentage change is not symmetric: 50 to 100 is +100%, but 100 to 50 is -50%.
- "Percent more than" and "percent of" use different bases.
- For population/salary/price, identify the original base before calculating.

