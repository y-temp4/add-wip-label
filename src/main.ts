import * as core from '@actions/core'
import * as github from '@actions/github'

async function run(): Promise<void> {
  try {
    const token = core.getInput('repo-token', { required: true })
    const prInfo = getPrInfo()
    if(!prInfo) return
    const { title, number } = prInfo
    const client = new github.GitHub(token)

    const isWipPr = title.startsWith('WIP: ')
    if (isWipPr) {
      client.issues.addLabels({
        owner: github.context.repo.owner,
        repo: github.context.repo.repo,
        issue_number: number,
        labels: ['WIP']
      })
    } else {
      client.issues.removeLabel({
        owner: github.context.repo.owner,
        repo: github.context.repo.repo,
        issue_number: number,
        name: 'WIP'
      })
    }
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
