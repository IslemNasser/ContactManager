const mongoose = require('mongoose');
const dbURI = 'mongodb://localhost/orders';

mongoose.connect(dbURI, { useNewUrlParser: true });

mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${dbURI}`);
});

mongoose.connection.on('error', err => {
  console.log('Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});
const gracefulShutdown = (msg) => {
  mongoose.connection.close().then(() => {
    console.log(`Mongoose disconnected through ${msg}`);
    process.exit(0);
  }).catch((error) => {
    console.log('Error closing Mongoose connection:', error);
    process.exit(1);
  });
};


process.once('SIGUSR2', signal => {
  gracefulShutdown('nodemon restart', () => {
    process.kill(process.pid, 'SIGUSR2');
  });
});

process.on('SIGINT', () => {
  gracefulShutdown('app termination', () => {
    process.exit(0);
  });
});

require('./product');
require('./customer');
require('./order');