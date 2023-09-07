const day= document.querySelector('.day_of_week');
const UTC= document.querySelector('.time_of_the_week');
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDate = new Date();
const currentDayOfWeek = daysOfWeek[currentDate.getDay()];
const currentUtcTime = new Date().toUTCString();



day.textContent = currentDayOfWeek;
UTC.textContent = currentUtcTime

console.log(day.innerHTML);
