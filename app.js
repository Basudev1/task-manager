const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();
const notFound = require('./middleware/not-found');
// const errorHandler = require('./middleware/error-handlers');
const errorHandler = require('./middleware/error-handler');

const port = 3000;

//express middleware
app.use(express.static('./public'));

app.use(express.json());

//routes
app.use('/api/v1/tasks', tasks);
app.use(notFound);
app.use(errorHandler)







// app.get('/', (req, res) => res.send('Task Manager App'));


const start = async () => {
try {
   await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on ${port}`))
    
} catch (error) {
    console.log(error);
}
}

start()

