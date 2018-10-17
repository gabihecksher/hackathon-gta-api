// set up ========================
var express  = require('express');
var cors = require('cors');
var app      = express();                               // create our app w/ express
var morgan = require('morgan');             // log requests to the console (express4)
const { User } = require('./app/models');
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)


var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)

const userRoutes = require('./app/routes/userRoutes');
const projectRoutes = require('./app/routes/projectRoutes')

// configuration =================
app.use(cors());
app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({limit:"50mb",extended:true}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());
app.use(bodyParser.json({limit: '50mb', extended: true}));                                // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());


app.use('/', userRoutes );
app.use('/', projectRoutes);


// listen (start app with node server.js) ======================================
app.listen(8080);
console.log("App listening on port 8080");

