// w.a.p to find the sum of three numbers using arrow function
const add= (num1,num2,num3)=>num1+num2+num3
console.log(add(20,30,20));


// w.a.p to find the cube of given numbers using arrow function

const cube=(num)=>num**3
console.log(cube(3));

// w.a.p to find the given number is positive or not using arrow function 

const pn=(n)=>{
    return n>0?'positive': n==0? 'neither positive or negative':'negative'
}
console.log(pn(0));

// w.a.p to check the given number is mobile number or not

const num=(num1)=>{
    n=num1.length
    if(n==10){
        console.log('it is a mobile number');
    }
    else{
        console.log('its not a mobile number');
    }
}
num('1234567809')

// w.a.p to check the given mail is a gamil

const mail=(email)=>{
     if(email.endsWith('@gmail.com')){
        console.log('its an email');
     }
     else{
        console.log('its not an email');
     }
}
mail('abin@gmail.com')

// w.a.p to pcheck the given name starts with q

const na=(q)=>{
    if(q.startsWith('q') || q.startsWith('Q')){
      console.log('starts with q');
    }
    else{
        console.log('not starts with q');
    }
}
na('Quadrath')