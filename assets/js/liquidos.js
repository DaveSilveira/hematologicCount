import { criaDiv, fechar, teclaEvent, cliqueEvent } from './utils.js';
import { corpo } from './utils.js';
import { configCount } from './config.js';


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
 titulo.classList.add('tituloCount')
 titulo.innerText = 'Contagem de células em líquidos'

 fechar(painel, 'fechar', 'X') //Botão de fechar a janela

let relTotal = { total:0 };

//Array que contem as células que podem ser encontradas nos liquidos
const celulasNeu = [
        {celula:'Leu',nome:'Leucócitos',valor:0,img:'URL(./assets/img/leucocitoNeu.png)', som: 'musica', tecla:'y'},
        {celula:'Hem',nome:'Hemácias',valor:0,img:'URL(./assets/img/hemaciaNeu.png)', som: 'musica', tecla:'u'},
        {celula:'Outra',nome:'Outras',valor:0,img:'URL(./assets/img/outraNeu.png)', som: 'musica', tecla:'t'}
];
const celulas =[
        {celula:'Segme',nome:'Segmentados',valor:'0',img:'URL(./assets/img/seg.png)', som: 'musica', tecla:'h'},
        {celula:'Linfo',nome:'Linfócitos',valor:'0',img:'URL(./assets/img/linTip.png)', som: 'musica', tecla:'j'},
        {celula:'Plasm',nome:'Plasmócitos',valor:'0',img:'URL(./assets/img/plasmocito.png)', som: 'musica', tecla:'o'},
        {celula:'Monoc',nome:'Monócitos',valor:'0',img:'URL(./assets/img/mon.png)', som: 'musica', tecla:'k'},
        {celula:'Eosin',nome:'Eosinófilos',valor:'0',img:'URL(./assets/img/eos.png)', som: 'musica', tecla:'l'},
        {celula:'Basof',nome:'Basófilos',valor:'0',img:'URL(./assets/img/bas.png)', som: 'musica', tecla:'g'},
        {celula:'Macro',nome:'Macrófagos',valor:'0',img:'URL(./assets/img/macrofago.png)', som: 'musica', tecla:'f'},
        {celula:'Mesot',nome:'Mesoteliais',valor:'0',img:'URL(./assets/img/mesotelial.png)', som: 'musica', tecla:'d'},
        {celula:'Outra1',nome:'Outras1',valor:'0',img:'URL(./assets/img/outra.png)', som: 'musica', tecla:'s'},
        {celula:'Outra2',nome:'Outras2',valor:'0',img:'URL(./assets/img/outra.png)', som: 'musica', tecla:'a'}
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
    verResul.style.display = 'none'

    let zerar = criaDiv(); //botao para zerar contagem
    zerar.classList.add('botao');
    zerar.innerHTML = 'Zerar';
    cxBotao.appendChild(zerar);

    configCount('Config', painel, celulasNeu, celulas)

    let caixaCelulasNeu = criaDiv()
    painel.appendChild(caixaCelulasNeu)
    caixaCelulasNeu.classList.add('caixaCelulas')

    /*Criação dos botões de contagem na neubauer*/
    for(let i = 0; i < celulasNeu.length; i++){
        let {celula,nome,valor,img,tecla} = celulasNeu[i];
        
        let celuNeu = criaDiv(); //Aqui o total de celulas em neubauer
        celuNeu.classList.add('valorPainel');
        celuNeu.innerHTML = `${celulasNeu[0].valor} \n <div style="font-size:12px;">${nome}</div>`;
        contagens.appendChild(celuNeu);

        let celNeu = criaDiv() //setando a div para cada celula naubauer contida no array celulasNeu
        celNeu.style.backgroundImage = img //imagem de fundo da célula
        celNeu.classList.add('celulas')
        caixaCelulasNeu.appendChild(celNeu)
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

        cliqueEvent({
            celula: celNeu, 
            valorCelula: valorCelula, 
            valorPainel: celuNeu, 
            array: celulasNeu, 
            nomePainel: nome})
        teclaEvent({
            tecla: tecla,
            valorCelula: valorCelula,
            valorPainel: celuNeu,
            array: celulasNeu,
            celulas: celNeu,
            nomePainel: "Contagem diferencial"
        })

        zerar.addEventListener('click', function(){
            celulasNeu[i].valor = 0
            valorCelula.innerText = 0;
            celuNeu.innerHTML = `${0} \n <div style="font-size:12px;">${nome}</div>`;
        });
    }

    /*Parte da contagem na diferencial*/
    const contagensDif =criaDiv()
    painel.appendChild(contagensDif)
    contagensDif.classList.add('valoresPainel')

    let caixaCelulasDif = criaDiv()
    painel.appendChild(caixaCelulasDif)
    caixaCelulasDif.classList.add('caixaCelulas')

    let difCount = criaDiv() //Aqui o valor total da contagem diferencial
    difCount.classList.add('valorPainel');
    difCount.innerHTML = `${relTotal.total = 0} \n <div style="font-size:12px;">Contagem diferencial</div>`;
    contagensDif.appendChild(difCount);

    for(let i = 0; i < celulas.length; i++){ // laço para a contagem diferencial
        let {celula,valor,img,tecla,} = celulas[i];

        let celDif = criaDiv() //setando a div para cada celula diferencial contida no array celula
        celDif.style.backgroundImage = img //imagem de fundo da célula
        celDif.classList.add('celulas')
        caixaCelulasDif.appendChild(celDif)
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

        cliqueEvent({
            celula: celDif, 
            valorCelula: valorCelula,
            valorPainel: difCount,
            numeroPainel: relTotal,
            array: celulas,
            nomePainel: "Contagem diferencial"
        });
        teclaEvent({
            tecla: tecla,
            celulas: celDif,
            valorCelula: valorCelula,
            valorPainel: difCount,
            numeroPainel: relTotal,
            array: celulas,
            nomePainel: "Contagem diferencial"
        });
        zerar.addEventListener('click', function(){
            celulas[i].valor = 0;
            valorCelula.innerText = 0;
            difCount.innerHTML = `${relTotal.total = 0} \n <div style="font-size:12px;">Contagem diferencial</div>`;
        });
    }
}
return mostraPainel()
});