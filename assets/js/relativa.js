/*Contagem relativa do hemograma*/
import { criaDiv, criaP, fechar, teclaEvent, cliqueEvent } from './utils.js';
import { corpo } from './utils.js';
import { configCount } from './config.js';

//Anconragem do botão no html
let relativa = criaDiv();
 relativa.innerText = 'Contagem Relativa';
 relativa.classList.add('botao');
 corpo.appendChild(relativa);

//Janela onde todo o evento de contagem irá ocorrer
relativa.addEventListener('click', function(){
const painel = criaDiv()
painel.classList.add('painel')
document.body.appendChild(painel)

let titulo = criaDiv(); //titulo que aparece na janela de contagem
painel.appendChild(titulo)
titulo.classList.add('tituloCount')
titulo.innerText = 'Contagem relativa';

fechar(painel, 'fechar', 'X')

//Initial value of counters
const relTotal = {total:0};
const eritroTotal = {total:0};

//Array que contém as informações dos leucocitos usados no contador
const celulas = [
    {cel: 'Blasto', nome: 'Blasto',valor: '0', imagem: 'URL(./assets/img/mieloblasto.png)', som: 'musica', tecla: 'm'},
    {cel: 'Promie', nome: 'Promielócito',valor: '0', imagem: 'URL(./assets/img/promielo.png)', som: 'musica', tecla: 'n'},
    {cel: 'Mieloc', nome: 'Mielócito',valor: '0', imagem: 'URL(./assets/img/mielo.png)', som: 'musica', tecla: 'a'},
    {cel: 'Metami', nome: 'Metamielócito',valor: '0', imagem: 'URL(./assets/img/meta.png)', som: 'musica', tecla: 's'},
    {cel: 'Bastao', nome: 'Bastonete',valor: '0', imagem: 'URL(./assets/img/bastao.png)', som: 'musica', tecla: 'g'},
    {cel: 'Segmen', nome: 'Segmentado',valor: '0', imagem: 'URL(./assets/img/seg.png)', som: 'musica', tecla: 'h'},
    {cel: 'Eosino', nome: 'Eosinófilo',valor: '0', imagem: 'URL(./assets/img/eos.png)', som: 'musica', tecla: 'f'},
    {cel: 'Basofi', nome: 'Basófilo',valor: '0', imagem: 'URL(./assets/img/bas.png)', som: 'musica', tecla: 'd'},
    {cel: 'Monoci', nome: 'Monócito',valor: '0', imagem: 'URL(./assets/img/mon.png)', som: 'musica', tecla: 'k'},
    {cel: 'LinTip', nome: 'Linfócito Típico',valor: '0', imagem: 'URL(./assets/img/linTip.png)', som: 'musica', tecla: 'j'},
    {cel: 'LinAti', nome: 'Linfócito Atípico',valor: '0', imagem: 'URL(./assets/img/linAtip.png)', som: 'musica', tecla: 'i'},
    {cel: 'Outras', nome: 'Outras',valor: '0', imagem: 'URL(./assets/img/outra.png)', som: 'musica', tecla: 'o'},
    {cel: 'Outras2',nome: 'Outras 2',valor: '0', imagem: 'URL(./assets/img/outra.png)', som: 'musica', tecla: 'p'},
];

const final = new Audio('./assets/sound/final.mp3')

//array que contém as infromaões dos eritros, precisa ficar separado pois o contador é diferente
const eritroCelula = [
    {cel: 'Eritro', nome: 'Eritroblastos', valor: 0, imagem: 'URL(./assets/img/eritro.png)', musica: 'musica', tecla: 'u'}
];

    function mostraPainel(){ //SHOW COUNT PANEL

        const contagens = criaDiv(); //AHere the total values of the count will appear
        painel.appendChild(contagens);
        contagens.classList.add('valoresPainel')

        let cxBotao = criaDiv(); //box that encompasses the result and reset buttons
        cxBotao.classList.add('botaoPainel');
        contagens.appendChild(cxBotao);
        
        let verResul = criaDiv(); //Result button
        verResul.classList.add('botao');
        verResul.innerHTML = 'Resultado';
        cxBotao.appendChild(verResul);
        verResul.addEventListener('click', function(){result()});

        let zerar = criaDiv(); //Reset button
        zerar.classList.add('botao');
        zerar.innerHTML = 'Zerar';
        cxBotao.appendChild(zerar);
        zerar.addEventListener('click', function(){
            eritroblasto.innerHTML = `${eritroTotal.total=0} \n <div style="font-size:12px;">Eritroblastos</div>`;
            relativa.innerHTML = `${relTotal.total=0} \n <div style="font-size:12px;">Leucocitos</div>`;
        });

        configCount('config', cxBotao, celulas, eritroCelula);

        let relativa = criaDiv(); //Here the total value of Leucocytes will appear
        relativa.classList.add('valorPainel');
        relativa.innerHTML = `${relTotal.total} \n <div style="font-size:12px;">Leucocitos</div>`;
        contagens.appendChild(relativa);

        let eritroblasto = criaDiv(); //Here the total value of Erythroblasts will appear
        eritroblasto.classList.add('valorPainel');
        eritroblasto.innerHTML = `${eritroTotal.total} \n <div style="font-size:12px;">Eritroblastos</div>`;
        contagens.appendChild(eritroblasto);

        let caixaCelulas = criaDiv()
        painel.appendChild(caixaCelulas)
        caixaCelulas.classList.add('caixaCelulas')

    for (let i = 0; i < eritroCelula.length; i++ ){ //For erythroblasts to appear
        let {cel, valor, imagem, tecla, nome} = eritroCelula[i];

                let eritroRel = criaDiv(); //Cell button div (eirythroblasts)
                eritroRel.style.backgroundImage = imagem;
                eritroRel.classList.add('celulas');
                caixaCelulas.appendChild(eritroRel);
                eritroRel.dataset.idx = i;
                eritroRel.setAttribute("name", nome)
        
                let valorEritro = criaDiv();
                eritroRel.appendChild(valorEritro);
                valorEritro.classList.add('valorCelula');
                valorEritro.innerText = valor;

                let nomeEritro = criaDiv();
                eritroRel.appendChild(nomeEritro);
                nomeEritro.classList.add('nomeLeuco');
                nomeEritro.innerText = cel;

                let teclaEritro = criaDiv();
                eritroRel.appendChild(teclaEritro);
                teclaEritro.classList.add('teclaCelula');
                teclaEritro.innerText = tecla;
        
                cliqueEvent({
                celula: eritroRel, 
                valorCelula: valorEritro, 
                array: eritroCelula, 
                valorPainel: eritroblasto, 
                numeroPainel: eritroTotal, 
                nomePainel: "Eritroblastos",
                });
                teclaEvent({
                tecla: tecla,
                valorCelula: valorEritro,
                valorPainel: eritroblasto,
                array: eritroCelula,
                celulas: eritroRel,
                nomePainel: "Eritroblastos",
                });
                zerar.addEventListener('click', function(){
                    eritroCelula[i].valor = 0; //Reset the value of the cell in the array
                    valorEritro.innerText = 0;
                });
                
            }

    for (let i = 0; i < celulas.length; i++){ //Here for the leucocytes appear
    let {cel, valor, imagem, tecla, nome} = celulas[i];

            let leucoRel = criaDiv(); //Cell button div (leucocytes)
            leucoRel.style.backgroundImage = imagem;
            leucoRel.classList.add('celulas');
            caixaCelulas.appendChild(leucoRel);
            leucoRel.dataset.idx = i;
            leucoRel.setAttribute('name', nome)
            
            let valorCelula = criaDiv();
            leucoRel.appendChild(valorCelula);
            valorCelula.classList.add('valorCelula');
            valorCelula.innerText = valor;

            let nomeLeuco = criaDiv();
            leucoRel.appendChild(nomeLeuco);
            nomeLeuco.classList.add('nomeLeuco');
            nomeLeuco.innerText = cel;

            let teclaCelula = criaDiv();
            leucoRel.appendChild(teclaCelula);
            teclaCelula.classList.add('teclaCelula');
            teclaCelula.innerText = tecla;

            cliqueEvent({
                celula: leucoRel, 
                valorCelula: valorCelula, 
                array: celulas, 
                valorPainel: relativa, 
                numeroPainel: relTotal, 
                nomePainel: "Leucocitos",
                result: result,
                limiteMaximo: 100 
            });
            teclaEvent({
                tecla: tecla,
                celulas: leucoRel,
                valorCelula: valorCelula,
                array: celulas,
                valorPainel: relativa,
                numeroPainel: relTotal,
                nomePainel: "Leucocitos",
                result: result,
                limiteMaximo: 100
            });

            zerar.addEventListener('click', function(){
                celulas[i].valor=0; //Reset the value of the cell in the array
                valorCelula.innerText = 0
            });
        }
    }
 
function result(){ //Show resuts window event
    
    final.play()

    let janela = criaDiv()
        janela.classList.add('painelResult')
        document.body.appendChild(janela)
        janela.innerHTML = `<h1>Resultado</h1>`

    let absoluto = criaDiv()
    absoluto.classList.add('absoluto')
    janela.appendChild(absoluto)
    let abs = document.createElement('input')
    abs.type = 'number';
    abs.id = 'abs';
    abs.min = '100';
    abs.step = '100';
    abs.placeholder = '0';
    absoluto.innerHTML = `Valor total de leucocitos:`;
    absoluto.appendChild(abs)
    let enviar = document.createElement('button')
    absoluto.appendChild(enviar)
    enviar.innerText = 'Calcular'

    let resCorrigido = criaP()
    resCorrigido.innerHTML = 'Valor Global de Leucocitos:';
    janela.appendChild(resCorrigido)
    resCorrigido.classList.add('result')

    let nomes = criaDiv()
    janela.appendChild(nomes)
    nomes.classList.add('divResul')

    let valores = criaDiv()
    janela.appendChild(valores)
    valores.classList.add('divValue')

    let porcent = criaDiv()
    janela.appendChild(porcent)
    porcent.classList.add('divPorcent')

    let eritroCorrigido;

    for(let i = 0; i < celulas.length; i++){
        let {nome, valor} = celulas[i];
        
        let leuco = criaP()
        leuco.innerHTML = `${nome}`
        nomes.appendChild(leuco)
        leuco.classList.add('result')

        let result = criaP()
        valores.appendChild(result)
        result.classList.add('result')

        let porcentagem = criaP()
        porcent.appendChild(porcentagem)
        porcentagem.classList.add('result')

        //Erithroblasts correction event
        enviar.addEventListener('click', function(){
        if(eritroCelula[0].valor >= 1){
            let corrigido = Math.trunc((abs.value * 100) / (eritroCelula[0].valor + 100));
            eritroCorrigido = (abs.value - corrigido)
            result.innerHTML = `${(corrigido * valor) / 100} / mm³`;
            porcentagem.innerHTML = `${valor}%`;
            resCorrigido.innerText = `Valor Global de Leucocitos: ${corrigido}`
        }else{
            result.innerHTML = `${abs.value * valor / 100} / mm³`;
            porcentagem.innerHTML= `${valor}%`;
            resCorrigido.innerText = `Valor Global de Leucocitos: ${abs.value}`}
        });

        result.innerHTML = '   -----';
        porcentagem.innerHTML = `${valor}%`;
    }
        for(let i = 0; i < eritroCelula.length; i++){
        let {nome, valor} = eritroCelula[i];

        let eritro = criaP()
        eritro.innerHTML = `${nome}`
        nomes.appendChild(eritro)
        eritro.classList.add('result')

        let result = criaP()
        enviar.addEventListener('click', function(){
            if(eritroCelula[0].valor >= 1){
            result.innerHTML = `${eritroCorrigido} / mm³  -  ${valor} em 100 leucocitos`
            }else{result.innerHTML = `0 / mm³  -  ${valor} em 100 leucocitos`}
        });
        result.innerHTML = `${valor} em 100 leucócitos`;
        valores.appendChild(result)
        result.classList.add('result')    
        }

    fechar(janela,'botao', 'Fechar')
}
mostraPainel(); 
});
