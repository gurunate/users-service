# users-service

Simple RESTful users service built with restify, Sequelize and MySQL.

## Setup

### Install

```bash
$ npm i
```

### Configuration

See [.env-sample](.env-sample).

### Run

```bash
$ npm run dev
```

-   http://localhost:57544

## Usage

| Method | Path                                   | Description             |
| ------ | -------------------------------------- | ----------------------- |
| `GET`  | [/users](http://localhost:57544/users) | Returns a list of users |
| `POST` | [/users](http://localhost:57544/users) | Creates a new user      |

## References

-   [restify](http://restify.com/)
-   [Sequelize ORM](https://sequelize.org/)
