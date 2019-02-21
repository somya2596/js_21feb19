function clock(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var d = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    var day = date.getDay();
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    var watch= d + ":" + month + ":" + year + ": "+ day;
    console.log(watch);
    var time = h + ":" + m + ":" + s + " " + session;
   console.log(time);
    
    setTimeout(clock, 1000);
    
}

clock();