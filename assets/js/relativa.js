/* */
//Funções necessárias para tornar o código menor.
function criaDiv(){
    const criarDiv = document.createElement('div');
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

fechar(painel, 'fechar', 'X') //Botão de fechar a janela

//valor inicial dos contadores
let relTotal = 0;
let eritroTotal = 0;

//Array que contém as informações dos leucocitos usados no contador
const celulas = [
    {cel: 'Blasto', nome: 'Blasto',valor: 0, imagem: 'URL(./assets/img/mieloblasto.png)', som: 'musica', tecla: 'b', tecla1: 'B'},
    {cel: 'Promie', nome: 'Promielócito',valor: 0, imagem: 'URL(./assets/img/promielo.png)', som: 'musica', tecla: 'v', tecla1: 'V'},
    {cel: 'Mieloc', nome: 'Mielócito',valor: 0, imagem: 'URL(./assets/img/mielo.png)', som: 'musica', tecla: 'c', tecla1: 'C'},
    {cel: 'Metami', nome: 'Metamielócito',valor: 0, imagem: 'URL(./assets/img/meta.png)', som: 'musica', tecla: 'm', tecla1: 'M'},
    {cel: 'Bastao', nome: 'Bastonete',valor: 0, imagem: 'URL(./assets/img/bastao.png)', som: 'musica', tecla: 'g', tecla1: 'G'},
    {cel: 'Segmen', nome: 'Segmentado',valor: 0, imagem: 'URL(./assets/img/seg.png)', som: 'musica', tecla: 'h', tecla1: 'H'},
    {cel: 'Eosino', nome: 'Eosinófilo',valor: 0, imagem: 'URL(./assets/img/eos.png)', som: 'musica', tecla: 'l', tecla1: 'L'},
    {cel: 'Basofi', nome: 'Basófilo',valor: 0, imagem: 'URL(./assets/img/bas.png)', som: 'musica', tecla: 'f', tecla1: 'F'},
    {cel: 'Monoci', nome: 'Monócito',valor: 0, imagem: 'URL(./assets/img/mon.png)', som: 'musica', tecla: 'k', tecla1: 'K'},
    {cel: 'LinTip', nome: 'Linfócito Típico',valor: 0, imagem: 'URL(./assets/img/linTip.png)', som: 'musica', tecla: 'j', tecla1: 'J'},
    {cel: 'LinAti', nome: 'Linfócito Atípico',valor: 0, imagem: 'URL(./assets/img/linAtip.png)', som: 'musica', tecla: 'i', tecla1: 'I'},
    {cel: 'Outras', nome: 'Outras',valor: 0, imagem: 'URL(./assets/img/outra.png)', som: 'musica', tecla: 'o', tecla1: 'O'},
    {cel: 'Outras2',nome: 'Outras 2',valor: 0, imagem: 'URL(./assets/img/outra.png)', som: 'musica', tecla: 'p', tecla1: 'P'},
];

const count = new Audio('./assets/sound/count.mp3')
const final = new Audio('./assets/sound/final.mp3')

//array que contém as infromaões dos eritros, precisa ficar separado pois o contador é diferente
const eritroCelula = [
    {cel: 'Eritro', nome: 'Eritroblastos', valor: 0, imagem: 'URL(./assets/img/eritro.png)', musica: 'musica', tecla: 'u', tecla1: 'U'}
];

    function mostraPainel(){ //MOSTRA O CONTADOR

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
            eritroblasto.innerHTML = `${eritroTotal = 0} \n <div style="font-size:12px;">Eritroblastos</div>`;
            relativa.innerHTML = `${relTotal = 0} \n <div style="font-size:12px;">Leucocitos</div>`;
        });

        let relativa = criaDiv(); //Aqui o total de leucocitos
        relativa.classList.add('valorPainel');
        relativa.innerHTML = `${relTotal = 0} \n <div style="font-size:12px;">Leucocitos</div>`;
        contagens.appendChild(relativa);

        let eritroblasto = criaDiv(); //Aqui o n de eritroblastos
        eritroblasto.classList.add('valorPainel');
        eritroblasto.innerHTML = `${eritroTotal = 0} \n <div style="font-size:12px;">Eritroblastos</div>`;
        contagens.appendChild(eritroblasto);

        let caixaCelulas = criaDiv()
        painel.appendChild(caixaCelulas)
        caixaCelulas.classList.add('caixaCelulas')

    for (let i = 0; i < eritroCelula.length; i++ ){ //para aparecer os eritros no painel
        let {cel, valor, imagem, tecla, tecla1, nome} = eritroCelula[i];

                let eritroRel = criaDiv(); //setando a div para cada item 'div:' do objeto
                eritroRel.style.backgroundImage = imagem; //Imagem de fundo da celula
                eritroRel.classList.add('celulas');
                caixaCelulas.appendChild(eritroRel);
                eritroRel.dataset.idx = i;
                eritroRel.setAttribute("name", nome)
        
                let valorEritro = criaDiv(); //quantidade de cada eritrocontada
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
        
                eritroRel.addEventListener('click', function(){ //joga os valores nos leucocitos
                    valorEritro.innerText = ++eritroCelula[this.dataset.idx]["valor"]; 
                    eritroblasto.innerHTML = `${++eritroTotal} \n <div style="font-size:12px;">Eritroblastos</div>`;
                    count.currentTime = 0
                    count.play()
                    });
                document.addEventListener('keydown', function(event){
                    if(event.key === tecla){
                        valorEritro.innerText = ++eritroCelula[eritroRel.dataset.idx]["valor"]; 
                        eritroblasto.innerHTML = `${++eritroTotal} \n <div style="font-size:12px;">Eritroblastos</div>`;
                        count.currentTime = 0
                        count.play()
                    }});
                document.addEventListener('keydown', function(event){
                    if(event.key === tecla1){
                        valorEritro.innerText = ++eritroCelula[eritroRel.dataset.idx]["valor"]; 
                        eritroblasto.innerHTML = `${++eritroTotal} \n <div style="font-size:12px;">Eritroblastos</div>`;
                        count.currentTime = 0
                        count.play()
                    }});
                zerar.addEventListener('click', function(){
                    eritroCelula[i].valor = 0;
                    valorEritro.innerText = 0;
                });
                
            }

    for (let i = 0; i < celulas.length; i++){ //para aparecer os leucocitos no painel
    let {cel, valor, imagem, tecla, tecla1, nome} = celulas[i];

            let leucoRel = criaDiv(); //setando a div para cada item 'div:' do objeto
            leucoRel.style.backgroundImage = imagem; //Imagem de fundo da celula
            leucoRel.classList.add('celulas');
            caixaCelulas.appendChild(leucoRel);
            leucoRel.dataset.idx = i;
            leucoRel.setAttribute('name', nome)
            
            let valorCelula = criaDiv(); //quantidade de cada celula contada
            leucoRel.appendChild(valorCelula);
            valorCelula.classList.add('valorCelula');
            valorCelula.innerText = valor;

            let nomeLeuco = criaDiv(); //nome de cada cel ao centro
            leucoRel.appendChild(nomeLeuco);
            nomeLeuco.classList.add('nomeLeuco');
            nomeLeuco.innerText = cel;

            let teclaCelula = criaDiv();
            leucoRel.appendChild(teclaCelula);
            teclaCelula.classList.add('teclaCelula');
            teclaCelula.innerText = tecla;

            leucoRel.addEventListener('click', function(){ //joga os valores nos leucocitos
                valorCelula.innerText = ++celulas[this.dataset.idx]["valor"]; 
                relativa.innerHTML = `${++relTotal} \n <div style="font-size:12px;">Leucocitos</div>`;
                count.currentTime = 0
                count.play()
               if(relTotal == 100) return result();
            });
            document.addEventListener('keydown', function(event){
                if(event.key === tecla){
                valorCelula.innerText = ++celulas[leucoRel.dataset.idx]["valor"]; 
                relativa.innerHTML = `${++relTotal} \n <div style="font-size:12px;">Leucocitos</div>`;
                count.currentTime = 0
                count.play()
                if(relTotal == 100) return result();              
                }
            });
            document.addEventListener('keydown', function(event){
                if(event.key === tecla1){
                valorCelula.innerText = ++celulas[leucoRel.dataset.idx]["valor"]; 
                relativa.innerHTML = `${++relTotal} \n <div style="font-size:12px;">Leucocitos</div>`;
                count.currentTime = 0
                count.play()
                if(relTotal == 100) return result();
                }
            });
            zerar.addEventListener('click', function(){
                celulas[i].valor=0; // zera o valor no array
                valorCelula.innerText = 0 //zera o valor no visor vermelho
            });
        }
    }
 
function result(){ //MOSTRA A JANELA DE RESULTADOS
    
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

        //EVENTO DE CALCULO DA CORREÇÃO DE RETICULOCITOS
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
}); //Final do evento de janela

//Criador: https://github.com/DaveSilveira