require('dotenv').config();

const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const expressJwt = require('express-jwt')

const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:3000'
}


// Routes
const userRouter = require('./routes/userRouter');


// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors(corsOptions));


// Database Connection
mongoose.connect(process.env.DATABASE, () => console.log(`MongoDB Connected`))

// Default connection
const db = mongoose.connection;

// Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error: '))

// Routes
app.use('/smartfi', expressJwt({secret: process.env.ACCESS_TOKEN_SECRET, algorithms: ['HS256']}));
app.use('/smartfi/user', userRouter);


// Error Handling 
app.use((err, req, res, next) => {
    console.log(err);
        if(err.name === 'Unauthorized Error'){
            res.status(err.status)
        }
    return res.send({errMsg: err.message});
})

app.listen(process.env.PORT || 9000)
console.log(`Server is listening on port ${process.env.PORT || 9000}`)

