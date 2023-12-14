<h1 align="center">Food Explorer</h1> 



<p align="center">
	  <img alt="Project status" src="https://img.shields.io/badge/Status-Em construção-orange">
	  <img alt="GitHub last commit (by committer)" src="https://img.shields.io/github/last-commit/GuiCoralli/backend-FoodExplorer">
	  <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/GuiCoralli/backend-FoodExplorer">
	  <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/GuiCoralli/backend-FoodExplorer?style=social">
</p>



<p align="center">
This is final course project, from the Rocketseat educational platform, simulates a digital menu for a restaurant, made by GuiCoralli to fix the learning of WEB applications technologies.
</p>

<p align="center">
  <a href="#-About the Project">About the Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Link Deploy Backend">Link Deploy Backend</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-API">API</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Functionalities">Functionalities</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Characteristics">Characteristics</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Technologies">Technologies</a><br>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Prerequisites">Prerequisites</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Running the Back End (server)">Running the Back End (server)</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Important">Important</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>


 ## Translation 
 <p align="center">
   ·
  <a href="https://github.com/GuiCoralli/backend-FoodExplorer/blob/main/README-PT_BR.md"> Português
  ·
  <a href="https://github.com/GuiCoralli/backend-FoodExplorer/blob/main/README.md"> English
  </a>

##

  ![image](https://github.com/GuiCoralli/backend-FoodExplorer/assets/134714337/1d94db15-8435-4a89-995b-b1e0e482e19b)



_____________________________________________________________________________________


# 📄 About the Project
<div>
	Discover FoodExplorer, a web application that brings together the best of cooking and programming. <br>
	This final course project, from the  <a href="https://app.rocketseat.com.br">Rocketseat</a> educational platform, simulates a digital menu for a restaurant. <br>
	FoodExplorer is a great experience that creatively converges between two distinct areas such as gastronomy and technology.
</div>

# 📌 Link Deploy Backend  
<div>
👉🏼 https://backend-foodexplorer-api-6tji.onrender.com
</div>

# 🖥️ API
<div>
	🎲 It is important that you have app insomnia to convert and run tests in your application.<br>
	🎲 This API works together with the Front End application and you can find it here: <br> 
	
- [x]  https://github.com/GuiCoralli/frontend-FoodExplorer	
</div>



<div>

 ## Tools used for application development:
- [x] [Git](https://git-scm.com)
- [x] [Node.js](https://nodejs.org/en/)
- [X] [Insomnia](https://insomnia.rest/download)

</div>

# ✅ Functionalities
- [x] Administrator and user registration
- [x] Registration, editing and deletion of products (administrator)
- [x] Product consultation
- [x] Placing orders (user)
- [x] Payment simulation (user)
- [x] Order consultation
- [x] Changing the status of orders (administrator)
<br /><br />

# ⚙️ Characteristics
- [x] Responsiveness
- [x] Light/dark mode
<br /><br />

# 🚀 Technologies 
## Project developed with the following technologies

  <div>
 <img align="center" alt="Gui-HTML" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg">
 <img align="center" alt="Gui-CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg">
 <img align="center" alt="Gui-JAVASCRIPT" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg">
 <img align="center" alt="Gui-NODEJS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg">
 <img align="center" alt="Gui-REACT" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg">
 </div>

# 💻 Prerequisites
Install the following tools on your machine
- [x] [Git](https://git-scm.com)
- [x] [Node.js](https://nodejs.org/en/)
- [X] [Insomnia](https://insomnia.rest/download)
- [X] [Beekeper](https://www.beekeeperstudio.io/get)

It is important to have an editor to work with the code, such as:
- [x] [VSCode](https://code.visualstudio.com/)

<br />

### 🔄✅ Running the Back End (server)

Clone the repository by writing the following command line in the Vscode terminal:
```
git clone https://github.com/GuiCoralli/backend-FoodExplorer.git
```

Access the project folder in terminal/cmd:
```
cd backend-food-explorer
```

Install dependencies:
```
npm install
```

Run the application in development mode:
```
npm run dev
```

Server will start on port:3333 - access <http://localhost:3333>

<br />

# 🔨 To build in Insomnia

## Creating a Admin
POST /admin

```
{
	"name": "Example",
	"email": "admin@gmail.com",
	"password": "123456"
}
```

## Creating a new user

POST /users

```
{
	"name": "Example",
	"email": "example@gmail.com",
	"password": "123456"
}
```

## Creating a session

POST /sessions

```
{
	"email": "example@gmail.com",
	"password": "123456"
}
```

## Creating a dish

POST /dishes

**Obs:** It's necessary to send this payload using multipart on Insomnia.

**Obs:** This routes is only available for the admin user.

```
name: plate name
description: example of a description of a plate
price: 19.99
ingredients: powder, water
category_id: 2
image: imageFile.png
```

## Updating a dish

POST /dishes/:id

**Obs:** It's necessary to send this payload using multipart on Insomnia.

**Obs:** This routes is only available for the admin user.

```
name: plate name
description: example of a description of a plate
price: 19.99
ingredients: powder, water
category_id: 2
image: imageFile.png
```

## Deleting a dish

DELETE /dishes/:id

**Obs:** This routes is only available for the admin user.

## Showing all dishes

GET /dishes

## Showing an specific dish

GET /dishes/:id



## ⚠️ Important 
<div>
🎲 To run the Front End of this project you can find more information through this link:

- [x]  https://github.com/GuiCoralli/frontend-FoodExplorer
</div>

### Author
---

<a href="https://github.com/GuiCoralli?tab=repositories">
 <img style="border-radius: 50%;" src="https://github.com/GuiCoralli.png" width="100px;" alt="Imagem de GuiCoralli"/>
 <br /> <sub><b> Guilherme Coralli</b></sub></a>


💡 Created by Guilherme Coralli. 

👋🏽 Get in touch!
[![Linkedin Badge](https://img.shields.io/badge/LinkedIn-0077B5?logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/guicoralli/)](https://www.linkedin.com/in/guicoralli/) 
