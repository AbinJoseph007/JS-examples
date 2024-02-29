var car={
    name:"benz",
    model:"zedan",
    manufacturer:"M benz",
    price:"1cr"
}
console.log(car);

// display car name and manufacturer name

console.log(`car name is ${car.name}\n manufacturer name ${car.manufacturer}`)
console.log('-----------------------------------------');

// check "model" key is available , if yes then display the value
"model" in car?console.log('available'):console.log('not available');
console.log('-----------------------------------------');

// add "varient" key to car with value as "manual"

car.varient=["maual"]
console.log(car);
console.log('-----------------------------------------');

// insert another value "automatic" to the "varient" key

car.varient.push("automatic")
console.log(car);
console.log('-----------------------------------------');

// add "color" key to car with values "red","blue","white"

car.color=["red","blue","white"]
console.log(car);
console.log('-----------------------------------------');
