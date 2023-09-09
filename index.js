document.addEventListener("DOMContentLoaded", function() {
    const DateTime = new Date();

const CurrentTime = new Date().getTime();


console.log(CurrentTime)

const formattedTime = new Date(CurrentTime).toLocaleString();

console.log(formattedTime);

//var TimeElement = document.getElementsByClassName("time-div")

//document.querySelector(".data-item[class='time-div']").innerHTML = CurrentTime;
 document.getElementById("time-span-id").innerHTML= CurrentTime;
  });




  const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const CurrentDay = new Date().getDay();
  
  const currentDayWord = daysOfTheWeek[CurrentDay];

  document.getElementById("day-span-id").innerHTML= currentDayWord;