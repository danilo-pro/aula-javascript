var nome = "Danilo Perez";
// var idade = prompt("Qual sua idade?"); // Recebe um valor pelo usuário
var idade = 23;
var frase = "Borussia Dortmound é o melhor time do mundo."
var n1 = 6;
var n2 = 2;

// alert("Bem vindo, " + nome + "!\nVocê tem " + idade + " anos de idade.");

console.log(nome); // Imprime no console do navegador
console.log(idade); // Imprime no console do navegador
console.log(n1 + n2); // Imprime adição
console.log(n1 - n2); // Imprime subtração
console.log(n1 * n2); // Imprime multiplicação
console.log(n1 / n2); // Imprime divisão
console.log(n1 ** n2); // Imprime exponenciação
console.log(n1 % n2); // Imprime resto da divisão de n1 por n2
console.log(frase); // Frase completa
console.log(frase.toUpperCase()); // Frase completa com letras maiúsculas
console.log(frase.toLowerCase()); // Frase completa com letras minúsculas
console.log(frase.replace("Borussia Dortmound", "Corinthians")); // Imprime no console do navegador

// alert(frase + "\n" + frase.replace("Borussia Dortmound", "Corinthians"));

var lista = ["maça", "pera", "laranja"];

console.log(lista); // Imprime lista completa no console
console.log(lista[1]); // Imprime somente o valor do índice 1

lista.push("uva"); // Adiciona elemento no final do array
console.log(lista);

lista.pop(); // Remove o último elemento do array
console.log(lista);
console.log(lista.length); // Retorna o tamanho do array

console.log(lista.reverse()); // Retorna o array na ordem inversa
console.log(lista.toString()); // Perde a referência de array
console.log(lista[0]);
console.log(lista.toString()[0]);
console.log(lista.join(" - ")); // Transforma em estring e separa elementos usando " - "

// alert(lista[1]); Imprime somente o valor do índice 1 no alert

var fruta = { nome: "maça", cor: "vermelha" }
console.log(fruta);
console.log(fruta.nome); // Imprime nome da furta
console.log(fruta.cor); // Imprime cor da fruta

// alert(fruta.cor); // Imprime cor da fruta no alert

var frutas = [{ nome: "maça", cor: "vermelha" }, { nome: "banana", cor: "amarela" }];
console.log(frutas);
console.log(frutas[1].nome); // Imprime nome da fruta do índice 1
console.log(frutas[1].cor); // Imprime cor da fruta do índice 1

// alert(frutas[1].cor); // Imprime cor da fruta do índice 1 no alert


if(idade >= 18) {
    console.log("Maior de idade!");
}
else {
    console.log("Menor de idade!");
}

// if(idade >= 18) {
//     alert("Maior de idade!");
// }
// else {
//     alert("Menor de idade!");
// }

var count = 0;

while(count <= 5) {
    console.log(count);
    // alert(count);
    count++;
}

for(count = 0; count <= 5; count++) {
    console.log(count);
    // alert(count);
}

var d = new Date();
console.log(d);
// alert(d);
// alert(d.getDay());
// alert(d.getMonth()+1);
// alert(d.getFullYear());
// alert(d.getHours());
// alert(d.getMinutes());
// alert(d.getSeconds());

function soma(n1, n2) {
    return n1 + n2;
}

console.log(soma(5, 15));
// alert(soma(5, 15));

function setReplace(frase, nome, novoNome) {
    return frase.replace(nome, novoNome);
}

console.log(setReplace("Palmeiras não tem mundial!", "tem", "tem e nunca terá"));

// alert(setReplace("Palmeiras não tem mundial!", "tem", "tem e nunca terá"));

function validaIdade(idade) {
    var validar;

    if(idade >= 18){
        validar = true
    }
    else {
        validar = false;
    }

    return validar;
}

console.log(validaIdade(idade));

function clicou() {
    document.getElementById("agradecimento").innerHTML = "<b>Agora clique aqui</b>";

    // console.log(document.getElementById("agradecimento"));
    // alert("Obrigado por clicar!");
}

function redirecionar() {
    // window.open("https://github.com/danilo-pro");
    window.location.href = "https://github.com/danilo-pro";    
}

function trocar(elemento) {
    elemento.innerHTML = "Obrigado por passar o mouse!";
    // document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!";
    // alert("Trocar texto");
}

function voltar(elemento) {
    elemento.innerHTML = "Passe o mouse aqui";
    // document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

function load() {
    alert("Página carregada...");
}

function funcaoChange(elemento) {
    console.log(elemento.value);
}