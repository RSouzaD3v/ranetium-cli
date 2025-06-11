import { mkdirSync, writeFileSync } from 'fs'
import { join } from 'path'
import { runGenerateModule } from './generate-module'

export function runGenerateResource(name: string) {
  if (!name) {
    console.log('❌ Nome do recurso não informado.')
    console.log('Use: ranetium generate resource <nome>')
    process.exit(1)
  }

  mkdirSync('src/models', { recursive: true })

  const modelPath = join('src/models', `${name}.model.ts`)
  writeFileSync(modelPath, `export interface ${cap(name)} {\n  id: string\n  createdAt: Date\n}`)

  console.log(`📦 Model "${name}" criado.`)

  runGenerateModule(name)
}

function cap(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1)
}
