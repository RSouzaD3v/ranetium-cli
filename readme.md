Perfeito, Rafael — vou agora te enviar o conteúdo *puro* do `README.md` **em markdown**, exatamente como um arquivo `.md`, pronto para você copiar e colar.

---

````markdown
# 📦 ranetium-cli

> **Ranetium CLI** — scaffolding inteligente, rápido e padronizado para iniciar e manter projetos com a stack Ranetium.

---

## 🚀 Instalação

```bash
npm install -g ranetium-cli
````

> É necessário Node.js 18+.

---

## ⚙️ Comandos disponíveis

### 🔨 Criar um novo projeto

```bash
ranetium init <nome-do-projeto> [--template nome-template]
```

Exemplos:

```bash
ranetium init my-api --template server-nodejs-express
```

> O template padrão atual é `server-nodejs-express`.

---

### 🧱 Gerar um módulo

```bash
ranetium generate module <nome-do-modulo>
```

Gera:

* `src/controllers/<modulo>.controller.ts`
* `src/services/<modulo>.service.ts`

---

### 🔧 Gerar um recurso completo

```bash
ranetium generate resource <nome-do-recurso>
```

Gera:

* Model (`src/models/<recurso>.model.ts`)
* Controller + Service

---

### 📄 Gerar schema Zod

```bash
ranetium generate schema <nome-do-schema>
```

Gera:

* `src/schemas/<schema>.schema.ts`

---

### 🔐 Adicionar estrutura de autenticação

```bash
ranetium add auth
```

Gera arquivos iniciais de `auth.service.ts` e instala dependências de autenticação (`jsonwebtoken`, `bcryptjs`).

---

### 🔄 Atualizar dependências do projeto

```bash
ranetium update
```

Atualiza as dependências do projeto local com `npm update`.

---

### 📚 Listar templates disponíveis

```bash
ranetium list templates
```

Lista os templates atualmente suportados pelo CLI.

---

### 📖 Exibir ajuda

```bash
ranetium --help
```

---

### 🔢 Ver versão atual do CLI

```bash
ranetium --version
```

---

## 📦 Templates disponíveis

Os templates são baixados diretamente do repositório:

[https://github.com/RSouzaD3v/ranetium-templates](https://github.com/RSouzaD3v/ranetium-templates)

Templates atuais:

* `server-nodejs-express`
* (Em breve: `fullstack-next`, `monorepo-turbo`)

---

## 🛠 Roadmap futuro

* Templates fullstack com Next.js, Prisma, Auth
* Integração com monorepo
* Plugins e extensões de geração
* Integração direta com as libs `@ranetium/*`

---

## 🙏 Contribuições

Contribuições são bem-vindas!
Envie PRs ou abra Issues para sugerir melhorias.

---

**by [Ranetium](https://github.com/RSouzaD3v)**

```

---

Pronto.  
Agora sim, **markdown puro**, do jeito que o GitHub vai interpretar no seu repositório do `ranetium-cli`.

---

👉 Se quiser agora, seguimos com:

- **empacotamento final completo do CLI para publicação no NPM**
- ou **começamos a estruturar o `fullstack-next` template** para seu próximo nível.

Me dá o comando e seguimos! 🚀
```
