import pipe from 'mojiscript/core/pipe'

// init - initialize a MojiScript project.

const helpText = `usage: moji [<command>] [<args>]
  build - build the files. right now just lints. will do more in the future. get used to using it.
  watch - watch files and format saved files.
`

export const showHelp = ({ log }) => pipe ([
  () => log (helpText)
])
