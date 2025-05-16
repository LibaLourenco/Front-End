

// const botaoMenu = document.querySelector("header nav button");

// botaoMenu.addEventListener("click", ()=>{
//     console.log("Agora VITAMINADO!!");
// });

//Tipo de Declarações

// //var
// var nome  = "José";
// //let
// let idade = 23;
// //const
// const pi = 3.14;

// console.log(nome);
// console.log(idade);
// console.log(pi);

//Tipos de dados em JS

// //string
// let nome = "Lucas";
// console.log(typeof nome);

// //number
// let idade = 23;
// console.log(typeof idade);


// let nr1 = 10;
// let nr2 = "10";

// //Recuperando dados de uma condição ternária;
// let resultado = (nr1 === nr2) ?  "O Resultado foi verdadeiro!" : "O Resultado foi falso!";
// console.log(resultado);

// //Diferença entre let e var
// var nome = "José";

//     if(true){
//         let nome = "Lucas";
//         console.log(nome);
//     }

// console.log(nome);


//Manipular o DOM

const ulMenu = document.getElementById("menu");

//Construindo uma nova lista com elementos li;

//1 - Limpar o elemento ul
// ulMenu.remove();
ulMenu.innerHTML = "";
//2 - Preencher com novo contéudo
// Utilizando inner HTML
// ulMenu.innerHTML = "<li><a href='#sobre'>TESTE</a></li>";
// Criando um novo elemento li para ser inserido na lista
let liItem = document.createElement("li");
liItem.innerHTML = "<a href='#sobre'>TESTE</a>";

//Inserir o li na lista UL
ulMenu.appendChild(liItem);

//capturando o formulario
const formulario = document.getElementById("frmContato");
console.log(formulario);

//atrelar um evento ao formulario com addEventListener(evento, função);
formulario.addEventListener("submit", function(e){
    //suprimindo a ação padrao do elemento que inicia a ação
    e.preventDefault();

    //recuperando os campos/inputs
const nome = document.getElementById("idNome").value.trim();
const email = document.getElementById("idEmail").value.trim();

//armazenando dados em um objeto

let usuario = {
    nomeObj: nome, 
    emailObj: email   
}

//realizando a validação dos dados

try{
    if((usuario.nomeObj == "")||(usuario.nomeObj == undefined)) {
        throw new Error ("O campo nome deve ser preenchido!");
    }

    if((usuario.emailObj == "")||(usuario.emailObj == undefined)) {
        throw new Error ("O campo email deve ser preenchido!");
    }    
}catch(error) {
    alert(error);

}

formulario.reset()



});






 








