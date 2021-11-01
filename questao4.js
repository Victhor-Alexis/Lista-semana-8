let alunos = [
    {
        nome: "Aluno1",
        idade: 18,
        mediaFinal: 7,
    },
    {
        nome: "Aluno2",
        idade: 17,
        mediaFinal: 10,
    },
    {
        nome: "Aluno3",
        idade: 16,
        mediaFinal: 3,
    },
    {
        nome: "Aluno4",
        idade: 19,
        mediaFinal: 8,
    },
    {
        nome: "Aluno5",
        idade: 21,
        mediaFinal: 5,
    },
    {
        nome: "Aluno6",
        idade: 35,
        mediaFinal: 6,
    },
]

const classStatistics = (alunos) => {
    /* i */

    let media = 0
    let desvio_p = 0

    // Media
    alunos.map(function(aluno) {
        media += aluno.mediaFinal
    })

    media = media/alunos.length

    // Desvio
    alunos.map(function(aluno) {
        desvio_p += (aluno.mediaFinal - media)**2
    })

    desvio_p = (desvio_p/alunos.length)**0.5

    console.log("Média: "+media+"; Desvio padrão: "+desvio_p)

    /* * * * */

    /* ii */

    let reprovados = alunos.filter(aluno => aluno.mediaFinal < 5)
    let aprovados = alunos.filter(aluno => aluno.mediaFinal >= 5)

    console.log("\nReprovados: ")
    reprovados.forEach(aluno => {
        console.log(aluno)    
    });

    console.log("\nAprovados: ")
    aprovados.forEach(aluno => {
        console.log(aluno)    
    });
    /* * * * */
}

classStatistics(alunos)

/* Alternativa b */

let addMencao = alunos => {
    //alunos.map(aluno => aluno["mencao"] = "lolipop")

    alunos.map(aluno => {
        let mencao

        if(aluno.mediaFinal >= 0 && aluno.mediaFinal < 5) {
            mencao = "RR"
        } 
        else if(aluno.mediaFinal >= 5 && aluno.mediaFinal < 7) {
            mencao = "MM"
        }
        else if(aluno.mediaFinal >= 7 && aluno.mediaFinal < 9) {
            mencao = "MS"
        }
        else if(aluno.mediaFinal >= 9 && aluno.mediaFinal <= 10) {
            mencao = "MS"
        }

        return aluno.mencao = mencao
    })
}

addMencao(alunos)

console.log("\n")
console.log(alunos)