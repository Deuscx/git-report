import { $, quiet } from 'zx'

async function start() {
    const { stdout: author } = await quiet($`git config user.name`)
    await $`git shortlog --since="1 Monday ago" --author=${author.trim()}`
}

start()