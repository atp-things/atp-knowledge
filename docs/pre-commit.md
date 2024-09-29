---
sidebar_position: 3
---

# Pre-commit

## Commands

- `pre-commit install` to install pre-commit hooks
- `pre-commit run --all-files` to run all pre-commit hooks

## Configuration

```yaml
repos:
  - repo: https://github.com/pre-commit/pre-commit-hooks
    rev: v4.6.0
    hooks:
      - id: check-yaml
      # - id: end-of-file-fixer
      - id: trailing-whitespace
      - id: check-added-large-files
      - id: check-merge-conflict
      - id: check-symlinks
      - id: requirements-txt-fixer
  - repo: https://github.com/kynan/nbstripout
    rev: 0.7.1
    hooks:
      - id: nbstripout
  - repo: https://gitlab.com/bmares/check-json5
    rev: v1.0.0
    hooks:
      - id: check-json5

  - repo: https://github.com/charliermarsh/ruff-pre-commit
    rev: v0.4.10
    hooks:
      - id: ruff
        args:
          - --fix
      - id: ruff-format
```

## Install

- MacOS `brew install pre-commit`
- Pip `pip install pre-commit`
- Ubuntu `sudo apt install pre-commit`
