require('./db/connect');
const express = require('express');
const app = express();
const tasks = require('./routes/tasks');

const port = 3000;

//express middleware

app.use(express.json());


//routes
app.use('/api/v1/tasks', tasks);



app.get('/', (req, res) => res.send('Task Manager App'));

app.listen(port, console.log(`Server is listening on ${port}`))
