let names = ["Mary","John","Emma"]
let heights = [180,165,170]



const sortHeight = function (names,heights){
const data =[]
for(let i=0; i < names.length;i++){
data.push({name:names[i], height:heights[i]});
}

data.sort((a,b)=>b.height-a.height);
const sortData = data.map(a=>a.name);
return sortData;
}

const result = sortHeight(names,heights);
console.log(result)