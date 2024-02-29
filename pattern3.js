//  * * * *
//  * * *
//  * *
//  * 

for(row=4;row>=1;row--){
    str=''
    for(col=1;col<=row;col++){
        str=str+'*'
    }
    console.log(str);
}

// 1 2 3 4
// 1 2 3
// 1 2
// 1

for(row=4;row>=1;row--){ //4>1
    str=''
    for(col=1;col<=row;col++){ //1<=4 2<=4 3<=4 4<=4
        str=str+col //1 2 3 4
    }
    console.log(str);
}

//    *
//   * *
//  * * *
// * * * *


for(row=1;row<=4;row++){
    str=''
    for(spa=4;spa>row;spa--){
        str=str+' '
    }
    for(col=1;col<=row;col++){
        str=str+' *'
    }
    console.log(str);
}

console.log('--------------------------------------');


// homework

for(row=1;row<=4;row++){
    str=''
    for(spa=4;spa>row;spa--){
        str=str+' '
    }
    for(col=1;col<=row;col++){
        str=str+' *'
    }
    console.log(str);
}
for(row=3;row>=1;row--){
    str=''
    str=''
    for(spa=4;spa>row;spa--){
        str=str+' '
    }
    for(col=1;col<=row;col++){
        str=str+' *'
    }
    console.log(str);
}


// --------------------------------