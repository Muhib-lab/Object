// MAKING An OBJECT

var a = {
    name : 'Muhib',
    age : 23,
    institute : 'SAIMS',
    contact : +923463334943,
    learning : true
}
console.log(a)
console.log(a.name)
console.log(a.age)

a.name = 'Ghazali'    //update name
console.log(a)

a.stu = 'Final year'  //adding
console.log(a)

var check = 'stu' in a  //checking property is in object or not
console.log(check)

delete a.learning    //delete property
console.log(a)




