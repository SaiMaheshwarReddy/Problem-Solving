// You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.
// For each index i, names[i] and heights[i] denote the name and height of the ith person.
// Return names sorted in descending order by the people's heights.
// Example 1:
// Input: names = ["Mary","John","Emma"], heights = [180,165,170] Output: ["Mary","Emma","John"] Explanation: Mary is the tallest, followed by Emma and John.
// Example 2:
// Input: names = ["Alice","Bob","Bob"], heights = [155,185,150] Output: ["Bob","Alice","Bob"] Explanation: The first Bob is the tallest, followed by Alice and the second Bob.
let getSortedNames = (arr1,arr2) => {
    let names = arr1
    let heights = arr2
    let detailsArray = []
    let sortedPersons = []
    let result = ""
    if(arr1.length === arr2.length){
        let n = arr1.length 
        for(let i = 0 ; i < n ; i++){
            let dObj = {
                name : arr1[i],
                height : heights[i]
            }
            detailsArray.push(dObj)
        }
        detailsArray.sort((a,b) => b.height - a.height)
        sortedPersons = detailsArray.map((item) => {
            return item.name
        })
        return sortedPersons
    }else{
        result = "please enter valid inputs"
    }
    return result
}

console.log(getSortedNames(["Mary","John","Emma"],[180,165,170]))
console.log(getSortedNames(["Alice","Bob","Bob"] , [155,185,150]))