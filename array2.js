expense= [12000,23000,40000,,55000,24000,10000,14000]
lowest = expense[0]
 
// find the lowest expense
for(let num of expense){
    // console.log(num);
    if(num<=lowest){
        lowest = num
    }
}
console.log(lowest);

console.log('-------------------------');

// find the highest expense
for(let num of expense){
    if(num>=lowest){
        lowest=num
    }
}
console.log(lowest);

// find the total expense

console.log('-------------------------');
sum=0

for(let num of expense){
    sum +=num
}
console.log(sum);

// w.a.p to check wheather 2 is present in the given array
// var arr=[10,11,12,3,4,56]