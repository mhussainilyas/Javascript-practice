// ============================
//        Date Object
// ============================

// -------- Creating a Date Object ---------

// 1. Current Date and Time:
const now = new Date();
console.log(now);

// 2. Specific Date and Time:
// const specific_date = new Date("2024-12-26");
const specific_date = new Date("2024-12-25T10:30:00");
console.log(specific_date);

// 3. Using Year, Month, Day, etc.:
// Months are 0-based (0 = January, 11 = December)
const date_component = new Date(2024, 11, 26, 10, 44, 0); 
console.log(date_component);

// 4. Using Timestamps (Milliseconds since Unix Epoch):
// const time_stamp = Date.now(); // getting time_stamp
// const time_stamp = + new Date(); // getting time_stamp
// const time_stamp = now.getTime(); // getting time_stamp
const time_stamp = new Date().valueOf(); // getting time_stamp
const date = new Date(time_stamp);
console.log(date);

// ============================
//  Methods of the Date Object
// ============================

// ------- A. Getter Methods -------

// 1. getFullYear()
// Returns the 4-digit year
console.log(now.getFullYear());

// 2. getMonth()
// Returns the month (0-based).
console.log(now.getMonth());

// 3. getDate()
// Returns the day of the month (1–31).
console.log(now.getDate());

// 4. getHours()
// Returns the current hour (1–12).
console.log(now.getHours());

// 5. getMinutes()
// Returns the current minute (0–60).
console.log(now.getMinutes());

// 6. getSeconds()
// Returns the current second (0-60).
console.log(now.getSeconds());

// 7. getMilliseconds()
// Returns the current value of millsecods.
console.log(now.getMilliseconds());

// ------- B. Setter Methods -------

// 1. setFullYear(year)
// sets the 4-digit year
now.setFullYear(2025);
console.log(now);

// 2. setMonth(month)
// sets the month (0-based).
now.setMonth(0);
console.log(now);

// 3. setDate(day)
// sets the day of the month (1–31).
now.setDate(26);
console.log(now);

// 4. setHours(hour)
// sets the current hour (1–12).
now.setHours(11);
console.log(now);

// 5. setMinutes(minute)
// sets the current minute (0–60).
now.setMinutes(32);
console.log(now);

// 6. setSeconds(second)
// sets the current second (0-60).
now.setSeconds(54);
console.log(now);

// 7. setMilliseconds(millisecond)
// sets the current value of millsecods.
now.setMilliseconds(677);
console.log(now);

// ------- C. Utility Methods -------

// 1. toISOString()
// Converts the date to an ISO 8601 string.
console.log(now.toISOString());

// 2. toDateString()
// Returns a readable date string.
console.log(now.toDateString());

// 3. toTimeString()
// Returns a readable time string.
console.log(now.toTimeString());

// 4. getTime()
// Returns the timestamp (milliseconds since 1970).
console.log(now.getTime());