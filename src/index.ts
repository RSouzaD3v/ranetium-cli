#!/usr/bin/env node

import chalk from 'chalk'

import { runInit } from './commands/init'
import { runGenerateModule } from './commands/generate-module'
import { runGenerateResource } from './commands/generate-resource'
import { runGenerateSchema } from './commands/generate-schema'
import { runAddAuth } from './commands/add-auth'
import { runUpdate } from './commands/update'

import { parseArgs } from 'node:util'

const args = process.argv.slice(2)
const command = args[0]
const subcommand = args[1]
const param = args[2]

if (args.includes('--version') || args.includes('-v')) {
  const pkg = require('../package.json')
  console.log(`Ranetium CLI v${pkg.version}`)
  process.exit(0)
}

switch (command) {
  case 'init': {
    const options = parseArgs({
      args: process.argv.slice(3),
      options: {
        template: { type: 'string' },
      },
      allowPositionals: true
    })
    runInit(subcommand, options.values)
    break
  }

  case 'generate':
    if (subcommand === 'module') runGenerateModule(param)
    else if (subcommand === 'resource') runGenerateResource(param)
    else if (subcommand === 'schema') runGenerateSchema(param)
    else help()
    break

  case 'add':
    if (subcommand === 'auth') runAddAuth()
    else help()
    break

  case 'update':
    runUpdate()
    break

  default:
    help()
    break
}

function help() {
  console.log(chalk.bold('\n🛠 Ranetium CLI - Comandos disponíveis:\n'))
  console.log(`${chalk.cyan('init')} <nome> [--template nome]  → Inicia novo projeto com template`)
  console.log(`${chalk.cyan('generate module')} <nome>        → Gera novo módulo (controller + service)`)
  console.log(`${chalk.cyan('generate resource')} <nome>      → Gera módulo + model`)
  console.log(`${chalk.cyan('generate schema')} <nome>        → Gera schema Zod`)
  console.log(`${chalk.cyan('add auth')}                     → Adiciona estrutura de auth`)
  console.log(`${chalk.cyan('update')}                        → Atualiza pacotes Ranetium`)
  console.log('')
  process.exit(0)
}
