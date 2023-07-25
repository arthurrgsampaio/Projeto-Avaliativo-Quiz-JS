import { entretenimento } from "./entretenimento.js";
import { artes } from "./artes.js";
import { esportes } from "./esportes.js";

const nome = document.getElementById("name");

const tema = document.getElementById("temas");
let selectedTema;
tema.addEventListener("change", () => {
  selectedTema = tema.value;
});
let valores = [];

const btnIniciar = document.getElementById("btn-iniciar");
const listaPerguntas = document.getElementById("lista-perguntas");
const containerInicial = document.querySelector(".init-container");

function mostrarTema(values) {
  let contador = 0;
  containerInicial.style = "display: none";
  for (let value of values) {
    listaPerguntas.innerHTML += `
            <li class="perguntas-container">
            <div class="e-titulo">${value.titulo}</div>
            <div class="lista-organizacao">
                <input type="radio" name="${
                  "select" + contador
                }" value="0"><label>${value.alternativas[0]}</label>
                <input type="radio" name="${
                  "select" + contador
                }" value="1"><label>${value.alternativas[1]}</label>
                <input type="radio" name="${
                  "select" + contador
                }" value="2"><label>${value.alternativas[2]}</label>
                <input type="radio" name="${
                  "select" + contador
                }" value="3"><label>${value.alternativas[3]}</label>
            </div>
            </li>
        `;
    contador++;
  }
}

btnIniciar.addEventListener("click", () => {
  if (selectedTema === "entreterimento") {
    valores = entretenimento;
    mostrarTema(valores);
  } else if (selectedTema === "artes") {
    valores = artes;
    mostrarTema(valores);
  } else if (selectedTema === "esportes") {
    valores = esportes;
    mostrarTema(valores);
  } else {
    console.log(`Não funcionou...`);
  }
});
