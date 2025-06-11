import { mkdirSync, writeFileSync } from 'fs'
import { join } from 'path'

export function runGenerateModule(name: string) {
  if (!name) {
    console.log('❌ Nome do módulo não informado.')
    console.log('Use: ranetium generate module <nome>')
    process.exit(1)
  }

  const controllerPath = join('src/controllers', `${name}.controller.ts`)
  const servicePath = join('src/services', `${name}.service.ts`)

  mkdirSync('src/controllers', { recursive: true })
  mkdirSync('src/services', { recursive: true })

  writeFileSync(servicePath, `export class ${cap(name)}Service {\n  getAll() { return [] }\n}`)
  writeFileSync(controllerPath, `import { ${cap(name)}Service } from '../services/${name}.service'\n\nexport class ${cap(name)}Controller {\n  constructor(private service = new ${cap(name)}Service()) {}\n  index() { return this.service.getAll() }\n}`)

  console.log(`✅ Módulo "${name}" criado.`)
}

function cap(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1)
}
