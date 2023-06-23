
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
    O Contador Hematologico foi criado com o intuito de facilitar a vida na bancada,
    ajudando o analista e evitando o uso de espaço com contadores físicos. A diferença
    deste contador para os contadores que já existem é a contagem de eritroblastos, que
    não interfere na contagem relativa dos leucocitos.
</p>
<p>
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

