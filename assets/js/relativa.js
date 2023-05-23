//contador relativo
function criaDiv(){
    const criarDiv = document.createElement('div');
    return criarDiv;
}

let relativa = criaDiv();
 relativa.innerText = 'Relativa';
 relativa.classList.add('botao');
 document.body.appendChild(relativa);

relativa.addEventListener('click', function(rel){
    const painel = criaDiv(); //painel onde fica toda a contagem relativa
    painel.classList.add('painel');
    document.body.appendChild(painel);

const celulas = [
    {cel: 'Blasto', valor: 0, imagem: 'URL(./assets/img/mieloblasto.png)', musica: 'musica', letra: 'b'},
    {cel: 'Promie', valor: 0, imagem: 'URL(./assets/img/promielo.png)', musica: 'musica', letra: 'v'},
    {cel: 'Mieloc', valor: 0, imagem: 'URL(./assets/img/mielo.png)', musica: 'musica', letra: 'c'},
    {cel: 'Metami', valor: 0, imagem: 'URL(./assets/img/meta.png)', musica: 'musica', letra: 'm'},
    {cel: 'Bastao', valor: 0, imagem: 'URL(./assets/img/bastao.png)', musica: 'musica', letra: 'g'},
    {cel: 'Segmen', valor: 0, imagem: 'URL(./assets/img/seg.png)', musica: 'musica', letra: 'h'},
    {cel: 'Eosino', valor: 0, imagem: 'URL(./assets/img/eos.png)', musica: 'musica', letra: 'l'},
    {cel: 'Basofi', valor: 0, imagem: 'URL(./assets/img/bas.png)', musica: 'musica', letra: 'f'},
    {cel: 'Monoci', valor: 0, imagem: 'URL(./assets/img/mon.png)', musica: 'musica', letra: 'k'},
    {cel: 'LinTip', valor: 0, imagem: 'URL(./assets/img/linTip.png)', musica: 'musica', letra: 'j'},
    {cel: 'LinAti', valor: 0, imagem: 'URL(./assets/img/linAtip.png)', musica: 'musica', letra: 'i'},
    {cel: 'Outras', valor: 0, imagem: 'URL(./assets/img/outra.png)', musica: 'musica', letra: 'o'},
    {cel: 'Outra2', valor: 0, imagem: 'URL(./assets/img/outra.png)', musica: 'musica', letra: 'p'},
];

const eritroCelula = [
    {cel: 'Eritro', valor: 0, imagem: 'URL(./assets/img/eritro.png)', musica: 'musica', letra: 'u'}
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
        verResul.addEventListener('click', function(){alert('Resultado')});

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
        let {cel, valor, imagem} = eritroCelula[i];
        let eritroRel = criaDiv(); //setando a div para cada item 'div:' do objeto
            eritroRel.style.backgroundImage = imagem; //Imagem de fundo da celula
            eritroRel.classList.add('celulas');
                painel.appendChild(eritroRel);
                eritroRel.dataset.idx = i; 
        
                let valorEritro = criaDiv(); //quantidade de cada eritrocontada
                eritroRel.appendChild(valorEritro);
                valorEritro.classList.add('valorCelula');
                valorEritro.innerText = valor;
        
                eritroRel.addEventListener('click', function(){ //joga os valores nos leucocitos
                    valorEritro.innerText = ++eritroCelula[this.dataset.idx]["valor"]; 
                    eritroblasto.innerHTML = `${++eritroTotal} \n <div style="font-size:12px;">Leucocitos</div>`;
                    });
                zerar.addEventListener('click', function(){valorEritro.innerText = 0;});
            }

    for (let i = 0; i < celulas.length; i++ ){ //para aparecer os leucocitos no painel
        let {cel, valor, imagem} = celulas[i];
        let leucoRel = criaDiv(); //setando a div para cada item 'div:' do objeto
            leucoRel.style.backgroundImage = imagem; //Imagem de fundo da celula
            leucoRel.classList.add('celulas');
            painel.appendChild(leucoRel);
            leucoRel.dataset.idx = i;
            

            let valorCelula = criaDiv(); //quantidade de cada celula contada
            leucoRel.appendChild(valorCelula);
            valorCelula.classList.add('valorCelula');
            valorCelula.innerText = valor;

            leucoRel.addEventListener('click', function(){ //joga os valores nos leucocitos
                valorCelula.innerText = ++celulas[this.dataset.idx]["valor"]; 
                relativa.innerHTML = `${++relTotal} \n <div style="font-size:12px;">Leucocitos</div>`;
            }); 
            zerar.addEventListener('click', function(){valorCelula.innerText = 0;});
    }
}

    const relativa = mostraPainel();

});