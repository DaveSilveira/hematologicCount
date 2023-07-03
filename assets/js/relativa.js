
let relativa = criaDiv();
 relativa.innerText = 'Contagem Relativa';
 relativa.classList.add('botao');
 corpo.appendChild(relativa);

relativa.addEventListener('click', function(){
    const painel = criaDiv() //Abrir painel de cont. relat.
    painel.classList.add('painel')
    document.body.appendChild(painel)

let fechar = criaDiv()
painel.appendChild(fechar) //fechar painel de cont. rel.
fechar.classList.add('fechar')
fechar.innerText ='x';
fechar.addEventListener('click', function(){painel.style.cssText = 'display:none;'});

//Array que contém as informações dos leucocitos usados no contador
const celulas = [
    {cel: 'Blasto', nome: 'Blasto',valor: 0, imagem: 'URL(./assets/img/mieloblasto.png)', musica: 'musica', tecla: 'b', tecla1: 'B'},
    {cel: 'Promie', nome: 'Promielócito',valor: 0, imagem: 'URL(./assets/img/promielo.png)', musica: 'musica', tecla: 'v', tecla1: 'V'},
    {cel: 'Mieloc', nome: 'Mielócito',valor: 0, imagem: 'URL(./assets/img/mielo.png)', musica: 'musica', tecla: 'c', tecla1: 'C'},
    {cel: 'Metami', nome: 'Metamielócito',valor: 0, imagem: 'URL(./assets/img/meta.png)', musica: 'musica', tecla: 'm', tecla1: 'M'},
    {cel: 'Bastao', nome: 'Bastonete',valor: 0, imagem: 'URL(./assets/img/bastao.png)', musica: 'musica', tecla: 'g', tecla1: 'G'},
    {cel: 'Segmen', nome: 'Segmentado',valor: 0, imagem: 'URL(./assets/img/seg.png)', musica: 'musica', tecla: 'h', tecla1: 'H'},
    {cel: 'Eosino', nome: 'Eosinófilo',valor: 0, imagem: 'URL(./assets/img/eos.png)', musica: 'musica', tecla: 'l', tecla1: 'L'},
    {cel: 'Basofi', nome: 'Basófilo',valor: 0, imagem: 'URL(./assets/img/bas.png)', musica: 'musica', tecla: 'f', tecla1: 'F'},
    {cel: 'Monoci', nome: 'Monócito',valor: 0, imagem: 'URL(./assets/img/mon.png)', musica: 'musica', tecla: 'k', tecla1: 'K'},
    {cel: 'LinTip', nome: 'Linfócito Típico',valor: 0, imagem: 'URL(./assets/img/linTip.png)', musica: 'musica', tecla: 'j', tecla1: 'J'},
    {cel: 'LinAti', nome: 'Linfócito Atípico',valor: 0, imagem: 'URL(./assets/img/linAtip.png)', musica: 'musica', tecla: 'i', tecla1: 'I'},
    {cel: 'Outras', nome: 'Outras',valor: 0, imagem: 'URL(./assets/img/outra.png)', musica: 'musica', tecla: 'o', tecla1: 'O'},
    {cel: 'Outras2',nome: 'Outras 2',valor: 0, imagem: 'URL(./assets/img/outra.png)', musica: 'musica', tecla: 'p', tecla1: 'P'},
];

//array que contém as infromaões dos eritros, precisa ficar separado pois o contador é diferente
const eritroCelula = [
    {cel: 'Eritro', nome: 'Eritroblastos', valor: 0, imagem: 'URL(./assets/img/eritro.png)', musica: 'musica', tecla: 'u', tecla1: 'U'}
];

//valor inicial dos contadores
 let relTotal = 0;
 let eritroTotal = 0;

    function mostraPainel(){

        const contagens = criaDiv(); //Aqui aparecereá os valores totais 
        painel.appendChild(contagens);
        contagens.classList.add('valoresPainel')

        let cxBotao = criaDiv(); //caixa que engloba os botoes
        cxBotao.classList.add('botaoPainel');
        contagens.appendChild(cxBotao);
        cxBotao.style.cssText = 'display: none;';//invisivel por enquanto
        
        let verResul = criaDiv(); //Botao de ver resultado
        verResul.classList.add('botao');
        verResul.innerHTML = 'Resultado';
        cxBotao.appendChild(verResul);
        
        
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

    for (let i = 0; i < eritroCelula.length; i++ ){ //para aparecer os eritros no painel
        let {cel, valor, imagem,tecla} = eritroCelula[i];
        let eritroRel = criaDiv(); //setando a div para cada item 'div:' do objeto
            eritroRel.style.backgroundImage = imagem; //Imagem de fundo da celula
            eritroRel.classList.add('celulas');
                painel.appendChild(eritroRel);
                eritroRel.dataset.idx = i; 
        
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
                    });
                document.addEventListener('keydown', function(event){
                    if(event.key === tecla){
                        valorEritro.innerText = ++eritroCelula[eritroRel.dataset.idx]["valor"]; 
                        eritroblasto.innerHTML = `${++eritroTotal} \n <div style="font-size:12px;">Eritroblastos</div>`;
                    }
                });

                zerar.addEventListener('click', function(){valorEritro.innerText = 0;});
            }

    for (let i = 0; i < celulas.length; i++ ){ //para aparecer os leucocitos no painel
        let {cel, valor, imagem, tecla, tecla1} = celulas[i];

            let leucoRel = criaDiv(); //setando a div para cada item 'div:' do objeto
            leucoRel.style.backgroundImage = imagem; //Imagem de fundo da celula
            leucoRel.classList.add('celulas');
            painel.appendChild(leucoRel);
            leucoRel.dataset.idx = i;
            
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

            /* EVENTOS DE CONTAGEM*/

            leucoRel.addEventListener('click', function(){ //joga os valores nos leucocitos
                valorCelula.innerText = ++celulas[this.dataset.idx]["valor"]; 
                relativa.innerHTML = `${++relTotal} \n <div style="font-size:12px;">Leucocitos</div>`;
               if(relTotal >= 100) return result();
               
            });
            document.addEventListener('keydown', function(event){
                if(event.key === tecla){
                valorCelula.innerText = ++celulas[leucoRel.dataset.idx]["valor"]; 
                relativa.innerHTML = `${++relTotal} \n <div style="font-size:12px;">Leucocitos</div>`;
                if(relTotal >= 100) return result();
                }
            });
            document.addEventListener('keydown', function(event){
                if(event.key === tecla1){
                valorCelula.innerText = ++celulas[leucoRel.dataset.idx]["valor"]; 
                relativa.innerHTML = `${++relTotal} \n <div style="font-size:12px;">Leucocitos</div>`;
                if(relTotal >= 100) return result();
                }
            });
            zerar.addEventListener('click', function(){valorCelula.innerText = 0;});
        }
    }

    const relativa = mostraPainel(); //Criei a variavel para colocar escopo de bloco nas variaveis
 
