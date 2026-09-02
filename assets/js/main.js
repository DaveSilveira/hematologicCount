import { criaDiv, criaP, fechar } from './utils.js';
import { titulo } from './utils.js';
import { cores } from './config.js';

/*User's explanation*/
titulo.addEventListener('click', function(){

const disclaimer = criaDiv()
disclaimer.classList.add('disclaimer')
document.body.appendChild(disclaimer)
const disclaimerTitulo = criaP()
disclaimer.appendChild(disclaimerTitulo)
disclaimerTitulo.textContent = 'Sobre o contador hematológico'
const disclaimerTxt = criaP()
disclaimer.appendChild(disclaimerTxt)
disclaimerTxt.textContent = `Contador de células hematológicas, reticulócitos e demais liquidos corpóreos.`

let gitIcon = Object.assign(document.createElement('img'), { src: './assets/img/gitDaveSemFundo.png' })
gitIcon.className = 'gitIcon'
disclaimer.appendChild(gitIcon)
gitIcon.addEventListener('click', ()=> window.open('https://github.com/DaveSilveira'), '_blank')

fechar(disclaimer, 'botao', 'Fechar')
 });

 cores()