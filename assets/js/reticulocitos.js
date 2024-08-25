//CONTAGEM DE RETICULÓCITOS
let reticulocitos = criaDiv()
reticulocitos.innerText = 'Reticulócitos';
reticulocitos.classList.add('botao')
corpo.appendChild(reticulocitos)

reticulocitos.addEventListener('click', function(){
    let painel = criaDiv()
    painel.classList.add('painel')
    document.body.appendChild(painel)

    fechar(painel, 'fechar', 'X') //Função de fechar janela, chamada do arquivo main

let titulo = criaDiv();
painel.appendChild(titulo)
titulo.innerText = 'Contagem de reticulócitos';
titulo.style.cssText = `font-size:24px; font-family: sans-serif; display: inline-block; margin: 10px 0px 0px 30px;`;

//Inces contendo informações dos botões
    let reticulocito = [{
        cel: 'Ret',
        valor: 0,
        musica: '',
        imagem: 'URL(./assets/img/reticulocito.png)',
        tecla: 'g',
        tecla1: 'G',  
    }]
    let campo = [{
        cel: 'Campo',
        valor: 0,
        musica: '',
        imagem: 'URL(./assets/img/campoReti.png)',
        tecla: 'h',
        tecla1: 'H',
    }]

//Variaveis criadas externamente para setar as configurações das contagens do painel
let totalRet = 0;
let totalCampo = 0;

const contagens = criaDiv()
painel.appendChild(contagens)
contagens.classList.add('valoresPainel')

let cxBotao = criaDiv(); //caixa que engloba os botoes resultado e zerar
cxBotao.classList.add('botaoPainel');
contagens.appendChild(cxBotao);

let zerar = criaDiv()
zerar.classList.add('botao')
cxBotao.appendChild(zerar)
zerar.innerText = 'Zerar';
zerar.addEventListener('click', function(){
    contadorReti.innerHTML = `${totalRet = 0} \n <div style="font-size:12px;">Reticulócitos</div>`
    contadorCampo.innerHTML = `${totalCampo = 0} \n <div style="font-size:12px;">Campos</div>`
});

let resultado = criaDiv()
resultado.classList.add('botao')
cxBotao.appendChild(resultado)
resultado.innerText = 'Resultado';
resultado.addEventListener('click', function(){result()} )

let contadorReti = criaDiv()
contagens.appendChild(contadorReti)
contadorReti.classList.add('valorPainel')
contadorReti.innerHTML = `${totalRet = 0} \n <div style="font-size:12px;">Reticulócitos</div>`;

let contadorCampo = criaDiv()
contagens.appendChild(contadorCampo)
contadorCampo.classList.add('valorPainel')
contadorCampo.innerHTML = `${totalCampo = 0} \n <div style="font-size:12px;">Campos</div>`;

let celulas = criaDiv() //Div que formata os botões de células
painel.appendChild(celulas)
centralizaDiv(celulas)

//Botão de contagem de reticulócitos
for(let i=0; i < reticulocito.length; i++){
    let {cel, valor, imagem, tecla, tecla1} = reticulocito[i];

    let retCount = criaDiv()
    retCount.classList.add('celulas')
    retCount.style.backgroundImage = imagem;
    celulas.appendChild(retCount)
    retCount.dataset.idx = i;

    let valorRet = criaDiv()
    valorRet.classList.add('valorCelula')
    retCount.appendChild(valorRet)
    valorRet.innerText = valor;

    let nomeRet = criaDiv()
    nomeRet.classList.add('nomeLeuco')
    nomeRet.innerText = cel;
    retCount.appendChild(nomeRet)

    let teclaRet = criaDiv()
    teclaRet.classList.add('teclaCelula')
    teclaRet.innerText = tecla;
    retCount.appendChild(teclaRet)

    retCount.addEventListener('click', function(){
        valorRet.innerHTML = ++reticulocito[this.dataset.idx]['valor']
        contadorReti.innerHTML = `${++totalRet} \n <div style="font-size:12px;">Reticulócitos</div>`;
    });
    document.addEventListener('keydown', function(event){
        if(event.key === tecla){
            valorRet.innerHTML = ++reticulocito[retCount.dataset.idx]['valor']
            contadorReti.innerHTML = `${++totalRet} \n <div style="font-size:12px;">Reticulócitos</div>`;
        }
    });
    document.addEventListener('keydown', function(event){
        if(event.key === tecla1){
            valorRet.innerHTML = ++reticulocito[retCount.dataset.idx]['valor']
            contadorReti.innerHTML = `${++totalRet} \n <div style="font-size:12px;">Reticulócitos</div>`;
        }});
        zerar.addEventListener('click', function(){
            reticulocito[i].valor = 0;
            valorRet.innerText = 0;
        });
}

//Botão de contagem dos campos
for(let i=0; i< campo.length; i++){
    let {cel, valor, imagem, tecla, tecla1} = campo[i]

    let campoCount = criaDiv()
    campoCount.style.backgroundImage = imagem;
    celulas.appendChild(campoCount)
    campoCount.classList.add('celulas')
    campoCount.dataset.idx = i;

    let valorCampo = criaDiv()
    valorCampo.classList.add('valorCelula')
    valorCampo.innerText = valor;
    campoCount.appendChild(valorCampo)

    let nomeCampo = criaDiv()
    nomeCampo.classList.add('nomeLeuco')
    nomeCampo.innerText = cel;
    campoCount.appendChild(nomeCampo)

    let teclaCampo = criaDiv()
    teclaCampo.classList.add('teclaCelula')
    teclaCampo.innerText = tecla;
    campoCount.appendChild(teclaCampo)

        campoCount.addEventListener('click', function(){
            valorCampo.innerHTML = ++campo[this.dataset.idx]['valor']
            contadorCampo.innerHTML = `${++totalCampo} \n <div style="font-size:12px;">Campos</div>`;
            if(totalCampo === 10) return result()
        });
        document.addEventListener('keydown', function(event){
            if(event.key === tecla){
            valorCampo.innerHTML = ++campo[campoCount.dataset.idx]['valor']
            contadorCampo.innerHTML = `${++totalCampo} \n <div style="font-size:12px;">Campos</div>`;
            if(totalCampo === 10) return result()
            }
        });
        document.addEventListener('keydown', function(event){
            if(event.key === tecla1){
            valorCampo.innerHTML = ++campo[campoCount.dataset.idx]['valor']
            contadorCampo.innerHTML = `${++totalCampo} \n <div style="font-size:12px;">Campos</div>`;
            if(totalCampo === 10) return result()
            }
        });
        zerar.addEventListener('click', function(){
            campo[i].valor = 0
            valorCampo.innerText =0
        });
}

//Formatação da aba de resultados
function result(){ 

    let janela = criaDiv()
    //Setando o css pelo js para exclusividade nesse codigo, pois a classe e tbm de relativa.js
    janela.style.cssText = `text-align: center;`
    janela.classList.add('painelResult')
    document.body.appendChild(janela)
    janela.innerHTML = `<h1>Resultado</h1>`

    let resul = criaDiv()
    janela.appendChild(resul)
    resul.classList.add('absoluto')

        let eriLabel = document.createElement('label')
        resul.appendChild(eriLabel)
        eriLabel.for = 'valor_eri';
        eriLabel.textContent ='Valor total de eritrocitos: ';
        let eri = document.createElement('input')
        resul.appendChild(eri)
        eri.type = 'number';
        eri.id = 'valor_eri';
        eri.placeholder ='Eritrócitos totais:';

        let hctLabel = document.createElement('label')
        resul.appendChild(hctLabel)
        hctLabel.for = 'valor_hct';
        hctLabel.textContent ='Valor do hematocrito: ';
        let hct = document.createElement('input')
        resul.appendChild(hct)
        hct.type = 'number';
        hct.id = 'valor_hct';
        hct.placeholder ='Hematócrito';

        let enviar = document.createElement('button')
        resul.appendChild(enviar)
        enviar.innerText = 'Enviar';
        
        let media = (totalRet / totalCampo)

        let reti = criaP()
        reti.innerHTML = `Média de reticulócitos: ${media}`
        resul.appendChild(reti)

        enviar.addEventListener('click', function(){
            let eritrocitos = eri.value;
            let hematocrito = hct.value;
            let CAR = (media * hematocrito / 45).toFixed(3)
            let porcentagem = (eritrocitos * CAR / 100).toFixed(2)

        resul.innerHTML = `
        <p>Eritrocitos totais: ${eritrocitos} milhões/mm³</p>
        <p>Hematócrito: ${hematocrito}%</p>
        <p>Média de reticulócitos: ${media}</p>
        <p>${CAR} de reticulócitos em ${eritrocitos} milhões/mm³ de hemácias, sendo 
        ${porcentagem}% de reticulócitos.</p>`;
        });
    fechar(janela, 'botao', 'Fechar')
}
});