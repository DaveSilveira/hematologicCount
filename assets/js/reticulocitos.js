/* ESTE CÓDIGO INDEPENDE DO RESTANTE, PARA RODÁ-LO EM OUTRO LUGAR BASTA CHAMAR
    O ELEMENTO PAI ONDE ELE VAI SE ANCORAR E INCORPORÁ-LO NO CÓDIGO*/
    
//Funções necessárias para o código funcionar
function fechar(elementoPai, classeDoBotao, textoDoBotao){
    let fechar = criaDiv()
    elementoPai.appendChild(fechar)
    fechar.classList.add(classeDoBotao)
    fechar.innerText = textoDoBotao;
    fechar.addEventListener('click', () => elementoPai.remove());
}
function criaDiv(){
    const criarDiv = document.createElement('div');
    return criarDiv;
}
function centralizaDiv(elementoPai){
    elementoPai.style.cssText = `display: flex; flex-drection: row; justify-content: center; align-content: center;`
}
function criaP(){
    let p = document.createElement('p')
    return p;
}

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
//if steatment necessária para impedir o usuario de abrir a janela de resultado antes da contagem de campos necessária para o calculo
    if(totalCampo < 5){
        alert('Você não contou a quantidade suficiente de campos.')
        janela.remove()
    }

    let resul = criaDiv()
    janela.appendChild(resul)
    resul.classList.add('resulReti')
        let eriLabel = document.createElement('label')
        resul.appendChild(eriLabel)
        eriLabel.for = 'valor_eri';
        eriLabel.textContent ='Valor total de eritrocitos: ';
        let eri = document.createElement('input')
        resul.appendChild(eri)
        eri.type = 'number';
        eri.step = '0.01';
        eri.id = 'valor_eri';
        eri.placeholder ='0,00:';
    
        let hctLabel = document.createElement('label')
        resul.appendChild(hctLabel)
        hctLabel.for = 'valor_hct';
        hctLabel.textContent ='Valor do hematocrito: ';
        let hct = document.createElement('input')
        resul.appendChild(hct)
        hct.type = 'number';
        hct.max = '95';
        hct.min = '10';
        hct.id = 'valor_hct';
        hct.placeholder ='00';
        
        let enviar = document.createElement('button')
        resul.appendChild(enviar)
        enviar.innerText = 'Enviar';
        
        let media = (totalRet / totalCampo).toFixed(2)

        let reti = criaP()
        reti.innerHTML = `<b><p>Média de reticulócitos: ${media}</p></b>
        <p>Média de reticulócitos = Reticulócitos contados / Campos contados</p>`;
        resul.appendChild(reti)

        enviar.addEventListener('click', function(){
            let eritrocitos = eri.value;
            let hematocrito = hct.value;
            let CAR = (media * hematocrito / 45).toFixed(3)
            let porcentagem = (eritrocitos * CAR / 100).toFixed(2)

        resul.innerHTML = `
        <justify><p>Eritrocitos totais: ${eritrocitos} milhões/mm³</p>
        <p>Hematócrito: ${hematocrito}%</p>
        <p><b>Média de reticulócitos: ${media}</b></p>
        <p>${CAR} reticulócitos em ${eritrocitos} milhões/mm³ de hemácias, sendo 
        ${porcentagem}% de reticulócitos.</p>
        <p>Média de reticulócitos = Reticulócitos contados / Campos contados</p>
        <p>Contagem Absoluta de Reticulócitos = Média de Ret. x Hct / 45</p><justify>
        `;
        });

    fechar(janela, 'botao', 'Fechar')
}
});