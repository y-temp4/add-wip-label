# add-wip-label

Add WIP label to PR that title begin with `WIP: `.

## Usage

Create a workflow file (e.g. `.github/workflows/add-wip-label.yml`).

```yml
name: "add-wip-label"

on:
  pull_request:
    types: [opened, edited]

jobs:
  check:
    runs-on: ubuntu-latest
    steps:
    - uses: y-temp4/add-wip-label@v1.0.0
      with:
        repo-token: "${{ secrets.GITHUB_TOKEN }}"
```
