var mongoose = require('mongoose');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.info('Connection Successful');
});

mongoose.connect(process.env.MONGOHQ_URL);

module.exports = db;
