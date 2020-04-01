# users-service

Simple RESTful users service built with [restify](http://restify.com/), [Sequelize](https://sequelize.org/), [MySQL](https://hub.docker.com/layers/mysql/library/mysql/5.7.29/images/sha256-74cb47745213f69833348f814f378a6e446b53e518e650fab44a71c523f1004b?context=explore) and Docker.

## Setup

### Install

```bash
$ npm i
```

### Configuration

See [sample.env](sample.env) for required environment variables.

For a quick start, copy the `sample.env` to `.env`.

```bash
$ cp sample.env .env
```

### Run

```bash
$ npm run dev
```

-   http://localhost:8080

## Usage

| Method   | Path         | Description                |
| -------- | ------------ | -------------------------- |
| `GET`    | `/users`     | Returns a list of users    |
| `GET`    | `/users/:id` | Returns a an existing user |
| `PUT`    | `/users`     | Creates a new user         |
| `POST`   | `/users/:id` | Update an existing user    |
| `DELETE` | `/users/:id` | Deletes an existing user   |

## References

### Related Resouces

-   [sample-web-app](https://github.com/gurunate/sample-web-app)
-   [sample-data-graph](https://github.com/gurunate/sample-data-graph)

### External Links

-   [restify](http://restify.com/)
-   [Sequelize ORM](https://sequelize.org/)
