//[id,name,price,stock]
products=[
    [1,'hide and seek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'parleG',25,0],
    [5,'tiger',20,30],
    [6,'unibic',60,0],
    [7,'goodday',70,20]

]

// display all products
// pro=products.map(emp=>emp).forEach(emp => {console.log()});
allp=products.map(pro=>pro[1]) .forEach(pro => {console.log(pro);});

// display products whose price <Rs.50
prop=products.filter(pro=>pro[2]<50) .forEach(pro=>{console.log(pro[1]);})

// print price of oreo 
propi=products.find(pro=>pro[1]=='oreo') 
console.log(propi[2]);

prio=products.reduce((num1,num2)=>num1[2]>num2[2]?num1:num2)
console.log(prio[1]);

// outoff stock products
propop=products.filter(pro=>pro[3]==0).forEach(pro=>{console.log(pro[1]);})

// baesd on stock in descending order

por=products.sort((pro1,pro2)=>pro2[3]-pro1[3]).forEach(pro=>{console.log(pro[1]);})

// print products having maximum available stock
per=products.reduce((pro1,pro2)=>pro1[3]>pro2[3]?pro1:pro2)
console.log(per[1]);

// /is there any products can be purchased by of 10

def=products.some(pro=>pro[2]<10)
console.log(def?'yes':'no');

// is there any products in the range of 10 to 30 red

proo=products.filter(pro=>pro[2]>=10 && pro[2]<=30).forEach(pro=>{console.log(pro[1]);})
