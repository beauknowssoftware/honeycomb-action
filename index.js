const core = require('@actions/core')
const fetch = require('node-fetch')

async function run() {
  // required
  const xHoneycombTeam = core.getInput('X-Honeycomb-Team')
  const dataset = core.getInput('dataset')
  const type = core.getInput('type')
  const message = core.getInput('message')
  if ( !xHoneycombTeam ) {
    throw new Error("missing X-Honeycomb-Team input")
  }
  if ( !dataset ) {
    throw new Error("missing dataset input")
  }
  if ( !type ) {
    throw new Error("missing type input")
  }
  if ( !message ) {
    throw new Error("missing message input")
  }

  const url = core.getInput('url')

  const res = await fetch(`https://api.honeycomb.io/1/markers/${dataset}`, {
    method: 'POST',
    body: JSON.stringify({
      message,
      type,
      url,
    }),
    headers: { 'X-Honeycomb-Team': xHoneycombTeam },
  })

  const marker = await res.json()

  core.setOutput("markerId", marker.id)
}

run().catch(function (err) {
  core.setFailed(err.message)
})
