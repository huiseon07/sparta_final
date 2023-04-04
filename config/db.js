const mysql = require('mysql2')

var db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'heesun1001@',
    database : 'task_db'
  });
  
  db.connect(); // mysql과 연결
 
  var sql = 'select * from movies'
  db.query(sql, function(err, rows, fields)
  {
      if (err) {
          console.error('error connecting: ' + err.stack);
      }
      console.log(rows);
          
  });
  db.end();

  module.exports = {
    host     : 'localhost',
    user     : 'root',
    password : 'heesun1001@',
    database : 'task_db'
};

// module.exports = {
//     init: function () {
//         return mysql.createConnection(db);
//     },
//     connect: function(conn) {
//         conn.connect(function(err) {
//             if(err) console.error('mysql connection error : ' + err);
//             else console.log('mysql is connected successfully!');
//         });
//     }
// }