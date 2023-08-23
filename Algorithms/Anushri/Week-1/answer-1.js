let word1 = ["ab", "c"]
let word2 = ["a", "bc"]
let word3 = ["a", "cb"]
let word4 = ["ab", "c"]
let word5  = ["abc", "d", "defg"]
let word6 = ["abcddefg"]


const checkEqualString = function(word1,word2){
return word1.join("") === word2.join("");
}

const result1 = checkEqualString(word1,word2); // true
const result2 = checkEqualString(word3,word4); // false
const result3 = checkEqualString(word5,word6); // true

console.log(result1,result2,result3);