/* EM TESTE -- Janelas moveis
function criarDivMovel(){
    let width = window.innerWidth;
    let heigth = window.innerHeight;

    let stage = new janela.stage({
        criaDiv: document.createElement('div'),
        width: width,
        heigth: heigth,
    });

    let layer = janela.layer();
    let rectX = stage.width() / 2 - 50;
    let rectY = stage.heigth() / 2 - 25;

    let box = new janela.rect({
        x: rectX,
        y: rectY,
        width: 100,
        heigth: 50,
        fill: '#00D2FF',
        stroke: 'black',
        strokeWidth: 4,
        draggable: true,
    });

        //estilo do mouse
        box.on('mouseover', function(){
            document.style.cursor = 'pointer';
        });
        box.on('mouseover', function(){
            document.style.cursor = 'default';
        });

        layer.add(box);
        stage.add(layer)

    return criaDiv()
}*/
/*  VARIAVEIS E FUNÇÕES GLOBAIS   */
let corpo = document.querySelector('.corpo');

function criaDiv(){
    const criarDiv = document.createElement('div');
    return criarDiv;
}
function criaModal(){
    const modal = document.createElement('dialog');
    return modal;
}
function criaP(){
    let p = document.createElement('p')
    return p;
}
function fechar(elementoPai, classe, textoDoBotao){
    let fechar = criaDiv()
    elementoPai.appendChild(fechar)
    fechar.classList.add(classe)
    fechar.innerText = textoDoBotao;
    fechar.addEventListener('click', () => elementoPai.remove());
}
/*Explicaçao do programa ao usuário*/
let chamaDisclaimer = criaDiv()
chamaDisclaimer.classList.add('botao')
corpo.appendChild(chamaDisclaimer)
chamaDisclaimer.innerText = 'Sobre';
chamaDisclaimer.addEventListener('click', function(){

const disclaimer = criaDiv()
disclaimer.classList.add('disclaimer')
document.body.appendChild(disclaimer)
disclaimer.innerHTML = `<h1>Contador de céluas</h1>
<p>
    A intenção da criação do contador hematologico é de praticar meus aprendizados em javascript
    com uma ferramenta que ajuda profissionais da área da saúde na bancada de laboratório clínico.
    É basicamente um contador que diferencia as células que estão, ou podem estar presentes, na 
    circulação sanguinea.
</p>
<p>
    O diferencial deste contador para alguns que já vemos nas centrais de aplicativos é a contagem
    separada de eritroblastos, além da presença separada de células jovens.
    Além da contagem relativa você também conseguirá realizar contagem de plaquetas, reticulócitos
    e ainda tem uma função de anotações junto ao contador para notas temporárias. É importante 
    frisar que ao atualizar ou fechar a página as notas desaparecem.
</p>
<p>
    Alguns bugs acontecem durante a contagem, o contador está em desenvolvimento ainda.
    \n <a href='https://github.com/DaveSilveira/'>Criador</a>
</p>
`;

let fechar = criaDiv()
disclaimer.appendChild(fechar)
fechar.classList.add('botao')
fechar.innerText ='Fechar';
fechar.addEventListener('click', function(){disclaimer.style.cssText = 'display:none;'});

 });