# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Pages link: 

https://hrshvrdhnsingh.github.io/basic-react-itinerary/

# To run a react project on Pages

run <npm install gh-pages --save-dev>

push all the necessary files

add <"homepage": "https://hrshvrdhnsingh.github.io/repo-name",> in the package.json before "name"

add <"predeploy": "npm run build",
    "deploy": "gh-pages -d build",>
    in the scripts part of package.json
    
Now form the pages part of Github, deploy your site from the "gh-pages" branch
