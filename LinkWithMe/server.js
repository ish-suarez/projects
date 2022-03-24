require('dotenv').config();
const appPort = process.env.PORT || 8000
const express = require('express');
const morgan = require('morgan');
const expressJwt = require('express-jwt');

const app = express();

app.use(express.json());
app.use(morgan('dev'));





app.listen(appPort, () => console.log(`Application Main Server is listening on port: ${appPort}`));
