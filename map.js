// array-method - map

// array.map(variable=>task)

a=[10,11,12,13,14,15]

// w.a.p to print a new array having the squares of the given number

sq=a.map(num=>num**2)
console.log(sq);


console.log('---------------------------------');
// for of
for(num of a){
    console.log(num**2);
}

console.log('---------------------------------');
// foreach

a.forEach(num => {
    console.log(num**2);
});

console.log('---------------------------------');
// w.a.p to print a new array having the cube of the given number

sq1=a.map(num=>num**3)
console.log(sq1);

console.log('---------------------------------');

// w.a.p to create a new array having the numbers <=13 then increment or number>13 then decrement number 

b=a.map(num=>num<=13?num+1:num-1)
console.log(b);