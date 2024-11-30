### Fluxo de Trabalho

## Descrição:

Adotaremos um modelo de branch por pessoa. Cada desenvolvedor terá seu próprio branch de trabalho. A nomenclatura do branch será dev-<nome-do-desenvolvedor>. Após concluir suas tarefas, o desenvolvedor abrirá um Pull Request (PR) para a branch main, onde o código será revisado antes de ser mergeado.

## Fluxograma:

O fluxo segue os seguintes passos:

- Cada desenvolvedor cria seu branch a partir de main.
- O trabalho é realizado no branch pessoal com commits regulares.
- Após finalizar, o branch é enviado para o repositório remoto.
- O desenvolvedor abre um PR para a branch main.
- O código é revisado e mergeado na main.

1. Crie um branch pessoal com o comando `git checkout -b dev-<nome-do-desenvolvedor>`.
2. Desenvolva no branch criado, fazendo commits regulares.
3. Após concluir o trabalho, faça um push para o repositório remoto.
4. Abra um Pull Request (PR) para a branch `main`.
5. O PR será revisado antes de ser mergeado na `main`.

Referência: Consulte o fluxograma no arquivo `CONTRIBUTING.md`.

### Tutorial para Fluxo de Trabalho no Git

# Clonar o repositório

git clone <url-do-repositorio>

# Criar um novo branch pessoal

git checkout -b dev-<nome-do-desenvolvedor>

# Adicionar mudanças

git add .

# Criar um commit

git commit -m "Descrição da mudança"

# Enviar para o repositório remoto

git push origin dev-<nome-do-desenvolvedor>

# Após finalizar o trabalho, abrir Pull Request no GitHub (GUI)

# Fazer merge do PR no GitHub

# Voltar para a branch main após o merge

git checkout main

# Atualizar a branch main localmente

git pull origin main
