
/*  VARIAVEIS E FUNÇÕES GLOBAIS   */
let corpo = document.querySelector('.corpo');

function criaDiv(){
    const criarDiv = document.createElement('div');
    return criarDiv;
}
function criaModal(){
    const modal = document.createElement('dialog');
    return modal;
}

/*Elementos gerais da pagina*/

const painel = criaDiv();
painel.addEventListener('load', function(){
painel.classList.add('painel');
document.body.appendChild(painel);
painel.innerHTML = ``;

let fechar = criaDiv();
painel.appendChild(fechar);
fechar.classList.add('fechar');
fechar.innerText ='x';
fechar.addEventListener('click', function(){painel.style.cssText = 'display:none;'});
});