

function Time() {

  var now = new Date(),
      hour = now.getHours(),
      minute = now.getMinutes(),
      second = now.getSeconds(),
      pmORam = "AM";

      if(hour < 10 ){
        hour = '0'+hour;
      }
      if(hour > 12 ){
        hour = hour - 12;
        pmORam = "PM";
      }
      if(minute < 10){
          minute = '0'+minute;
      }
      if(second < 10){
          second = '0'+second;
      }

      document.getElementById('clock').textContent =pmORam + ' ' + hour + ':' + minute + ':' + second;
}

window.onload = function () {

  setInterval(Time,1000);

};
