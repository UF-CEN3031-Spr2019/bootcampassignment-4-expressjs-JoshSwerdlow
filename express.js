var path = require('path'),
    express = require('express'),
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    config = require('./config'),
    listingsRouter = require('../routes/listings.server.routes');

module.exports.init = function() {
  //connect to database
  mongoose.connect(config.db.uri);

  //initialize app
  var app = express();

  //enable request logging for development debugging
  app.use(morgan('dev'));

  //body parsing middleware
  app.use(bodyParser.json());


  /**TODO
  Serve static files */
  /* serve static files */
      app.use('/', express.static('client'));

      /* use the listings router for requests to the api */
      app.use('/api/listings', listingsRouter);

      /* go to homepage for all routes not specified */
      app.use(function(req, res, next){
          return res.redirect('/');
          next();
        });

      return app;
  };  
