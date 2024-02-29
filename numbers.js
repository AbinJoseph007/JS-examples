numbers=[[10,20,[50,60]],[65,10,2],[[18,14],21,11],[99,2,6]]

// find numbers greater than 50

console.log(numbers.flat(2).filter(num=>num>50));
// find the largest number
console.log('-------------------------------------------');
// large=numbers.reduce((num1,num2)=>num1>num2?num1:num2)
// console.log(large[0]);
console.log(numbers.flat(2).reduce((num1,num2)=>num1>num2?num1:num2))
// find the smallest number 
console.log('-------------------------------------------');
console.log(numbers.flat(2).reduce((num1,num2)=>num1<num2?num1:num2))

// find the total sum
console.log('-------------------------------------------');
console.log(numbers.flat(2).reduce((num1,num2)=>num1+num2))