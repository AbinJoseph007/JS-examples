// method-----reduce

a=[1,2,3,4,5,6,7]

// find the highest number

highest=a.reduce((num1,num2)=> num1>num2?num1:num2)
console.log(highest);

// find the lowest number 

lowest=a.reduce((num1,num2)=>num1<num2?num1:num2)
console.log(lowest);

// find total sum

total=a.reduce((num1,num2)=>num1+num2)
console.log(total);