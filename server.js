const express = require('express');
// const port should be before const app, not exactly sure why but thats what module says
const PORT = process.env.PORT || 3001;
const app = express();

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const fs = require('fs');
const path = require('path');

// to make the script and link tags readable in the html, make sure it is above the other app.use calls
app.use(express.static('public'));

//parse income string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// this creates a route that the front-end can request data from
const { animals } = require('./data/animals');

app.listen(PORT, () => {
    console.log('API server now on port 3001!');
});

// LEFT OFF 11.3.6 CREATE ROUTES TO SERVE INDEX.HTML