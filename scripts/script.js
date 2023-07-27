// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Imports
import { entretenimento } from "./entretenimento.js";
import { artes } from "./artes.js";
import { esportes } from "./esportes.js";

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Declaração das variáveis
// Colocar css na main
const mainPart = document.querySelector("main");

// Guarda o nome da pessoa na constante
const nome = document.getElementById("name");

// Guarda o tema escolhido pela pessoa
const tema = document.getElementById("temas");
let selectedTema;
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
const btnVoltar = document.querySelector("#voltar");

// botões perguntas
const divResultados = document.querySelector(".resultados");
const divMedia = document.querySelector(".media");
const divConTemas = document.querySelector(".container-temas");

// timer
const divTimer = document.getElementById("timer");
const clMinutos = document.querySelector(".minutes");
const clSegundos = document.querySelector(".seconds");
const clMilissegundos = document.querySelector(".milliseconds");


// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Botão Iniciar
tema.addEventListener("change", () => {
  selectedTema = tema.value;
});

function mostrarTema(values) {
  listaPerguntas.innerHTML = "";
  let contador = 0;
  containerInicial.style = "display: none";
  perguntasContainer.style = "display: flex";
  mainPart.style = "margin-top: var(--8x)";
  btnArea.style = "display: flex";
  btnReiniciar.style = "display: block";
  btnConcluir.style = "display: block";
  btnContinuar.style = "display: block";
  btnVoltar.style = "display: none";
  tituloTema.style = "display: block";
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

btnIniciar.addEventListener("click", () => {
  
  if (selectedTema === "entreterimento") {
    valores = entretenimento;
    cronometro();
    tituloTema.innerText = "Entreterimento";
    mostrarTema(valores);
  } else if (selectedTema === "artes") {
    valores = artes;
    tituloTema.innerText = "Artes";
    cronometro();
    mostrarTema(valores);
  } else if (selectedTema === "esportes") {
    valores = esportes;
    tituloTema.innerText = "Esportes";
    mostrarTema(valores);
    cronometro();
  } else {
    console.log(`Não funcionou...`);
  }
});

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Cronometro

let minutos = 0;
let segundos = 0;
let milissegundos = 0;
let pausar = false;
let interval;

function cronometro() {
  divTimer.style.display = "flex";

  interval = setInterval(() =>{

    if(!pausar) { 

      milissegundos += 10

      if(milissegundos === 1000 ){
        segundos++;
        milissegundos = 0;
      }

      if(segundos === 60) {
        minutos++;
        segundos = 0;
      }

      clMinutos.textContent = tempo(minutos);
      clSegundos.textContent = tempo(segundos);      

    }

  }, 10)};

function tempo(time) {
    return time < 10 ? `0${time}` : time;
}

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Botão Reiniciar
function BotaoReiniciar() {
  clearInterval(interval);
  milissegundos = 0;
  segundos = 0;
  minutos = 0; 

  clMinutos.textContent = "00";
  clSegundos.textContent = "00";
  
  divTimer.style.display = "none"
  mainPart.style.display = "flex";
  mainPart.style = "margin-top: 7%";
  perguntasContainer.style.display = "none";
  tituloTema.style.display = "none";
  btnArea.style.display = "none";
  containerInicial.style.display = "flex";
  tema.value = "0";
  selectedTema = "";  
}

btnReiniciar.addEventListener("click", () => {
  BotaoReiniciar();
});
console.log({ btnArea });

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Botão Continuar
function BotaoContinuar() {
  divTimer.style.display = "none"
  perguntasContainer.style.display = "none";
  tituloTema.style.display = "none";

  console.log(btnContinuar);
}

  btnContinuar.addEventListener("click", () => {
  btnContinuar.style.display = "none";
  btnConcluir.style.display = "none";
  btnReiniciar.style.display = "none";
  btnVoltar.style.display = "block";
  divResultados.style.display = "block";
  divMedia.style.display = "block";
  divConTemas.style.display = "block";
  BotaoContinuar();
});

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Botão Voltar

function BotaoVoltar() {
  clearInterval(interval);
  milissegundos = 0;
  segundos = 0;
  minutos = 0; 

  clMinutos.textContent = "00";
  clSegundos.textContent = "00";

  divTimer.style.display = "none"
  mainPart.style.display = "flex";
  mainPart.style = "margin-top: 7%";
  perguntasContainer.style.display = "none";
  tituloTema.style.display = "none";
  btnArea.style.display = "none";
  divResultados.style.display = "none";
  divMedia.style.display = "none";
  divConTemas.style.display = "none";
  containerInicial.style.display = "flex";
  nome.value = "";
  tema.value = "0";
  selectedTema = "";
  console.log(btnReiniciar);
}

btnVoltar.addEventListener("click", () => {
  divTimer.style.display = "none"
  BotaoVoltar();
});

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Dark Mode Button
const linkCss = document.querySelector("#link-css");
console.log({ linkCss });

const darkMode = document.getElementById("alternarModo");

let counter = 1;

function alternateMode(valor) {
  if (valor == 0) {
    linkCss.href = "./style/style-dark.css";
  } else if (valor == 1) {
    linkCss.href = "./style/style.css";
  }
}

darkMode.addEventListener("click", () => {
  if (counter == 1) {
    counter = 0;
    alternateMode(counter);
  } else if (counter == 0) {
    counter = 1;
    alternateMode(counter);
  }
});

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ON/Mute Audio Button

const audio = document.getElementById("audioPlay");
const musicOn = document.getElementById("musicON");
const musicOff = document.getElementById("musicOFF");
const muteBtn = document.getElementById("audioMute");
const seta = document.getElementById("seta");

function playPause() {
  if (audio.paused) {
    audio.play();
    musicOn.style.display = "block";
    musicOff.style.display = "none";
    seta.style.display = "none";
  } else {
    audio.pause();
    musicOn.style.display = "none";
    musicOff.style.display = "block";
    seta.style.display = "none";
  }
}

muteBtn.addEventListener("click", playPause);

