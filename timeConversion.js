function timeConversion(s) {
    let amPM = s.charAt(8); // charAt 8 = A
    let militaryHour = "";
    if (amPM == "A") {
        if (s.substring(0, 2) == "12") {
            militaryHour = "00";
        } else {
            militaryHour = s.substring(0, 2);
        }
    } else {
        if (s.substring(0, 2) == "12") {
            militaryHour = s.substring(0, 2);
        } else {
            militaryHour = parseInt(s.substring(0, 2), 10) + 12;
        }
    }
    return console.log(militaryHour + s.substring(2, 8));
}


timeConversion("07:05:45PM");
timeConversion("07:05:45AM");
timeConversion("12:05:45PM");
timeConversion("12:05:45AM");


//1.) 12 AM -> 00
//2.) 1 AM to 12PM => do nothing
//3.) 1PM to 11PM take hour add 12