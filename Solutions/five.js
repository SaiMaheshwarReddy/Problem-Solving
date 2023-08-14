var uniqueMorseRepresentations = function (words) {
  const morseMapping = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];

  function getMorseCode(word) {
    let morseCode = "";
    for (let i = 0; i < word.length; i++) {
      const charIndex = word.charCodeAt(i) - "a".charCodeAt(0);
      morseCode += morseMapping[charIndex];
    }
    return morseCode;
  }

  const uniqueTransformations = new Set();

  for (const word of words) {
    uniqueTransformations.add(getMorseCode(word));
  }

  return uniqueTransformations.size;
};
console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]));
