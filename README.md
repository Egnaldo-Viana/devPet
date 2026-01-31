# 🐶  DevPet

Aplicação frontend desenvolvida em **React**, simulando um e-commerce de PetShop com carrinho de compras, página de detalhes do produto, consumo de API fake e gerenciamento de estado global utilizando **Context API**.

---

## 📌 Funcionalidades

### 🏠 Página Home
- Consumo de API fake utilizando **json-server**
- Listagem de produtos em grid
- Exibição de:
  - Imagem
  - Nome do produto
  - Preço formatado em BRL
- Botão para adicionar produtos ao carrinho
- Navegação para página de detalhes do produto
- Integração com o carrinho via **Context API**

---

### 📄 Página de Detalhes do Produto
- Busca do produto individual pelo **ID**
- Exibição de:
  - Imagem
  - Nome
  - Descrição
  - Preço
- Botão **Adicionar ao carrinho**
  - Ao adicionar, o usuário é redirecionado para a página do carrinho

---

### 🛒 Página Carrinho
- Listagem de produtos adicionados ao carrinho
- Controle de quantidade:
  - ➕ Adicionar unidade
  - ➖ Remover unidade
- Cálculo automático de:
  - Subtotal por produto
  - Total geral do carrinho
- Exibição de estado vazio do carrinho
- Botão **Finalizar Compra**
  - Exibe um alerta informando que a compra foi finalizada com sucesso

---

## 🚀 Tecnologias Utilizadas

- **React JS**
- **TypeScript**
- **Context API**
- **React Router DOM**
- **CSS Modules**
- **json-server**

---

## 📦 API de Produtos (json-server)

O projeto consome uma API fake criada com **json-server**.

### 🔧 Instalação
```bash
npm install -g json-server
