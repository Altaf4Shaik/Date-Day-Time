function printTime() {

    var d = new Date();

    var yr=d.getFullYear();

    var n=d.getMonth();

    var mn=["January","February","March","April","May","June","July","August","September","October","November","December"];

    var mon=mn[n];

    var hrs = d.getHours();

    var m = d.getMinutes();

    var s = d.getSeconds();

    var da=d.getDate();

    var dayo=d.getDay();

    var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Friday","Saturday"];

    var day=days[dayo];

    if(parseInt(s)<10)

    {

        s="0"+s;

    }

    if(parseInt(m)<10)

    {

        m="0"+m;

    }

    if(parseInt(hrs)<10)

    {

        hrs="0"+hrs;

    }

    if(parseInt(da)<10)

    {

        da="0"+da;

    } document.getElementById("time").innerHTML = hrs+":"+m+":"+s;

    document.getElementById("date").innerHTML=da+" "+mon+" "+yr+","+day;

    

}

setInterval(printTime, 1000);
