//criar um objeto
const pessoa = {
    nome: "Fulano",
    idade: 23
}

console.log(pessoa.nome);

//construtor
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    //adicionar métodos
    emitirNome(){
        return `Nome: ${this.nome}`;
    }
}

const p1 = new Pessoa("Maria", 12);
console.log(p1);
const p2 = new Pessoa("Ana", 22);
console.log(p2);
console.log(p1.emitirNome())
console.log(p2.emitirNome())

//Arrays
let numeros = [1, 2, 3, 4, "Maçã", "Uva"];
console.log(numeros);

let carrinho = [];
console.log(carrinho);
carrinho[0] = "camiseta";
carrinho[1] = "meia";
carrinho.push("gravata"); //adiciona ao final
carrinho.unshift("lenço"); //adiciona ao inicio
carrinho.splice(1,0,"calça");
carrinho.splice(3,1);
carrinho.pop(); //remover o ultimo elemento
carrinho.shift(); //remove o primeiro elemento
console.log(carrinho.includes("Calça"));


var nome1 = "caSa";
var nome2 = nome1.toUpperCase();
console.log(nome2);
