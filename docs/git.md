---
sidebar_position: 3
---

# Git

## Commands

- Config list

```Bash
git config list
```

- Config set

```Bash
# Global
git config --global user.name "Name"
git config --global user.email "username@gmail.com"
git config --global credential.helper store
# local
git config user.name "Name"
git config user.email "username@gmail.com"
git config credential.https://github.com username
# Repository credentials
git config --global url."https://token:$GIT_TOKEN@github.com/".insteadOf "https://github.com/"
git config --global url."https://token:`cat /secrets/GITHUB_TOKEN`@github.com/".insteadOf "https://github.com/"
git config --global url."https://token:`cat /secrets/GIT_PASSWORD`@github.com/".insteadOf "https://github.com/"
```

- Set remotes

```Bash
git remote
git remote add [-t <branch>] [-m <master>] [-f] [--[no-]tags] [--mirror=(fetch|push)] <name> <url>
# example
git remote add origin_new https://github.com/username/repo.git

# get/set url of remote
git remote get-url origin_new
git remote set-url origin_new https://github.com/username/repo.git
```

- Branches

```Bash
# List branches
git branch
# New branches
git branch <name>
# Switch branch
git switch <name>
```

- Tags

```bash
# List
git tag
git tag -l "v1.8.5*"
# Show
git show v1.4git tag v1.4-lwgit tag v1.4-lwgit push origin --tags
# Create
git tag -a v0.0.10 -m "Verion 0.0.10"
git push origin --tags
```

### Commits

```Bash
# Add all files
git add .
# Commit files
git commit -m ''
```

- Submodule

```bash
git submodule add <remote_url> <destination_folder>
git commit -m "Added the submodule to the project."
git push
git submodule update --init --recursive
# Example:
git submodule add https://github.com/username/repo_name.git submodules/repo_name
```

- LSF (Large File Storage)

Settings are stored in `.gitattributes`.

```bash
# Install MacOS
brew install git-lfs
# Add to user account
git lfs install
```

```bash
# Track files
git lfs track "*.psd"
git lfs track "myfolder/**"
# List
git lfs ls-files
```
