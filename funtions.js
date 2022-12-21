// Good for code reusability, life would've been tough for a programmer without funtions

let age, name                                                         //declaring variables

function happyBirthday(age, name) {                                  //declaring a functon with arguments
    console.log('happy', age, 'birthday', name)
}

happyBirthday(24, 'lexmon-laudamon')                                 //calling of a funtion


// return type
let height, width

function getArea(height, width) {
    return height * width
}

console.log(getArea(10, 20))