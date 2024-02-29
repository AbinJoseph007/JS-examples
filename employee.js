employee =[ 
    [1000,'Neel','developer','kochi',25000,3],
    [1001,'Max','tester','TVM',20000,2],
    [1002,'MAxwell','QA','kochi',35000,4],
    [1003,'Vyom','QA','kochi',45000,5],
    [1004,'Laisha','tester','TVM',55000,7],
    [1005,'Aahan','developer','TVM',15000,1],
    [1006,'Aahil','QA','kochi',20000,2],
    [1007,'Shayan','developer','kochi',30000,3],
    [1008,'Nihaan','developer','TVM',25000,3]
]

// print all employee name 

// employeen=employee.map(n=>n[1].forEach(employe => {console.log(employe);}));

employee.map(emp=>emp[1]).forEach(employee => {console.log(employee);});

//print total numbers of employee

employee.filter(emp=> emp[2]=='developer').forEach(employee => {console.log(employee);});
console.log();

// salary
employee.filter(emp=>emp[4]>30000).forEach(employee => {console.log(employee);});

// laisha
laisha=employee.find(emp=>emp[1]=='Laisha').forEach(employee => {console.log(employee);});

// highest salary
higheste=employee.reduce((emp1,emp2)=>emp1[4]>emp2[4]?emp1:emp2)
console.log(higheste[1]);

// lowest

higheste=employee.reduce((emp1,emp2)=>emp1[4]<emp2[4]?emp1:emp2)
console.log(higheste[1]);

// total

total=employee.map((emp=>emp[4])).reduce((emp1,emp2)=>emp1+emp2)
console.log(total);

