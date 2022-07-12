function contar() {
    var inicio = document.getElementById('txtinicio')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpasso')
    var res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
        res.innerHTML = `Impossível contar por faltar dados!`
    }
    else {
        res.innerHTML = `Contando... `
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (passo <= o) {
            window.alert(`Passo inválido! Considerando: PASSO como 1`)
            passo = 1
        }

        if (1 < f) { //contagem crescente
            for (var c = 1; c <= f; c += p) {
                res.innerHTML += `${c}🏃🏽 `
            }
        }
        else { //contagem decrescente
            for (var c = i; c >= f; c -= p) {
                res.innerHTML += `${c}🏃🏽 `
            }      
        }
        res.innerHTML += ` FIM!🏁`
    }
}