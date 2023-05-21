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
    {cel: 'Blasto', valor: 0, imagem: 'URL(./assets/img/mieloblasto.png)'},
    {cel: 'Promie', valor: 0, imagem: 'URL(./assets/img/promielo.png)'},
    {cel: 'Mieloc', valor: 0, imagem: 'URL(./assets/img/mielo.png)'},
    {cel: 'Metami', valor: 0, imagem: 'URL(./assets/img/meta.png)'},
    {cel: 'Bastao', valor: 0, imagem: 'URL(./assets/img/bastao.png)'},
    {cel: 'Segmen', valor: 0, imagem: 'URL(./assets/img/seg.png)'},
    {cel: 'Eosino', valor: 0, imagem: 'URL(./assets/img/eos.png)'},
    {cel: 'Masofi', valor: 0, imagem: 'URL(./assets/img/bas.png)'},
    {cel: 'Monoci', valor: 0, imagem: 'URL(./assets/img/mon.png)'},
    {cel: 'LinTip', valor: 0, imagem: 'URL(./assets/img/linTip.png)'},
    {cel: 'LinAti', valor: 0, imagem: 'URL(./assets/img/linAtip.png)'},
    {cel: 'Eritro', valor: 0, imagem: 'URL(./assets/img/eritro.png)'},
    {cel: 'Outras', valor: 0, imagem: 'URL(./assets/img/outra.png)'},
    {cel: 'Outra2', valor: 0, imagem: 'URL(./assets/img/outra.png)'},
];

    function mostraPainel(){

        const contagens = criaDiv(); //Aqui aparecereá a contagem relativa
        painel.appendChild(contagens);
        contagens.classList.add('valoresPainel')

            let relativa = criaDiv();
            relativa.classList.add('valorPainel');
            relativa.innerHTML = `${0} \n <div style="font-size:12px;">Leucocitos</div>`;
            contagens.appendChild(relativa);
        
            let eritroblasto = criaDiv(); //Aqui o n de eritroblastos
            eritroblasto.classList.add('valorPainel');
            eritroblasto.innerHTML = `${0} \n <div style="font-size:12px;">Eritroblastos</div>`;
            contagens.appendChild(eritroblasto);

            let cxBotao = criaDiv();
            cxBotao.classList.add('botaoPainel');
            contagens.appendChild(cxBotao);

            let verResul = criaDiv();
            verResul.classList.add('botao');
            verResul.innerHTML = 'Resultado';
            cxBotao.appendChild(verResul);
            verResul.addEventListener('click', function(){alert('resultado')});

            let zerar = criaDiv();
            zerar.classList.add('botao');
            zerar.innerHTML = 'Zerar';
            cxBotao.appendChild(zerar);
            zerar.addEventListener('click', function(){alert('zerou')});

    for (let i = 0; i < celulas.length; i++ ){ //para aparecer as celulas no painel
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

            leucoRel.addEventListener('click', function(){
                valorCelula.innerText = ++celulas[this.dataset.idx]["valor"];  //joga os valores certos
            });  
    }

        return contagens;
    }

    const relativa = mostraPainel();

});