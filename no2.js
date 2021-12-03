/*Buatlah API untuk mengecek waktu (Jam Operasional) dimana :
Senin – Sabtu ( 09.00 – 18.00 ) mengembalikan nilai “True”
Minggu ( 09.00 – 15.00 ) Mengembalikan Nilai “True”
Selain itu mengembalikan nilai “False”*/

function waktu(dt) {
  var start_time2 = "09:00:00";
  var end_time2 = "18:00:00";

  var stt2 = new Date((dt.getMonth() + 1) + "/" + dt.getDate() + "/" + dt.getFullYear() + " " + start_time2);
  stt2 = stt2.getTime();    
  var endt2 = new Date((dt.getMonth() + 1) + "/" + dt.getDate() + "/" + dt.getFullYear() + " " + end_time2);
  endt2 = endt2.getTime();

  var start_time3 = "09:00:00";
  var end_time3 = "15:00:00";

  var stt3 = new Date((dt.getMonth() + 1) + "/" + dt.getDate() + "/" + dt.getFullYear() + " " + start_time3);
  stt3 = stt3.getTime();    
  var endt3 = new Date((dt.getMonth() + 1) + "/" + dt.getDate() + "/" + dt.getFullYear() + " " + end_time3);
  endt3 = endt3.getTime();

  var time = dt.getTime();
  var day = dt.getDay();

  if (time > stt2 && time < endt2 && day >= 1 && day <= 5 ) {
    return true;
  } 
  else if (time > stt3 && time < endt3 && day == 6 ) {
    return true;
  }
  else {
    return false;
  }
}
var dt = new Date();
console.log(dt);
console.log(waktu(dt));


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("infomedia");
  /*Return only the documents with the address "Park Lane 38":*/
  var query = { address: "Park Lane 38" };
  dbo.collection("customers").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});




// var http = require('http');
// http.createServer(function (req, res) {
// res.writeHead(200, {'Content-Type': 'text/html'});
// res.end('Hello John\n');
// }).listen(9001, '127.0.0.1');
// console.log('Server running at http://127.0.0.1:9001/');

// const express = require('express');
// const app = express();

// function solution(A) {
//     // write your code in JavaScript (Node.js 8.9.4)
//     const max = A.reduce(function(a, b) {
//       return Math.max(a, b);
//     });
//     if (max <= 0) {
//       return 1;
//     }
//     for (i = 1; i <= max; i++) {
//       if (!A.includes(i)) {
//         return i;
//       }
//     }
//     return max + 1;
//   }

// //route untuk halaman home
// app.get('/',(req, res) => {
//   res.send('Welcome To Express');
// });

// //route untuk halaman about
// app.get('/about',(req, res) => {
//   res.send('This is about page');
// });

// app.listen(8000, () => {
//   console.log('Server is running at port 8000');
// });