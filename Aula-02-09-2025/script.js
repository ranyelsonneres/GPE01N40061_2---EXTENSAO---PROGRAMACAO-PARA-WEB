//definir os preços
const precoGasolina = 6.15;
const precoEtanol = 4.35;
const precoDiesel = 5.35;

//função
function atualizaValor(){
    //lógica de negócio
    let tipo = document.getElementById("combustivel").value;
    console.log(tipo);

    let litros = parseFloat(document.getElementById("litros").value);
    console.log(litros);
    let precoPorLitro;
    switch(tipo) {
        case "gasolina":
            precoPorLitro = precoGasolina;
            break;
        case "etanol":
            precoPorLitro = precoEtanol;
            break;
        case "diesel":
            precoPorLitro = precoDiesel;
            break;
        default:
            console.log("escolha uma opção");
    }
    console.log(precoPorLitro);

    calcularValorCombustivel(precoPorLitro, litros)
}

//funcao para calcular o abastecimento
function calcularValorCombustivel(precoCombustivel, litros){
    let valorTotal = precoCombustivel * litros;
    //document.getElementById("resultado").textContent = valorTotal;

    if(litros <=0 || isNaN(litros)){
        document.getElementById("resultado").textContent = "Insira um valor válido";
        return;
    } else {
        document.getElementById("resultado").textContent = valorTotal;
    }
}

let tipoCombustivel = document.getElementById("combustivel");
tipoCombustivel.addEventListener("change", atualizaValor);

let litros = document.getElementById("litros");
litros.addEventListener("input", atualizaValor);
