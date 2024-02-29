// *
// * *
// * * *
// * * * *
// * * * * *
// * * * *
// * * *
// * *
// *


for(row=1;row<=5;row++){
    str=''
    for(col=1;col<=row;col++){
        str=str+' *'
    }
    console.log(str);
}
for(row=1;row<=4;row++){
    str=''
    for(col=1;col<=7;col++){
     if(row==1 || row==5 ||col==1 ||col==5){
        str=str+' *'
     }
     else{
        str=str+' '
     }
}
console.log(str);
}