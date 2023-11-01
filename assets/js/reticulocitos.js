//CONTAGEM DE RETICULÓCITOS
let reticulocitos = criaDiv()
reticulocitos.innerText = 'Reticulócitos';
reticulocitos.classList.add('botao')
corpo.appendChild(reticulocitos)

reticulocitos.addEventListener('click', function(){
    let painel = criaDiv()
    painel.classList.add('painel')
    document.body.appendChild(painel)

    fechar(painel, 'fechar', 'X')

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
let totalRet
let totalCampo

const contagens = criaDiv()
painel.appendChild(contagens)
contagens.classList.add('valoresPainel')

let zerar = criaDiv()
zerar.classList.add('botao')
contagens.appendChild(zerar)
zerar.innerText = 'Zerar';

let resultado = criaDiv()
resultado.classList.add('botao')
contagens.appendChild(resultado)
resultado.innerText = 'Resultado';

let contadorReti = criaDiv()
contagens.appendChild(contadorReti)
contadorReti.classList.add('valorPainel')
contadorReti.innerHTML = `${totalRet = 0} \n <div style="font-size:12px;">Reticulócitos</div>`;

let contadorCampo = criaDiv()
contagens.appendChild(contadorCampo)
contadorCampo.classList.add('valorPainel')
contadorCampo.innerHTML = `${totalCampo = 0} \n <div style="font-size:12px;">Campos</div>`;

let hematimetricos = criaDiv()
painel.appendChild(hematimetricos)

let eri = document.createElement('input')
hematimetricos.appendChild(eri)
eri.type = 'number';
eri.id = 'valor_absoluto';
eri.placeholder ='Eritrócitos totais:'

let hct = document.createElement('input')
hematimetricos.appendChild(hct)
hct.type = 'number';
hct.id = 'valor_absoluto'
hct.placeholder ='Hematócrito'

let celulas = criaDiv()
painel.appendChild(celulas)

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
        }
    });
}
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
}

function result(){ //Formatação da aba de resultados

    let janela = criaDiv()
    janela.classList.add('painelResult')
    document.body.appendChild(janela)
    janela.innerHTML = `<h1>Resultado</h1>`

    let resul = criaDiv()
    janela.appendChild(resul)
    resul.classList.add('absoluto')

    for(let i = 0; i < reticulocito.length; i++){
        let {valor} = reticulocito[i];

        let reti = criaP()
        reti.innerHTML = `Média de reticulócitos: ${valor / 10}`
        resul.appendChild(reti)
        
        }

    fechar(janela, 'botao', 'Fechar')
}
});