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

let difCountTotal = 0

//Array que contem as células que podem ser encontradas nos liquidos
const celulasNeu = [
        {celula:'Cel',nome:'Célula',valor:0,img:'URL(./assets/img/outra.png)',tecla:'t',tecla1:'T'},
        {celula:'Leu',nome:'Leucócitos',valor:0,img:'URL(./assets/img/outra.png)',tecla:'y',tecla1:'Y'},
        {celula:'Hem',nome:'Hemácias',valor:0,img:'URL(./assets/img/outra.png)',tecla:'u',tecla1:'U'}
];
const celulas =[
        {celula:'Segme',valor:'0',img:'URL(./assets/img/seg.png)',tecla:'h',tecla1:'H'},
        {celula:'Linfo',valor:'0',img:'URL(./assets/img/linTip.png)',tecla:'j',tecla1:'J'},
        {celula:'Plasm',valor:'0',img:'URL(./assets/img/linAtip.png)',tecla:'o',tecla1:'O'},
        {celula:'Monoc',valor:'0',img:'URL(./assets/img/mon.png)',tecla:'k',tecla1:'K'},
        {celula:'Eosin',valor:'0',img:'URL(./assets/img/eos.png)',tecla:'l',tecla1:'L'},
        {celula:'Basof',valor:'0',img:'URL(./assets/img/bas.png)',tecla:'g',tecla1:'G'},
        {celula:'Macro',valor:'0',img:'URL(./assets/img/outra.png)',tecla:'f',tecla1:'F'},
        {celula:'Mesot',valor:'0',img:'URL(./assets/img/outra.png)',tecla:'d',tecla1:'D'},
        {celula:'Outra1',valor:'0',img:'URL(./assets/img/outra.png)',tecla:'s',tecla1:'S'},
        {celula:'Outra2',valor:'0',img:'URL(./assets/img/outra.png)',tecla:'a',tecla1:'A'}
];
function mostraPainel(){
    const contagens = criaDiv(); //Aqui aparecereá os valores totais da contagem neubauer
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

    /*Criação dos botões de contagem na neubauer*/
    for(let i = 0; i < celulasNeu.length; i++){
        let {celula,nome,valor,img,tecla,tecla1} = celulasNeu[i];
        
        let celuNeu = criaDiv(); //Aqui o total de celulas em neubauer
        celuNeu.classList.add('valorPainel');
        celuNeu.innerHTML = `${celulasNeu[0].valor} \n <div style="font-size:12px;">${nome}</div>`;
        contagens.appendChild(celuNeu);

        let celNeu = criaDiv() //setando a div para cada celula naubauer contida no array celulasNeu
        celNeu.style.backgroundImage = img //imagem de fundo da célula
        celNeu.classList.add('celulas')
        painel.appendChild(celNeu)
        celNeu.dataset.idx = i;
        
        let valorCelula = criaDiv(); //quantidade de cada celula contada
        celNeu.appendChild(valorCelula);
        valorCelula.classList.add('valorCelula');
        valorCelula.innerText = valor;

        let nomeLeuco = criaDiv(); //nome de cada cel ao centro
        celNeu.appendChild(nomeLeuco);
        nomeLeuco.classList.add('nomeLeuco');
        nomeLeuco.innerText = celula;

        let teclaCelula = criaDiv();
        celNeu.appendChild(teclaCelula);
        teclaCelula.classList.add('teclaCelula');
        teclaCelula.innerText = tecla;

        celNeu.addEventListener('click', function(){ //joga os valores nos leucocitos
            valorCelula.innerText = Number(++celulasNeu[this.dataset.idx]["valor"]);
            celuNeu.innerHTML = `${celulasNeu[this.dataset.idx]["valor"]} \n <div style="font-size:12px;">${nome}</div>`;
        console.log(celulasNeu[2].valor)
        console.log(celulas[1].valor)
        });
        document.addEventListener('keydown', function(event){
            if(event.key === tecla){
            valorCelula.innerText = Number(++celulasNeu[celNeu.dataset.idx]["valor"]);
            celuNeu.innerHTML = `${celulasNeu[celNeu.dataset.idx]["valor"]} \n <div style="font-size:12px;">${nome}</div>`;
    
        }});
        document.addEventListener('keydown', function(event){
            if(event.key === tecla1){
            valorCelula.innerText = Number(++celulasNeu[celNeu.dataset.idx]["valor"]);
            celuNeu.innerHTML = `${celulasNeu[celNeu.dataset.idx]["valor"]} \n <div style="font-size:12px;">${nome}</div>`;

        }});
        zerar.addEventListener('click', function(){
            valorCelula.innerText = 0;
            celuNeu.innerHTML = `${0} \n <div style="font-size:12px;">${nome}</div>`;
        });
    }

    /*Parte da contagem na diferencial*/
    const contagensDif =criaDiv()
    painel.appendChild(contagensDif)
    contagensDif.classList.add('valoresPainel')

    let difCount = criaDiv() //Aqui o valor total da contagem diferencial
    difCount.classList.add('valorPainel');
    difCount.innerHTML = `${difCountTotal = 0} \n <div style="font-size:12px;">Contagem diferencial</div>`;
    contagensDif.appendChild(difCount);

    for(let i = 0; i < celulas.length; i++){ // laço para a contagem diferencial
        let {celula,valor,img,tecla,tecla1} = celulas[i];

        let celDif = criaDiv() //setando a div para cada celula diferencial contida no array celula
        celDif.style.backgroundImage = img //imagem de fundo da célula
        celDif.classList.add('celulas')
        painel.appendChild(celDif)
        celDif.dataset.idx = i;
        
        let valorCelula = criaDiv(); //quantidade de cada celula contada
        celDif.appendChild(valorCelula);
        valorCelula.classList.add('valorCelula');
        valorCelula.innerText = valor;

        let nomeLeuco = criaDiv(); //nome de cada cel ao centro
        celDif.appendChild(nomeLeuco);
        nomeLeuco.classList.add('nomeLeuco');
        nomeLeuco.innerText = celula;

        let teclaCelula = criaDiv();
        celDif.appendChild(teclaCelula);
        teclaCelula.classList.add('teclaCelula');
        teclaCelula.innerText = tecla;

        celDif.addEventListener('click', function(){ //joga os valores nos leucocitos
            valorCelula.innerText = ++celulas[this.dataset.idx]["valor"]; 
            difCount.innerHTML = `${++difCountTotal} \n <div style="font-size:12px;">Contagem diferencial</div>`;
        });
        document.addEventListener('keydown', function(event){
            if(event.key === tecla){
                valorCelula.innerText = ++celulas[celDif.dataset.idx]["valor"]; 
                difCount.innerHTML = `${++difCountTotal} \n <div style="font-size:12px;">Contagem diferencial</div>`;
        }});
        document.addEventListener('keydown', function(event){
            if(event.key === tecla1){
                valorCelula.innerText = ++celulas[celDif.dataset.idx]["valor"]; 
                difCount.innerHTML = `${++difCountTotal} \n <div style="font-size:12px;">Contagem diferencial</div>`;
        }});
        zerar.addEventListener('click', function(){
            celulas[i].valor = 0;
            valorCelula.innerText = 0;
            difCount.innerHTML = `${difCountTotal = 0} \n <div style="font-size:12px;">Contagem diferencial</div>`;
        });
    }
}
return mostraPainel()
}); //Final do evento de janela
//Criador: https://github.com/DaveSilveira