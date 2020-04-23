import * as core from '@actions/core'
import * as github from '@actions/github'

async function run(): Promise<void> {
  try {
    const token = core.getInput('repo-token', { required: true })
    const prInfo = getPrInfo()
    if(!prInfo) return
    const { title, number } = prInfo
    const client = new github.GitHub(token)
    client.issues.addLabels({
      owner: github.context.repo.owner,
      repo: github.context.repo.repo,
      issue_number: number,
      labels: ["WIP"]
    })
    // client.pulls.get({
    //   owner: github.context.repo.owner,
    //   repo: github.context.repo.repo,
    //   pull_number: number
    // })
  } catch (error) {
    core.setFailed(error.message)
  }
}

function getPrInfo() {
  const pullRequest = github.context.payload.pull_request
  if (!pullRequest) return null
  return {
    title: pullRequest.title as string,
    number: pullRequest.number as number
  }
}

run()
