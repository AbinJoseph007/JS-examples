sent="here we go"

// print all vowels from the given string
vowe=['a','e','i','o','u','A','E','I','O','U']
console.log(vowe);

charact=sent.split('')
console.log(charact);

for(char of charact){
    if(vowe.includes(char)){
        console.log(char);
    }
}

// another method
console.log('-------------------------------------------');

Array.from(sent).filter(char=>vowe.includes(char)).forEach(item=>{console.log(item);})
