This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Getting Started

First ensure that you have Node >= 10 and Git >= 2.13.0 installed

clone the repo navigate to the root directory and run 

```
npm install
```

## How to contribute 

Please observe Github Issues and projects for current project status 

Please observe our [style and testing guidelines](https://docs.google.com/document/d/1KAeQ8m6EqM413j-7AEQ6LngK9juMbtHC/edit).

If you are developing with VSCode I highly reccomend utilizing the [ESlint plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

If husky prevents you from commiting, do not override. Contact Colin. 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `docker build . -t xayah`

Builds the app for production in a docker container.<br />
It leverages `npm run build` and then installs `serve` into the same container.
The container can be run with `docker run xayah -p "5000:5000"`.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
