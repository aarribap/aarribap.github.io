var timedown = new Date("January 31, 2024 23:59:59").getTime();
var time = setInterval(function(){
    var actualtime = new Date().getTime();
    var resttime = timedown - actualtime;

    var restdays = Math.floor(resttime / (1000 * 60 * 60 * 24));
    var resthours = Math.floor((resttime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var restminutes = Math.floor((resttime % (1000 * 60 * 60)) / (1000 * 60));
    var restsegs = Math.floor((resttime % (1000 * 60)) / 1000);    

    document.getElementById("restdays").innerHTML = restdays;
    document.getElementById("resthours").innerHTML = resthours;
    document.getElementById("restminutes").innerHTML = restminutes;
    document.getElementById("restsegs").innerHTML = restsegs;

},1000);
