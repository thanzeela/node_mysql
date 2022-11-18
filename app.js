const http = require('http')


const url = require('url')

const mysql = require('mysql2')
var qs = require('querystring')

// const db = require('./db-Haandler')

const customer = require('./models/customer')

const server =  new http.createServer((req,response)=>{
    var link = url.parse(req.url,true)
    var query = link.query;
    console.log(query)
    var path = link.pathname;
    console.log(path)

    if (path == "/api/users") {
        // const sql = "select * from customers";
        
        // db.executeQuery(sql, [], (err, res)
        customer.getAll((err,res)=>{
            response.end(JSON.stringify(res))
        })
    }
    else if (path == "/api/user" && req.method == 'GET') {
        let id = query.id
        console.log(id)
        customer.getOne(id, (err, res )=>{
            response.end(JSON.stringify(res))
        })
    }
    else if (path == "/api/user" && req.method == 'POST') {
        // console.log("Hello")
        formData = ''
        req.on('data', (data)=>{
            formData += data.toString();
            // console.log("data from formdata: "+formData)

        })
        req.on('end', ()=>{
            var query = qs.parse(formData);
            // console.log("from query string: "+query)
            customer.createOne(query, (err,result)=>{
                if (!err) {
                    response.end(JSON.stringify({status: "ok"}))
                }
                else{
                    response.end(JSON.stringify({status : "Failed"}))
                }
            })
        })

    }
})




server.listen(80)

// db.executeQuery("Select * from customers",null,(err,res)=>{
//     console.log(err)
//     console.log(res)
// })

















