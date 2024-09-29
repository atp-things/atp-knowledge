---
sidebar_position: 10
---

# Histogram

```Python
from atptools import HistogramContinue

hist, hist_bin_edges = HistogramContinue(
    data=df["column"].to_numpy(),
    bin_width=60,
).get_histogram()
```
