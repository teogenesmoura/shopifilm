# The Shoppies

[![codecov](https://codecov.io/gh/teogenesmoura/shoppies/branch/master/graph/badge.svg?token=5IA3FKBE66)](https://codecov.io/gh/teogenesmoura/shoppies)
[![Actions Status](https://github.com/teogenesmoura/shoppies/workflows/Deployment/badge.svg)](https://github.com/teogenesmoura/shoppies/actions)
[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)

## About the project

<center><img src="https://media.giphy.com/media/Xty1R7yYFist1mssCD/giphy.gif"></center>

The Shoppies is Shopify's challenge for the Summer 2021 Front-End Developer internship. The document of requirements can be found [here](https://docs.google.com/document/d/1AZO0BZwn1Aogj4f3PDNe1mhq8pKsXZxtrG--EIbP_-w/edit?usp=sharing). I've implemented all technical requirements, as well as two extras: One suggested by Shopify (Saving a nominationList if a user leaves the page) and other I came up with (The "Feeling Lucky " button).

## Pre-requisites

In order to run the project locally the following software packages are necessary:
* [NPM](https://www.npmjs.com/) version 6.14.8 or higher
* [React](https://reactjs.org/) version 17.0.1

## How to run the project

1. Clone this repo
```bash
git clone https://github.com/teogenesmoura/shoppies/
```
2. Enter the project's root directory
```bash
cd shoppies
```

3. Install dependencies
```bash
npm install
```

4. You'll need to create an OMDB [key](http://www.omdbapi.com/apikey.aspx) and add it
to your .env file. Go to the /src directory of the project and execute this command

```bash
touch .env
```

Inside your .env document, create the following line:

```
REACT_APP_OMDB_API_KEY={Your key}
```
(Remember to insert it without the curly braces)

5. Lastly, run

```bash
npm start
```

## How to run tests

- run the following to run the tests
```bash
npm test
```

- run the following to generate code coverage documentation:

```bash
npm run test -- --coverage --watchAll=false
```

## How to build the project
1. Inside the /src directory, run

```bash
npm run-script build
```

## How to modify the CI workflow
1. This project automatically generates a build every time a PR is accepted to the master branch. In order to do so, it relies on a Github actions workflow, which can be found inside the ```.github/workflows``` folder. If you're going to modify it, take care to set up the appropriate secrets in your repo's enviroment, otherwise the project will not work.
