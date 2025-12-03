/* */
//Funções necessárias para tornar o código menor.
function criaDiv(){
    const criaDiv = document.createElement('div')
    return criaDiv
}
function criaP(){
    let p = document.createElement('p')
    return p
}
function fechar(elementoPai, classeDoBotao, textoDoBotao){
    let fechar = criaDiv()
    elementoPai.appendChild(fechar)
    fechar.classList.add(classeDoBotao)
    fechar.innerText = textoDoBotao;
    fechar.addEventListener('click', () => elementoPai.remove());
}
//Anconragem do botão no html
let EAS = criaDiv();
 EAS.innerText = 'EAS';
 EAS.classList.add('botao');
 corpo.appendChild(EAS);

//Janela onde todo o evento de contagem irá ocorrer
EAS.addEventListener('click', function(){
 const painel = criaDiv()
 painel.classList.add('painel')
 document.body.appendChild(painel)

 const titulo = criaDiv()
 painel.appendChild(titulo)
 titulo.classList.add('tituloCount')
 titulo.innerText = 'Contagem de sedimentos urinários'

 fechar(painel, 'fechar', 'X') //Botão de fechar a janela

//array que contém os elementos que podem ser quantificados por número no EAS
const elementos = [
    {nome: 'Célula',valor: '0',img: 'URL(./assets/img/epitelialNeu.png)',tecla: 'g',tecla1: 'G'},
    {nome: 'Piócito',valor: '0',img: 'URL(./assets/img/leucocitoNeu.png)',tecla: 'h',tecla1: 'H'},
    {nome: 'Hemácia',valor: '0',img: 'URL(./assets/img/hemaciaNeu.png)',tecla: 'j',tecla1: 'J'},
    {nome: 'Cilindro',valor: '0',img: 'URL(./assets/img/cilindro.png)',tecla: 'k',tecla1: 'K'},
    //{nome: 'Levedura',valor: '0',img: 'URL(./assets/img/levedura.png)',tecla: 'l',tecla1: 'L'} //verificar classificação de quantidade
];

const count = new Audio('./assets/sound/count.mp3')

function mostraPainel(){
    const contagens = criaDiv(); //Aqui aparecereá os valores totais da contagem neubauer
    painel.appendChild(contagens);
    contagens.classList.add('valoresPainel')

    let caixaFator = criaDiv()
    painel.appendChild(caixaFator)
    caixaFator.classList.add('caixaContadorEAS')

    let zerar = criaDiv(); //botao para zerar contagem
    zerar.classList.add('botao');
    zerar.innerHTML = 'Zerar';
    caixaFator.appendChild(zerar);

    const tituloFator = criaDiv()
    tituloFator.classList.add('valorPainel')
    tituloFator.innerHTML = `<div style="font-size:12px;">Fator de multiplicação:</div>`;
    caixaFator.appendChild(tituloFator)

    const fatorX1 = criaDiv()
    fatorX1.classList.add('botao')
    fatorX1.innerHTML = `<div style="font-size:12px;">x1</div>`;
    caixaFator.appendChild(fatorX1)

    const fatorX4 = criaDiv()
    fatorX4.classList.add('botao')
    fatorX4.innerHTML = `<div style="font-size:12px;">x4</div>`;
    caixaFator.appendChild(fatorX4)

    const fatorX8 = criaDiv()
    fatorX8.classList.add('botao')
    fatorX8.innerHTML = `<div style="font-size:12px;">x8</div>`;
    caixaFator.appendChild(fatorX8)

    const fatorX16 = criaDiv()
    fatorX16.classList.add('botao')
    fatorX16.innerHTML = `<div style="font-size:12px;">x16</div>`;
    caixaFator.appendChild(fatorX16)

    let caixaContadores = criaDiv()
    painel.appendChild(caixaContadores)
    caixaContadores.classList.add('caixaContadorEAS')

    let caixaContagem = criaDiv()
    painel.appendChild(caixaContagem)
    caixaContagem.classList.add('caixaCelulas')

    /*Criação dos botões de contagem na neubauer*/
    for(let i = 0; i < elementos.length; i++){
        let {nome,valor,img,tecla,tecla1} = elementos[i];
        
        let totalElemento = criaDiv(); //Aqui o total de celulas em neubauer
        totalElemento.classList.add('valorPainel');
        totalElemento.innerHTML = `${elementos[0].valor} \n <div style="font-size:12px;">${nome}</div>`;
        caixaContadores.appendChild(totalElemento);

        let elemento = criaDiv() //setando a div para cada celula naubauer contida no array celulasNeu
        elemento.style.backgroundImage = img //imagem de fundo da célula
        elemento.classList.add('celulas')
        caixaContagem.appendChild(elemento)
        elemento.dataset.idx = i;

        let valorElemento = criaDiv(); //quantidade de cada celula contada
        elemento.appendChild(valorElemento);
        valorElemento.classList.add('valorCelula');
        valorElemento.innerText = valor;

        let nomeElemento = criaDiv(); //nome de cada cel ao centro
        elemento.appendChild(nomeElemento);
        nomeElemento.classList.add('nomeLeuco');
        nomeElemento.innerText = nome;

        let teclaElemento = criaDiv();
        elemento.appendChild(teclaElemento);
        teclaElemento.classList.add('teclaCelula');
        teclaElemento.innerText = tecla;

    elemento.addEventListener('click', function(){ //joga os valores nos elementos
        valorElemento.innerText = Number(++elementos[this.dataset.idx]["valor"]);
        totalElemento.innerHTML = `${elementos[this.dataset.idx]["valor"]} \n <div style="font-size:12px;">${nome}</div>`;
    count.currentTime = 0
    count.play()    
    });
    document.addEventListener('keydown', function(event){
        if(event.key === tecla){
        valorElemento.innerText = Number(++elementos[elemento.dataset.idx]["valor"]);
        totalElemento.innerHTML = `${elementos[elemento.dataset.idx]["valor"]} \n <div style="font-size:12px;">${nome}</div>`;
    count.currentTime = 0
    count.play()
        }});
    document.addEventListener('keydown', function(event){
        if(event.key === tecla1){
        valorElemento.innerText = Number(++elementos[elemento.dataset.idx]["valor"]);
        totalElemento.innerHTML = `${elementos[elemento.dataset.idx]["valor"]} \n <div style="font-size:12px;">${nome}</div>`;
    count.currentTime = 0
    count.play()    
    }});
    zerar.addEventListener('click', function(){
        elementos[i].valor = 0
        valorElemento.innerText = 0;
        totalElemento.innerHTML = `${0} \n <div style="font-size:12px;">${nome}</div>`;
        });
    fatorX1.addEventListener('click', function(){
        totalElemento.innerHTML = `${elementos[elemento.dataset.idx]["valor"] * 1} \n <div style="font-size:12px;">${nome}</div>`
        });
    fatorX4.addEventListener('click', function(){
        totalElemento.innerHTML = `${elementos[elemento.dataset.idx]["valor"] * 4} \n <div style="font-size:12px;">${nome}</div>`
        });
    fatorX8.addEventListener('click', function(){
        totalElemento.innerHTML = `${elementos[elemento.dataset.idx]["valor"] * 8} \n <div style="font-size:12px;">${nome}</div>`
        });
    fatorX16.addEventListener('click', function(){
        totalElemento.innerHTML = `${elementos[elemento.dataset.idx]["valor"] * 16} \n <div style="font-size:12px;">${nome}</div>`
        });
    }
}
return mostraPainel()
}); //Final do evento de janela

//Criador: https://github.com/DaveSilveira