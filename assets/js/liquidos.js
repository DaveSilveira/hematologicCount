/* */
//Funções necessárias para tornar o código menor.
function criaDiv(){
    const criarDiv = document.createElement('div')
    return criarDiv;
}
function criaP(){
    let p = document.createElement('p')
    return p;
}
function fechar(elementoPai, classeDoBotao, textoDoBotao){
    let fechar = criaDiv()
    elementoPai.appendChild(fechar)
    fechar.classList.add(classeDoBotao)
    fechar.innerText = textoDoBotao;
    fechar.addEventListener('click', () => elementoPai.remove());
}
//Anconragem do botão no html
let liquidos = criaDiv();
 liquidos.innerText = 'Contagem de Líquidos';
 liquidos.classList.add('botao');
 corpo.appendChild(liquidos);

//Janela onde todo o evento de contagem irá ocorrer
liquidos.addEventListener('click', function(){
 const painel = criaDiv()
 painel.classList.add('painel')
 document.body.appendChild(painel)

 const titulo = criaDiv()
 painel.appendChild(titulo)
 titulo.innerText = 'Contagem de células em líquidos'
 titulo.style.cssText = `font-size:24px; font-family: sans-serif; position: absolute; margin: 10px 0px 0px 30px;`;

 fechar(painel, 'fechar', 'X') //Botão de fechar a janela

}); //Final do evento de janela
//Criador: https://github.com/DaveSilveira