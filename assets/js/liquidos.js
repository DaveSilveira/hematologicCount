//The intention of this code is to create a counting system for liquids.
import { criaDiv, fechar, teclaEvent, cliqueEvent } from './utils.js';
import { corpo } from './utils.js';
import { configCount } from './config.js';
//Anchoring button in HTML
let liquidos = criaDiv();
 liquidos.innerText = 'Contagem de Líquidos';
 liquidos.classList.add('botao');
 corpo.appendChild(liquidos);
//Window count event
liquidos.addEventListener('click', function(){
 const painel = criaDiv()
 painel.classList.add('painel')
 document.body.appendChild(painel)

 const titulo = criaDiv()
 painel.appendChild(titulo)
 titulo.classList.add('tituloCount')
 titulo.innerText = 'Contagem de células em líquidos'

fechar(painel, 'fechar', 'X') //Close window button

let relTotal = { total:0 };

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
    const contagens = criaDiv(); //Here the total values of the Neubauer count will appear
    painel.appendChild(contagens);
    contagens.classList.add('valoresPainel')

    let cxBotao = criaDiv();
    cxBotao.classList.add('botaoPainel');
    contagens.appendChild(cxBotao);
        
    let verResul = criaDiv(); //Result count button
    verResul.classList.add('botao');
    verResul.innerHTML = 'Resultado';
    cxBotao.appendChild(verResul);
    verResul.addEventListener('click', function(){result()});
    verResul.style.display = 'none'

    let zerar = criaDiv(); //Reset count button
    zerar.classList.add('botao');
    zerar.innerHTML = 'Zerar';
    cxBotao.appendChild(zerar);

    configCount('Config', painel, celulasNeu, celulas)

    let caixaCelulasNeu = criaDiv()
    painel.appendChild(caixaCelulasNeu)
    caixaCelulasNeu.classList.add('caixaCelulas')

/*NEUBAUER COUNT*/
    for(let i = 0; i < celulasNeu.length; i++){
        let {celula,nome,valor,img,tecla} = celulasNeu[i];
        
        let celuNeu = criaDiv(); //Here the total value of the Neubauer cell count will appear
        celuNeu.classList.add('valorPainel');
        celuNeu.innerHTML = `${celulasNeu[0].valor} \n <div style="font-size:12px;">${nome}</div>`;
        contagens.appendChild(celuNeu);

        let celNeu = criaDiv() //Neubauer cell button
        celNeu.style.backgroundImage = img 
        celNeu.classList.add('celulas')
        caixaCelulasNeu.appendChild(celNeu)
        celNeu.dataset.idx = i;
        
        let valorCelula = criaDiv();
        celNeu.appendChild(valorCelula);
        valorCelula.classList.add('valorCelula');
        valorCelula.innerText = valor;

        let nomeLeuco = criaDiv(); 
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
/*DIFFERENTIAL COUNT*/
    const contagensDif =criaDiv()
    painel.appendChild(contagensDif)
    contagensDif.classList.add('valoresPainel')

    let caixaCelulasDif = criaDiv()
    painel.appendChild(caixaCelulasDif)
    caixaCelulasDif.classList.add('caixaCelulas')

    let difCount = criaDiv() //Here the total value of the differential count will appear
    difCount.classList.add('valorPainel');
    difCount.innerHTML = `${relTotal.total = 0} \n <div style="font-size:12px;">Contagem diferencial</div>`;
    contagensDif.appendChild(difCount);

    for(let i = 0; i < celulas.length; i++){ //Differntial count
        let {celula,valor,img,tecla,} = celulas[i];

        let celDif = criaDiv() //Cell div button
        celDif.style.backgroundImage = img
        celDif.classList.add('celulas')
        caixaCelulasDif.appendChild(celDif)
        celDif.dataset.idx = i;
        
        let valorCelula = criaDiv();
        celDif.appendChild(valorCelula);
        valorCelula.classList.add('valorCelula');
        valorCelula.innerText = valor;

        let nomeLeuco = criaDiv();
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