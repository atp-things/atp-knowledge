---
sidebar_position: 2
---

# Pipenv

## Commands

- `mkdir .venv` and `pipenv install` - Create virtual environment
- `pipenv install <packagename>` - Install package
- `pipenv install "<packagename>>=0.0.1"` - Install package
- `pipenv install -e git+https://<repository>@<branch_or_tag_optional>#egg=<package_name>` - Install from git
- `pipenv install --dev <packagename>` - Install package as dev
- `pipenv uninstall <package>` - Uninstall package
- `pipenv update` - Update packages
- `pipenv update <package>` - Update package
- `pipenv upgrade` - Upgrade packages
- `pipenv run <command>` - run command in environment
- `pipenv run python <script.py>` - run script in environment
- `pipenv run python -m <module>` - run module in environment
- `pipenv shell` - activate environment
- `pipenv graph` -> Displays currently-installed dependency graph information.

## Install package

- MacOS `brew install pipenv`
- Pip `pip install pipenv`
- Ubuntu `sudo apt install pipenv`

## Pipenv example

```toml
[[source]]
url = "https://pypi.org/simple"
verify_ssl = true
name = "pypi"

[packages]
pre-commit = "*"

[dev-packages]

[requires]
python_version = "3.11"

[scripts]
test_all = "pytest tests  -x"
test_all_verbose = "pytest tests -v -x"
test_all_parallel = "pytest tests -n=auto  -x"
```
