// while loop repeats something untill the condition in it becomes false!
let i = 0
while (i < 100) {
    if (i == 0) {
        console.log(0, " is a whole number")
    }
    else if (i % 2 == 0) {
        console.log(i, "is even")
    }
    else {
        console.log(i, "is odd")
    }
    i = i + 1
}