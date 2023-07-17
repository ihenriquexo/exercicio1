
var valor = prompt("digite o valor")
var sobra=Math.floor(valor%100)
var sobra1=Math.floor(sobra%50)
var sobra2=Math.floor(sobra1%10)
var sobra3=Math.floor(sobra2%1)
console.log(valor+", que dá "+Math.floor(valor/100)+" notas de 100, "+Math.floor(sobra/50)
+" notas de 50, "+Math.floor(sobra1/10)+" notas de 10 e "
+Math.floor(sobra2/1)+" notas de 1")



