# visitor-checker
 ## Setup
Go to the `backend` directory and create `.env` file containing your MongoDB connection string. The file should look like this:

`MONGO_CONNECTION_STRING='Paste here your MongoDB connection string'`
 
 Then go back to the root directory of the app and run
 
`npm run setup`

## Start locally
`npm start` 

## About

Visitor checker is an web application written in MEVN stack and consisting of NestJS backend and Vue.js frontend which are comunicating via API. 

## What it does? 

When visitor opens home page they are given an id and avatar image taken from the `random-data-api.com/api/v2/users`. They are also given third parameter which states if this user scrolled all the way to the avatar image. This information is then stored in the session storage and the session is retrieved. Data is also saved in a database and updated when user views the image in the home page. 
The second page is `report` - simple table is shown there consisting of tho columns: number of all users who opened the home page and the percentage of users who saw their avatar image.
