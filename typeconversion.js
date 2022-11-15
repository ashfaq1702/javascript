var age='3.14'
age= Number(age) //conversion is happening here
console.log(typeof age)

//typeof is a function used to check the data type 

let z=""
z= Boolean(z)
console.log(z,typeof z)

//when we try to convert an empty string to boolean then by default value is false
//a non empty string when converted into boolean then it gives true


var name="ashfaq"
name = Number(name)
console.log(name,typeof name)
// if we try to convert a word to a number which is not a string then we will get a NAN exception(not a number)