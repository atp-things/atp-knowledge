---
sidebar_position: 1
---

# Curve

`import atpplots`

```Python
import holoviews as hv
import numpy as np
from bokeh.plotting import show

import atpplots

data_x = np.linspace(0, 10, 100)
data_y1 = [np.sin(2 * i) for i in data_x]

data_vector_1 = atpplots.DataVector(
    data_x=data_x,
    data_y=data_y1,
    color="red",
    label="sin",
)

plot_curve = atpplots.CurveDataVector(
    data_vector_1,
    title="Scatter plot",
)

show(hv.render(plot_curve.to_holoviews()))
```
