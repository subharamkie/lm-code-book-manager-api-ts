# 📖 Minimalist Book Manager API

## Introduction

This is the starter repository for the Further APIs session. It provides a start to creating a Minimalist Book Manager API.

### Pre-Requisites

- NodeJS installed (v18.12.1 Long Term Support version at time of writing)

### Technologies & Dependencies

- [TypeScript](https://www.typescriptlang.org/)
- [ExpressJS](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [SQLite3](https://www.npmjs.com/package/sqlite3)
- [Jest](https://jestjs.io/)
- [Supertest](https://www.npmjs.com/package/supertest)
- [ESLint](https://eslint.org/)

### How to Get Started

- Fork this repo to your Github and then clone the forked version of this repo

### Running the application

In order to run the unit tests run, firstly install the dependencies (if you haven't already done so)

```
npm install
```

Followed by:

```
npm start
```

### Running the Unit Tests

In order to run the unit tests run, firstly install the dependencies (if you haven't already done so)

```
npm install
```

Followed by:

```
npm test
```

### Tasks

Here are some tasks for you to work on:

To delete a book, pass the bookId to be deleted, eg:
http://localhost:3000/api/v1/books/{bookId} using the delete method.

If the book is not deleted successfully,user will see an error with message:Book id was not found.

Error handling is done using a custom Error object which holds status code, the error message.
We can create a custom error object like a badRequestError by extending the customError object, and set the appropriate status code,error message depending on the situation. For eg., when the user hits http://localhost:3000/api/v1/books/{bookId} with a GET method to get a book by the bookId, the server returns an error with "201" status code since the DB does not have a book by that id.
