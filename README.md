🌎 EarthMates 🌎

The focus of this app is to practice using the Full Stack we teach, (with auth in place) in a large scale app.

The idea of the app is to create a site for Earth Friendly Events, to post their events so people can join them, and to view the events as a user (MVP version)

## The Tech

A Boilerplate is already set up for you with everything you will need to get started. This boilerplate is set up to use:

* [React](https://reactjs.org/docs/getting-started.html)
* [React Query](https://tanstack.com/query/v3/docs/react/overview)
* [Express](https://expressjs.com/en/api.html)
* [Knex.js](https://knexjs.org/)
* [Auth0](https://www.auth0.com)

## User Stories

### MVP

As a non-registered user, I want to:

* Register for the App under my name
* Browse a list of all the events posted by other users
* Click into an event and view the details
* View the events ordered by date

As a registered user, I want to:

* Create an event
* Be able to edit or delete an event I've created
* Be able to join an event 
* Be able to view my joined events in the 'myevents' page

### Stretch

As both a registered and non-registered user
* Filter events by location

As a registered user:
* I want to save reviews to the 'myevents' component so I can remember my events too!
* As a user I want to save my event and view them on the 'myevents'
* Badges for users per events attended (every time you go to an event you get 'points' added to your profile, level up)
* Community Forum - blog/ reviews page

## Components (Client Side)
| name | purpose |
| --- | --- |
| Login | View for user to enter their login credentials |
| Register | View for user to sign up |
| Home | Welcome users and link to reviews |

## API (Client - Server)

| Method | Endpoint | Protected | Usage | Response |
| --- | --- | --- | --- | --- |
| Post | /api/auth/login | Yes | Log In a User | The Users JWT Token |
| Post | /api/auth/register | Yes | Register a User | The Users JWT Token |

## DB (Server Side) -

## Authentication

Authentication is already set up in the client side of this project using Auth0. Users are currently able to login and logout.
When you wish to protect your server side routes (those for registered users only), you may need to reference other exercises or materials.
If you wish to replace the Auth0 authentication with your own, so you can customise the login for example, you will need to update the `client/index.tsx` file of the project with your own Auth0 details.

## Setup

Run the following commands in your terminal:

```sh
npm install
npm run dev
```

To run before merging:
```sh
npm run lint
npm run format
npm run test
```
