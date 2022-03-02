// Initialize Jquery
// $(document).ready(function(){

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

        var schedule = localStorage.getItem("schedule") || "{}"; // retrieve
        schedule = JSON.parse(schedule)

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

    // Change color of block based on time

    function changeColor() {
    // if (container.textContent.includes("")) {
    //   console.log('✅ Melon is contained in element');
    // } else {
    //   console.log('⛔️ Melon is NOT contained in element');
    // }
    var taskEl = document.getElementById( "time-block" );
        // remove any old classes from element
        $(taskEl).removeClass("present");
      
        // apply new class if task is near/over due date
        if (moment().isAfter(liveTime)) {
          $(taskEl).addClass("past");
        } else if (moment().isBefore(liveTime)) {
            $(taskEl).addClass("future");
        }
    };
 // Call local storage data
    retrieve();
    changeColor();
});

