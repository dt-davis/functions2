function add (x, y){
    return x + y
}

console.log(add(2,4))

function multiply ( x, y){
    let total = 0
    for (let counter = 0; counter < y; counter ++){
        total = add(total, x)
    }
    return total
}

console.log(multiply(6,4))
console.log(multiply(2,8))

function power(x,y){
    let total = 1
    for (let counter = 0; counter <= y; counter++){
        total += total * (multiply(x,y))
        console.log(total)
    }
    return total
}

console.log(power(2,8))
console.log(power(3,4))