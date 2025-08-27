let botao1 = document.getElementById("botao1");

//propriedade: unica
botao1.onclick = function(){
    alert("Primeiro evento");
}

/* botao1.onclick = function(){
    botao1.textContent = "Segundo evento";
} */

let botao2 = document.getElementById("botao2");
    botao2.onmouseover = function(){
        botao2.style.backgroundColor = "blue";
};

botao2.onmouseout = function(){
        botao2.style.backgroundColor = "yellow";
};

botao2.ondblclick = function(){
        botao2.style.backgroundColor = "";
};

let campoEntrada = document.getElementById("input1");
let resultado1 = document.getElementById("resultado1");

campoEntrada.onkeydown = function(event) {
    if(event.key == "Enter"){
        resultado1.innerHTML = campoEntrada.value;
        campoEntrada.value = "";
    }
};

let botaoLimpar = document.getElementById("botao3");
botaoLimpar.onclick = function (){
    resultado1.textContent = "";
}

//addEventListener
let botao4 = document.getElementById("botao4");
botao4.addEventListener("click", function(){
    botao4.textContent = "Primeiro Evento";
});

let texto = document.getElementById("texto");
botao4.addEventListener("click", function(){
    texto.textContent = "Segundo Evento";
});



