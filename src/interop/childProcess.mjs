import process from 'child_process'
import pipe from 'mojiscript/core/pipe'

const toUtf8 = data => data.toString('utf8')
const trimLastLf = data => data.replace(/\n+$/g, '')

const processText = callback => pipe ([
  toUtf8,
  trimLastLf,
  callback
])

export const spawn = ({ cmd, args = [], onData, onError }) => {
  const child = process.spawn(cmd, args)
  child.stdout.on('data', processText(onData))
  child.stderr.on('data', processText(onError))
}
