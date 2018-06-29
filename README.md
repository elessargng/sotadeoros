# Bankinter - frontend

Frontend for Bankinter valise management project.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## References
- https://scotch.io/tutorials/angularjs-best-practices-directory-structure
- https://www.pluralsight.com/guides/front-end-javascript/introduction-to-angular-test-driven-development
- https://scotch.io/tutorials/how-to-correctly-use-bootstrapjs-and-angularjs-together
- https://webpack.js.org/guides/getting-started/
- https://hackernoon.com/webpack-vs-gulp-e623616b1dc
- https://www.jsdebugger.com/2017/11/06/test-online-rest-api-using-karma-jasmine/
- http://jasonwatmore.com/post/2015/03/10/angularjs-user-registration-and-login-example-tutorial#logincontroller
- https://bootswatch.com/
- https://shirotech.com/tutorial/webpack-vs-gulp
- https://github.com/toddmotto/angularjs-styleguide
- https://stackoverflow.com/questions/17876439/configuration-file-in-angularjs
- https://scotch.io/tutorials/properly-set-environment-variables-for-angular-apps-with-gulp-ng-config
- http://www.bradoncode.com/blog/2015/06/26/unit-testing-http-ngmock-fundamentals/

### Installing

1. First of all, you need Node.js with npm installed https://nodejs.org/en/download/

2. Install live server

```
npm install -g live-server
npm install karma --save-dev
npm install -g karma-cli
```

3. Clone repo branch "fe-bk-frontend"

4. Install dependencies

```
npm install
```
## Environments

There are 4 environments set in env folder.

1. Test
2. Dev
3. Pre
4. Pro

Currently, index.html contains a reference to dev and karma.conf.js to test.
This must be changed to automate deployment to pre / pro (test is good enough by the moment)

## Running the tests

Tests folder contains all unit tests.

To run them, just execute

```
karma start
```

### Run application

Just enter cmd and execute live server when placed in working folder

```
live-server
```

### And coding style tests

This is a "nice to have" when coding

- https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [npm](https://www.npmjs.com/) - Dependency Management
* [Karma](https://karma-runner.github.io/2.0/index.html) - The test framework used
* [Jasmine](https://jasmine.github.io/) - Behavior-Driven JavaScript framework
* [Gulp](https://gulpjs.com/) - Automating toolkit
* [eslint](https://eslint.org/) - Pluggable javascript linter
* [Atom](https://rometools.github.io/rome/) - Code editor
* [Bootstrap](https://getbootstrap.com/) - CSS Framework (v 4.0)

## Authors

* **Marc Guinea** - *Initial work*

## TODO
- Change environments management to automate builds
- Configure Gulp tasks to deploy into dist folder
