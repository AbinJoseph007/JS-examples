// w.a.p to check wheather 2 is present in the given array

var arr=[10,11,12,2,4,56]

searchitem=27
ispresent=false
for(let num of arr){
    if(num==searchitem){
        ispresent=true
        break;
    }
}
console.log(ispresent?'present':'not present');
 
// print the output 

input =[4,5,6]
// output=[11,10,9]

output =[]
sum=0

for(let num of input){
    sum+=num
}
for(let num of input){
    output.push(sum-num)
}
console.log(input);
console.log(output);

// 


// w.a.p to print duplicate elemens in an array

// a[10,20,30,20,30,40,50,60,10] = an : 10 20 30

a=[10,20,30,20,30,40,50,60,10]

for(i=0;i<a.length;i++){
    for(j=i+1;j<a.length;j++){
        if(a[i]==a[j]){
            ispresent=true
            console.log(a[i]);
        }
    }
}
if(ispresent==false){
    console.log('not duplicate');
}

// w.a.p to print pairs whose sum is 6 : ans : (2,4)

b=[2,3,4,5]
pairsum=6
low=0
up=b.length-1
currsum=0
ispresent=false
count=0
while(low<up){
    count++
    currsum=b[low]+b[up]

    if(currsum==pairsum){
        ispresent=true
        console.log(`(${b[low]},${b[up]})`);
        low++
    }
    else if(currsum<pairsum){
        low++
    }
    else if(currsum>pairsum){
        up--
    }
}
console.log(count);
ispresent&&console.log('no such pair');



