// International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows:
// 'a' maps to ".-",
// 'b' maps to "-...",
// 'c' maps to "-.-.", and so on.
// For convenience, the full table for the 26 letters of the English alphabet is given below:
// [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
// Given an array of strings words where each word can be written as a concatenation of the Morse code of each letter.
// For example, "cab" can be written as "-.-..--...", which is the concatenation of "-.-.", ".-", and "-...". We will call such a concatenation the transformation of a word.
// Return the number of different transformations among all words we have.
// Example 1:
// Input: words = ["gin","zen","gig","msg"] Output: 2 Explanation: The transformation of 
// each word is: "gin" -> "--...-." "zen" -> "--...-." "gig" -> "--...--." "msg" -> "--...--."
//  There are 2 different transformations: "--...-." and "--...--.".
// Example 2:
// Input: words = ["a"] Output: 1

const getDistinctCombinations = (words) => {
    //transform the given words into morsCode
    //get the different combinations
    function getMorseCodeOfWord(str){
        let morseArray = [".-","-...","-.-.","-..",".","..-.","--.","....","..",
        ".---","-.-",".-..","--","-.","---",".--.","--.-",".-.",
        "...","-","..-","...-",".--","-..-","-.--","--.."]
 
        let alphasObj = {a:0 , b:1 , c:2 , d:3 , e:4 , f:5 , 
            g:6 , h:7 ,  i:8 , j:9 , k:10 , l:11 , m : 12, n : 13, o : 14,
            p:15 , q:16, r:17 ,s:18,t:19 , u:20 , v:21, w:22,x:23, y:24,z:25} 

           let input = str.split('')
           let convertedCode = ""
           for (let word of input){
               convertedCode += morseArray[alphasObj[word]] 
           }
           return convertedCode
    }
    let transformCollection = {}
    for(let word of words){
        let msCode = getMorseCodeOfWord(word)
        if(!transformCollection.hasOwnProperty(msCode)){
            transformCollection[msCode] = true
        }
    }
    let result = Object.keys(transformCollection).length
   
     return result
    
}

let wordsArr1 = ["gin","zen","gig","msg"] 
let wordsArr2 = ["a"] 

console.log(getDistinctCombinations(wordsArr1))
console.log(getDistinctCombinations(wordsArr2))