// w.a.p to find the GCD/HCF of a given two numbers 

// 12 = 1 2 3 4 6 12
// 28 = 1 2 4 7 14 28
// cf = 1 2 4
// hcf = 4

num=12 //1 2 3 6
num2=28 // 1 2 4

for(i=1;i<=num && i<num2 ; i++){  // 1<6 1<4
    if(num%i==0 && num2%i ==0){
        gcd=i
    }
}
console.log(gcd);