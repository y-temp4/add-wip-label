# add-wip-label

Add wip label to PR.

## Usage

```
name: "add-wip-label"
on:
  pull_request:
    types: [edited]

jobs:
  triage:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/add-wip-label@v1
      with:
        repo-token: "${{ secrets.GITHUB_TOKEN }}"
```
