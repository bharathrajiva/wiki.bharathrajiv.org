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

## Algebra

### Linear Equations

Core approach:

```text
ax + b = c => x = (c - b) / a
For two equations, eliminate one variable or substitute.
```

Speed rules:

- Convert word statements to equations immediately.
- If options exist, substitute options.
- For age problems, use current age as variable; age difference stays constant.
- For digits problems, two-digit number with tens digit x and units digit y is `10x + y`.

Common equation patterns:

```text
Sum known: x + y = S
Difference known: x - y = D
Ratio known: x/y = a/b => x = ak, y = bk
```

### Quadratic Equations

Standard form:

```text
ax^2 + bx + c = 0
```

Roots:

```text
x = [-b +/- sqrt(b^2 - 4ac)] / 2a
Sum of roots = -b/a
Product of roots = c/a
Discriminant D = b^2 - 4ac
```

Discriminant meaning:

```text
D > 0: two real roots
D = 0: equal real roots
D < 0: no real roots
```

Factorization shortcut:

```text
For x^2 + bx + c:
Find p and q such that p + q = b and pq = c
```

Signs of roots:

```text
Both positive: sum positive, product positive
Both negative: sum negative, product positive
Opposite signs: product negative
```

Useful identities:

```text
(a+b)^2 = a^2 + 2ab + b^2
(a-b)^2 = a^2 - 2ab + b^2
a^2 - b^2 = (a-b)(a+b)
(a+b)^3 = a^3 + b^3 + 3ab(a+b)
(a-b)^3 = a^3 - b^3 - 3ab(a-b)
a^3 + b^3 = (a+b)(a^2 - ab + b^2)
a^3 - b^3 = (a-b)(a^2 + ab + b^2)
```

### Inequalities

Rules:

```text
Adding/subtracting same value keeps inequality direction.
Multiplying/dividing by positive value keeps direction.
Multiplying/dividing by negative value reverses direction.
```

Sign chart method:

1. Bring all terms to one side.
2. Factorize.
3. Mark critical points on number line.
4. Test intervals.

Common patterns:

```text
(x-a)(x-b) > 0 => x < min(a,b) or x > max(a,b)
(x-a)(x-b) < 0 => min(a,b) < x < max(a,b)
```

Modulus:

```text
|x| < a => -a < x < a
|x| > a => x < -a or x > a
|x-a| = distance of x from a
```

Common traps:

- Reverse inequality when multiplying by a negative.
- Do not square both sides unless signs are controlled.

### Functions

Basics:

```text
f(x) = rule that maps input x to output
Domain = allowed inputs
Range = possible outputs
Composite: (f o g)(x) = f(g(x))
Inverse: f^-1(x) reverses f(x)
```

Function types:

```text
Even: f(-x) = f(x)
Odd: f(-x) = -f(x)
One-one: different inputs give different outputs
Onto: every output in codomain is hit
```

Speed checks:

- Denominator cannot be zero.
- Even root input must be non-negative.
- Log input must be positive.
- For inverse, swap x and y, then solve for y.

### Logarithms

Definition:

```text
log_a b = x means a^x = b
a > 0, a != 1, b > 0
```

Rules:

```text
log_a(xy) = log_a x + log_a y
log_a(x/y) = log_a x - log_a y
log_a(x^k) = k log_a x
log_a b = 1 / log_b a
log_a b = log_c b / log_c a
```

Special values:

```text
log_a 1 = 0
log_a a = 1
a^(log_a x) = x
```

Speed tricks:

- Convert logs to exponentials if stuck.
- Same base logs can be compared directly if base > 1.
- If 0 < base < 1, comparison direction reverses.

### Sequences and Series

Arithmetic progression:

```text
nth term: a_n = a + (n-1)d
Sum: S_n = n/2 * [2a + (n-1)d]
Also: S_n = n/2 * (first + last)
```

Geometric progression:

```text
nth term: a_n = ar^(n-1)
Sum: S_n = a(r^n - 1)/(r - 1), r != 1
Infinite sum: S_inf = a/(1-r), if |r| < 1
```

Common sums:

```text
1 + 2 + ... + n = n(n+1)/2
1^2 + 2^2 + ... + n^2 = n(n+1)(2n+1)/6
1^3 + 2^3 + ... + n^3 = [n(n+1)/2]^2
```

Speed tricks:

- Check if differences are constant: AP.
- Check if ratios are constant: GP.
- For repeating decimals, use GP.

## Geometry and Mensuration

