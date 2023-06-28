var n1 = Number(prompt("Digite um número:"))
var n2 = Number(prompt("Digite outro número:"))
var n3 = n1 + n2
alert(n1 + " + " + n2 + " é igual à: " + n3)

var nome = prompt("Digite seu nome:")
var idade = Number(prompt("Digite sua idade:"))

document.write(`<br><br><br><br>Seu nome é: ${nome}. Sua idade é: ${idade} anos. Seu nome tem ${nome.length} letras. Seu nome em minúsculo é "${nome.toLowerCase()}". Seu nome em maiúsculo é "${nome.toUpperCase()}"`)