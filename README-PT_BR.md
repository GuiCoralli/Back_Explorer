<h1 align="center">Food Explorer</h1>



<p align="center">
<img alt="Status do projeto" src="https://img.shields.io/badge/Status-Under construction-orange">
<img alt="Último commit do GitHub (por committer)" src="https://img.shields.io/github/last-commit/GuiCoralli/backend-FoodExplorer">
<img alt="Tamanho do repositório GitHub" src="https://img.shields.io/github/repo-size/GuiCoralli/backend-FoodExplorer">
<img alt="estrelas do GitHub Repo" src="https://img.shields.io/github/stars/GuiCoralli/backend-FoodExplorer?style=social">
</p>


<p align="justify">
Conheça o FoodExplorer, um aplicativo web que reúne o melhor da culinária e da programação.
Este projeto de conclusão de curso, da plataforma educacional <a href="https://app.rocketseat.com.br">Rocketseat</a>, simula um cardápio digital para um restaurante.
FoodExplorer é uma grande experiência que converge criativamente entre duas áreas distintas como a gastronomia e a tecnologia.
</p>

## Navegação

<p align="center">
  <a href="#-Sobre o Projeto">Sobre o Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Link Deploy Backend">Link Deploy Backend</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-API">API</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Functionalities">Funcionalidades</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Características">Características</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Technologies">Tecnologias</a><br>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Prerequisites">Pré-requisitos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Executando o back-end (servidor)">Executando o back-end (servidor)</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Important">Importante</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>


 ## Tradução
 
<p align="center">
   ·
  <a href="https://github.com/GuiCoralli/backend-FoodExplorer/blob/main/README-PT_BR.md"> Português
  ·
  <a href="https://github.com/GuiCoralli/backend-FoodExplorer/blob/main/README.md"> Inglês
  </a>
  </p>
________________________________________________________________________________________________________________________________________________________


# 📄 Sobre o Projeto
<div>
	Descubra o FoodExplorer, uma aplicação web que reune o melhor da culinária e programação. <br> Este projeto final de curso, da plataforma educacional da <a href="https://app.rocketseat.com.br">Rocketseat</a>, simula um cardápio digital para um restaurante.<br> 
	O FoodExplorer é uma ótima experiência que converge de maneira criativa entre duas áreas distintas como a gastronomia e tecnologia.
</div>

# 📌 Link Deploy Backend  
<div>
👉🏼 https://backend-foodexplorer-api-6tji.onrender.com
</div>

# 🖥️ API
<div>
	🎲 É importante que você tenha o aplicativo insomnia converter e executar testes em sua aplicação.<br>
	🎲 Essa API funciona em conjunto com a aplicação Front End e você pode encontrá-la aqui:

- [x]  https://github.com/GuiCoralli/frontend-FoodExplorer	
</div>

# ✅ Funcionalidades
- [x] Cadastro de administrador e usuários
- [x] Cadastro, edição e exclusão de produtos (administrador)
- [x] Consulta de produtos
- [x] Realização de pedidos (usuário)
- [x] Simulação de pagamento (usuário)
- [x] Consulta de pedidos
- [x] Alteração do status dos pedidos (administrador)
<br /><br />

# ⚙️ Características
- [x] Responsividade
- [x] Modo claro/escuro
- [x] Modo administrativo/usuário
<br /><br />

# 🚀 Tecnologias
##   Projeto desenvolvido com as seguintes tecnologias
<div>
	<img align="center" alt="Gui-HTML" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg">
 	<img align="center" alt="Gui-CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg">
 	<img align="center" alt="Gui-JAVASCRIPT" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg">
 	<img align="center" alt="Gui-NODE" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg">
 	<img align="center" alt="Gui-REACT" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg">
</div>


# 💻  Pré-requisitos
Instalar em sua máquina as seguintes ferramentas:
- [x] [Git](https://git-scm.com)
- [x] [Node.js](https://nodejs.org/en/)
- [X] [Beekeper](https://www.beekeeperstudio.io/get)

É importante ter um editor para trabalhar com o código, como por exemplo:
- [x] [VSCode](https://code.visualstudio.com/)

<br />


### 🔄✅ 🎲 Rodando o Back End (servidor)

Clone o repositório:
```
git clone https://github.com/GuiCoralli/backend-FoodExplorer.git
```

Acesse a pasta do projeto no terminal/cmd:
```
cd backend-food-explorer
```

Instale as dependências:
```
npm install
```

Execute a aplicação em modo de desenvolvimento:
```
npm run dev
```

O servidor inciará na porta:3333 - acesse <http://localhost:3333>

<br />

# 🔨 Para montar no Insomnia

## Criando um novo usuário

POST /users

```
{
	"name": "Example",
	"email": "example@gmail.com",
	"password": "123456"
}
```

## Criando sessões 

POST /sessions

```
{
	"email": "example@gmail.com",
	"password": "123456"
}
```

## Criando um prato

POST /dishes

**Obs:** É necessário enviar esse payload (dados) usando o multipart no Insomnia.

**Obs:** Esta rota está disponível apenas para o usuário administrador.

```
name: plate name
description: example of a description of a plate
price: 19.99
ingredients: powder, water
category_id: 2
image: imageFile.png
```

## Atualizando um prato

POST /dishes/:id

**Obs:** É necessário enviar esse payload (dados) usando o multipart no Insomnia.

**Obs:** Esta rota está disponível apenas para o usuário administrador.

```
name: plate name
description: example of a description of a plate
price: 19.99
ingredients: powder, water
category_id: 2
image: imageFile.png
```

## Excluindo um prato

DELETE /dishes/:id

**Obs:** Esta rota está disponível apenas para o usuário administrador.

## Mostrando todos os pratos

GET /dishes

## Mostrando um prato específico

GET /dishes/:id



## ⚠️ Importante
<div>
🎲 Para executar o Front End deste projeto você pode encontrar mais informações através deste link:

- [x]  https://github.com/GuiCoralli/frontend-FoodExplorer
</div>




### Autor
---

<a href="https://github.com/GuiCoralli?tab=repositories">
 <img style="border-radius: 50%;" src="https://github.com/GuiCoralli.png" width="100px;" alt="Imagem de GuiCoralli"/>
 <br /> <sub><b>Guilherme Coralli</b></sub></a>


💡 Criado por Guilherme Coralli. 

👋🏽 Entre em contato!
[![Linkedin Badge](https://img.shields.io/badge/LinkedIn-0077B5?logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/guicoralli/)](https://www.linkedin.com/in/guicoralli/) 
