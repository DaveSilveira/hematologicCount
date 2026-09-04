/* App Config */
import { criaDiv, criaP, fechar } from './utils.js';
import { corpo } from './utils.js';
// count settings
export function configCount(nomeBotao, elementoPai, array1, array2){
    //Ancoragem
    let configCount = criaDiv()
    configCount.classList.add('botao')
    elementoPai.appendChild(configCount)
    configCount.innerHTML = `${nomeBotao}`
    configCount.style.display = 'none'
    
    //Inicio do evento da janela de configuração
    configCount.addEventListener('click', function(){
    const configPainel = criaDiv()
    configPainel.classList.add('painel')
    document.body.appendChild(configPainel)
    
    let tituloConfig = criaDiv()
    tituloConfig.classList.add('tituloCount')
    tituloConfig.innerText = 'Configurações do contador'
    configPainel.appendChild(tituloConfig)

    fechar(configPainel, 'fechar', 'X') //Botão de fechar a janela

    let caixaTeclas = criaDiv()
    caixaTeclas.classList.add('valoresPainel')
    configPainel.appendChild(caixaTeclas)

    criaP().innerText = 'Teclas de atalho:'

    let celulas = criaDiv()
    celulas.classList.add('divResul')
    configPainel.appendChild(celulas)

    let valoresAtuais = criaDiv()
    valoresAtuais.classList.add('divValue')
    configPainel.appendChild(valoresAtuais)
    
    let valoresNovos = criaDiv()
    valoresNovos.classList.add('divPorcent')
    configPainel.appendChild(valoresNovos)

    for(let i = 0; i < array1.length; i++){
        let {nome,tecla} = array1[i];

       let celula = criaP()
       celulas.appendChild(celula)
       celula.classList.add('result')
       celula.innerHTML = `${nome}`;

       let teclaAtual = criaP()
       valoresAtuais.appendChild(teclaAtual)
       teclaAtual.classList.add('result')
       teclaAtual.innerHTML = `Tecla atual: ${tecla.toUpperCase()}`;

       let teclaNova = criaP()
       valoresNovos.appendChild(teclaNova)
       teclaNova.classList.add('result')
       teclaNova.innerHTML = `<input type="text" class="inputTecla" placeholder="${tecla.toUpperCase()}" maxlength="1" data-idx="${i}"style="width: 10px;height: 10px; text-align: center;">`;

    }
        for(let i = 0; i < array2.length; i++){
        let {nome,tecla} = array2[i];

       let celula = criaP()
       celulas.appendChild(celula)
       celula.classList.add('result')
       celula.innerHTML = `${nome}`;

       let teclaAtual = criaP()
       valoresAtuais.appendChild(teclaAtual)
       teclaAtual.classList.add('result')
       teclaAtual.innerHTML = `Tecla atual: ${tecla.toUpperCase()}`;

       let teclaNova = criaP()
       valoresNovos.appendChild(teclaNova)
       teclaNova.classList.add('result')
       teclaNova.innerHTML = `<input type="text" class="inputTecla" placeholder="${tecla.toUpperCase()}" maxlength="1" data-idx="${i}"style="width: 10px;height: 10px; text-align: center;">`;

    }
});
}

export function cores(){
    let temaMenu = criaDiv()
    temaMenu.classList.add('botao-config')
    document.body.appendChild(temaMenu)
    temaMenu.style.backgroundImage = "url('./assets/img/config.png')"

    const painelCores = criaDiv()
    temaMenu.appendChild(painelCores)
    painelCores.classList.add('painel-config')
    painelCores.style.display = 'none'

    temaMenu.addEventListener('click', function(){ 
        if(painelCores.style.display == 'none'){
            painelCores.style.display = 'block'
        } else {
            painelCores.style.display = 'none'
        }
    });

    let esquemaCores = [
        {nome: 'Claro', cor: '#dddbdb', painelFundo: '#ffffff', botao: '#2299dd', botaoTexto: '#ffffff'},
        {nome: 'Escuro', cor: '#333333', painelFundo: '#747272', botao: '#555555', botaoTexto: '#ffffff'},
        {nome: 'Rosado', cor: '#fab9f7', painelFundo: '#f5d9f3', botao: '#cf25e6', botaoTexto: '#ffffff'},
        {nome: 'Classico', cor: '#a6cdf1', painelFundo: '#ffffff', botao: '#0c136d', botaoTexto: '#ffffff'},
    ];
    for (let i = 0; i < esquemaCores.length; i++) {
        let {nome, cor} = esquemaCores[i];

        let botaoTema = criaDiv()
        botaoTema.innerHTML = nome
        painelCores.appendChild(botaoTema)
        botaoTema.dataset.idx = i;
        botaoTema.classList.add('botao-tema')

        let botoes = document.getElementsByClassName('botao');
        let titulo = document.querySelector('.titulo');
        let fechar = document.getElementsByClassName('fechar');
        let painel = document.getElementsByClassName('painel');

        botaoTema.addEventListener('click', function() {
            let {cor, corTexto, painelFundo, botao, botaoTexto} = esquemaCores[this.dataset.idx];
            document.body.style.backgroundColor = cor;
            document.body.style.color = corTexto;
            titulo.style.color = corTexto;
            titulo.style.backgroundColor = botao;
            for (let j = 0; j < botoes.length; j++) {
                botoes[j].style.backgroundColor = botao;
                botoes[j].style.color = botaoTexto;
            }
            for (let j = 0; j < fechar.length; j++) {
                fechar[j].style.backgroundColor = botao;
                fechar[j].style.color = botaoTexto;
            }
            for (let j = 0; j < painel.length; j++) {
                painel[j].style.backgroundColor = painelFundo;
            }
        });
    }
    
}
