//Basic Dependencies

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//Setting up Express Server. 

var app = express(); 

//Setting up Port. 

var PORT = process.env.PORT || 8070; 


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

//route files

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);


console.log("what are you doing")



app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});