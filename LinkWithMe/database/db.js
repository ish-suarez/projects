require('dotenv').config();
const { createConnection,  } = require('mysql2'); // Database Method

// Database Set Connection, Default and Setting Error
const connection = createConnection(JSON.parse(process.env.DATABASE));
connection.connect(err => {
    if(err) throw err;
    console.log('Connection to MySQL established');
})

// Server Exports 
module.exports = connection;