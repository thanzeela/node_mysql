const db = require('../db-handler')

function getAll(callback) {
    var sql = "select * from customers"
    db.executeQuery(sql, [], callback)
}

function getOne(id, callback) {
    var sql = "select * from customers where id=?"
    db.executeQuery(sql, [id], callback)
}

function CreateOne(data, callback) {
    var sql = "Insert into customers (name, email ,country ,age) values (?,?,?,?)"
    var values = [
        data.name,  
        data.email,
        data.country,
        data.age
    ]
    console.log(values)
    db.executeQuery(sql, values, callback)
}

module.exports.getAll = getAll
module.exports.getOne = getOne

module.exports.createOne = CreateOne