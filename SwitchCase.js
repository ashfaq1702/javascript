//Switch case is an alternative of else-if ladder, it is much effecient than else-if ladder


let grade = 'pizza'
switch (grade) {
    case 'A':
        console.log('Great')
        break
    case 'B':
        console.log('Good')
        break
    case 'C':
        console.log('okay')
        break
    case 'D':
        console.log('barely passed')
        break
    case 'F':
        console.log('failed!')
        break
    default:
        console.log(grade, 'not valid')
        break
}