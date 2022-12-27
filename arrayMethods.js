let arr = ['red', 15, null, true]
for (let i = 0; i < arr.length; i++) {                  //implementing linear search in array
    console.log(arr[i])
}

// some useful array methods

console.log("length is", arr.length) //returns length
let myarr = arr.pop() //removes last element
console.log("last element of array ", myarr)
console.log(arr)

arr.push("ash")     //pushes an element at the end of array
console.log(arr)

arr.shift()             //removes first element
console.log(arr)


arr.unshift('john')     //pushes an element at the starting of array
console.log(arr)

console.log(typeof (arr.toString())) //arr.tostring() converts array to String

console.log(arr.sort())             //converts each and every element to a string and then sorts an array in according to the starting letter(dictionary order)