function result(){ //Formatação da aba de resultados

    let janela = criaDiv()
        janela.classList.add('painelResult')
        document.body.appendChild(janela)
        janela.innerHTML = `<h1>Resultado</h1>`

    let nomes = criaDiv()
    janela.appendChild(nomes)
    nomes.classList.add('divResul')
    let valores = criaDiv()
    janela.appendChild(valores)
    valores.classList.add('divValue')

    for(let i = 0; i < eritroCelula.length; i++){
        let {nome, valor} = eritroCelula[i];

        let eritro = criaP()
        eritro.innerHTML = `${nome}`
        nomes.appendChild(eritro)
        eritro.classList.add('result')

        let result = criaP()
        result.innerHTML = `${valor} em 100 leucócitos`;
        valores.appendChild(result)
        result.classList.add('result')    
        }

    for(let i = 0; i < celulas.length; i++){
        let {nome, valor} = celulas[i];
        
        let leuco = criaP()
        leuco.innerHTML = `${nome}`
        nomes.appendChild(leuco)
        leuco.classList.add('result')

        let result = criaP()
        result.innerHTML = `${valor}%`;
        valores.appendChild(result)
        result.classList.add('result')
    }

    let fechar = criaDiv()
    janela.appendChild(fechar) //fechar painel resultados
    fechar.classList.add('botao')
    fechar.innerText ='Fechar';
    fechar.addEventListener('click', function(){janela.style.cssText = 'display:none;'});
}
});
