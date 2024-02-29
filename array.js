a=['apple','iphone','samsung','redmi','realme']

console.log(a);
for(i=0;i<a.length;i++){
    console.log(a[i]);
}

console.log('--------------------------------------');

for(let n in a){
    console.log(a[n]);
}

console.log('-------------------------------------');

for(let n in a){
    console.log(n);
}