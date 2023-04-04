const mysql=require('mysql2')
const express = require('express')
const app = express()
const dbConfig = require('./config/db.js');
const conn = mysql.createConnection(dbConfig);
const bodyParser = require('body-parser');
const port = 3800
// const http = require('http')
// const fs = require('fs')

// dbConfig.connect(conn)

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

app.get('/', function(req,res) {
    conn.connect()

    var sql = 'select * from movies'
    conn.query(sql, function(err, rows, fields)
    {
        if (err) {
            console.error('error connecting: ' + err.stack);
        }
        res.send(rows);
            
    });
    conn.end(); // 연결 해제
})

app.listen(port, () => {
    console.log(port,'포트에서 서버가 열렸습니다')
})

