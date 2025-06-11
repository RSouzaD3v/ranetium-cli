import { mkdirSync, writeFileSync } from 'fs'
import { execSync } from 'child_process'
import { join } from 'path'

export function runAddAuth() {
  mkdirSync('src/auth', { recursive: true })

  const authServicePath = join('src/auth', 'auth.service.ts')
  writeFileSync(authServicePath, `export class AuthService {\n  login(user: string, pass: string) {\n    return { token: 'fake-jwt-token' }\n  }\n}`)

  console.log('🔐 Auth service criado.')

  try {
    execSync('npm install jsonwebtoken bcryptjs', { stdio: 'inherit' })
    console.log('📦 Dependências instaladas.')
  } catch {
    console.log('⚠️ Erro ao instalar dependências. Faça manualmente se necessário.')
  }
}
