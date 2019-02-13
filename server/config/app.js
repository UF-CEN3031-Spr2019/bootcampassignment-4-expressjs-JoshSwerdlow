var config = require('./config'),
    mongoose = require('mongoose'),
    express = require('./express');

module.exports.start = function() {
  var app = express.init();
  app.listen(process.env.port || 8080, function() {
    console.log('App listening on port', this.address().port, app.settings.env);
  });
};
