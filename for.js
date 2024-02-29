// w.ap to display from 1 to 10 using for loop

for(i=1;i<=10;i++){
    console.log(i);
}
console.log('------------------------------------------');
// w.a.p to display from 10 to 1 using for loop 

for(i=10;i>=0;i--){
    console.log(i);
}

console.log('------------------------------------------');
// w.a.p to find the factorial of a given number

num=4
fact=1
for(i=1;i<=4;i++){
    fact=fact*i
}
console.log(fact);

console.log('------------------------------------------');
// w.a.p to check wheather a given number is prime or not--- factorial 1 or that number

num=4
temp=0
count=0

for(i=1;i<=num;i++){
    temp = num%1
    if(temp==0){
        count++
    }
}
if(count==2){
    console.log('prime');
}
else{
    console.log('not prime');
}

