---
sidebar_position: 2
---

# DictDefault

`from atptools import DictDefault`

```Python
import datetime
import uuid
from pathlib import Path
from pprint import pprint
from atptools import DictDefault

dict_def = DictDefault()
dict_def["name"]["value1"] = "text 1"
dict_def["name"]["value2"] = "text 2"
dict_def["name2"]["list_num"] = [1, 2, 3, 4, 5]
dict_def["name2"]["list_string"] = ["a", "b", "c", "d", "e"]
dict_def["name2"]["list_dict"] = [{"a": 1}, {"b": 2}, {"c": 3}, {"d": 4}, {"e": 5}]
dict_def["name2"]["list_list"] = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
dict_def["name2"]["dict"] = {"a": 1, "b": 2, "c": 3, "d": 4, "e": 5}
dict_def["name3"]["uuid"] = uuid.uuid4()
dict_def["name3"]["datetime_utc"] = datetime.datetime.now(datetime.UTC)
dict_def["name3"]["timestamp_utc"] = datetime.datetime.now(datetime.UTC).timestamp()

# output
dict_def.to_json(Path("data", "tesst_export_dict_default.json"), indent=2)
dict_def.to_yaml(Path("data", "tesst_export_dict_default.yaml"))
dict_def.to_toml(Path("data", "tesst_export_dict_default.toml"))

```
