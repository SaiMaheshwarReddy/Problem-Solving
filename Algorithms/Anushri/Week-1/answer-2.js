let details = ["7868190130M7522","5303914400F9211","9273338290F4010"];

const passengerAge =function(details){
return details.map(x=>x.slice(11,13)).filter(x=>x>60).length;

}

const result = passengerAge(details);
console.log(result);

// const str = "5303914400F9211";
// const ageStr = str.slice(11,13); // Extract characters from position 11 to 12
// console.log(ageStr); // Output: "75"