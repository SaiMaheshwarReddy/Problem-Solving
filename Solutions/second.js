var countSeniors = function (details) {
  let count = 0;

  for (const passenger of details) {
    const ageStr = passenger.substring(11, 13);
    const age = Number(ageStr);

    if (age > 60) {
      count++;
    }
  }

  return count;
};
const details = ["7868190130M7522", "5303914400F9211", "9273338290F4010"];

console.log(countSeniors(details));
