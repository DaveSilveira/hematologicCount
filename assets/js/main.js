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

// EM TESTE -- Janelas moveis
function moverdiv(A){
const myDiv = A

myDiv.addEventListener('mousedown', dragStart);

function dragStart(e){
    //armazena posição inicial do mouse
    const startX = e.clientX;
    const startY = e.clientY;

    //armazena apsoição inicial da div
    const offSetX = myDiv.offsetLeft;
    const offSetY = myDiv.offsetTop;

    //Eventos que acompanham o movimento do mouse
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', dragEnd);

    function drag(e){
        //calcula a distancia percorrida pelo mouse
        const distanceX = e.clientX - startX;
        const distanceY = e.clientX - startY;

        //define a nova posição da div
        myDiv.style.left = (offSetX + distanceX) + 'px';
        myDiv.style.top = (offSetY - distanceY) + 'px';
        /*myDiv.style.right = (offSetX - distanceX) + 'px';
        myDiv.style.botton = (offSetY - distanceY) + 'px'; */
    }

    function dragEnd(){
        //remove eventos de acompanhamento do movimento do mouse
        document.removeEventListener('mousemove', drag);
        document.removeEventListener('mouseup', dragEnd);
    }
}
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