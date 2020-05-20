This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Getting Started

First ensure that you have Node >= 10 and Git >= 2.13.0 installed

clone the repo navigate to the root directory and run 

```
npm install
```

For further installation instructions, including how to install the rakan backend refer to https://github.com/project-rakan/one-deployment/wiki

## How to contribute 

Please observe Github Issues and projects for current project status 

Please observe our [style and testing guidelines](https://docs.google.com/document/d/1KAeQ8m6EqM413j-7AEQ6LngK9juMbtHC/edit).

If you are developing with VSCode I highly reccomend utilizing the [ESlint plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

If husky prevents you from commiting, do not override. Observe our [reporting guidelines](https://github.com/project-rakan/one-deployment/wiki) and then raise an [issue](https://github.com/project-rakan/xayah/issues). 

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

### `docker build . -t xayah` // DEPRECATED

Builds the app for production in a docker container.<br />
It leverages `npm run build` and then installs `serve` into the same container.
The container can be run with `docker run xayah -p "5000:5000"`.

## Directory layout

### `/config` and `/scripts`
These all contain configuration files necessary to run xayah in the browser. They should not require any modification.

### `/data`
This contains mock data for unit test verification

### `/src` and `/public`
These contain all of the projects that define the behavior and look of xayah

#### `/src/components`
This directory contains all react components rendered by the app. Sub components should be contained in subdirectories. Styles, css and html should be refactored such that they are included in the highest relevant level component directory.

#### `/src/providers`
This directory contains all providers use to connect xayah to the other endpoints or static local data. Each provider that connects to a live service needs to be accompanied by a mock provider for unit test verification purposes.

#### `/src/redux`
This contains the redux store for the project. Each slice of the redux store ought to have its own directory, and sub slices need to have sub directories, etc. Each slice needs to contain an `actionCreators.ts`, a `reducers.ts`, and a `types.ts`. 

#### `/src/utils`
This directory ought to contain ts files with react agnostic utility functions.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
