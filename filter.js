a=[10,11,12,13,14,15]

// display all even number from the given array =10,12,14

even=a.filter(num=>num%2==0)
console.log(even);

// display all numbers greater than 13

one=a.filter(num=>num>13)
console.log(one);


// some

b=a.some(num=> num>13)
console.log(b? 'yes':'no');
