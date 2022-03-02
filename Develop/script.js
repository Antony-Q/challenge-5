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
    $(".saveBtn").on("click", function (e) {
        var textAreaId = e.currentTarget.dataset.id;
        var text_to_save = $(`#${textAreaId}`).val();
        //var text_to_save = $("innerID").siblings(".col-xl").next()
        console.log(text_to_save)
        // { textInput9: 'text', textInput10: 'another text' }        
        var schedule = localStorage.getItem("schedule") || "{}";       
        schedule = JSON.parse(schedule);
        schedule[textAreaId] = text_to_save
        localStorage.setItem("schedule", JSON.stringify(schedule)); // save the item
    })
    // Retrieve saved input from local storage

    function retrieve() {
        // { textInput9: 'text', textInput10: 'another text' } 
        var schedule = localStorage.getItem("schedule") || "{}"; // retrieve
        schedule = JSON.parse(schedule)

        // document.getElementById('textInputID').innerHTML = text; // display
        
        // for (var text = 0; i < localStorage.length; i++){
        //     $('textInput').append(localStorage.getItem(localStorage.key(i)));
        // }

        for (const textInputId in schedule) {
            document.getElementById(textInputId).value = schedule[textInputId];
        }
          
    };

    var liveDate = document.getElementById("currentDate");

    document.getElementById("currentDate").innerHTML =
    `${moment().format('ll')}`;

    setInterval(function () {liveDate.innerHTML = `${moment().format('ll')}`}, 1000);

    var liveTime = document.getElementById("currentTime");

    document.getElementById("currentTime").innerHTML =
    `${moment().format("LTS")}`;

    setInterval(function () {liveTime.innerHTML = `${moment().format("LTS")}`}, 1000);

    retrieve();
});

