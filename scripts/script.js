// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Imports
import { entretenimento } from "./entretenimento.js";
import { artes } from "./artes.js";
import { esportes } from "./esportes.js";
import { pessoas } from "./pessoas.js";

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

// população container-temas


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
  // btnConcluir.style = "display: block";
  // btnContinuar.style = "display: block";
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
  console.log(nome.value);
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

console.log(pausar);

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
const ordemPessoas1 = document.getElementById("position1");
const ordemPessoas2 = document.getElementById("position2");
const ordemPessoas3 = document.getElementById("position3");
const tabelaCorpo = document.getElementById('tabelaCorpo');

const dataAtual = new Date();

const ano = dataAtual.getFullYear();
const mes = String(dataAtual.getMonth() + 1).padStart(2, '0'); 
const dia = String(dataAtual.getDate()).padStart(2, '0');
const hora = String(dataAtual.getHours()).padStart(2, '0');
const minuto = String(dataAtual.getMinutes()).padStart(2, '0');
const dataFormatada = `${dia}-${mes}-${ano} ${hora}:${minuto}`;


function BotaoContinuar() {  

  divTimer.style.display = "none";
  perguntasContainer.style.display = "none";
  tituloTema.style.display = "none";

  pessoas.push({
    nome: nome.value,
    tema: tituloTema.innerHTML,
    minutos: tempo(minutos),
    segundos: tempo(segundos),
    data: dataFormatada,
    pontuacao: contagemAcertos          
  });  
  
  popularContTemas();
  organizarPessoas(pessoas);
}

function organizarPessoas(pessoas) {
  pessoas.sort((a, b) => {
    if (a.pontuacao === b.pontuacao) {
      const tempoA = a.minutos * 60 + a.segundos;
      const tempoB = b.minutos * 60 + b.segundos;

      if (tempoA === tempoB) {
        return new Date(a.data) - new Date(b.data);
      } else {
        return tempoA - tempoB;
      }
    } else {
      return b.pontuacao - a.pontuacao; 
    }
  });

  popularTabela();
}

