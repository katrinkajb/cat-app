# Full stack cat-app
Build a full-stack application.

## Back-End
Create a back-end application using express. You should have at least one model and all CRUD routes for that model.

## Front-End
Create a public directory with HTML, CSS, and JavaScript files. Server your front-end files from your express application using:

const express = require('express');
const app = express();

app.use(express.static(`${__dirname}/../public`));
app.use(express.json());

// Rest of your express app here
