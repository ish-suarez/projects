require('dotenv').config();
const appPort = process.env.PORT || 8000; // Application Port
const express = require('express');
const morgan = require('morgan');
const expressJwt = require('express-jwt');
const cors = require('cors');
const app = express(); // Application Variable
const db = require('./models');
const Role = db.role;
db.sequelize.sync({force: true}).then(() => {
    console.log('Drop and Resync DB');
    initial()
})
const corsOptions = {
    origin: 'http://localhost:7000'
};

function initial() {
    Role.create({
        id: 1,
        name: "user"
    });

    Role.create({
        id: 2,
        name: "moderator"
    });

    Role.create({
        id: 3,
        name: "admin"
    });
}


// Middleware
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));


// Error Handling 
app.use((err, req, res, next) => {
    console.log(err);
    if(err.name === 'Unauthorized Error') {
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})

// Declaring Routes
require('./routes/userRoute')(app);

// Server Set to Listen on Port
app.listen(appPort, () => console.log(`Application Main Server is listening on port: ${appPort}`));