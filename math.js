// a bunch of functions which help us to make changes with functions

let x=3.1415
x=Math.round(x) //round helps us to round off a decimal number 
console.log(x)

let y=5.95
let z=-5.80
y=Math.floor(y) // rounds down and returns the largest integer less than or equal to a given number.
z=Math.floor(z)
console.log(y)
console.log(z)

let a=0.95
a=Math.ceil(a)
 //function always rounds up and returns the smaller integer greater than or equal to a given number.
console.log(a)

let ag=Math.pow(2,2) // returns power result
let yz=Math.sqrt(4)// returns square root
console.log(ag)
console.log(yz)

let m= -9.33
m=Math.abs(m) // always returns positive number
console.log(m)

let n=null
n= Math.abs(n) // output: 0
console.log(n)

let l="hi"
l=Math.abs(l) // NAN exception
console.log(l)
