import pipe from 'mojiscript/core/pipe'
import { spawn } from './interop/childProcess'

const cmd = 'npx'
const args = [ 'esw', '-w', '--fix', '--ext', '.js,.mjs', '--color' ]

export const shouldWatch = args => args[0] === 'watch'

export const runWatch = ({ log }) => pipe ([
  () => spawn ({ cmd, args, onData: log, onError: log })
])
