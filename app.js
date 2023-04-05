const mysql=require('mysql2')
const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const dbConfig = require('./config/db.js')
const db = mysql.createConnection(dbConfig)
const app = express()
const port = 3800

// dbConfig.connect(conn)

app.set('views',__dirname+'/views')
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

app.use(express.static(__dirname+'/'))

app.get('/', function(req,res) {
    var sql = "SELECT * FROM movies"; 

    db.query(sql, function(err, results, fields){
        if (err) throw err;  
        res.render('posts', {movies : results}); 
})})

app.get('/commit', (req,res) => {
    ejs.renderFile('views/post.ejs', (err,data) => {
        console.log(err)
        res.send(data)
    })
})

app.get('/register', (req,res) => {
    ejs.renderFile('views/register.ejs', (err,data) => {
        console.log(err)
        res.send(data)
    })
})

app.listen(port, () => {
    console.log(port,'포트에서 서버가 열렸습니다')
})
