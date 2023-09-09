document.addEventListener("DOMContentLoaded", function() {

function TimeFunction()  {
    const CurrentTime = new Date().getTime();

    document.getElementById("time-span-id").innerHTML= CurrentTime;
}
    setInterval(TimeFunction, 1000);


    const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const CurrentDay = new Date().getDay();
    const currentDayWord = daysOfTheWeek[CurrentDay];

    document.getElementById("day-span-id").innerHTML= currentDayWord;

  });



