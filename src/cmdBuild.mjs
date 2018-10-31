import pipe from 'mojiscript/core/pipe'
import { spawn } from './interop/childProcess'

const cmd = 'npx'
const args = [ 'eslint', '--ext', '.js,.mjs', '--color' ]

export const shouldBuild = args => args[0] === 'build'

export const runBuild = ({ log }) => pipe ([
  extra => extra.slice (1),
  extra => args.concat (extra),
  args => spawn ({ cmd, args, onData: log, onError: log })
])
