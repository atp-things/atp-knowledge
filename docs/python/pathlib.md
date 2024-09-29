---
sidebar_position: 3
---

# pathlib

```Python
from pathlib import Path
# compose path
Path("./folder01/","fielname").with_suffix(".pickle")
# parts
Path("./folder01/fielname").parts
# get filename
Path("./folder01/","fielname").name
# get file type
Path("./folder01/fielname.json").suffix
# Filename without
Path("./folder01/fielname.json").stem
```
