accounts=[
    {
        acno:1000,ac_type:'savings',balance:45000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    },
    {
        acno:1001,ac_type:'current',balance:30000,transaction:[
            {
                to:1000,amount:1000,msg:'grossary',mode:'gpay'
            },
            {
                to:1002,amount:7000,msg:'gift',mode:'phonePay'
            },
            {
                to:1003,amount:10000,msg:'emi',mode:'neft'
            },
        ]
    },
    {
        acno:1002,ac_type:'fixed',balance:100000,transaction:[
            {
                to:1000,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1001,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    },
    {
        acno:1003,ac_type:'savings',balance:30000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1000,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    }
]

//1. total number of accounts

console.log('--------------------------------------------');
console.log('total number of ac' ,accounts.length);


//2. print account number whose ac_type is savings
console.log('--------------------------------------------');
for(let pop of accounts){
    dis=pop.ac_type
    if(dis=='savings'){
        console.log(pop.acno);
    }
}

accounts.filter(data=>data.ac_type=='savings').forEach(item => console.log(item.acno) );


//3.print the balance of accnount number 1000
console.log('--------------------------------------------');
for(let pop of accounts){
    dis=pop.acno
    if(dis==1000){
        console.log(pop.balance);
    }
}

console.log(accounts.find(data=>data.acno==1000).balance)
//4. print all gpay transactions
console.log('--------------------------------------------');


accounts.map(data=>data.transaction.flat().filter(item=>item.mode=='gpay').forEach(item => console.log(item)))



  
//5. print all transaction whose amount > 5000
console.log('--------------------------------------------');


accounts.map(data=>data.transaction).flat().filter(items=>items.amount>5000).forEach(ele => console.log(ele));
 
//6. print credit transaction of account 1002
console.log('--------------------------------------------');

credit=accounts.map(data=>data.transaction).flat().filter(items=>items.to==1002)
console.log(credit);
 
//7. print debit transaction of account 1002
console.log('--------------------------------------------');

debite=accounts.find(data=>data.acno==1002).transaction
console.log(debite);
//8. print transaction history of 1002
console.log('--------------------------------------------');

transist={
    credit:credit,
    debit:debite
}
console.log(transist);
//another method
console.log('--------------------------------------------');

history=[...credit,...debite]  //spread operator
console.log(history);

//9. print highest balance account details
console.log('--------------------------------------------');

highest=accounts.reduce((data1,data2)=>data1.balance>data2.balance?data1:data2)
console.log(highest);

