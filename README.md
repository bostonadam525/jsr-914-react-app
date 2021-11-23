# About this Project

This is my first project using JavaScript, React, HTML, CSS, API calls, and CRUD principles. I completed this project as part of the General Assembly JSR-914 JavaScript Development Course. 
The goal of my project was to build a React application that uses React routers to navigate between pages as well as build a page in the application that incorporates my background in Data Science/Maching Learning/Natural Language Processing. This is how I came up with the idea for the "NEWS SENTIMENT APP". 

The concept behind the application is that users can perform "Sentiment Analysis" to pre-screen news headlines and text from news articles (obtained through NewsAPI.org) to determine if the sentiment is positive, neutral, or negative and then determine based on that if they want to read it or not. This is becoming more popular on many Social Media platforms (i.e. Twitter) and a tool for companies to study their customers. I was inspired to create this based on the fact that it seems all news today "seems negative" but like most things I wanted scientific proof that it is/or isn't. I thus also wanted to incorporate my Data Science/Machine learning background with my new JavaScript skills. So I decied to research a JavaScript library called "Sentiment" which is a Node.js module that uses the AFINN-165 wordlist and Emoji Sentiment Ranking to perform sentiment analysis on arbitrary blocks of input text. The AFINN-165 wordlist contains 3382 entries. AFINN is a list of words rated for valence with an integer between minus five (negative) and plus five (positive). Sentiment analysis is performed by cross-checking the string tokens (words, emojis) with the AFINN list and getting their respective scores. The comparative score is simply: sum of each token / number of tokens. 

Let's walk through the app. The first page is a simple home page with some CSS background styling using a news photo template and HTML text styling. The top of the page makes use of a navbar in React so the user can easily navigate between pages and have access to the navbar links on every page. The "About" page describes the purpose of the application which is to allow users to "pre-screen" news headlines and text. The "NewsApp" page is the "core" of the application. We are calling the NewsApi.org API and you can enter a search term in the search form. While I make sure that the search form input "clears" I purposely left the search history (drop down) so users can see previous search terms they entered. It is here where the user enters a search term such as "politics" and the most recent articles of that subject populate on the page. You can then copy the headline and/or article text and make your way over to the "SentimentApp" page via the navbar. Here you can drop your text into the sentiment analysis box and immediately you are given the "Sentiment score" which ranges from +5 to -5, and the "General Sentiment" which is positive, neutral, or negative.

### I was excited to accomplish the following things:

1. Building an application using JavaScript (Node.js) and React.
2. Solve a problem that myself and others could benefit from: pre-screening news headlines and confirming if an article is indeed positive, neutral or negative.
3. Go through the development process from technical components to user experience. 
4. Figure out how to use my Python/Data Science/Machine Learning background and program machine learning/NLP algorithms in JavaScript using a Node.js library ("Sentiment"). It also made me realize that while Python may have more libraries for Machine learning/Natural Language Processing (SpaCy, Gensim, SparkNLP, Tensorflow, NLTK, etc.) there is quite a bit you can do in JavaScript with its own unique libraries including a cross-over library "Tensorflow.js" which allows you to run machine learning algorithms in the browser.

### It was challenging to:
1. I found it challenging to create the application from a stylistic point of view. HTML/CSS are not my strong points (I just learned them on the fly in 2 months) and have no real-world experience using them. I found myself googling CSS and BootStrap code/classes to figure out how to style the webpage and I know there is a lot more that could be done to make it more "visually appealing". I have a lot of respect for web designers but also UI/UX designers of any application!
2. I also found it difficult to keep the idea/concepts simple and not add too much to each page that would cause "cognitive overload" for the user. I could have kept adding pages, text and search forms. For example I wanted to add a page where a reader can make a "Reading List" with the article names they liked using Firebase on the backend to store the data. Instead I decided to stick with the basic concept of using the NewsApi to bring articles to the page and then utilize the Sentiment Analysis in the browser. 

### For my next app?
I hope to do more with Firebase, API calls, and incorporating JavaScript machine learning/NLP libraries (i.e. Tensorflow.js) into building user friendly applications. I also want to experiment with UI/UX design principles for applications as I am learning this on the job.

I also hope to find ways to build tools that I can use for my job which uses a lot of NLP and software engineering techniques. One thing I want to try is building an OCR application using Tesseract.js a library that uses computer vision techniques to automatically recognize text within images and extract said text for you to use. 

Lastly, I hope to learn more about building Node.js command line interface (CLI) applications for software engineering as we are always building new tools at my job for interaction with API's and GUIs and having CLI commands to access data makes life so much easier for all users.





# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