### Lines and Angles

Core facts:

```text
Straight line angle sum = 180 deg
Around a point = 360 deg
Vertically opposite angles are equal
Corresponding and alternate interior angles are equal when lines are parallel
```

Triangle angle facts:

```text
Sum of interior angles = 180 deg
Exterior angle = sum of two opposite interior angles
```

### Triangles

Area:

```text
Area = 1/2 * base * height
Heron's formula:
s = (a+b+c)/2
Area = sqrt[s(s-a)(s-b)(s-c)]
```

Special triangles:

| Triangle | Side ratio |
| --- | --- |
| 30-60-90 | 1 : sqrt(3) : 2 |
| 45-45-90 | 1 : 1 : sqrt(2) |
| 3-4-5 | right triangle |
| 5-12-13 | right triangle |
| 7-24-25 | right triangle |
| 8-15-17 | right triangle |

Equilateral triangle:

```text
Area = sqrt(3)/4 * a^2
Height = sqrt(3)/2 * a
Inradius = a/(2sqrt(3))
Circumradius = a/sqrt(3)
```

Similarity:

```text
If two triangles are similar:
Side ratio = a:b
Area ratio = a^2:b^2
Volume ratio for similar solids = a^3:b^3
```

Median and centroid:

```text
Centroid divides median in ratio 2:1 from vertex.
Median to hypotenuse in right triangle = half of hypotenuse.
```

Angle bisector:

```text
Angle bisector divides opposite side in ratio of adjacent sides.
```

### Circles

Core formulas:

```text
Circumference = 2*pi*r
Area = pi*r^2
Arc length = theta/360 * 2*pi*r
Sector area = theta/360 * pi*r^2
```

Chord and tangent facts:

```text
Perpendicular from center to chord bisects chord.
Tangents from same external point are equal.
Radius is perpendicular to tangent at point of contact.
Angle in a semicircle = 90 deg.
Equal chords subtend equal angles.
```

Cyclic quadrilateral:

```text
Opposite angles sum to 180 deg.
Exterior angle equals opposite interior angle.
```

### Quadrilaterals and Polygons

Quadrilateral:

```text
Sum of interior angles = 360 deg
```

Parallelogram:

```text
Opposite sides equal and parallel
Opposite angles equal
Diagonals bisect each other
Area = base * height
```

Rectangle:

```text
Area = l*b
Diagonal = sqrt(l^2 + b^2)
```

Square:

```text
Area = a^2
Diagonal = a*sqrt(2)
```

Rhombus:

```text
Area = 1/2 * d1 * d2
Diagonals are perpendicular bisectors
```

Trapezium:

```text
Area = 1/2 * (sum of parallel sides) * height
```

Regular polygon:

```text
Sum of interior angles = (n-2)*180 deg
Each interior angle = (n-2)*180/n deg
Each exterior angle = 360/n deg
Number of diagonals = n(n-3)/2
```

### 2D Mensuration

Core areas:

```text
Rectangle = l*b
Square = a^2
Triangle = 1/2*b*h
Circle = pi*r^2
Parallelogram = b*h
Trapezium = 1/2*(a+b)*h
Rhombus = 1/2*d1*d2
```

Perimeter:

```text
Rectangle = 2(l+b)
Square = 4a
Circle circumference = 2*pi*r
```

Speed tricks:

- If all dimensions scale by k, area scales by k^2.
- For shaded regions, calculate larger area minus smaller area.
- Use `pi = 22/7` when radius is multiple of 7; use `3.14` only when needed.

### 3D Mensuration

Cuboid:

```text
Volume = l*b*h
TSA = 2(lb + bh + hl)
LSA = 2h(l+b)
Diagonal = sqrt(l^2 + b^2 + h^2)
```

Cube:

```text
Volume = a^3
TSA = 6a^2
Diagonal = a*sqrt(3)
```

Cylinder:

```text
Volume = pi*r^2*h
CSA = 2*pi*r*h
TSA = 2*pi*r(h+r)
```

Cone:

```text
Volume = 1/3*pi*r^2*h
Slant height l = sqrt(r^2 + h^2)
CSA = pi*r*l
TSA = pi*r(l+r)
```

Sphere:

```text
Volume = 4/3*pi*r^3
Surface area = 4*pi*r^2
```

Hemisphere:

```text
Volume = 2/3*pi*r^3
CSA = 2*pi*r^2
TSA = 3*pi*r^2
```

Scaling:

