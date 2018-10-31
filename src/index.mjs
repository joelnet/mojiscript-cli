#!/bin/sh 
':' //# comment; exec /usr/bin/env NODE_ENV=production node --experimental-modules --no-warnings "$0" "$@"

import log from 'mojiscript/console/log'
import run from 'mojiscript/core/run'
import main from './main'

const state = process.argv.slice (2)

const dependencies = {
  log
}

run ({ dependencies, state, main })
