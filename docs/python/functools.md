---
sidebar_position: 10
---

# functools

## partial

```Python
from functools import partial
def f(a, b, c, x):
    return 1000*a + 100*b + 10*c + x

g = partial(f, 3, 1, 4)
print(g(5))
```

```Python
from functools import partial
def add(a, b, c):
    return 100 * a + 10 * b + c

add_part = partial(add, c = 2, b = 1)
print(add_part(3))
```
