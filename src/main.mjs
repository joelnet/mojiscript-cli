import pipe from 'mojiscript/core/pipe'
import cond from 'mojiscript/logic/cond'
import { showHelp } from './showHelp'

const main = dependencies => pipe ([
  cond ([
    [ () => true, showHelp (dependencies) ]
  ])
])

export default main
