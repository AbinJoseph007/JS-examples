// w.a.p to check whether a person is eligible to vote

var age=19
    if(age>=18){
        console.log(`eligible to vote`);
    }
    else{
        console.log(`not eligible to vote`);
    }

    // ternary operator
    console.log(age>=18?'eligible':'not eligible');

    // w.a.p to check a given number is positive or negative
   

    num=0
    if(num>0){
        console.log(`the given number is positive`);
    }
    else if(num==0){
        console.log(`neither positive or negative`);
    }
    else{
        console.log(`the given number is negative`);
    }

     // w.a.p to print the largest among the given two numbers

     x=5
     y=10
     if(x>y){
        console.log(`print x`);
     }
     else{
        console.log(`print y`);
     }

    //  w.a.p to the second largest number among the 3  given number and also sort the descending order

    num1=4
    num2=6
    num3=8
    if(num1>num2 && num1>num3){
        if(num2>num3){
            console.log(`${num2} is the second largest`);
            console.log(`desceding orde ${num1} ${num2} ${num3}`);
        }
        else{
            console.log(`${num3} is the second largest`);
            console.log(`desceding orde ${num1} ${num3} ${num2}`);
        }
    }
    else if(num2>num1 && num2>num3){
        if(num1>num3){
            console.log(`${num1} is the second largest`);
            console.log(`desceding orde ${num2} ${num1} ${num3}`);
        }
        else{
            console.log(`${num3} is the second largest`);
            console.log(`desceding orde ${num2} ${num3} ${num1}`);
        }
    }
    else if(num3>num1 && num3>num2){
        if(num1>num2){
            console.log(`${num1} is the second largest`);
            console.log(`desceding orde ${num3} ${num1} ${num2}`); 
        }
        else{
            console.log(`${num2} is the second largest`);
            console.log(`desceding orde ${num3} ${num2} ${num1}`);
        }
    }
    else{
        console.log(`all are equal`);
    }

    //  w.a.p to print 'fizz' if the given number is divisible by 3
                                //  'buzz' if the given number is divisible by 5
                                // 'FIZZBUZZ' if the given number is divisible by 15

    num=25
    if(num%15==0){
        console.log(`FIZZBUZZ`);
    }
    else if(num%5==0){
        console.log(`buzz`);
    }
    else if(num%3==0){
        console.log(`fizz`);
    }
    else{
        console.log(`not divisible by 3,5,15`);
    }
         
    