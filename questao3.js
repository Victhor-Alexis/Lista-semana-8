let unidade = prompt("Digite a unidade: ")

unidade = unidade.toUpperCase()
 
if (unidade == "CELSIUS" || unidade == "FAHRENHEIT" || unidade == "KELVIN") {
    let valor = prompt("Insira a quantidade de graus: ")

    if (isNaN(valor) == false) {
        switch (unidade) {
            case "CELSIUS":
                alert(`${valor} graus celsius é equivalente a ${valor * 9/5 + 32} graus fahrenheit e ${273 + valor*1} graus kelvin.`)
            break;

            case "FAHRENHEIT":
                alert(`${valor} graus fahrenheit é equivalente a ${(valor - 32)* 5/9} graus celsius e ${((valor - 32)* 5/9) + 273} graus kelvin`)
                break;
            
            case "KELVIN":
                alert(`${valor} graus kelvin é equivalente a ${valor - 273} graus celsius e ${(valor - 273) * 9/5 + 32} graus fahrenheit`)
                break;
        }
    } else {
        alert("Impossível fazer conversão!")
    }
} else {
    alert("Impossível fazer conversão!")
}
