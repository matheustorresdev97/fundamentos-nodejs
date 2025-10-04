# Desafio – Fundamentos do Node.js

Este projeto foi desenvolvido como parte de um desafio prático para fixar os conceitos de Node.js sem frameworks externos.
O sistema implementa uma API de gerenciamento de tarefas (TODO list) com persistência em arquivo JSON e possibilidade de importação de dados via CSV.

# 🚀 Tecnologias utilizadas

- Node.js (módulos nativos: http, fs, crypto)

- csv-parse (para leitura de CSV)

- JavaScript (ESModules)

# ⚡ Funcionalidades da API

POST /tasks → Cria uma nova tarefa (title, description)

GET /tasks → Lista todas as tarefas (com filtro opcional por search em title/description)

PUT /tasks/:id → Atualiza uma tarefa (title e/ou description)

DELETE /tasks/:id → Remove uma tarefa

PATCH /tasks/:id/complete → Alterna status da tarefa (concluir ou reabrir)

Cada tarefa possui os seguintes campos:

```json
{
  "id": "uuid",
  "title": "Título da tarefa",
  "description": "Descrição da tarefa",
  "completed_at": null,
  "created_at": "2025-10-03T12:00:00.000Z",
  "updated_at": "2025-10-03T12:00:00.000Z"
}
```

# ▶️ Como rodar o projeto

Clone este repositório:

git clone
cd desafio-nodejs


Instale as dependências (nesse caso não há libs externas):
npm install


Inicie o servidor em modo de desenvolvimento:
npm run dev


O servidor estará disponível em:
http://localhost:3333


# 📌 Importação de dados via CSV

O projeto inclui um script para importar tarefas de um arquivo CSV (tasks.csv) automaticamente.

Formato esperado do CSV:

```csv
title,description
Estudar Node.js,Revisar fundamentos e criar API
Ler documentação,Praticar módulos nativos
```

Para rodar a importação:

node src/import-csv.js

.

# 🎯 Objetivo do desafio

Praticar CRUD com Node.js puro

Utilizar middlewares, rotas dinâmicas e query params

Implementar persistência de dados em JSON

Exercitar leitura de arquivos CSV e integração com API

Fixar conceitos de métodos HTTP (GET, POST, PUT, DELETE, PATCH)