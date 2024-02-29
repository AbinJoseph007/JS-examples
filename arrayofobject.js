weatherdata=[
    {district:'Thrissur',weather:32},
    {district:'Kottayam',weather:29},
    {district:'Palakkad',weather:34},
    {district:'Ernakulam',weather:33},
    {district:'Thrissur',weather:29},
    {district:'Kottayam',weather:30},
    {district:'Palakkad',weather:32},
    {district:'Ernakulam',weather:31}
]
//print district with its highest temparature
//output: {Thrissur:32, Kottayam:30,Palakkad:34,Ernakulam:33}

obj={}

for(let pro of weatherdata){
    dist=pro.district
    currentemp=pro.weather
    if(dist in obj){
     oldtemp=obj[dist]
     if(oldtemp>currentemp){
        obj[dist]=oldtemp
     }
     else{
        obj[dist]=currentemp
     }
 }
 else{
    obj[dist]=currentemp
 }
}
console.log(obj);
