var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var winston = require('./config/winston');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('combined', { stream: winston.stream }));

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/info', function(req, res) {
    console.log("It'\s an info")
    res.json({ message: 'hooray! welcome to our api!' });   
});

router.get('/info', function(req, res) {
    console.log("INFO Log")
    res.json({ message: 'hooray! welcome to our api!' });   
});

router.get('/warning', function(req, res) {
    console.warn("WARNING log");
    res.json({ message: 'It\'s a warning!' });   
});

router.get('/error', function(req, res) {
    console.error("ERROR log");
    res.json({ message: 'It\'s an error' });   
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);