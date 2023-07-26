import { entretenimento } from "./entretenimento.js";
import { artes } from "./artes.js";
import { esportes } from "./esportes.js";

// Coloca css na main
const mainPart = document.querySelector("main");

// Guarda o nome da pessoa na constante
const nome = document.getElementById("name");

// Guarda o tema escolhido pela pessoa
const tema = document.getElementById("temas");
let selectedTema;
tema.addEventListener("change", () => {
  selectedTema = tema.value;
});
let valores = [];

// Aplica JS no botão de iniciar
const btnIniciar = document.getElementById("btn-iniciar");

// Pega os atributos necessários da lista
const listaPerguntas = document.getElementById("lista-perguntas");
const containerInicial = document.querySelector(".init-container");
const tituloTema = document.querySelector(".titulo-tema");
const perguntasContainer = document.querySelector(".perguntas");

// Pegar os botões no final das perguntas
const btnArea = document.querySelector(".btn-end");
const btnReiniciar = document.querySelector("#reiniciar");
const btnConcluir = document.querySelector("#concluir");
const btnContinuar = document.querySelector("#continuar");

// botões perguntas 
const divPerguntas = document.querySelectorAll(".btnInferiores");
const divResultados = document.querySelector(".resultados");
const divMedia = document.querySelector(".media");
const divConTemas = document.querySelector(".container-temas")

console.log({divPerguntas})

function mostrarTema(values) {
  let contador = 0;
  containerInicial.style = "display: none";
  perguntasContainer.style = "display: flex";
  mainPart.style = "margin-top: var(--8x)";
  btnArea.style = "display: flex";
  btnReiniciar.style = "display: block";
  btnConcluir.style = "display: block"; 
  btnContinuar.style = "display: block";   
  for (let value of values) {
    listaPerguntas.innerHTML += `
            <li class="perguntas-container">
            <div class="e-titulo">${value.titulo}</div>
            <div class="lista-organizacao">
                <div class="separate">
                    <input type="radio" name="${
                      "select" + contador
                    }" value="0"><label>${value.alternativas[0]}</label>
                </div>
                <div class="separate">
                    <input type="radio" name="${
                      "select" + contador
                    }" value="1"><label>${value.alternativas[1]}</label>
                </div>
                <div class="separate">
                    <input type="radio" name="${
                      "select" + contador
                    }" value="2"><label>${value.alternativas[2]}</label>
                </div>
                <div class="separate">
                    <input type="radio" name="${
                      "select" + contador
                    }" value="3"><label>${value.alternativas[3]}</label>
                </div>
            </div>
            </li>
        `;
    contador++;
  }
}

function BotaoContinuar() {
  perguntasContainer.style.display = "none";
  tituloTema.style.display = "none";
  divPerguntas.style.display = "none"; 
    
  console.log(Btncontinuar);
};

function BoataoReiniciar() {
  perguntasContainer.style.display = "none";
  tituloTema.style.display = "none";
  btnArea.style.display = "none";
  containerInicial.style.display = "flex"
  console.log(btnReiniciar);
};


btnIniciar.addEventListener("click", () => {
  if (selectedTema === "entreterimento") {
    valores = entretenimento;
    tituloTema.innerText = "Entreterimento";
    mostrarTema(valores);
  } else if (selectedTema === "artes") {
    valores = artes;
    tituloTema.innerText = "Artes";
    mostrarTema(valores);
  } else if (selectedTema === "esportes") {
    valores = esportes;
    tituloTema.innerText = "Esportes";
    mostrarTema(valores);
  } else {
    console.log(`Não funcionou...`);
  }
});

btnContinuar.addEventListener("click",() => {
  btnArea.style.display = "none";  
  divResultados.style.display = "block"
  divMedia.style.display = "block";
  divConTemas.style.display = "block";
  BotaoContinuar()
});
  

btnReiniciar.addEventListener("click",() =>{
  BoataoReiniciar( )
} )
console.log({btnArea})
