// Current time clock/calendar
var liveDate = document.getElementById("currentDate");

document.getElementById("currentDate").innerHTML =
`${moment().format('ll')}`;

setInterval(function () {liveDate.innerHTML = `${moment().format('ll')}`}, 1000);

var liveTime = document.getElementById("currentTime");

document.getElementById("currentTime").innerHTML =
`${moment().format("LTS")}`;

setInterval(function () {liveTime.innerHTML = `${moment().format("LTS")}`}, 1000);

// Save input to local storage
function save(){
    var text_to_save=document.getElementById('textarea').value;
    localStorage.setItem("text", text_to_save); // save the item
    }

// Retrieve saved input from local storage
function retrieve(){
    var text=localStorage.getItem("text"); // retrieve
    document.getElementById('textarea').innerHTML = text; // display
    }
