# Library Management System

## 📚 Descrição

Este projeto é um sistema de gerenciamento de biblioteca, desenvolvido com **Node.js**, **Express** e **Prisma ORM**, utilizando um banco de dados SQLite. Ele permite gerenciar usuários, livros e empréstimos, oferecendo funcionalidades como registrar empréstimos e identificar os livros mais emprestados.

---

### 👥 Integrantes

- Rodrigo Andrade Cavalcante Muniz - 01606059
- Eliel Lucas Trajano Neto - 01606048
- José Gabriel Rocha Barreto - 01597807
- Matheus Henrique da Costa Nascimento - 01601141
- Pedro Antônio Silva Pedroso - 01605602
- Rafael Aragão Vieira - 01592062
- André Marcilio da Silva Ferreira - 01616701

## 🚀 Funcionalidades

- Cadastro de usuários.
- Cadastro de livros.
- Registro e gerenciamento de empréstimos.
- Listagem dos livros mais emprestados, incluindo a quantidade de empréstimos.

---

## 🛠️ Ferramentas e Tecnologias

- **Node.js**: Ambiente de execução JavaScript.
- **Express.js**: Framework para construção de APIs.
- **Prisma ORM**: Gerenciamento e interação com o banco de dados.
- **SQLite**: Banco de dados leve e embutido.
- **Git**: Controle de versão do projeto.

### 📦 Instalação e Configuração

[ver requisitos](./librarydocs/infos.pdf)

1. Clone o repositório:

   ```bash
   git clone <URL_DO_REPOSITÓRIO>
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Configure o banco de dados:

   ```bash
   npx prisma migrate dev
   ```

4. Inicie o servidor:
   ```bash
   npm run dev
   ```

## 🗂️ Estrutura do Fluxo de Trabalho

O fluxo de trabalho utiliza um modelo de branch por desenvolvedor. Cada desenvolvedor deve criar uma branch com seu nome ou recurso específico em que está trabalhando. Após finalizar o desenvolvimento, o merge deve ser feito na branch main.

[ver estrutura](./librarydocs/infos.pdf)

### Fluxo de Trabalho

1. Crie um branch pessoal com o comando `git checkout -b dev-<nome-do-desenvolvedor>`.
2. Desenvolva no branch criado, fazendo commits regulares.
3. Após concluir o trabalho, faça um push para o repositório remoto.
4. Abra um Pull Request (PR) para a branch `main`.
5. O PR será revisado antes de ser mergeado na `main`.

### Fluxograma do Fluxo de Trabalho

O fluxograma abaixo explica como o fluxo de trabalho deve ser seguido:

[ver fluxo](./librarydocs/infos.pdf)

### Tutorial Git

Para contribuir com o projeto, siga o Tutorial de Fluxo de Trabalho Git.

[ver tutorial](./librarydocs/infos.pdf)

graph TD
A[main] -->|Criar Branch| B[dev-<nome-do-desenvolvedor>]
B --> C[Desenvolvimento]
C -->|Commit/Push| B
B -->|Abrir Pull Request| D[PR para main]
D -->|Revisar| E[Merge para main]
E --> A
