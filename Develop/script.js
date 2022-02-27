// Initialize Jquery
// $(document).ready(function(){

// // Current time clock/calendar - Jquery
//     var liveDate = document.getElementById("currentDate");

//     document.getElementById("currentDate").innerHTML =
//     `${moment().format('ll')}`;

//     setInterval(function () {liveDate.innerHTML = `${moment().format('ll')}`}, 1000);

//     var liveTime = document.getElementById("currentTime");

//     document.getElementById("currentTime").innerHTML =
//     `${moment().format("LTS")}`;

//     setInterval(function () {liveTime.innerHTML = `${moment().format("LTS")}`}, 1000);


//     $("saveBtn").click(save()
// )});

// Save input to local storage

// Save button onclick - Jquery
$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var text_to_save = $(this).siblings(".col-xl").next()
        console.log(text_to_save)
        localStorage.setItem("text", text_to_save); // save the item
    })
    function retrieve() {
        var text = localStorage.getItem("text"); // retrieve
        document.getElementById('textInput').innerHTML = text; // display
    };
});

// Retrieve saved input from local storage (FOR LOOP)
