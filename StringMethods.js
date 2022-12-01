let userName='Ashfaq Adeni'
console.log(userName.length)  //length of string

let firstLetter=userName.charAt(0) //returns a particular character
console.log(firstLetter)

console.log(userName.indexOf("A")) //displays the index of an element which occurs first

console.log(userName.lastIndexOf("A")) //displays the index of elements which occurs at last time

let myString='    Ashfaq'
console.log(myString.trim()) //removes unwanted spaces
console.log(myString.toLocaleUpperCase().trim()) //upper case
console.log(myString.toUpperCase().trim())   //upper case



console.log(myString.toLowerCase().trim()) //lower case
console.log(myString.toLocaleLowerCase().trim()) //lower case


let phoneNumber="123-456-789"
console.log(phoneNumber.replaceAll("-",""))  //replaces existing content with given content