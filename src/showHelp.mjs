import pipe from 'mojiscript/core/pipe'

const helpText = `usage: moji [<command>] [<args>]
  init - initialize a MojiScript project.
  build - build the files. right now just lints. will do more in the future. get used to using it.
  watch - watch files and format saved files.
`

export const showHelp = ({ log }) => pipe ([
  () => log (helpText)
])
