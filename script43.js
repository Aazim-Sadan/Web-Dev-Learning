// Date and Time 

// Date Object always carry both "Date" and "Time" 

// Using Date method 

let currentDate = new Date(2024,11,2,11,45,23); // 0 to 11 (Month)
console.log(currentDate);


// Using timeStamp(integer number represent in "ms" from 1-1-1970

let currentDate1 = new Date(0) // 0 is time in ms
// 1 Day = 24 * 60 * 60 = 86400000ms
console.log(currentDate1);


// To get time in ms 

let currentDate2 = new Date().getTime()
console.log(currentDate2);

// 1724325245124 = total time ms 




// ==================================================================================

// Date and Time (Methods)

let completeDateAndTime = new Date();

// Get full Year 
console.log(completeDateAndTime.getFullYear());

// Get Month
console.log(completeDateAndTime.getMonth()); // 0 to 11

// Week Day 
console.log(completeDateAndTime.getDay()); // 0 to 6
// 0 - Sunday, 1 - Monday and so on

// Month Day
console.log(completeDateAndTime.getDate());

// Get Hour 
console.log(completeDateAndTime.getHours());

// Get Minute 
console.log(completeDateAndTime.getMinutes());

// Get Second 
console.log(completeDateAndTime.getSeconds());





