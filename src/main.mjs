import pipe from 'mojiscript/core/pipe'
import cond from 'mojiscript/logic/cond'
import { runWatch, shouldWatch } from './cmdWatch.mjs'
import { runBuild, shouldBuild } from './cmdBuild.mjs'
import { showHelp } from './showHelp'

const main = dependencies => pipe ([
  cond ([
    [ shouldBuild, runBuild (dependencies) ],
    [ shouldWatch, runWatch (dependencies) ],
    [ () => true, showHelp (dependencies) ]
  ])
])

export default main
