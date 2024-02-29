text = 'hai hello all hello world'
///////////////////////
console.log('convert the text into an array of words');

let character = text.split(" ");
console.log(character);



//\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\
// create an empty object

obj={}

// 
// fetch each words from array
for(let char of character){
    if(char in obj){
      obj[char]+=1
    }
    else{
        obj[char]=1
    }
}
console.log(obj);

console.log('------------------------------------------------');


// split way

wc={}

text.split(' ').forEach(item => item in wc?wc[item]+=1:wc[item]=1);
console.log(wc);


console.log('------------------------------------------------');

numArray=[10,20,30,40,30,20,50,30,60,70,10,40,80]

// find the number count

obj={}

for(let num of numArray){
    if(num in obj){
        obj[num]+=1
    }
    else{
        obj[num]=1
    }
}
console.log(obj);

console.log('------------------------------------------------');


nc={}

numArray.forEach(item =>item in nc?nc[item]+=1:nc[item]=1);
console.log(nc);


