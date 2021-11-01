let num = prompt("Insira um número: ")

const quadrados = num => {
    if (Number.isInteger(num ** 0.5)) {
        return ({
            anterior: (num ** 0.5 - 1) ** 2,
            atual: parseInt(num),
            posterior: (num ** 0.5 + 1) ** 2
        })
    } else {
        return -1
    }
}

console.log(quadrados(num))