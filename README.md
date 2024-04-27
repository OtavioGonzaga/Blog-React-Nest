# Blog - React + Nest

> _Status_: in development ⚠

This project is a simple aplication build with React, Nest and PostgreSQL.
For now, it’s just a learning objective.

## Architecture

- **Front-end:** React + Styled Components
- **Back-end:** NestJS + Prisma + PostgreSQL

## Get Started

### Clone from github

    git clone https://github.com/OtavioGonzaga/Blog-React-Nest.git

### Install dependencies

To install dependencies, just use _yarn_ or _npm_:
Yarn:

    yarn

NPM:

    npm install

### Environment variables

#### Back-end:

Make sure the application is configured to use environment variables. Read more at https://docs.nestjs.com/techniques/configuration

To create a .env file, paste this line in root of project:

    cd backend && echo > .env

#### Front-end:

With the all dependencies installed, you can use a .env file to store environment.

Create a .env file pasting the following line in the root of project:

    cd frontend && echo > .env

In this file, add the variable:

    REACT_APP_NEST_URL=<-NEST API URL HERE->

### Running the application

Firstly, in command line execute the following command:

Yarn:

    cd backend && yarn dev

NPM:

    cd backend && npm run dev

After that, in another command line execute the following command:

Yarn:

    cd frontend && yarn start

NPM:

    cd frontend && npm run start

Wait the React open a new tab on the browser
