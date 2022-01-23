var saveBtnEl = document.getElementsByClassName('time-clack.description');
let test = document.getElementsByClassName("description");
var inputTime;
var inputTask ;
var arr = [];


$(document).ready(function () {

    function hourTracker() {

        var currentHour = moment().hour();


        $(".time-block").each(function () {
            var blockHour = parseInt($(this).attr("id").split("hour")[1]);
            console.log( blockHour, currentHour)

            if (blockHour < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    hourTracker();
});



$(document).on("click", ".saveBtn", getFunction);

function getFunction(event) {

var inputTask= document.getElementById(event.target.attributes.time.value);

localStorage.setItem(event.target.attributes.time.value, inputTask.value);
    
   
} 



function loadSaveData() {
    if (localStorage.getItem(input) !== null) {
        savedData = JSON.parse(localStorage.getItem(input));
    }
};

//loadSaveData();