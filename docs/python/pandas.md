---
sidebar_position: 3
---

# Pandas

- Read csv: `df = pd.read_csv(url)`
- Type of the object: `type(df)`
- Column names: `list(df)`
- Head: `df.head()`
- Tail: `df.tail()`
- Datatype of each column: `df.dtypes`
- Column exist:

  ```Python
  if 'A' in df:
    pass
  # or
  if 'A' in df.columns:
    pass
  ```

- Columns sorted `df = df.reindex(sorted(df.columns), axis=1)`
- Columns order:

```Python
model_columns = ["Col1","Col2"]
df = df.reindex(
columns=model_columns + list([a for a in df.columns if a not in model_columns])
)
```

- Rename column:
  ```Python
  df.rename(
    columns={'oldName1': 'newName1', 'oldName2': 'newName2'},
    inplace=True,
    )
  ```
- Basic statistic: `df.describe()`
- Extract first x rows:
  ```Python
  df[0:x]
  # or
  df.iloc[:x]
  ```
- Filter:

  ```Python
  df[df['Hair']=="Black"]
  df.query("Hair =='Black'")

  df[(df['Hair']=="Black")  & (df["Sex"]=="Male")]
  df.query("Hair == 'Black' & Sex =='Male'")

  df[(df['Hair']=="Black") | (df["Eye"]=="Brown")]
  df.query("Hair == 'Black' | Eye =='Brown'")

  df[df.Eye.isin(['Blue','Hazel','Green'])]
  ```

- Select columns:
  ```Python
  df[["Eye"]]
  df.Eye
  df[["Eye","Sex"]]
  ```
- Unique column elements: `df["Eye"].unique()`
- Max of column: `df["Freq"].max()`
- Call function on multiple columns:
  ```Python
  pd.DataFrame({'Max_freq': [df.Freq.max()],
              'Min_freq': [df.Freq.min()],
              'Std_freq': [np.std(df.Freq)]})
  pd.DataFrame({'Max_freq': [df[0:10].Freq.max()],
              'Min_freq': [df[0:10].Freq.min()],
              'Std_freq': [np.std(df[0:10].Freq)]})
  ```
- Operation on group:
  ```Python
  df.groupby("Sex").agg({"Freq":"max"})
  df.groupby(["Eye","Sex"]).agg({"Freq":"count"}).rename(columns={"Freq":"Count"})
  ```
- Call functions for goruping
  ```Python
  df.assign(Gt50 = (df.Freq > 50)).groupby("Gt50").agg({"Gt50":"count"}).rename(columns ={"Gt50":"Count"})
  ```
- Remove column: `df.drop('Unnamed: 0', 1).head()`
- Return first or last occurrence:
  ```Python
  df.query("Eye == 'Blue'")[:1]
  df.query("Eye == 'Blue'")[-1:]
  ```
- Return count:

  ```Python
  df[df.Eye.isin(['Blue','Hazel']) & (df.Sex=="Male")].shape[0]
  df[df.Eye.isin(['Blue','Hazel']) & (df.Sex=="Male")].groupby(["Eye","Sex"]).agg({"Freq":"count"}).rename(columns={"Freq":"Count"})
  ```

- Order:
  ```Python
  df.sort_values(by='Freq')
  df.sort_values(by='Freq', ascending = False)
  df.sort_values(by=['Freq','Eye'], ascending = [False,True])
  ```
- Rename columns: `df.rename(columns = {"Freq":"Frequency","Eye":"Eye_Color"})`
- Unique rows: `df[["Eye","Sex"]].drop_duplicates()`
- New column `df.assign(Eye_Hair =df.Eye + df.Hair)[["Eye","Hair","Eye_Hair"]]`
- New column `df['e'] = e`
- set values in dataframe
  ```Python
  df.loc[
      df["dfd"] > 72,
      "fdf",
  ] = np.nan
  ```
- Rolling

```Python
df["column"].rolling(window="60S",center=True).mean()
df["column"].rolling(window="60S",center=True).apply(lambda x: x)
def function(x):
  return x

df["column"].rolling(window="60S",center=True).apply(function)
```

- Set index: `df.set_index("column_name", inplace = True)`
- Dropna:

```Python
df.dropna()
df.dropna(inplace=True)
df.dropna(subset=["col_1","col_2"])
df.dropna(thresh=2)
```

- Merge

```Python
    # select join
    df_select_merged = df_select.merge(
        df,
        how="left",
        left_index=True,
        right_index=True,
        suffixes=("", "_duplicate"),
    )
    # Drop duplicated data
    for column_name in list(df_select_merged):
        if column_name.find("_duplicate") >= 0:
            df_select_merged.drop(column_name, axis="columns", inplace=True)
```

- Extract regex from column string

```Python
df[["col_1", "col_1"]] = df["Column"].str.extract(r"^(.*) (\d{2,3}) bla bla"))
```
