# Project Overview 

This project is a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites.
Part of the Udacity Frontend Nanodegree


The goal of this project is to practice with:
- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls

## Run the project 

The npm packages need to be installed by running
- `npm install`

Once the installation is complete, you need to install other dependencies, loaders and plugins: 
- `npm i webpack webpack-cli`
- `npm i --save-dev html-webpack-plugin` -- make sure it's compatible with the latest version of webpack
- `npm i -D @babel/core @babel/preset-env babel-loader`
- `npm i -D clean-webpack-plugin`
- `npm i -D style-loader node-sass css-loader sass-loader`
- `npm i -D mini-css-extract-plugin `
- `npm install dotenv`

To run the app on the development server you need to first, build the app by running-
`npm run build-dev`
Then in a different terminal start the express server-
`npm start`
The app will run on `localhost:8080`

![alt text](https://github.com/Sidarenka/udacity-news-artcile-project/blob/main/images/DevServer.png)

## Natural langauge processing 

[MeaningCloud Sentiment Analysis](https://www.meaningcloud.com/developer/sentiment-analysis) API is used for this project.
The app makes a call to the API on form submission. 
The API keys stored on the server side are used to handle the response.
The results show up in the view, as well as they are logged to the console.

## Unit Testing using Jest Framework

The project has Jest installed. Every src/client/js file has one test to validate implemeted functionality. 
To run Jest execute `npm run test`.