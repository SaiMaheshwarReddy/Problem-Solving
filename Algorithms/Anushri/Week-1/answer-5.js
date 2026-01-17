let words = ["gin","zen","gig","msg"]



// let morshCodeFunction=function(words){
//     const codes=[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

//     const storeCode = new Set();
    
//     for (const word of words) {
//         let morseWord = '';
//         for (const char of word) {
//             morseWord  += codes[char.charCodeAt(0) - 'a'.charCodeAt(0)];
//         }
//         storeCode.add(morseWord);
//     }
    
//     return storeCode.size;
// }

let morshCodeFunction=function(words){
const morseCode = { a: ".-", b: "-...", c: "-.-.", d: "-..", e: ".", f: "..-.", g: "--.", h: "....", i: "..", j: ".---", k: "-.-", l: ".-..", m: "--", n: "-.", o: "---", p: ".--.", q: "--.-", r: ".-.", s: "...", t: "-", u: "..-", v: "...-", w: ".--", x: "-..-", y: "-.--", z: "--.." }
const codes = new Set(words.map(i=>i.split('').map(i=>morseCode[i]).join('')));
return codes.size;

}
const a = morshCodeFunction(words);
console.log(a);



