# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Pages link: 

https://hrshvrdhnsingh.github.io/basic-react-itinerary/

# To run a react project on Pages

Run <npm install gh-pages --save-dev> in the terminal.

Add <"homepage": "https: //{user-name}.github. io/{repo-name}",> in the package.json before "name".

Add <"predeploy": "npm run build", "deploy": "gh-pages -d build",>in the scripts part of package.json.

Run <git remote add origin https://github.com/{username}/{repo-name}.git> in the terminal.

Run <npm run deploy> in the terminal.
    
Now from the pages part of Github, deploy your site from the "gh-pages" branch.
