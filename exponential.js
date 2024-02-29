// w.a.p to display numbers whose exponential is in the range 8 to 36
// user can input the power to find exponential for a particular number

// power =2                             3
// 1 4 9 16 25 36 49                   1 8  27 64 125
// output = 3 4 5 6                    2 3

power=2
i=1
low=8
up=36

while(i<=36){
    if(low<=i**power && i**power<=up){
        console.log(i);
    }
    // to purposefully stop a loop we can use break stmt
    if(i**power==up){
        break
    }
    i++ 
}
