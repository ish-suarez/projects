require('dotenv').config();

const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');

const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:3000'
}

// Routes
const authRouter = require('./routes/authRoute');


// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors(corsOptions));


// Database Connection
mongoose.connect(process.env.DATABASE, () => console.log(`MongoDB Connected`))

// Default connection
const db = mongoose.connection;

// Routes
app.use('/authenticate', authRouter);

// Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error: '))


// Error Handling 
app.use((err, req, res, next) => {
    console.log(err);
        if(err.name === 'Unauthorized Error'){
            res.status(err.status)
        }
    return res.send({errMsg: err.message});
})

app.listen(process.env.AUTH_PORT || 8000)
console.log(`Server is listening on port ${process.env.AUTH_PORT || 8000}`)

