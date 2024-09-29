---
sidebar_position: 1
---

# Records

`from atptools import Records`

## Methods

```Python
records = Records()
# load
records.from_json(Path("data_sample", "records", "test1.json"))
records.from_string("[{'name':'sd1'},{'name':'sd2'}]")
records.from_dataframe(df)
records.from_csv(Path("data_sample", "records", "test1.csv"))
records.from_sqlalchemy(sqlalchemy_rows))

# outputs
records.to_list()
records.to_json()
records.to_dict()
records.to_dict_default()
records.to_dataframe()

# group by
records.group_by(["first_name", "last_name"])
records.group_by(["first_name", "last_name"], key_as_tuple=True)

```

### From sqlalchemy

```Python
from pprint import pprint
from atptools import Records
from database import DbSession
from database.models import User

with DbSession() as db:
    # rows
    users = db.query(
        User.email,
        User.name,
    ).all()

    records = Records()
    records.from_sqlalchemy(users)
    for user in records:
        print("Row type:", type(user))
    pprint(records)

    # models
    users = db.query(User).all()
    records = Records()
    records.from_sqlalchemy(users)
    for user in records:
        print("Row type:", type(user))
    pprint(records)
```
