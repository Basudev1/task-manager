const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false';
mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
console.log('Connected to MongoDB');
}).catch((err) => { console.log(err);})