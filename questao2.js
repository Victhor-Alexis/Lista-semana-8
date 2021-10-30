// Quem foi o gênio que escreveu o texto desta questão? hahaha

let Arthur = {
    paoDeQueijo: false,
    pet: true,
    carteiraDeTrabalho: true,
    relogio: 17
} 

let desdobramento = (paoDeQueijo, pet, carteiraDeTrabalho, relogio) => {
    let vencerEduardo = () => paoDeQueijo
    let vencerGabriel = () => (pet && vencerEduardo())
    let vencerFelipe = () => (carteiraDeTrabalho && vencerGabriel())
    let entrarNaSurdina = () => relogio == 18

    return vencerFelipe() || entrarNaSurdina()
}

desdobramento(Arthur.paoDeQueijo, Arthur.pet, Arthur.carteiraDeTrabalho, Arthur.relogio) ? console.log("Arthur venceu a GP.") : console.log("Arthur não venceu a GP.")
