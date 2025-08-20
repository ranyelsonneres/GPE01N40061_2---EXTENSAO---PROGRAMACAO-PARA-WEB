//busca do elemento
let meuElemento = document.getElementById("paragrafo");
console.log(meuElemento);
console.log(meuElemento.textContent);
//console.log(typeof meuElemento);

let paragrafo1 = document.getElementsByClassName("paragrafo");
console.log(paragrafo1);

for(let i=0; i<paragrafo1.length;i++) {
    console.log(paragrafo1[i].textContent);
}
console.log(paragrafo1[0].textContent);

let paragrafo2 = document.getElementsByTagName("p");
for(let i=0; i<paragrafo2.length;i++) {
    console.log(paragrafo2[i].textContent);
}

//criar um elemento
let destino = document.getElementById("elemento");
console.log(destino);
let p = document.createElement("p");
p.textContent = "Lista a ser criada de forma dinâmica";
destino.append(p);

let ul = document.createElement("ul");

let itens = ["Item 1", "Item 2", "Item 3"];

for (let i=0; i <itens.length; i++){
    let li = document.createElement("li");
    li.textContent = itens[i];
    ul.append(li);
}
destino.append(ul);

//evento (clique, recuperar dados do formulário)
function somar(){
    let n1 = parseFloat(document.getElementById("num1").value);
    console.log(typeof n1);
    let n2 = parseFloat(document.getElementById("num2").value);

    let soma = n1 + n2;
    let saida = `<strong>Resultado:</strong> ${soma}`;
    document.getElementById("resultado").innerHTML = saida;
}

//evento (botão)
let botao1 = document.getElementById("botao1");
botao1.onclick = function(){
    alert("Clicou");
    botao1.style.backgroundColor = "green";
    botao1.textContent = "Clicado";
}
