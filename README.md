# 🖥 Scrappy

A fullstack application which scrap company informations from a website and displays it. Configured it with VueJs, TailwindCss, NodeJs, Express, Jest, Git, EsLint, Axios

# 📜 Summary

- [Goal](#goal)
- [Methodology](#methodology)
- [Build with](#-build-with)
- [My code environnement and utils](#-my-code-environnement-and-utils)
- [Why this choice](#why-this-choice)
- [Technical watch](#technical-watch)
- [Biggest challenges for this project](#biggest-challenges-for-this-project)
- [Feedback](#feedback)

- [How to run this app](#-how-to-run-this-app)
- [Node Package Manager](#-node-package-manager)
- [Install packages](#-install-packages)
- [Run on Front End](#-run-on-front-end)
- [Run on Back End](#-run-on-back-end)
- [Run Tests](#-run-tests)
- [To improve](#-to-improve)

## Goal

_Display a dynamic web page with scrapped informations about a given company_

## Methodology

I chose to use a Github to manage my code with a Kanban [here](https://github.com/IssaDia/scapping-Application/projects/1) to list and manage the different issues in order to complete the this project.


## 🏗 Built with

- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Vue](https://cli.vuejs.org/guide/creating-a-project.html)
- [Vuex]([https://nodejs.org/en/](https://vuex.vuejs.org/guide/#the-simplest-store)
- [Typescript](https://fr.vuejs.org/v2/guide/typescript.html)
- [Tailwind CSS](https://tailwindcss.com/docs/guides/vite)
- [Cheerio](https://cheerio.js.org/) 
- [Jest]([https://expressjs.com/](https://github.com/vuejs/vue-jest)
- [Supertest](https://www.npmjs.com/package/supertest)

## My code environnement and utils

- VsCode
- MacOs
- NPM
- EsLint
- Prettier
- Postman

## Why this choice?

I chose a stack on par with the one the company is using in order to be close to the tasks i could be asked on the job and also to improve my skills.

## Technical watch

Articles :

How To Develop and Build Vue.js App With NodeJS : https://medium.com/bb-tutorials-and-thoughts/how-to-develop-and-build-vue-js-app-with-nodejs-bd86feec1a20

Videos :

A Guide to Web Scraping with Node.js : https://www.youtube.com/watch?v=dXjKh66BR2U&list=WL&index=7

## Biggest challenges for this project

- couldn't get the right selector on societe.com at first
- bootstrap couldn't be setup on Vue 3
- couldn't connect to linkedin.com with puppeteer because of verification

## Feedback

It was a really good challenge. Allowed me to improve my backend skills with Node :

- create a server
- make API calls
- scrap data from a website playing with HTML selectors

and practice Vue again :

- create a Vue project
- use a CSS library
- use Vuex to do state management
- consuming data from api

## 👨🏽‍💻 How to run this app

### 📦 Node Package Manager

In order to install packages and run this application, you will need [Node Package Manager](https://docs.npmjs.com/) v6.14.15 or higher

To check if your Node version is correct:

```
node --version
```

Personally i used node v14.17.2

### 📥 Install packages

To install all the node_modules packages:

```
npm install or npm i
```
on both /frontend and /backend folders

### ♻️ Run on Front End

To run on Development mode:

go to /frontend folder then :

```
npm run serve
```

then go to : http://localhost:8080/

### ♻️ Run on Back End

To run on Development mode:

go to /backend folder then :

```
nodemon app.js
```

### 🧪 Run Tests

To run tests:

```
npm run test
```


## 📑 To improve

- give the opportunity to retrieve more company informations
- deploy the app
- improve frontend interface
- e2e Tests
- more unit tests
