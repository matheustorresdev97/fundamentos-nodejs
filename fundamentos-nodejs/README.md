# 📘 Fundamentos do Node.js

Este projeto foi desenvolvido como parte dos meus estudos sobre os fundamentos do Node.js.
Ele implementa uma API simples de gerenciamento de usuários (CRUD) utilizando apenas módulos nativos do Node, sem frameworks externos como Express.

# 🚀 Tecnologias utilizadas

- Node.js
 (Módulos nativos: http, fs, crypto)

- JavaScript (ESModules)

# ⚡ Funcionalidades

GET /users → Lista todos os usuários ou filtra por nome/email (?search=valor)

POST /users → Cria um novo usuário (name, email)

PUT /users/:id → Atualiza um usuário existente

DELETE /users/:id → Remove um usuário

# ▶️ Como rodar o projeto

Clone este repositório:

git clone
cd fundamentos-nodejs


Instale as dependências (nesse caso não há libs externas):
npm install


Inicie o servidor em modo de desenvolvimento:
npm run dev


O servidor estará disponível em:
http://localhost:3333

# 📌 Exemplos de requisições

### Criar usuário

POST /users
Content-Type: application/json

{
  "name": "Matheus",
  "email": "matheus@example.com"
}


### Listar usuários

GET /users
GET /users?search=matheus

### Atualizar usuário

PUT /users/:id
Content-Type: application/json

{
  "name": "Matheus Torres",
  "email": "matheus.torres@example.com"
}


### Deletar usuário

DELETE /users/:id

# 🎯 Objetivo do projeto

Praticar módulos nativos do Node.js

Compreender conceitos de HTTP, middlewares, rotas e persistência de dados

Criar uma API do zero sem frameworks externos