# RPG-Server
An API that generates a list of random phone numbers

## Pivotal Tracker
Project is managed using pivotal tracker management tool. You can view the board with the link below:

https://www.pivotaltracker.com/n/projects/2328840

# Getting Started
**Via Cloning The Repository**
```
# Clone the app
git clone https://github.com/stylll/rpg-server.git

# Switch to directory
cd rpg-server

# Create .env file in the root directory
touch .env
update env file with required information
use the .env.example file as a guideline

# Install Package dependencies
npm install

#Start the application
npm run start:dev

#View list of numbers
GET- localhost:3000/api/v1/numbers?order=asc

#Generate new list of numbers
POST - localhost:3000/api/v1/numbers
```

## Testing
* Run `npm run test`

## Built with
* [NodeJS](https://nodejs.org/en/) - A Javascript runtime built runtime that uses an event-driven non-blocking I/O model that makes it lightweight and efficient.
* [ExpressJS](http://expressjs.com/) - A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. This is used in this application for routing to endpoints.
* [NPM](https://www.npmjs.com/) - A Node Package Dependency Manager
* [Webpack](https://babeljs.io/) - Webpack is a static module bundler for modern JavaScript applications

#### Test Tools

* [Supertest](https://github.com/visionmedia/supertest) - Super-agent driven
  library for testing node.js HTTP servers
* [Jest](https://jestjs.io/) - Delightful JavaScript Testing

#### Linter(s)

* [ESLint](https://eslint.org/) - Linter Tool

#### Compiler

* [Babel](https://eslint.org/) - Compiler for Next Generation JavaScript

## Contributing
RPG-Server is open source and contributions are highly welcomed.

If you are interested in contributing, follow the instructions below.

* Fork the repository

* Create a new branch

* Make your changes and commit them

* Provide a detailed commit description

* Raise a pull request against staging

`Ensure your codes follow the` [AirBnB Javascript Styles Guide](https://github.com/airbnb/javascript)

`See project wiki for commit message, pull request and branch naming conventions.`

`All Pull requests must be made against Develop branch. PRs against master would be rejected.`


## License and Copyright

&copy; Stephen Aribaba

Licensed under the [MIT License](https://opensource.org/licenses/MIT).
