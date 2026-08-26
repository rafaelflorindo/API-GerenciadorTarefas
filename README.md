Markdown
# 🚀 API de Gerenciamento de Tarefas

API desenvolvida com **Node.js** e **Express** para fins educacionais, simulando um CRUD completo (Create, Read, Update, Delete) de tarefas com suporte a dados de responsáveis, armazenamento em memória (mock) e acesso remoto liberado para aplicações Web e Mobile.

---

## 🛠️ Tecnologias Utilizadas

* **[Node.js](https://nodejs.org/)** - Ambiente de execução JavaScript
* **[Express](https://expressjs.com/)** - Framework web para Node.js
* **[CORS](https://www.npmjs.com/package/cors)** - Habilitação de acesso para clientes externos e aplicativos móveis

---

## ⚙️ Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:
* [Node.js](https://nodejs.org/) (versão 18 ou superior recomendada)
* Um gerenciador de pacotes (`npm`)
* Uma ferramenta para teste de API (como **Insomnia**, **Postman** ou extensão de REST Client)

---

## 📥 Instalação e Execução

1. Clone o repositório ou baixe os arquivos do projeto:
   ```bash
   git clone <url-do-repositorio>
   cd <nome-da-pasta>
Instale as dependências do projeto:

Bash
npm install
Inicie o servidor:

Bash
node server.js
O servidor estará rodando em: http://localhost:3000

📌 Rotas da API
1. Rota Inicial
GET /

Descrição: Retorna uma mensagem de boas-vindas.

2. Listar Todas as Tarefas
GET /tarefas

Descrição: Retorna a lista completa de tarefas cadastradas no mock.

3. Buscar Tarefa por ID
GET /tarefas/:id

Descrição: Retorna uma tarefa específica com base no ID numérico informado na URL.

4. Criar Nova Tarefa
POST /tarefas

Descrição: Cadastra uma nova tarefa.

Body (JSON de Exemplo):

JSON
{
    "titulo": "Desenvolver tela de login",
    "descricao": "Criar interface utilizando React Native",
    "responsavel": {
        "id": 3,
        "nome": "Carlos Silva"
    }
}
5. Atualizar Tarefa
PUT /tarefas/:id

Descrição: Atualiza os dados de uma tarefa existente (permite atualização parcial).

Body (JSON de Exemplo):

JSON
{
    "status": "CONCLUÍDO",
    "descricao": "Tela de login finalizada e testada."
}
6. Remover Tarefa
DELETE /tarefas/:id

Descrição: Remove a tarefa correspondente ao ID informado.

📱 Integração Mobile
A aplicação possui o CORS habilitado (app.use(cors())), permitindo que aplicativos móveis (desenvolvidos em React Native, Flutter, etc.) consumam os endpoints diretamente sem bloqueios de origem.

👨‍🏫 Autor
Desenvolvido para fins didáticos e aulas práticas de desenvolvimento web e mobile.


Prontinho! É só salvar como `README.md` e subir para o GitHub junto com os outros arquivo