function popularTabela() {
  // Limpa a tabela atual antes de popular novamente
  while (tabelaCorpo.firstChild) {
    tabelaCorpo.removeChild(tabelaCorpo.firstChild);
  }

  pessoas.forEach((pessoa) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${pessoa.nome}</td>
      <td>${pessoa.tema}</td>
      <td>${pessoa.minutos}:${pessoa.segundos}</td>
      <td>${pessoa.data}</td>
      <td>${pessoa.pontuacao}/10</td>
    `;
    tabelaCorpo.appendChild(row);
  });

  console.log(pessoas);
  popularContTemas();
}

function popularContTemas(valores) {  
  console.log(tituloTema)
  for(let i = 0; i < 5; i++) {
    if (tituloTema.innerHTML == "Entreterimento") {
    ordemPessoas1.innerHTML = `
      <li class="position">João</li> 
      <li class="position">Maria</li> 
      <li class="position">Jose</li> 
      <li class="position">Vitor</li> 
      <li class="position">${nome.value}</li>      
    `;
    } else if(tituloTema.innerHTML == "Artes") {
      ordemPessoas2.innerHTML = `
      <li class="position">João</li> 
      <li class="position">Maria</li> 
      <li class="position">Jose</li> 
      <li class="position">Vitor</li> 
      <li class="position">${nome.value}</li>       
    `;
    } else if(tituloTema.innerHTML == "Esportes") {
      ordemPessoas3.innerHTML = `
      <li class="position">João</li> 
      <li class="position">Maria</li> 
      <li class="position">Jose</li> 
      <li class="position">Vitor</li> 
      <li class="position">${nome.value}</li>       
    `;
    }
}
  
  
}

btnContinuar.addEventListener("click", () => {
  btnContinuar.style.display = "none";
  btnConcluir.style.display = "none";
  btnReiniciar.style.display = "none";
  btnVoltar.style.display = "block";
  divResultados.style.display = "flex";
  divMedia.style.display = "flex";
  divConTemas.style.display = "flex";
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
  pausar = false;
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
//Botão Conluir e Checagem

//Botão Concluir
let validador = [];
let respostas = [];
let temaSelecionado;
let contagemAcertos = 0;

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

btnConcluir.addEventListener("click", (ev) => {
  //sair o botão concluir e colocar o continuar
  btnConcluir.style.display = "none";
  btnContinuar.style.display = "block";

  ev.preventDefault();
  pausar = true;
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
  verificarRespostas();
  checarQuestoes(temaSelecionado);
});

function checarQuestoes(objeto) {
  contagemAcertos = 0;
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

  for (let i = 0; i < respostas.length; i++) {
    if (respostas[i] == validador[i]) {
      contagemAcertos++;
    }
  }
  console.log(`acertos: ${contagemAcertos}`);
  notificarAcertos();
}

//Checagem
let totalQuestoes = 10;
let questoesRespondidas = 0;

function verificarInputsMarcados() {
  const inputs = document.querySelectorAll('input[type="radio"]');
  let contadorMarcados = 0;

  inputs.forEach((input) => {
    if (input.checked) {
      contadorMarcados++;
    }
  });

  if (contadorMarcados === totalQuestoes) {
    btnConcluir.style.display = "block";
  } else {
    btnConcluir.style.display = "none";
  }
}

function incrementarQuestoesRespondidas() {
  questoesRespondidas++;

  if (questoesRespondidas === totalQuestoes) {
    btnConcluir.style.display = "block";
  }
}

listaPerguntas.addEventListener("change", () => {
  verificarInputsMarcados();
});

document.querySelectorAll('input[type="radio"]').forEach((input) => {
  input.addEventListener("change", () => {
    incrementarQuestoesRespondidas();
  });
});

//Pintura de certo e errado
function verificarRespostas() {
  const perguntasContainer = document.querySelectorAll(".perguntas-container");

  for (let i = 0; i < perguntasContainer.length; i++) {
    const inputSelecionado = perguntasContainer[i].querySelector(
      'input[name="select' + i + '"]:checked'
    );

    if (inputSelecionado) {
      const respostaSelecionada = inputSelecionado.value;
      const respostaCorreta = valores[i].correctAlternativa;

      if (respostaSelecionada == respostaCorreta) {
        perguntasContainer[i].style.border = "1px solid #55ce77";
        perguntasContainer[i].style.backgroundColor = "#a4ffbe";
      } else {
        perguntasContainer[i].style.border = "1px solid #d36980";
        perguntasContainer[i].style.backgroundColor = "#ffa4b8";
      }
    }
  }
}


// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Médias de acertos e erros

let totalAcertos = 0;
let qtdPartidasFinalizadas = 0;
let chamada = 1;
let mediaAcertos = 0;
let mediaErros = 0;
const PONTUACAO_MAXIMA = 10;

function recebePontuacao(pessoas) {
  // Somatória da quantidade de acertos por pessoa e soma a quantidade de partidas realizadas, que estão no array pessoas.
  for (let pessoa of pessoas) {
    totalAcertos += pessoa.pontuacao;
    qtdPartidasFinalizadas++;
  }
  return totalAcertos;
}

function calcularMedias(contagemAcertos) {
  // Somatória dos acertos de todas as partidas realizadas e posteriormente realiza o cálculo das médias de acertos e erros.
  totalAcertos += contagemAcertos;
  qtdPartidasFinalizadas++;

  mediaAcertos = (totalAcertos / qtdPartidasFinalizadas);
  mediaErros = (PONTUACAO_MAXIMA - mediaAcertos);

  document.getElementById("media-acertos").innerHTML = `<p>Média de acertos: ${mediaAcertos.toFixed(1).replace(".",",")}</p>`;
  document.getElementById("media-erros").innerHTML = `<p>Média de erros: ${mediaErros.toFixed(1).replace(".",",")}</p>`;
}

const contagemAtualizadaAcertos = new Event('contagemAtualizada');
function notificarAcertos() {
  // notifica que houve uma atualização de contagemAcertos da função checarQuestoes().
  document.dispatchEvent(contagemAtualizadaAcertos);
}

document.addEventListener('contagemAtualizada', () => {
  // O código dentro desta função será executado quando a contagemAcertos da partida for atualizada
  if (chamada === 1) {    // Será executado somente na primeira partida
    totalAcertos = recebePontuacao(pessoas);
    calcularMedias(contagemAcertos);
    chamada++;
  } else {    // Será executado nas partidas seguintes
    calcularMedias(contagemAcertos);
  }
});