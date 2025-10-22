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

 //liquidos.style.cssText = 'display: none' //Para realização de testes

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
//Array que contem as células que podem ser encontradas nos liquidos
const celulasNeu = [
        {celula:'',qtd:'',img:'',tecla:'',tecla1:''},
        {celula:'',qtd:'',img:'',tecla:'',tecla1:''},
        {celula:'',qtd:'',img:'',tecla:'',tecla1:''}
];
const celulas =[
        {celula:'Segme',qtd:'0',img:'URL(./assets/img/seg.png)',tecla:'h',tecla1:''},
        {celula:'Linfo',qtd:'0',img:'URL(./assets/img/linTip.png)',tecla:'j',tecla1:''},
        {celula:'Plasm',qtd:'0',img:'URL(./assets/img/linAtip.png)',tecla:'o',tecla1:''},
        {celula:'Monoc',qtd:'0',img:'URL(./assets/img/mon.png)',tecla:'k',tecla1:''},
        {celula:'Eosin',qtd:'0',img:'URL(./assets/img/eos.png)',tecla:'l',tecla1:''},
        {celula:'Basof',qtd:'0',img:'URL(./assets/img/bas.png)',tecla:'g',tecla1:''},
        {celula:'Macro',qtd:'0',img:'URL(./assets/img/outra.png)',tecla:'f',tecla1:''},
        {celula:'Mesot',qtd:'0',img:'URL(./assets/img/outra.png)',tecla:'d',tecla1:''},
        {celula:'Outra1',qtd:'0',img:'URL(./assets/img/outra.png)',tecla:'s',tecla1:''},
        {celula:'Outra2',qtd:'0',img:'URL(./assets/img/outra.png)',tecla:'a',tecla1:''}
];
function mostraPainel(){
    const contagens = criaDiv(); //Aqui aparecereá os valores totais 
    painel.appendChild(contagens);
    contagens.classList.add('valoresPainel')

    let cxBotao = criaDiv(); //caixa que engloba os botoes resultado e zerar
    cxBotao.classList.add('botaoPainel');
    contagens.appendChild(cxBotao);
        
    let verResul = criaDiv(); //Botao de ver resultado
    verResul.classList.add('botao');
    verResul.innerHTML = 'Resultado';
    cxBotao.appendChild(verResul);
    verResul.addEventListener('click', function(){result()});

    let zerar = criaDiv(); //botao para zerar contagem
    zerar.classList.add('botao');
    zerar.innerHTML = 'Zerar';
    cxBotao.appendChild(zerar);
    zerar.addEventListener('click', function(){
        celNeu.innerHTML = `${celNeuTotal = 0} \n <div style="font-size:12px;">Células</div>`;
        eriNeu.innerHTML = `${eriNeuTotal = 0} \n <div style="font-size:12px;">Hemácias</div>`;
        leuNeu.innerHTML = `${leuNeuTotal = 0} \n <div style="font-size:12px;">Leucocitos</div>`;
    });
    let celNeu = criaDiv(); //Aqui o total de celulas em neubauer
    celNeu.classList.add('valorPainel');
    celNeu.innerHTML = `${celNeuTotal = 0} \n <div style="font-size:12px;">Células</div>`;
    contagens.appendChild(celNeu);
    
    let eriNeu = criaDiv(); //Aqui o total de hemacias em neubauer
    eriNeu.classList.add('valorPainel');
    eriNeu.innerHTML = `${eriNeuTotal = 0} \n <div style="font-size:12px;">Hemácias</div>`;
    contagens.appendChild(eriNeu);

    let leuNeu = criaDiv(); //Aqui o n de leucocitos em neubauer
    leuNeu.classList.add('valorPainel');
    leuNeu.innerHTML = `${leuNeuTotal = 0} \n <div style="font-size:12px;">Leucócitos</div>`;
    contagens.appendChild(leuNeu);

    /*Criação dos botões de contagem na neubauer*/
    
    //criar em laço de repetição?

    /*Criação dos botões de contagem na diferencial*/
    for(let i = 0; i < celulas.length; i++){ // laço para a contagem diferencial
        let {celula,qtd,img,tecla,tecla1} = celulas[i];

        let celDif = criaDiv() //setando a div para cada celula diferencial contida no array celula
        celDif.style.backgroundImage = img //imagem de fundo da célula
        celDif.classList.add('celulas')
        painel.appendChild(celDif)
        celDif.dataset.idx = i;
        
        let valorCelula = criaDiv(); //quantidade de cada celula contada
        celDif.appendChild(valorCelula);
        valorCelula.classList.add('valorCelula');
        //valorCelula.innerText = valor;

        let nomeLeuco = criaDiv(); //nome de cada cel ao centro
        celDif.appendChild(nomeLeuco);
        nomeLeuco.classList.add('nomeLeuco');
        nomeLeuco.innerText = celula;

        let teclaCelula = criaDiv();
        celDif.appendChild(teclaCelula);
        teclaCelula.classList.add('teclaCelula');
        teclaCelula.innerText = tecla;        
    }
}
return mostraPainel()
}); //Final do evento de janela
//Criador: https://github.com/DaveSilveira