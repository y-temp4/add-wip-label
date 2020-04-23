import * as core from '@actions/core'
import * as github from '@actions/github'

async function run(): Promise<void> {
  try {
    const token = core.getInput('repo-token', { required: true })
    const prTitle = getPrTitle()
    console.log({ prTitle })
  } catch (error) {
    core.setFailed(error.message)
  }
}

function getPrTitle() {
  const pullRequest = github.context.payload.pull_request
  if (!pullRequest) {
    return undefined
  }

  return pullRequest
}

run()
