import { criaDiv, fechar } from './utils.js';
import { titulo } from './utils.js';
import { cores } from './config.js';

/*Explicaçao do programa ao usuário*/
titulo.addEventListener('click', function(){

const disclaimer = criaDiv()
disclaimer.classList.add('disclaimer')
document.body.appendChild(disclaimer)
disclaimer.innerHTML = `<p><b>Contador de céluas</b></p>
<p>
    A intenção da criação do contador hematologico é de praticar meus aprendizados em javascript
    com uma ferramenta que ajuda profissionais da área da saúde na bancada de laboratório clínico.
    É basicamente um contador que diferencia as células que estão, ou podem estar presentes, na 
    circulação sanguinea.
</p>
<p>
    Após um periodo de tempo resolvi adicionar também um contador de células em líquidos e de sedimentos
    urinários, para atualizar meus aprendizados em javascript e também incrementar coisas novas ao aplicativo.
    A ideia da criação de um aplicativo que funcione em um computador se da pelo fato do analista de laboratório
    realizar as alterações de informações e contagens no computador, o que traria tudo para um só lugar.s
</p>
`;

let gitIcon = document.createElement('img')
gitIcon.classList.add('gitIcon')
disclaimer.appendChild(gitIcon)
gitIcon.src = './assets/img/gitDaveSemFundo.png'
gitIcon.addEventListener('click', ()=> window.open('https://github.com/DaveSilveira'), '_blank')

fechar(disclaimer, 'botao', 'Fechar')
 });

 cores()