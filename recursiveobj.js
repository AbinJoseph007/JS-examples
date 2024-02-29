pattern="ABCBBACAA"

// W.A.P to print first recursive letter-b

cha=pattern.split('')
console.log(cha);

obj={}

for(let pri of cha){
    if(pri in obj){
      console.log('first recurive letter :',pri);  
      break; 
    }
    else{
        obj[pri]=1
    }
}
