// w.a.p to check whether the given three digit number is amstrong or not 
// 115 = 1*3 + 5**3+3* = 1+125+27 =153



// important 


num =152
temp=
rem=0
sum=0

while(num>0){ //153>0       //15>0   // 1>0
   rem= num%10 //153%10 =3   //15%10=5    //1%10=1
   sum= sum=rem**3  //0+27    // 27+125=152     //152+1=153
   num= parseInt(num/10)  //153/10=15    //15/10=1     //1%10=0
}
if(temp==sum){
    console.log('number is a amstrong number');
}
else{
    console.log('not a amstrong number');
}