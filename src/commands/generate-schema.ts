import { mkdirSync, writeFileSync } from 'fs'
import { join } from 'path'

export function runGenerateSchema(name: string) {
  if (!name) {
    console.log('❌ Nome do schema não informado.')
    console.log('Use: ranetium generate schema <nome>')
    process.exit(1)
  }

  mkdirSync('src/schemas', { recursive: true })
  const schemaPath = join('src/schemas', `${name}.schema.ts`)
  writeFileSync(schemaPath, `import { z } from 'zod'\n\nexport const ${name}Schema = z.object({\n  id: z.string(),\n  createdAt: z.date()\n})`)

  console.log(`✅ Schema Zod "${name}" criado.`)
}
