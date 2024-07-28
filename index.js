const seconds = document.getElementById('seconds');
const minutes = document.getElementById('minutes');
const hours   = document.getElementById('hours');




setInterval(function(){

    var date=new Date();
    var sec =date.getSeconds();
    var min =date.getMinutes();
    var hou =date.getHours();


    seconds.innerText = sec;
    minutes.innerText = min;
    hours.innerText = hou;


}), 1000;




