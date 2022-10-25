//display date; 
var currentDay =$('#currentDay');
var dateToday = moment().format("dddd, MMM Do, YYYY");
currentDay.text(dateToday);

//change color by time of day
var scheduleHours = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]

var timeColor = function () {
    var currentHour = moment().format('HH');
    for (i=0; i < scheduleHours.length; i++) {
        if (scheduleHours[i] < currentHour) {
            $('#' + scheduleHours[i]).addClass("past");
        }

        else if (scheduleHours[i] > currentHour) {
            $('#' + scheduleHours[i]).addClass("future");
        }

        else {
            $('#' + scheduleHours[i]).addClass("present");
        } 
    }
}

timeColor();


//save buttons > save to local storage
var btn7 = document.getElementById("btn-7");
btn7.addEventListener("click", function () {
    localStorage.setItem('task7', document.getElementById("7").value)
    console.log("task added to 07:00 AM")
    alert("task added to 07:00 AM 📌");
});

var btn8 = document.getElementById("btn-8");
btn8.addEventListener("click", function () {
    localStorage.setItem('task8', document.getElementById("8").value)
    console.log("task added to 08:00 AM")
    alert("task added to 08:00 AM 📌");
});

var btn9 = document.getElementById("btn-9");
btn9.addEventListener("click", function () {
    localStorage.setItem('task9', document.getElementById("9").value)
    console.log("task added to 09:00 AM")
    alert("task added to 09:00 AM 📌");
});

var btn10 = document.getElementById("btn-10");
btn10.addEventListener("click", function () {
    localStorage.setItem('task10', document.getElementById("10").value)
    console.log("task added to 10:00 AM")
    alert("task added to 10:00 AM 📌");
});

var btn11 = document.getElementById("btn-11");
btn11.addEventListener("click", function () {
    localStorage.setItem('task11', document.getElementById("11").value)
    console.log("task added to 11:00 AM")
    alert("task added to 11:00 AM 📌");
});

var btn12 = document.getElementById("btn-12");
btn12.addEventListener("click", function () {
    localStorage.setItem('task12', document.getElementById("12").value)
    console.log("task added to 12:00 PM")
    alert("task added to 12:00 PM 📌");
});

var btn13 = document.getElementById("btn-13");
btn13.addEventListener("click", function () {
    localStorage.setItem('task13', document.getElementById("13").value)
    console.log("task added to 01:00 PM")
    alert("task added to 01:00 PM 📌");
});

var btn14 = document.getElementById("btn-14");
btn14.addEventListener("click", function () {
    localStorage.setItem('task14', document.getElementById("14").value)
    console.log("task added to 02:00 PM")
    alert("task added to 02:00 PM 📌");
});

var btn15 = document.getElementById("btn-15");
btn15.addEventListener("click", function () {
    localStorage.setItem('task15', document.getElementById("15").value)
    console.log("task added to 03:00 PM")
    alert("task added to 03:00 PM 📌");
});

var btn16 = document.getElementById("btn-16");
btn16.addEventListener("click", function () {
    localStorage.setItem('task16', document.getElementById("16").value)
    console.log("task added to 04:00 PM")
    alert("task added to 04:00 PM 📌");
});

var btn17 = document.getElementById("btn-17");
btn17.addEventListener("click", function () {
    localStorage.setItem('task17', document.getElementById("17").value)
    console.log("task added to 05:00 PM")
    alert("task added to 05:00 PM 📌");
});

var btn18 = document.getElementById("btn-18");
btn18.addEventListener("click", function () {
    localStorage.setItem('task18', document.getElementById("18").value)
    console.log("task added to 06:00 PM")
    alert("task added to 06:00 PM 📌");
});

var btn19 = document.getElementById("btn-19");
btn19.addEventListener("click", function () {
    localStorage.setItem('task19', document.getElementById("19").value)
    console.log("task added to 07:00 PM")
    alert("task added to 07:00 PM 📌");
});

var btn20 = document.getElementById("btn-20");
btn20.addEventListener("click", function () {
    localStorage.setItem('task20', document.getElementById("20").value)
    console.log("task added to 08:00 PM")
    alert("task added to 08:00 PM 📌");
});

var btn21 = document.getElementById("btn-21");
btn21.addEventListener("click", function () {
    localStorage.setItem('task21', document.getElementById("21").value)
    console.log("task added to 09:00 PM")
    alert("task added to 09:00 PM 📌");
});

var btn22 = document.getElementById("btn-22");
btn22.addEventListener("click", function () {
    localStorage.setItem('task22', document.getElementById("22").value)
    console.log("task added to 10:00 PM")
    alert("task added to 10:00 PM 📌");
});

var btn23 = document.getElementById("btn-23");
btn23.addEventListener("click", function () {
    localStorage.setItem('task23', document.getElementById("23").value)
    console.log("task added to 11:00 PM")
    alert("task added to 11:00 PM 📌");
});

var btn24 = document.getElementById("btn-24");
btn24.addEventListener("click", function () {
    localStorage.setItem('task24', document.getElementById("24").value)
    console.log("task added to 12:00 AM")
    alert("task added to 12:00 AM 📌");
});


//get stored values from local storage
$('#7').val(localStorage.getItem("task7"));
$('#8').val(localStorage.getItem("task8"));
$('#9').val(localStorage.getItem("task9"));
$('#10').val(localStorage.getItem("task10"));
$('#11').val(localStorage.getItem("task11"));
$('#12').val(localStorage.getItem("task12"));
$('#13').val(localStorage.getItem("task13"));
$('#15').val(localStorage.getItem("task15"));
$('#15').val(localStorage.getItem("task15"));
$('#16').val(localStorage.getItem("task16"));
$('#17').val(localStorage.getItem("task17"));
$('#18').val(localStorage.getItem("task18"));
$('#19').val(localStorage.getItem("task19"));
$('#20').val(localStorage.getItem("task20"));
$('#21').val(localStorage.getItem("task21"));
$('#22').val(localStorage.getItem("task22"));
$('#23').val(localStorage.getItem("task23"));
$('#24').val(localStorage.getItem("task24"));


//clear tasks button
var clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener("click", function () {
    localStorage.clear()
    location.reload()
    alert("all tasks cleared ♻️")
});

