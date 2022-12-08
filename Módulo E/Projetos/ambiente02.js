function calcular() {

var numero1 = document.getElementById('numero1')
valor1 = Number(numero1.value)

var numero2 = document.getElementById('numero2')
valor2 = Number(numero2.value)

if (numero1.value.length == 0 || numero2.value.length == 0) {

    window.alert('Por favor insira um valor na caixa!')
} else {
        res.innerHTML = `Resposta da tabuada... <br>`
        var v2 = 1
        for (var tab = valor1; tab < valor1 * valor2; v2++,   tab = valor1 * v2 ) {
            res.innerHTML += `${valor1} x ${v2} = ${tab} <br>`
        }
            res.innerHTML += `${valor1} x ${v2} = ${tab}`
    }
}