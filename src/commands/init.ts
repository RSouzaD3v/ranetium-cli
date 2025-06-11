import degit from 'degit'
import { existsSync } from 'fs'
import { join } from 'path'
import { exec } from 'child_process'
import { promisify } from 'util'

const execAsync = promisify(exec)

export async function runInit(projectName: string = 'ranetium-app', options?: { template?: string }) {
  const name = projectName
  const root = join(process.cwd(), name)

  if (existsSync(root)) {
    console.log(`❌ A pasta "${name}" já existe.`)
    process.exit(1)
  }

  const template = options?.template || 'server-nodejs-express'
  const repo = `RSouzaD3v/ranetium-templates/${template}`

  console.log(`🚀 Baixando template "${template}" de ${repo}...`)

  const emitter = degit(repo, { cache: false, force: true })

  try {
    await emitter.clone(root)
    console.log(`✅ Template clonado com sucesso em ${root}`)
  } catch (err) {
    console.error(`❌ Falha ao clonar o template:`, err)
    process.exit(1)
  }

  console.log('📦 Instalando dependências...')

  try {
    await execAsync('npm install', { cwd: root })
    console.log('✅ Dependências instaladas com sucesso.')
  } catch (err) {
    console.error('⚠️ Falha ao instalar dependências. Execute "npm install" manualmente.')
  }

  console.log('🚀 Projeto Ranetium pronto!')
}
