//alert("JavaScript funcionando");

//variáveis
//var - global e local
var v1 = "10";
console.log(v1);

//let - local
let v2 = 10;
console.log(v2);

//const - não permite reatribuição
const v3 = 10;
//v3 = 15;
console.log(v3);

//verificar o tipo
console.log(typeof v1);

//operadores
//+ * / - % = > < >= <= !=

//comparação
console.log(5 == "5");
console.log(5 === "5");

//entrada de dados
var idade = parseInt(window.prompt("Idade: "));
console.log("Idade: " + idade);
console.log(typeof idade);

var resultado = idade + 10;
console.log(resultado);

//escrever no HTML
document.writeln("Escrevendo no HTML");

//impressão
console.log(`Você possui ${idade} ano(s)`); //template literal

//estruturas de controle
//if-else
if(idade >= 18){
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}

//for
for (let i=0; i < 10; i++){
    console.log("Iteração: " + i);
}

// while
while (i < 10) {
    console.log("Iteração: " + i);
    i++;
}

//switch-case
let diaSemana = 3;

switch (diaSemana) {
    case 1:
        console.log("Domingo");
        break;
    default:
        console.log("Escolha uma opção válida");
}
