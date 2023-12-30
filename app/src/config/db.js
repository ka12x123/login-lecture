const mysql = require("mysql");
const db = mysql.createConnection({
    host : process.env.DB_HOST,
    user : process.env.DB_ID,
    password : process.env.DB_PSWORD,
    database : process.env.DB_DATABASE,
});

db.connect();
module.exports = db;



