products=[
    {pid:100,pName:'apple',band:'5g',price:120000,display:'led'},
    {pid:101,pName:'samsaung',band:'5g',price:45000,display:'led'},
    {pid:102,pName:'blackberry',band:'4g',price:50000,display:'led'},
    {pid:103,pName:'nokia',band:'3g',price:1200,display:'lcd'},
    {pid:104,pName:'motorola',band:'4g',price:10000,display:'lcd'}
]

//1. print product name only
dist={}
for(let pro of products){
    dist=pro.pName
    console.log(dist);
}
console.log('--------------------------------------------');
for(let prop of products){
    console.log(prop.pName);
}
console.log('--------------------------------------------');


pr=products.map(pro=>pro.pName).forEach(prop => console.log(prop));
console.log('--------------------------------------------');
//2. print all mobile details whose display is lcd

for(let pop of products){
    dis=pop.display
    if(dis=='lcd'){
        console.log(pop);
    }
}
console.log('--------------------------------------------');

// array method
products.filter(data=>data.display=='lcd').forEach(item => console.log(item) );
//3. print 5g mobile phone name
    
for(let pop of products){
    dis=pop.band
    if(dis=='5g'){
        console.log(pop.pName);
    }
}
console.log('--------------------------------------------');


products.filter(data=>data.band=='5g').forEach(item => console.log(item.pName) );


//4. sort mobile based on price

products.sort((data1,data2)=>data1.price-data2.price).forEach(items=> console.log(items));
console.log('--------------------------------------------');
//5. print costly mobile

costly=products.reduce((data2,data1)=>data2.price>data1.price?data2:data1)
console.log(costly.pName);

console.log('--------------------------------------------');
//6. print low cost mobile

costly=products.reduce((data2,data1)=>data2.price<data1.price?data2:data1)
console.log(costly.pName);