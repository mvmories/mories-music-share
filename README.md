# Mories Music Share App

This project is essentialy a React Player with Song List and Queue, generated automatically from any youtube or soundcloud url links you provide it.

## Demo Page

You can play with the mories music share in the following [github-page link](https://mvmories.github.io/mories-music-share)

## Tech Stack Used

### `Front-end - React`

The Front-end was developed with React and Material UI.
The Material UI Theme was updated globally.

### `Back-end - GraphQL + Apollo + Hasura`

API CRUD functionality was developed using GraphQL.
For simplicity's sake, Hasura was used for database, data and query management (using its integrated GraphQL Engine).
The connection between React and Hasura/GraphQL was later made through the power of ApolloGraphQL Library.

## Deployment

The Front-end and Back-end were deployed using distinct services.

### `Github Pages`

The whole front-end project was managed throughout the project using the github repository, so it was only natural that we would deploy it into its own github page (see Demo link provided above)

### `Heroku`

The Hasura/GraphQL backend was deployed into heroku (as mentioned before, this was later connected with our front-end part of the project using the Apollo library).

# mories-music-share
