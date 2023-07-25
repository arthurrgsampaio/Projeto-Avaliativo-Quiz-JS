import { entretenimento } from "./entretenimento.js";
// import { entretenimento } from "./entretenimento.js";
// import { esportes } from "./esportes.js";

const nome = document.getElementById("name");
const tema = document.getElementById("temas");
const btnIniciar = document.getElementById("btn-iniciar");
const listaPerguntas = document.getElementById("lista-perguntas");
const question = document.querySelector("entretenimento");

function mostrarTema(entretenimento) {
    for(let entreteniment of entretenimento) {
        listaPerguntas.innerHTML += `
            <li class="perguntas-container">
            <div class="e-titulo">${entreteniment.titulo}</div>
            <div class="lista-organizacao">
                <input type="radio" name="select" value="0"><label>${entreteniment.alternativas[0]}</label>
                <input type="radio" name="select" value="1"><label>${entreteniment.alternativas[1]}</label>
                <input type="radio" name="select" value="2"><label>${entreteniment.alternativas[2]}</label>
                <input type="radio" name="select" value="3"><label>${entreteniment.alternativas[3]}</label>
            </div>
            </li>
        `;
    }
}

btnIniciar.addEventListener("click", mostrarTema(entretenimento));
