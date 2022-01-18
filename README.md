# Mod 3: Final Solo Project: The Flour Studio  
View the deployed app [HERE](https://raz-joan.github.io/the-flour-studio-ui)  

Authored by: [Joan Rasmussen](https://github.com/raz-joan)  

## Table Of Contents
- [Overview](#overview)
- [Project Goals](#project-goals)
- [Project Spec / Rubric Link](#project-spec)
- [Setup Instructions](#setup-instructions)
- [Technologies](#technologies)
- [Code Architecture](#code-architecture)
- [Illustrations](#illustrations)
- [Reflections](#reflections)
- [Challenges](#challenges)
- [Wins](#wins)


## Overview  
  The goal of this solo project was to design an application that demonstrates mastery of React, Router, Async JavaScript, and end-to-end testing with Cypress. The problem that I attempted to solve was to build an app for a small flour mill to help its customers learn about unique grains for baking and to post reviews for other users to see. The audience was baking enthusiasts who are grain curious and have money to spend on niche grains. For the data, I chose to hand roll my own [backend](https://github.com/raz-joan/the-flour-studio-api) using Express.js on Node.js, which was deployed to Heroku. 

## Project Goals  
  The learning goals of this project were to:  
  - Design and build a consistent, modular file structure.
  - Demonstrate a clear understanding of React components, props, propTypes, and hooks.
  - Implement robust error handling with both API calls and UI/UX.
  - Use of Router shows developer empathy (readability, maintainability).
  - Testing covers all components, user flows, and happy & sad paths.
  - Design is accessible and responsive for desktop and mobile.

## Project Spec  
  You can find the project rubric [here](https://frontend.turing.edu/projects/module-3/showcase.html).  

## Setup Instructions  

Option A (run both the frontend and backend locally):  

1. Fork and then clone down this repo to your local machine.
2. Clone down the server [repo](https://github.com/raz-joan/the-flour-studio-api), as well.
3. Separately, open the root folders for each repo in your terminal and run the command `npm install` to install the dependencies on both.
4. Checkout the branch, `git checkout feature/README`, in the-flour-studio-ui, so that the endpoints will work.
5. In your terminal, run `npm start` for both repos to initialize the server and browser window.
6. In your browser, enter `http://localhost:XXXX/`, where XXXX is the port number to see the project.  

Option B (run the app with the Heroku hosted backend):  

1. Fork and then clone down this repo to your local machine.
2. Open the root folder of the repo in your terminal and run the command `npm install` to install the dependencies.
3. From the `main` branch, run `npm start` to see the project in the browser.  


## Technologies  
  Technologies used were: JavaScript, JSX, SCSS, React, React Hooks, React Router, fetchAPI, Cypress, Wave, and Lighthouse.  

## Code Architecture  
  This application was built using `create-react-app`, such that all business and view code is located in the src folder. It is organized by Assets, Components, SassStyles, apiCalls.js, and index.js. Cypress test files are contained in cypress/integration/*.js. ES6 syntax was used throughout. The icon was sourced on [flaticon.com](https://www.flaticon.com/). Attribution is noted in the footer of the site.

## Illustrations  

#### Desktop Views:  
<img width="500" alt="Landing page of The Flour Studio" src="https://user-images.githubusercontent.com/80644408/149865779-5fd207d1-7b48-4424-82bb-34050be63d10.png">
<img width="500" alt="Scroll down of the landing page of The Flour Studio" src="https://user-images.githubusercontent.com/80644408/149865788-d1654f90-75a6-4d27-99fc-4e47bb361986.png">
<img width="500" alt="Grid view of grains of The Flour Studio" src="https://user-images.githubusercontent.com/80644408/149865791-d49a7957-3281-4cbe-9cfe-813f1cd73929.png">
<img width="500" alt="Scroll down of the grid view of grains of The Flour Studio" src="https://user-images.githubusercontent.com/80644408/149865796-ea2a4f89-285d-4293-8910-5ffc3d1d7419.png">
<img width="500" alt="Grain detail view of The Flour Studio" src="https://user-images.githubusercontent.com/80644408/149865799-00a0b64d-cd44-429f-b5bf-49b24e7bfd7a.png">
<img width="500" alt="Review form of The Flour Studio" src="https://user-images.githubusercontent.com/80644408/149865803-2585a9a5-016d-40bc-a8ab-b3c2b712cf89.png">
<img width="500" alt="User reviews of The Flour Studio" src="https://user-images.githubusercontent.com/80644408/149865806-55c1ba70-49a0-4013-9ec3-5d25f12832d7.png">

#### Responsive Views:  
<img width="300" alt="Landing page Mobile view" src="https://user-images.githubusercontent.com/80644408/149865832-9d4097c8-7008-4d6c-8045-f7dd1885ee46.png">
<img width="300" alt="Scroll down landing page Mobile view" src="https://user-images.githubusercontent.com/80644408/149865838-eced65ac-5a91-4a59-a361-7edc6392cbad.png">
<img width="300" alt="Grain grid view Mobile view" src="https://user-images.githubusercontent.com/80644408/149865839-b8da41f4-4249-4387-8ad0-3b40ffb4fd68.png">
<img width="300" alt="Grain detail view Mobile view" src="https://user-images.githubusercontent.com/80644408/149865840-37a62fca-9aa7-415f-a271-d46aae52a473.png">
<img width="300" alt="Review form and reviews Mobile view" src="https://user-images.githubusercontent.com/80644408/149865841-d864d237-4381-40a4-ad46-1ee14f1153aa.png">

## Reflections  
  This project was challenging, but so fun. My planning phase was robust. The Figma board can be viewed [here](https://www.figma.com/file/RlObwpUjTsNCTsvtHbkvas/The-Flour-Studio?node-id=0%3A1) and links to user stories and other details can be found on this [google doc](https://docs.google.com/document/d/1o1xl7D6NajyHJrEg198mKYv1TFSm5UQVxF6VQ_2QqR4/edit). My project board with tickets can be viewed [here](https://github.com/raz-joan/the-flour-studio-api/projects/1). Overall, I'm proud to have built a full stack application as a frontend engineer!

## Challenges  
  As is always the case, the most difficult part of this project was correctly implementing asynchronous functions and Router so that data flowed as it should. I also learned a lot with styling on this project, including layering pictures and using logic to have different css rules called. Correctly linking the pictures from the backend data file to the dom on the frontend was a huge challenge. Last, error handling in all capacities was a bit of a challenge.

## Wins  
  I am most proud of the following:  
  - Hand rolling the backend.
  - Writing a consistent, modular code base.
  - Using scss instead of css and making a responsive design for desktop, tablet, and mobile.
  - Creating an accessible app. It is entirely tabbable and scored 100% on a lighthouse audit - see the unmerged branch: `feature/accessibilitiy-check`.
  - All error handling on both the backend and frontend.