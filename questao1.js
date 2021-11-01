/* Alternativa a */

const calculateIMC = (peso, altura) => peso / altura**2

/* * * * */

/* Alternativa b */

const generateUser = (nome, idade, email) => ({
    nome: nome,
    idade: idade,
    email: email
})

/* * * * */

/* Alternativa c */

let arr = [1,2,3,4,5,6,7,8,9,10] 

//let soPar = arr.filter(num => num % 2 == 0) Só assim podia?

const soPar = arr => {
    let arrPar = []

    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] % 2 == 0)
            arrPar.push(arr[i])
    }

    return arrPar
}

console.log(soPar(arr))

/* * * * */
