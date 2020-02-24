const container = require('./src/startup/container');
const { MONGO_URI } = container.resolve('config');
const server = container.resolve('app')


const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

mongoose
    .connect(MONGO_URI, { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true  })
    .then(() => server.start())
    .catch(console.log);
