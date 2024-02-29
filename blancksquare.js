for(row=1;row<=5;row++){
    str=''
    for(col=1;col<=5;col++){
        if(row==1|| row==5 ||col==1 ||col==5){
            str=str+' *'
        }
    else{
        str=str+'  '
    }
}
    console.log(str);
}

console.log('--------------------------------------');


for(row=1 ;row<=5 ;row++){
    str=''
    for(col=1;col<=5 ;col++){
        if(col==1 || row==5 || row==col){
            str=str+' *'
        }
        else{
            str=str+ '  '
        }
    }
    console.log(str);
}

console.log('--------------------------------------');

for(row=1;row<=4;row++){
    str=''
    for(col=1;col<=row;col++){
       if((row+col)%2==0){
        str=str+'1'
       }
       else{
        str=str+'0'
       }
    }
    console.log(str);
}

