const day= document.querySelector('.day_of_week');
const UTC= document.querySelector('.time_of_the_week');
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDatey = Date.now();
const currentDate = new Date();
const currentDayOfWeek = daysOfWeek[currentDate.getDay()];
const currentTime = currentDatey




UTC.textContent = currentTime;

day.textContent = currentDayOfWeek;
// const updateUtcTime = () => {
//     const currentUtcTime = new Date().toUTCString();
//     UTC.textContent = currentUtcTime;
// }

// setInterval(() => {
//     updateUtcTime();
// }, 1000);

// updateUtcTime();


console.log(day.innerHTML);
