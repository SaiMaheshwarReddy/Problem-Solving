let s = "codeleet"
let indices = [4,5,6,7,0,2,1,3]

const shuffled =function(s,indices){
    let data=[]
for (let i=0;i< s.length; i++){
data[indices[i]]=s[i]
}
return data.join("");
}

const result = shuffled(s,indices);
console.log(result);