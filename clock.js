var timer = function getTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();

    if (hours > 12) {
        hours = hours - 12;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    var body = document.getElementById('clock').innerHTML = hours + ":" + minutes;
}
setInterval(timer, 1000);
