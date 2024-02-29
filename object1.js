employ={
    empid:1000,
    empname:"neel",
    empdesign:"developer",
    emplocation:"kochi",
    empsalary:20000,
    empexp:3
}
console.log(employ);
console.log(employ.empname);
console.log(employ["empname"]);




// w.a.p to print all keys in the given object
for(let key in employ){
    console.log(key);
}
console.log('-----------------------------------------');
// w.a.p to print all values in the given object
for(let key in employ){
    console.log(employ[key]);
}
console.log('-----------------------------------------');
// w.a.p to print all key:values in the given object
for(let key in employ){
    console.log(`${key}: ${employ[key]}`);
}

console.log('-----------------------------------------');

// w.a.p to check wheather employee location is present or not, if present print available else print not available

"emplocation" in employ?console.log('available'):console.log('not available');

//adding another key (add gender)

// employ["empgender"]="male"
// console.log(employ);

// w.a.p to check whether gender of the employ is present or not if present print available else add gender
console.log('-----------------------------------------');


"empgender" in employ?console.log('available'):employ["empgender"]="male";
console.log(employ);
"empgender" in employ?console.log('available'):employ["empgender"]="male";

