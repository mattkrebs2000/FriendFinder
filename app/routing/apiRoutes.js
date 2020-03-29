
var answersArray = require('../data/friends.js');
var path = require('path');

module.exports = function (app) {


    app.get('/api/friends', function (req, res) {
        res.json(answersArray);

        console.log("res "+res)
    });


    app.post('/api/friends', function (req, res) {

        if (1==1) {

            answersArray.push(req.body);

            res.json(true); 
      
       console.log("scores " + req.body);

    };


    app.post('/api/clear', function (req, res) {
      
        answersArray = [];
       

        console.log("should be an empty array" + answersArray);
    });
});

}
