//[ no, district,  +ve cases,  death rate,  curred rate,  1st dose vaccine,  2nd dose vaccine]
covid = [
    [1,  'Ernakulam',  34000,  2000,  23000,  20000,  2000],
    [2,  'Idukki',     14000,  3000,  25000,  30000,  1000],
    [3,  'Thrissur',   24000,  4000,  33000,  24000,  2500],
    [4,'Pathanamthitta',20000, 2000,  45000,  22000,  1500],
    [5,  'Kozhikode',   44000,  5000,  12000, 21000,  500],
    [6,  'Palakkad',   12000,  1000,  20000,  23000,  3400],
    [7,  'Kottayam',  27000,  1500,  27000,  14000,  1000],
    [8,  'Kollam',    14000,  2500,  25000,  18000,  2700]

]
//1. district having Highest +ve case 
covi=covid.reduce((num1,num2)=>num1[2]>num2[2]?num1:num2)
console.log(covi);

//2. district having Highest 1st dose vaccine
covi=covid.reduce((num1,num2)=>num1[5]>num2[5]?num1:num2)
console.log(covi);

//3. district having lowest death rate
covi=covid.reduce((num1,num2)=>num1[3]<num2[3]?num1:num2)
console.log(covi);

//4. sort data with +ve case in descending order
 cov=covid.sort((pro1,pro2)=>pro2[2]-pro1[2]).forEach(pro=>{console.log(pro[1]);})
 console.log('-------------------------------------------');

//5. is district with +ve cases > 15000
def=covid.some(pro=>pro[2]<15000)
console.log(def?'yes':'no');
console.log('-------------------------------------------');
//6. sort data with 1st dose vaccine decending order
cov=covid.sort((pro1,pro2)=>pro2[5]-pro1[5]).forEach(pro=>{console.log(pro[1]);})
console.log('-------------------------------------------');
//7. Print Thrissur details
propi=covid.find(pro=>pro[1]=='Thrissur') 
console.log(propi);
console.log('-------------------------------------------');
//8. Print total number of positive cases

total=covid.map((emp=>emp[2])).reduce((emp1,emp2)=>emp1+emp2)
console.log(total);
console.log('-------------------------------------------');
//9. Print total number of curred cases
total=covid.map((emp=>emp[4])).reduce((emp1,emp2)=>emp1+emp2)
console.log(total);
console.log('-------------------------------------------');
//10. Print curred cases in Idukki
propi=covid.find(pro=>pro[1]=='Thrissur') 
console.log(propi[4]);
