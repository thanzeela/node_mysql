const mysql = require('mysql2')

const connectionDeatils ={
    host : 'localhost',
    user : 'root',
    password : 'Thanzi@2001',
    database : 'experion1'

}

function getConnection() {
    return mysql.createConnection(connectionDeatils)
}


function executeQuery(query, parameters, callback) {
    let connection = getConnection()
    connection.connect();
    console.log(parameters)
    connection.query(query, parameters, callback)
    connection.end();
}

module.exports.executeQuery = executeQuery