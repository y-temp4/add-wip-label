# add-wip-label

Add wip label to PR.

## Usage

```
name: "add-wip-label"
on:
  pull_request:
    types: [opened, edited]

jobs:
  triage:
    runs-on: ubuntu-latest
    steps:
    - uses: y-temp4/add-wip-label@v1.0.0
      with:
        repo-token: "${{ secrets.GITHUB_TOKEN }}"
```
