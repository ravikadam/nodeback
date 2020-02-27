# Scheduler
> RESTful api with Domain Driven Design

## Quick Start

1. Clone the repository
2. Install the dependencies with [Yarn](https://yarnpkg.com/en/docs/install/)
3. Install global dependencies [Application Setup](https://github.com/YatishGupta/schedulerservice#application-setup-development)
4. Create the development and test [Databases](https://github.com/YatishGupta/schedulerservice#database-setup-development)
5. Run database migrations and seed with `yarn db:refresh`
6. Run the application in development mode with `yarn start`
7. Access `http://localhost:<PORT>/api/<VERSION>` and you're ready to go!
    > http://localhost:4000/api/v1

### Application Setup (Development)

```sh
$ yarn add global standard   # JavaScript Standard Style
$ yarn add global babel-eslint  # required by StandardJs
$ yarn add global snazzy   # Format JavaScript Standard Style as beautiful output
$ yarn add global sequelize-cli  # CLI for Sequelize
```

### Database Setup (Development)

1. Install MySql and create database

## Overview

- uses Node.js v11.10.0
- written using ES6
- uses Yarn for package dependency management
- uses [JavaScript Standard Style](http://standardjs.com/)
- uses `sequelize` and `sequelize-cli` as ORM and data migration tool
  > can change easily to diffrent ORM and migration tool.
- Filename convention - `snake_case` needs to be followed

## CLI Tools

- `yarn start` - start the App locally
- `yarn test` - run Unit tests
- `yarn db:refresh` - run all migrations and seeds.
- `yarn lint` - lint codebase using JavaScript Standard Style
- `yarn lint:fix` - fix code according to JS Standard Style
- `sequelize model:create --name newmodel` --attributes "id:integer, title:string - create a new model
- `sequelize db:migrate` - apply db changes using migration script
- `yarn add <package-name>` - add a new package to package.json
- `yarn remove <package-name>` - remove package from package.json

Basic commands

```sh
$ sequelize  db:migrate             Run pending migrations.
$ sequelize  db:migrate:old_schema  Update legacy migration table
$ sequelize  db:migrate:undo        Revert the last migration run.
$ sequelize  db:migrate:undo:all    Revert all migrations ran.
$ sequelize  db:seed                Run seeders.
$ sequelize  db:seed:undo           Deletes data from the database.
$ sequelize  db:seed:undo:all       Deletes data from the database.
$ sequelize model:create --name modelname --attributes "text:text, url:string"  # create model
$ sequelize seed:create     # create seeder
```

### Sequelize CLI Documentation

For reference, see: [https://github.com/sequelize/cli](https://github.com/sequelize/cli)

## Serverless setup

- Install serverless and setup credentials
- Install Aws-cli and setup credentials

## Tech

- [Express](https://expressjs.com/) - Node Framweork
- [Awilix](https://github.com/jeffijoe/awilix) - dependency resolution support powered by `Proxy`
- [PM2](https://github.com/Unitech/pm2) - production process manager for Node.js applications with a built-in load balancer
- [Tcomb](https://github.com/gcanti/tcomb) - s a library for Node.js and the browser which allows you to check the types of JavaScript values at runtime with a simple and concise syntax
- [Express-status-monitor](https://github.com/RafalWilinski/express-status-monitor) - Simple, self-hosted module based on Socket.io and Chart.js to report realtime server metrics for Express-based node servers.
- [CORS](https://github.com/expressjs/cors) - a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
- [Body-parser](https://github.com/expressjs/body-parser) - Node.js body parsing middleware.
- [Compression](https://github.com/expressjs/compression) - Node.js compression middleware.
- [Http-status](https://github.com/adaltas/node-http-status) - Utility to interact with HTTP status code.
- [Winston](https://github.com/winstonjs/winston) - A multi-transport async logging library for node.js.
- [Morgan](https://github.com/expressjs/morgan) - HTTP request logger middleware for node.js
- [Ramda](http://ramdajs.com/) - A practical functional library for JavaScript programmers.
- [Sequelize](http://docs.sequelizejs.com/) - promise-based ORM for Node.js v4 and up. It supports the dialects PostgreSQL, MySQL, SQLite and MSSQL and features solid transaction support, relations, read replication and more.
- [Faker](https://github.com/marak/Faker.js/) - generate massive amounts of fake data in the browser and node.js
- [Bcrypt](https://github.com/kelektiv/node.bcrypt.js) - Lib to help you hash passwords
- [Passport](https://github.com/jaredhanson/passport) - is Express-compatible authentication middleware for Node.js.
- [Passport-jwt](https://github.com/themikenicholson/passport-jwt) - A Passport strategy for authenticating with a JSON Web Token.
- [Json Webtoken](https://github.com/auth0/node-jsonwebtoken) - An implementation of JSON Web Tokens.
- [Moment](https://momentjs.com/) - Parse, validate, manipulate, and display dates and times in JavaScript.
- [Moment-timezone](https://momentjs.com/timezone/) - Parse and display dates in any timezone.
- [Swagger-ui](https://swagger.io/swagger-ui/) - visualize and interact with the API’s resources without having any of the implementation logic in place.
- [Swagger-jsdoc](https://github.com/Surnet/swagger-jsdoc)- enables you to integrate Swagger using JSDoc comments in your code. Just add @swagger on top of your DocBlock and declare the meaning of your code in yaml complying to the OpenAPI specification.

### Logging
- [winston](https://github.com/winstonjs/winston) - a multi-transport async logging library for Node.js. It is designed to be a simple and universal logging library with support for multiple transports. A transport is essentially a storage device for your logs. Each instance of a winston logger can have multiple transports configured at different levels. For example, one may want error logs to be stored in a persistent remote location (like a database), but all logs output to the console or a local file.
- [morgan](https://github.com/expressjs/morgan) - HTTP request logger middleware for Node.js. A helper that collects logs from your server, such as your request logs.

### Tests
- [mocha](https://mochajs.org/) - JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun
- [chai](http://chaijs.com/) - a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework.
- [supertest](https://github.com/visionmedia/supertest) - HTTP assertions made easy via superagent.
- [cross-env](https://github.com/kentcdodds/cross-env) - makes it so you can have a single command without worrying about setting or using the environment variable properly for the platform
  - We mainly use this so **mocha** can use the absolute path of files

### Pre-commit

Adding `pre-commit` to your project can be helpful to encourage consistency and quality of your code repository.

- [pre-commit](https://github.com/observing/pre-commit) - **pre-commit** is a pre-commit hook installer for `git`. It will ensure that your `npm test` (or other specified scripts) passes before you can commit your changes. This all conveniently configured in your `package.json`.
- [lint-staged](https://github.com/okonet/lint-staged) - Linting makes more sense when running before committing your code. By doing that you can ensure no errors are going into repository and enforce code style. But running a lint process on a whole project is slow and linting results can be irrelevant. Ultimately you only want to lint files that will be committed.

## JavaScript Standard Style

### The Rules

- **2 spaces** – for indentation
- **Single quotes for strings** – except to avoid escaping
- **No unused variables** – this one catches *tons* of bugs!
- **No semicolons** – [It's][1] [fine.][2] [Really!][3]
- **Never start a line with `(`, `[`, or `` ` ``**
  - This is the **only** gotcha with omitting semicolons – *automatically checked for you!*
  - [More details][4]
- **Space after keywords** `if (condition) { ... }`
- **Space after function name** `function name (arg) { ... }`
- Always use `===` instead of `==` – but `obj == null` is allowed to check `null || undefined`.
- Always handle the node.js `err` function parameter
- Always prefix browser globals with `window` – except `document` and `navigator` are okay
  - Prevents accidental use of poorly-named browser globals like `open`, `length`,
    `event`, and `name`.
- **And [more goodness](https://standardjs.com/)**
