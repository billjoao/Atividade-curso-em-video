//pegar valores
let num = document.getElementById('txtnum')
let log = document.getElementById('select')
let res = document.getElementById('res')
let vetor = []

function isNumero(n){
if (Number(n) > 1 && Number(n) < 100) {
    return true
}else{
    return false
}
}

function inLista(n, vetor){
if (vetor.indexOf(Number(n)) != -1) {
    return true
}else{
    return false
}
}

function adicionar() {
//verificar se sao validos
if (isNumero(num.value) && !inLista(num.value, vetor)) {
    vetor.push(Number(num.value))
    //adiconar ao select
    let item = document.createElement('option')
    item.text = `Valor ${num.value} adicionado`
    log.appendChild(item) 
    res.innerHTML = ''
}else{
    window.alert('valor ja encotrado na lista ou inválido')
}
num.value = ''
num.focus()
}

function analizar() {
    if (vetor.length == 0) {
        window.alert('impossivel analizar, tente adicionar numeros')
    } else {
        let tot = vetor.length
        let maior = vetor[0]
        let menor = vetor[0]
        let soma = 0
        let media = 0
        for (let pos in vetor) {
                soma += vetor[pos]
            if (vetor[pos] > maior)
                maior = vetor[pos]
            if (vetor[pos] < menor)
                menor = vetor[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Voce digitou ${tot} valores</p>`
        res.innerHTML += `<p>O maior valor é o ${maior}</p>`
        res.innerHTML += `<p>O menor valor é o ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma} </p>`
        res.innerHTML += `<p>A media desses valores é de ${media}</p>`
    }
}