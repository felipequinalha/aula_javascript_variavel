// SUBSTITUINDO PALAVRAS
let txt = "Estão chegando as provas"
console.log(txt.replace("provas","avaliações"));

// APRESENTANDO VALORES DEPOIS DA VIRGULA
/*
let num = 123.5256
document.write(num.toFixed(2));
document.write("<br><br>");

let num2 = 123.123321
document.write(num2.toPrecision(4));

// caixa de alerta

//alert("olá mundo!!")

// caixa de confirmação
//let teste=confirm("Você é um aluno")
//document.write("o resultado é:", teste)

//caixa de prompt

let texto= prompt("Digite seu nome")
document.write("O nome dele é: ", texto)

// IF
if(20 == 10){
    document.write("Verdadeiro")
}
else{document.write("Falso")}

// IF ELSE DECLARANDO VARIAVEL

let valor +10
if (valor > 7){
    document.write("o Valor é Maior que 7")
}
else{
    document.write("o valor é menor que 7")
}

let idade = 20

if(idade <= 12){
    document.write("É UMA CRIANÇA")
}

else if(idade <= 17){
    document.write("É UM ADOLESCENTE")
}

else if(idade <= 50){
    document.write("É UM ADULTO")
}

else{
    document.write("É UM IDOSO EXPERIÊNTE")
}

let idade =prompt("Digite sua idade")

if(idade <= 13){
    document.write("KIDS")
}

else if(idade <= 14){
    document.write("MATINE")
}

else if(idade <= 18){
    document.write("NOTURNO")
}

else if(idade <=20){
    document.write("MADRUGA")
}

else{
    document.write("EDENTARIO")
}
*/
// && 'e'
let valor = 15
if (valor > 10 && valor < 20){
    document.write("Este valor é VALIDO")
    document.write("<br><br>")
}
//|| 'ou'
let valor1= 25
if (valor1 > 20 || valor1 < 20){
    document.write("O VALOR É VERDADEIRO")
}else{
    document.write("O VALOR É FALSO")
}