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

| Method   | Path         | Description                |
| -------- | ------------ | -------------------------- |
| `GET`    | `/users`     | Returns a list of users    |
| `GET`    | `/users/:id` | Returns a an existing user |
| `PUT`    | `/users`     | Creates a new user         |
| `POST`   | `/users/:id` | Update an existing user    |
| `DELETE` | `/users/:id` | Deletes an existing user   |

## References

-   [restify](http://restify.com/)
-   [Sequelize ORM](https://sequelize.org/)
