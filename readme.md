# 📌 To-Do List Inteligente

Este repositório contém o desenvolvimento de uma **To-Do List Inteligente**, uma aplicação de produtividade projetada para ajudar os usuários a organizarem suas tarefas de forma eficiente, utilizando princípios de neurociência para maximizar o desempenho e estimular o autoconhecimento.

## 🚀 Funcionalidades Principais

- **Gerenciamento de Tarefas:** Criar, editar, excluir e marcar tarefas como concluídas.
- **Grupos de Tarefas:** Organizar tarefas em diferentes categorias (ex: Trabalho, Estudos, Saúde).
- **Gráfico Evolutivo:** Visualizar o progresso e desempenho ao longo do tempo.
- **Calendário de Dias Consecutivos:** Rastrear "streaks" (dias consecutivos com tarefas concluídas).
- **Diário Pessoal:** Espaço para reflexão com perguntas diárias.
- **Autenticação:** Login e controle de usuários (a ser implementado).

## 🛠 Tecnologias Utilizadas

### **Frontend**
- React.js (Web)
- React Native (Mobile)
- TailwindCSS ou Styled Components (Estilização)
- Axios (Consumo de API)

### **Backend**
- NestJS (Framework para Node.js)
- PostgreSQL (Banco de Dados Relacional)
- TypeORM (ORM para gerenciar entidades)
- Firebase Auth ou OAuth (Autenticação - Planejado)

### **Outros Recursos**
- JSON Server (Simulação de API para desenvolvimento inicial)
- Chart.js / D3.js (Gráficos evolutivos)

## 📌 Estrutura do Projeto

```
📂 projeto-todo-list
├── 📂 frontend (React + React Native)
│   ├── 📂 src
│   │   ├── 📂 components  # Componentes reutilizáveis
│   │   ├── 📂 pages       # Páginas do app
│   │   ├── 📂 services    # Requisições HTTP
│   │   ├── 📂 hooks       # Hooks customizados
│   │   ├── 📂 styles      # Estilização global
│   │   ├── App.tsx
│   │   ├── index.tsx
│   ├── package.json
│   ├── tailwind.config.js 
│   ├── README.md
│
├── 📂 backend (NestJS)
│   ├── 📂 src
│   │   ├── 📂 modules      # Módulos do sistema
│   │   ├── 📂 entities     # Entidades do banco
│   │   ├── 📂 controllers  # Controladores (Rotas)
│   │   ├── 📂 services     # Regras de negócio
│   │   ├── main.ts        # Arquivo principal
│   ├── package.json
│   ├── ormconfig.json (Configuração do TypeORM)
│   ├── README.md
│
├── 📂 database (Configuração do PostgreSQL)
│

```

## 🏗 Como Configurar o Projeto

### **Pré-requisitos**
Antes de iniciar, certifique-se de ter instalado:
- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/) (Opcional, para banco de dados)
- [PostgreSQL](https://www.postgresql.org/)
- [Git](https://git-scm.com/)

### **1️⃣ Clonar o Repositório**
```sh
git clone https://github.com/seu-usuario/projeto-todo-list.git
cd projeto-todo-list
```

### **2️⃣ Configurar o Backend**
```sh
cd backend
npm install
npm run start:dev
```
Crie um arquivo `.env` e configure as variáveis:
```
DATABASE_URL=postgresql://user:password@localhost:5432/todo_db
JWT_SECRET=minha_chave_secreta
```

### **3️⃣ Configurar o Frontend**
```sh
cd ../frontend
npm install
npm start
```

### **4️⃣ Rodar o JSON Server (Para Desenvolvimento Inicial)**
```sh
cd backend
json-server --watch db.json --port 3001
```

## 🎨 Contribuindo
Quer ajudar a melhorar o projeto? Fique à vontade para contribuir!

### **Como Contribuir**
1. Faça um **fork** do repositório
2. Crie uma **branch** para sua feature (`git checkout -b minha-feature`)
3. Commit suas alterações (`git commit -m 'Adicionando nova funcionalidade'`)
4. Envie para o repositório remoto (`git push origin minha-feature`)
5. Abra um **Pull Request**


## 📌 Roadmap do Projeto
- [x] Criar estrutura inicial do projeto
- [x] Criar API simulada com JSON Server
- [ ] Implementar sistema de autenticação
- [ ] Criar dashboard com gráficos evolutivos
- [ ] Desenvolver notificações push
- [ ] Criar app mobile com React Native

## 📢 Contato
Caso tenha dúvidas ou sugestões, entre em contato:
📩 Email: lucaconceicao@hotmail.com
🐙 GitHub: [Dev-LucasC](https://github.com/Dev-LucasC)

---

Se gostou do projeto, deixe uma ⭐ e contribua! 🚀

