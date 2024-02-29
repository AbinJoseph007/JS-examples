// cloisture porperty

globalproperty = 'global'
console.log(globalproperty);

const parent=()=>{
    let parentproperty = 'parent'
    console.log(`parent property is : ${parentproperty}`);

    const child=()=>{
        let childproperty = 'child'
        console.log(`child property is :${childproperty}`);
    
    }
    child()
}
parent()



