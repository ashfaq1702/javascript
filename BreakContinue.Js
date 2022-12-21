// break= break the flow
// continue= skips the current iteration
let i = 1
let sum = 0
while (i <= 10) {
    if (i > 0) {
        sum = sum + i
    }
    else {
        break
    }
    console.log(sum)
    i = i + 1
}