```text
Length ratio = a:b
Area ratio = a^2:b^2
Volume ratio = a^3:b^3
```

### Coordinate Geometry

Distance:

```text
Distance between (x1,y1), (x2,y2)
= sqrt[(x2-x1)^2 + (y2-y1)^2]
```

Midpoint:

```text
((x1+x2)/2, (y1+y2)/2)
```

Section formula:

```text
Point dividing A(x1,y1), B(x2,y2) in ratio m:n internally:
((mx2 + nx1)/(m+n), (my2 + ny1)/(m+n))
```

Slope:

```text
m = (y2-y1)/(x2-x1)
Parallel lines: slopes equal
Perpendicular lines: m1*m2 = -1
```

Line equation:

```text
y = mx + c
y - y1 = m(x - x1)
```

Area of triangle:

```text
Area = 1/2 * |x1(y2-y3) + x2(y3-y1) + x3(y1-y2)|
```

Circle:

```text
(x-a)^2 + (y-b)^2 = r^2
Center = (a,b), radius = r
```

## Number System

### HCF and LCM

Core facts:

```text
For two numbers: HCF * LCM = product of numbers
HCF = product of common prime factors with minimum powers
LCM = product of all prime factors with maximum powers
```

For fractions:

```text
HCF of fractions = HCF(numerators) / LCM(denominators)
LCM of fractions = LCM(numerators) / HCF(denominators)
```

Euclid algorithm:

```text
HCF(a,b) = HCF(b, remainder when a is divided by b)
```

### Divisibility

| Divisor | Test |
| --- | --- |
| 2 | Last digit even |
| 3 | Sum of digits divisible by 3 |
| 4 | Last two digits divisible by 4 |
| 5 | Last digit 0 or 5 |
| 6 | Divisible by 2 and 3 |
| 8 | Last three digits divisible by 8 |
| 9 | Sum of digits divisible by 9 |
| 10 | Last digit 0 |
| 11 | Difference of alternate digit sums is 0 or multiple of 11 |
| 12 | Divisible by 3 and 4 |
| 15 | Divisible by 3 and 5 |

### Remainders

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

### Factors

If:

```text
N = p^a * q^b * r^c
```

Then:

```text
Number of factors = (a+1)(b+1)(c+1)
Sum of factors = [(p^(a+1)-1)/(p-1)] * [(q^(b+1)-1)/(q-1)] * ...
Product of factors = N^(number of factors / 2)
```

Perfect square:

```text
All prime powers are even.
Number of factors is odd.
```

Trailing zeroes:

```text
Trailing zeroes = number of pairs of 2 and 5
Usually count 5s, since 2s are more frequent.
```

### Factorials

Trailing zeroes in `n!`:

```text
floor(n/5) + floor(n/25) + floor(n/125) + ...
```

Highest power of prime p in `n!`:

```text
floor(n/p) + floor(n/p^2) + floor(n/p^3) + ...
```

Last non-zero digit and advanced factorial remainders are lower frequency; use only if the question clearly asks.

### Surds and Indices

Indices:

```text
a^m * a^n = a^(m+n)
a^m / a^n = a^(m-n)
(a^m)^n = a^(mn)
(ab)^n = a^n b^n
a^0 = 1
a^-n = 1/a^n
```

Surds:

```text
sqrt(ab) = sqrt(a)*sqrt(b)
sqrt(a/b) = sqrt(a)/sqrt(b)
```

Rationalization:

```text
1/(a + sqrt(b)) = (a - sqrt(b))/(a^2 - b)
```

Useful squares:

| n | n^2 | n | n^2 |
| ---: | ---: | ---: | ---: |
| 11 | 121 | 21 | 441 |
| 12 | 144 | 22 | 484 |
| 13 | 169 | 23 | 529 |
| 14 | 196 | 24 | 576 |
| 15 | 225 | 25 | 625 |
| 16 | 256 | 26 | 676 |
| 17 | 289 | 27 | 729 |
| 18 | 324 | 28 | 784 |
| 19 | 361 | 29 | 841 |
| 20 | 400 | 30 | 900 |

### Base System

Place value:

```text
(abc)_b = a*b^2 + b_digit*b + c
```

Decimal to base b:

1. Repeatedly divide by b.
2. Record remainders.
3. Read remainders bottom to top.

Base b to decimal:

```text
Multiply each digit by powers of b and add.
```

Speed checks:

- In base b, allowed digits are `0` to `b-1`.
- Last digit determines divisibility by base factors.

