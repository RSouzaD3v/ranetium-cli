#!/usr/bin/env node

import inquirer from 'inquirer';
import chalk from 'chalk';

import { runInit } from './commands/init.js';
import { runGenerateModule } from './commands/generate-module.js';
import { runGenerateResource } from './commands/generate-resource.js';
import { runGenerateSchema } from './commands/generate-schema.js';
import { runAddAuth } from './commands/add-auth.js';
import { runUpdate } from './commands/update.js';

import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

// Helper para ler versão
async function getVersion() {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const pkgJson = JSON.parse(await readFile(join(__dirname, '../package.json'), 'utf8'));
  return pkgJson.version;
}

// App principal
async function main() {
  const version = await getVersion();

  console.log(chalk.bold.cyan(`\n🛠️  Ranetium CLI v${version}\n`));

  const { mainCommand } = await inquirer.prompt([
    {
      type: 'list',
      name: 'mainCommand',
      message: 'O que você deseja fazer?',
      choices: [
        { name: '📦 Iniciar novo projeto', value: 'init' },
        { name: '⚙️ Gerar módulo (controller + service)', value: 'generateModule' },
        { name: '🗂️ Gerar resource (módulo + model)', value: 'generateResource' },
        { name: '📜 Gerar schema (Zod)', value: 'generateSchema' },
        { name: '🔐 Adicionar Auth', value: 'addAuth' },
        { name: '⬆️ Atualizar Pacotes Ranetium', value: 'update' },
        { name: '❌ Sair', value: 'exit' },
      ],
    },
  ]);

  switch (mainCommand) {
    case 'init':
      await handleInit();
      break;

    case 'generateModule':
      await handleGenerate(runGenerateModule);
      break;

    case 'generateResource':
      await handleGenerate(runGenerateResource);
      break;

    case 'generateSchema':
      await handleGenerate(runGenerateSchema);
      break;

    case 'addAuth':
      await runAddAuth();
      break;

    case 'update':
      await runUpdate();
      break;

    case 'exit':
    default:
      console.log(chalk.gray('Saindo...'));
      process.exit(0);
  }
}

// Funções auxiliares para cada fluxo

async function handleInit() {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'projectName',
      message: 'Nome do projeto:',
      validate: (input) => input ? true : 'Informe um nome válido.',
    },
    {
      type: 'input',
      name: 'template',
      message: 'Template (opcional):',
    },
  ]);

  await runInit(answers.projectName, { template: answers.template });
}

async function handleGenerate(generatorFn: (name: string) => void) {
  const { name } = await inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Nome:',
      validate: (input) => input ? true : 'Informe um nome válido.',
    },
  ]);

  await generatorFn(name);
}

// Start
main();
