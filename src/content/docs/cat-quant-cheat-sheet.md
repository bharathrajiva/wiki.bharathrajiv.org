---
title: CAT Quant Cheat Sheet
description: Speed-first CAT Quant formulas, shortcuts, traps, and revision patterns across arithmetic, algebra, geometry, number system, and modern maths.
slug: engineeringnexus/cat-quant-cheat-sheet
---

This is a speed-and-accuracy sheet for revision. For CAT, the best order is usually:

1. Identify the topic pattern.
2. Convert words to ratios, rates, or equations.
3. Use fractions and options before long calculation.
4. Check units, original base, and boundary cases.

## Universal Speed Rules

| Situation | Fastest move |
| --- | --- |
| Percent or ratio problem | Convert to fraction if clean: 12.5% = 1/8, 16.67% = 1/6 |
| Change from old to new | Always divide by original value |
| "By what percent is A more than B?" | `(A - B) / B * 100` |
| "By what percent is A less than B?" | `(B - A) / B * 100` |
| Options are far apart | Approximate first, calculate only if close |
| Big numbers | Factor, cancel, or use percentages before multiplying |
| Word problem | Write only variables needed for answer |
| Geometry | Draw a clean diagram and mark equal angles/lengths |
| Number system | Prime factorize first when divisibility, factors, LCM/HCF appear |
| Counting/probability | Count total cases first, then favorable cases |

High-ROI fraction to percent table:

| Fraction | Percent | Fraction | Percent |
| --- | ---: | --- | ---: |
| 1/2 | 50% | 1/8 | 12.5% |
| 1/3 | 33.33% | 3/8 | 37.5% |
| 2/3 | 66.67% | 5/8 | 62.5% |
| 1/4 | 25% | 7/8 | 87.5% |
| 3/4 | 75% | 1/9 | 11.11% |
| 1/5 | 20% | 2/9 | 22.22% |
| 2/5 | 40% | 1/11 | 9.09% |
| 3/5 | 60% | 1/12 | 8.33% |
| 4/5 | 80% | 1/16 | 6.25% |
| 1/6 | 16.67% | 1/20 | 5% |

## Arithmetic

### Percentages

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

### Profit, Loss, and Discount

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

### Averages

Core formulas:

```text
Average = sum / count
Sum = average * count
New average = old average + change in total / count
```

Weighted average:

```text
Combined average = (n1*a1 + n2*a2) / (n1 + n2)
```

Replacement:

```text
If average of n numbers changes by d:
Total change = n*d
New item - old item = n*d
```

Fast checks:

- Average must lie between minimum and maximum.
- For consecutive equally spaced numbers, average is the middle value.
- If average is closer to one group average, that group has more weight.

Deviation method:

```text
Average = assumed average + sum of deviations / count
```

### Ratio and Proportion

Core rules:

```text
If A:B = x:y, then A = kx and B = ky
a/b = c/d => ad = bc
If A:B = x:y and B:C = p:q, make B common
```

Useful properties:

```text
a:b = c:d
=> (a+b):(a-b) = (c+d):(c-d)
=> a/(a+b) = c/(c+d)
```

Variation:

```text
A directly varies with B => A/B = constant
A inversely varies with B => A*B = constant
A varies directly with B and inversely with C => A = kB/C
```

Speed tricks:

- Convert shares into `kx, ky, kz` first.
- For ratio changes after adding/removing, use equations only on the changing part.
- If total is known, add ratio parts and divide total by sum of parts.
- In partnership, profit ratio = capital * time.

### Mixtures and Alligation

Weighted average:

```text
Mean = (q1*v1 + q2*v2) / (q1 + q2)
```

Alligation:

```text
Cheaper quantity : Dearer quantity
= (Dearer value - Mean) : (Mean - Cheaper value)
```

Use alligation when:

- Mixing two concentrations.
- Mixing two prices.
- Combining two speeds for same type of quantity.
- Combining two groups with known averages.

Replacement formula:

```text
Final amount of original liquid
= initial amount * (1 - removed volume / total volume)^n
```

Concentration shortcut:

```text
Pure solute = concentration * total quantity
```

Common traps:

- Alligation gives quantity ratio, not value ratio.
- In replacement, the container is refilled to the same total volume each time.

### Time, Speed, and Distance

Core formulas:

```text
Distance = speed * time
Speed = distance / time
Time = distance / speed
```

Average speed:

```text
Same distance at speeds x and y:
Average speed = 2xy / (x + y)

Same time at speeds x and y:
Average speed = (x + y) / 2
```

Relative speed:

```text
Opposite directions = x + y
Same direction = |x - y|
```

Trains:

```text
Time to cross pole = train length / speed
Time to cross platform = (train length + platform length) / speed
```

Boats and streams:

```text
Downstream speed = boat speed + stream speed
Upstream speed = boat speed - stream speed
Boat speed = (downstream + upstream) / 2
Stream speed = (downstream - upstream) / 2
```

Races:

```text
If A gives B a head start of d in race length L:
Speed ratio A:B = L : (L - d)
```

Circular tracks:

```text
Opposite direction meeting time = track length / (sum of speeds)
Same direction meeting time = track length / (difference of speeds)
```

Unit conversion:

```text
km/h to m/s: multiply by 5/18
m/s to km/h: multiply by 18/5
```

Common traps:

- Average of speeds is valid only when time is equal.
- For equal distance, use harmonic mean.
- Convert units before calculation.

### Time and Work

Core formulas:

```text
Work = rate * time
If A finishes in x days, A's one-day work = 1/x
Together time for A and B = xy / (x + y)
```

LCM method:

1. Take total work as LCM of individual times.
2. Efficiency = total work / time.
3. Combined time = total work / combined efficiency.

Efficiency-time relation:

```text
Efficiency ratio = inverse of time ratio
If A:B efficiency = x:y, time ratio = y:x
```

Pipes and cisterns:

```text
Inlet = positive rate
Outlet = negative rate
Net rate = sum of rates
Time = tank capacity / net rate
```

Wages:

```text
Wage share ratio = efficiency * time worked
```

Common traps:

- If people leave/join, split into phases.
- Work done and time taken are inverse only when total work is fixed.

### Simple and Compound Interest

Simple interest:

```text
SI = PRT / 100
Amount = P + SI
```

Compound interest:

```text
Amount = P * (1 + R/100)^T
CI = Amount - P
```

Effective rate:

```text
a% followed by b% compound growth:
Effective rate = a + b + ab/100
```

Difference between CI and SI:

```text
For 2 years:
CI - SI = P * (R/100)^2

For 3 years:
CI - SI = P * [3(R/100)^2 + (R/100)^3]
```

Half-yearly or quarterly:

```text
Half-yearly: rate becomes R/2, time periods become 2T
Quarterly: rate becomes R/4, time periods become 4T
```

Installments shortcut:

```text
Present value of equal installments = sum of each installment discounted to today
```

Common traps:

- SI grows linearly; CI grows successively.
- Match rate period with time period.

