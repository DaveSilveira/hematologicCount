/*           CONTADOR RELATIVO
            *******************
            DAVE SILVEIRA (2023)
*/
function criaDiv(){
    const criarDiv = document.createElement('div');
    return criarDiv;
}
function criaModal(){
    const modal = document.createElement('dialog');
    return modal;
}

let relativa = criaDiv();
 relativa.innerText = 'Relativa';
 relativa.classList.add('botao');
 document.body.appendChild(relativa);

relativa.addEventListener('click', function(){
    const painel = criaDiv(); //painel onde fica toda a contagem relativa
    painel.classList.add('painel');
    document.body.appendChild(painel);

const celulas = [
    {cel: 'Blasto', valor: 0, imagem: 'URL(./assets/img/mieloblasto.png)', musica: 'musica', tecla: 'b'},
    {cel: 'Promie', valor: 0, imagem: 'URL(./assets/img/promielo.png)', musica: 'musica', tecla: 'v'},
    {cel: 'Mieloc', valor: 0, imagem: 'URL(./assets/img/mielo.png)', musica: 'musica', tecla: 'c'},
    {cel: 'Metami', valor: 0, imagem: 'URL(./assets/img/meta.png)', musica: 'musica', tecla: 'm'},
    {cel: 'Bastao', valor: 0, imagem: 'URL(./assets/img/bastao.png)', musica: 'musica', tecla: 'g'},
    {cel: 'Segmen', valor: 0, imagem: 'URL(./assets/img/seg.png)', musica: 'musica', tecla: 'h'},
    {cel: 'Eosino', valor: 0, imagem: 'URL(./assets/img/eos.png)', musica: 'musica', tecla: 'l'},
    {cel: 'Basofi', valor: 0, imagem: 'URL(./assets/img/bas.png)', musica: 'musica', tecla: 'f'},
    {cel: 'Monoci', valor: 0, imagem: 'URL(./assets/img/mon.png)', musica: 'musica', tecla: 'k'},
    {cel: 'LinTip', valor: 0, imagem: 'URL(./assets/img/linTip.png)', musica: 'musica', tecla: 'j'},
    {cel: 'LinAti', valor: 0, imagem: 'URL(./assets/img/linAtip.png)', musica: 'musica', tecla: 'i'},
    {cel: 'Outras', valor: 0, imagem: 'URL(./assets/img/outra.png)', musica: 'musica', tecla: 'o'},
    {cel: 'Outras2', valor: 0, imagem: 'URL(./assets/img/outra.png)', musica: 'musica', tecla: 'p'},
];

const eritroCelula = [
    {cel: 'Eritro', valor: 0, imagem: 'URL(./assets/img/eritro.png)', musica: 'musica', tecla: 'u'}
];

 let relTotal = 0;
 let eritroTotal = 0;

    function mostraPainel(){

        const contagens = criaDiv(); //Aqui aparecereá a contagem relativa
        painel.appendChild(contagens);
        contagens.classList.add('valoresPainel')

        let cxBotao = criaDiv();
        cxBotao.classList.add('botaoPainel');
        contagens.appendChild(cxBotao);

        let verResul = criaDiv();
        verResul.classList.add('botao');
        verResul.innerHTML = 'Resultado';
        cxBotao.appendChild(verResul);
        
        
        let zerar = criaDiv();
        zerar.classList.add('botao');
        zerar.innerHTML = 'Zerar';
        cxBotao.appendChild(zerar);
        zerar.addEventListener('click', function(){
            eritroblasto.innerHTML = `${eritroTotal = 0} \n <div style="font-size:12px;">Eritroblastos</div>`;
            relativa.innerHTML = `${relTotal = 0} \n <div style="font-size:12px;">Leucocitos</div>`;
        });

            let relativa = criaDiv();
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
                    eritroblasto.innerHTML = `${++eritroTotal} \n <div style="font-size:12px;">Leucocitos</div>`;
                    });
                zerar.addEventListener('click', function(){valorEritro.innerText = 0;});
            }

    for (let i = 0; i < celulas.length; i++ ){ //para aparecer os leucocitos no painel
        let {cel, valor, imagem, tecla} = celulas[i];
        let leucoRel = criaDiv(); //setando a div para cada item 'div:' do objeto
            leucoRel.style.backgroundImage = imagem; //Imagem de fundo da celula
            leucoRel.classList.add('celulas');
            painel.appendChild(leucoRel);
            leucoRel.dataset.idx = i;
            
            let valorCelula = criaDiv(); //quantidade de cada celula contada
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

            leucoRel.addEventListener('click', function(){ //joga os valores nos leucocitos
                valorCelula.innerText = ++celulas[this.dataset.idx]["valor"]; 
                relativa.innerHTML = `${++relTotal} \n <div style="font-size:12px;">Leucocitos</div>`;
                
                if(relTotal >= 10){
                    const janelaResul = criaModal();
                    document.body.appendChild(janelaResul);
                    janelaResul.showModal();

                    let  caixa = criaDiv();
                    let fecharResul = criaDiv();
                    janelaResul.appendChild(caixa);
                    caixa.classList.add('caixaResul');
                    caixa.appendChild(fecharResul);

                    fecharResul.innerText = 'X'; //
                    janelaResul.appendChild(fecharResul);
                    fecharResul.addEventListener('click', function(){janelaResul.close()});

                    caixa.innerHTML = `${celulas[leucoRel]['cel']} ${celulas[leucoRel]['valor']}`;
                              }
            }); 
            zerar.addEventListener('click', function(){valorCelula.innerText = 0;});
            
    }
}

    const relativa = mostraPainel();

});

