//  student={
//      stdname:"abin",
//      stdno:39,
//      stdclass:"mearn",
//      stdrank:1,
//      stdplace:"alappuzha",
//  }

student={
    stdname:"brodie",
    stdclass:"10 C",
    stdclass:"9th",
}
console.log(student);

`stdrank`in student?console.log(`available`):student[`stdrank`]=`1st`
console.log(student);

Object.assign(student,{isvaccinated:true})
console.log(student)

// update

student.stdname=" ajay"
console.log(student);

student.stdname+=" ajay"
console.log(student);

// delete 

console.log(delete student.stdclass);
console.log(student);