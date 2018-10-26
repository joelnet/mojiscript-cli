# Developer Notes

Notes for developers to begin.

## Install

Install and create a global link to the package.

```bash
npm ci
npm link
```

## Running

If the link is setup successfully, then you should be able to just run:

```bash
moji
```

## Tools

We should use `child_process` to exec the shell commands we need to run. Examples here: https://stackoverflow.com/questions/20643470/execute-a-command-line-binary-with-node-js