

/* const botaoMenu = document.querySelector("header nav button");

// botaoMenu.addEventListener("click", ()=>{
//     console.log("Agora VITAMINADO!!");
// });

//Declarações

//Var
var nome  = "José";

//let
let idade = 23;

console.log(nome);
console.log(idade);

idade = nome;
console.log(idade);*/


// manipular o DOM
const ulMenu = document.getElementById("menu");

//construir uma nova lista com elementos li;
//1 - limpar o elemento ul
//ulMenu.remove();
ulMenu.innerHTML = ""
//ulMenu.innerHTML = "<li><a href='#sobre'> TESTE</a></li>"; -- inserindo no elemento

// criando novo elemento a ser inserido na lista
let liItem =  document.createElement("li");
liItem.innerHTML = "<a href='#sobre'>TESTE</a>";
// Inserir o li na lista Ul
ulMenu.appendChild(liItem);

//Array




