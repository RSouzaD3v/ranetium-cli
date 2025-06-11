import { exec } from 'child_process'
import { promisify } from 'util'
import { existsSync } from 'fs'
import { join } from 'path'
import chalk from 'chalk'

const execAsync = promisify(exec)

export async function runUpdate() {
  const projectPath = process.cwd()
  const packageJsonPath = join(projectPath, 'package.json')

  if (!existsSync(packageJsonPath)) {
    console.log(chalk.red('❌ Nenhum projeto encontrado neste diretório.'))
    console.log(chalk.yellow('Execute o comando dentro de um projeto Ranetium.'))
    process.exit(1)
  }

  console.log(chalk.yellow('\n🔄 Atualizando dependências do projeto...\n'))

  try {
    await execAsync('npm update', { cwd: projectPath })
    console.log(chalk.green('\n✅ Dependências atualizadas com sucesso!\n'))
  } catch (err) {
    console.error(chalk.red('\n❌ Falha ao atualizar dependências.'))
  }
}
