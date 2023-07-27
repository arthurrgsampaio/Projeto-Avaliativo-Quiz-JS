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

//alerta
const alert = document.getElementById("alert");

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
  alert.style.display = "none";
  for (let value of values) {
    listaPerguntas.innerHTML += `
            <li class="perguntas-container">
            <div class="e-titulo">${value.titulo}</div>
            <div class="lista-organizacao">
                <div class="separate">
                    <input type="radio" name="${
                      "select" + contador
                    }" value=0 class = "${
      "input" + contador
    }" required><label>${value.alternativas[0]}</label>
                </div>
                <div class="separate">
                    <input type="radio" name="${
                      "select" + contador
                    }" value=1 class = "${
      "input" + contador
    }" required><label>${value.alternativas[1]}</label>
                </div>
                <div class="separate">
                    <input type="radio" name="${
                      "select" + contador
                    }" value=2 class = "${
      "input" + contador
    }" required><label>${value.alternativas[2]}</label>
                </div>
                <div class="separate">
                    <input type="radio" name="${
                      "select" + contador
                    }" value=3 class = "${
      "input" + contador
    }" required><label>${value.alternativas[3]}</label>
                </div>
            </div>
            </li>
        `;
    contador++;
  }
}

function alerta() {
  alert.style.display = "flex";
  setInterval(() => {
    alert.style.display = "none";
  }, 4300);
}

document.addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {
    e.preventDefault();
  }
});

btnIniciar.addEventListener("click", () => {
  if (
    selectedTema === "entreterimento" &&
    nome.value != "" &&
    tema.value != "0"
  ) {
    valores = entretenimento;
    tituloTema.innerText = "Entreterimento";
    mostrarTema(valores);
    cronometro();
  } else if (
    selectedTema === "artes" &&
    nome.value != "" &&
    tema.value != "0"
  ) {
    valores = artes;
    tituloTema.innerText = "Artes";
    mostrarTema(valores);
    cronometro();
  } else if (
    selectedTema === "esportes" &&
    nome.value != "" &&
    tema.value != "0"
  ) {
    valores = esportes;
    tituloTema.innerText = "Esportes";
    mostrarTema(valores);
    cronometro();
  } else {
    console.log(`Não funcionou...`);
    alerta();
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

  interval = setInterval(() => {
    if (!pausar) {
      milissegundos += 10;

      if (milissegundos === 1000) {
        segundos++;
        milissegundos = 0;
      }

      if (segundos === 60) {
        minutos++;
        segundos = 0;
      }

      clMinutos.textContent = tempo(minutos);
      clSegundos.textContent = tempo(segundos);
    }
  }, 10);
}

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

  divTimer.style.display = "none";
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
  divTimer.style.display = "none";
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

  divTimer.style.display = "none";
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
  divTimer.style.display = "none";
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

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Checar

let validador = [];
let respostas = [];
let temaSelecionado;

let validar0;
let validar1;
let validar2;
let validar3;
let validar4;
let validar5;
let validar6;
let validar7;
let validar8;
let validar9;
let validar10;

btnConcluir.addEventListener("click", (ev) => {
  ev.preventDefault();
  validador = [];
  respostas = [];
  temaSelecionado = valores;
  validar0 = document.querySelector('input[name="select0"]:checked').value;
  validar1 = document.querySelector('input[name="select1"]:checked').value;
  validar2 = document.querySelector('input[name="select2"]:checked').value;
  validar3 = document.querySelector('input[name="select3"]:checked').value;
  validar4 = document.querySelector('input[name="select4"]:checked').value;
  validar5 = document.querySelector('input[name="select5"]:checked').value;
  validar6 = document.querySelector('input[name="select6"]:checked').value;
  validar7 = document.querySelector('input[name="select7"]:checked').value;
  validar8 = document.querySelector('input[name="select8"]:checked').value;
  validar9 = document.querySelector('input[name="select9"]:checked').value;
  validar10 = document.querySelector('input[name="select9"]:checked');
  checarQuestoes(temaSelecionado);
});

function checarQuestoes(objeto) {
  for (let i = 0; i < objeto.length; i++) {
    validador.push(objeto[i].correctAlternativa);
  }
  console.log(validador);
  respostas.push(validar0);
  respostas.push(validar1);
  respostas.push(validar2);
  respostas.push(validar3);
  respostas.push(validar4);
  respostas.push(validar5);
  respostas.push(validar6);
  respostas.push(validar7);
  respostas.push(validar8);
  respostas.push(validar9);
  console.log(respostas);
  console.log({ validar10 });
  console.log(marcador);

  pausar = true;
}
