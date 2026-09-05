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
        {nome: 'Black-green', '--cor-fundo': '#020202', '--cor-painel': '#808180', '--cor-botao': '#00ff2a', '--cor-botao-texto': '#000000'},
        {nome: 'Escuro', '--cor-fundo': '#333333', '--cor-painel': '#747272', '--cor-botao': '#555555', '--cor-botao-texto': '#ffffff'},
        {nome: 'Rosado', '--cor-fundo': '#f6a4c6', '--cor-painel': '#f5d9f3', '--cor-botao': '#cf25e6', '--cor-botao-texto': '#ffffff'},
        {nome: 'Pastel', '--cor-fundo': '#d8d6be', '--cor-painel': '#e7e7da', '--cor-botao': '#c2cde0', '--cor-botao-texto': '#241a06'},
        {nome: 'Classico', '--cor-fundo': '#a6cdf1', '--cor-painel': '#ffffff', '--cor-botao': '#0c136d', '--cor-botao-texto': '#ffffff'}
    ];
    function aplicarTema(tema) {
        Object.entries(tema).forEach(([variavel, valor]) => {
        document.documentElement.style.setProperty(variavel, valor);
        });
    }
    for (let i = 0; i < esquemaCores.length; i++) {
        let {nome} = esquemaCores[i];

        let botaoTema = criaDiv()
        botaoTema.innerHTML = nome
        painelCores.appendChild(botaoTema)
        botaoTema.dataset.idx = i;
        botaoTema.classList.add('botao-tema')

        botaoTema.addEventListener('click', function() {
            aplicarTema(esquemaCores[this.dataset.idx]);
            console.log(`Tema aplicado: ${esquemaCores[this.dataset.idx].nome}`);
        });
    }
}
