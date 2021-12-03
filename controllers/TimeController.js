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