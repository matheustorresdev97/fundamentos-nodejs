# 📘 Tiny LMS – Fundamentos do Node.js

Este projeto é uma API e plataforma simplificada de gerenciamento de aprendizado (LMS), desenvolvida como parte dos estudos avançados sobre fundamentos do Node.js e TypeScript.

O sistema conta com autenticação baseada em sessões e cookies, controle de acesso por papéis (usuário e administrador), gerenciamento completo de cursos e aulas, acompanhamento de progresso, geração de certificados em PDF e serviço de arquivos públicos e privados via streaming.

# 🚀 Tecnologias utilizadas

- **Node.js** (módulos nativos: `http`, `fs`, `crypto`, `stream`, `path`)
- **TypeScript**
- **SQLite** (banco de dados relacional para persistência de dados)
- **jsPDF** (geração dinâmica de certificados em PDF)
- **Middleware & Security** (rate limiting, hashing de senhas, validação de entradas, controle de cache e ETag)
- **Docker & Docker Compose** (containerização de aplicação e serviços)
- **Caddy** (reverse proxy, suporte a HTTPS automático, servimento de arquivos estáticos e headers de segurança OWASP)

# ⚡ Funcionalidades da API

### 🔑 Autenticação & Usuários (`/auth`)
- `POST /auth/user` → Cadastro de novo usuário
- `POST /auth/login` → Autenticação de usuário e criação de sessão via cookie
- `DELETE /auth/logout` → Encerramento da sessão ativa
- `POST /auth/password/forgot` → Solicitação de recuperação de senha por e-mail
- `POST /auth/password/reset` → Redefinição de senha utilizando token de recuperação
- `PUT /auth/password/update` → Atualização de senha (requer autenticação)
- `GET /auth/session` → Validação da sessão ativa do usuário
- `GET /auth/users/search` → Busca de usuários cadastrados (requer perfil `admin`)

### 📚 LMS - Cursos & Aulas (`/lms`)
- `POST /lms/course` → Cadastro de novo curso (requer perfil `admin`)
- `POST /lms/lesson` → Cadastro de nova aula associada a um curso (requer perfil `admin`)
- `GET /lms/courses` → Listagem de todos os cursos disponíveis
- `GET /lms/lessons` → Listagem de todas as aulas (requer perfil `admin`)
- `GET /lms/course/:slug` → Detalhes do curso, lista de aulas e progresso do aluno
- `GET /lms/lesson/:courseSlug/:lessonSlug` → Detalhes da aula e links para próxima/anterior
- `POST /lms/lesson/complete` → Marcar aula como concluída (gera certificado automaticamente ao concluir o curso)
- `DELETE /lms/course/reset` → Resetar o progresso do usuário no curso
- `GET /lms/certificates` → Listar todos os certificados conquistados pelo usuário
- `GET /lms/certificate/:id` → Download/Visualização do certificado em PDF

### 📁 Gerenciamento de Arquivos (`/files`)
- `GET /files/public/:name` → Acesso a arquivos públicos (com suporte a ETag, cache e streaming)
- `GET /files/private/:name` → Acesso a arquivos privados (requer autenticação)
- `POST /files/upload` → Upload de arquivos via `application/octet-stream` (requer perfil `admin`)

# 🛠️ DevOps & Infraestrutura

O projeto possui uma estrutura completa para execução containerizada e publicação em produção:

- **Docker Multi-Stage Build**:
  - `base`: Configura o ambiente base (`node:24-alpine`) com ferramentas nativas (`sqlite`, `vips-tools`).
  - `dev`: Ambiente de desenvolvimento com `--watch`.
  - `prod`: Imagem otimizada para produção apenas com dependências de produção.
- **Docker Compose**:
  - Serviço da API Node.js orquestrado junto ao Caddy.
  - **Docker Secrets**: Gerenciamento seguro de segredos (`email_key` e `pepper`).
  - **Volumes Persistentes**: Isolamento do banco de dados SQLite (`db`) e dos arquivos da aplicação (`files`).
  - **Rotacionamento de Logs**: Driver local com limite de `20m` e até `5` arquivos.
- **Reverse Proxy & Segurança (Caddy)**:
  - **SSL/TLS Automático**: Emissão de certificados via ACME / Let's Encrypt.
  - **Compressão**: Suporte nativo a `gzip` e `zstd`.
  - **Headers de Segurança (OWASP)**: HSTS, CSP, COOP, CORP, X-Frame-Options (`deny`), X-Content-Type-Options (`nosniff`) e remoção de assinaturas do servidor (`Server`, `X-Powered-By`).
  - **Arquivos Protegidos (`X-Accel-Redirect`)**: A API Node autoria o acesso a arquivos privados e repassa a entrega eficiente diretamente ao Caddy.

# ▶️ Como rodar o projeto

### Desenvolvimento local (Node.js)

```bash
cd tiny-lms
npm install
npm run dev
```

### Desenvolvimento/Produção via Docker Compose

```bash
# Subir ambiente com Docker Compose
docker compose up -d
```

# 🎯 Objetivo do projeto

- Aplicar conceitos avançados de arquitetura de APIs HTTP em Node.js com TypeScript
- Implementar fluxo completo de autenticação com segurança (hash de senhas, rate limiting e controle de sessões)
- Gerenciar rotas públicas, privadas e administrativas (RBAC - Role-Based Access Control)
- Trabalhar com persistência de dados em SQLite e manipulação de arquivos/streams
- Integrar a geração dinâmica de documentos PDF (certificados de conclusão)
- Aplicar boas práticas de DevOps (Docker, Docker Compose, Caddy, Docker Secrets e rotacionamento de logs)
