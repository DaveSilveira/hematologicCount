// Note editor

const blocoDeNotas = criaDiv()
document.body.appendChild(blocoDeNotas)
blocoDeNotas.innerText = 'Bloco de notas';
blocoDeNotas.style.cssText = `
height: 100%;
position: absolute;
width: 20%; 
top: 0px;
right: 0px;
background-color: white;
font-family: arial, sans-serif;
text-align: center;
display: none;
`;

const chamaBloco = criaDiv()
document.body.appendChild(chamaBloco)
chamaBloco.classList.add('botao')
chamaBloco.innerText = 'Bloco de notas'
chamaBloco.addEventListener('click', function(){blocoDeNotas.style.display = 'block'})

const fechaBloco = criaDiv()
blocoDeNotas.appendChild(fechaBloco)
fechaBloco.innerText = 'X'
fechaBloco.addEventListener('click',function(){blocoDeNotas.style.display = 'none'})
fechaBloco.style.cssText = `
color: #888888;
position: absolute;
top: 2px;
right: 2px;
cursor: pointer;
`; 

const chamaNota = criaP()
chamaNota.innerText = 'Nova nota...'
blocoDeNotas.appendChild(chamaNota)
chamaNota.style.cssText = `
cursor: pointer;
background-color: #D3D3D3;
width: 80%;
margin: 10px auto;
`;
chamaNota.addEventListener('click', function novaNota(){
    let nota = criaDiv()
    blocoDeNotas.appendChild(nota)
    nota.style.cssText = `
    width: 90%;
    height: 100px;
    margin: auto;
    border: 1px solid black;
    background-color: #FFF8DC;
    margin: 10px;
    `;

    let fechaNota = criaP()
    fechaNota.innerText = 'X'
    fechaNota.addEventListener('click', function(){nota.style.display = 'none'});
    nota.appendChild(fechaNota);
    fechaNota.style.cssText = `
    color: #888888;
    width: 10px;
    height: 10px;
    margin: 0px;
    left: 0px;
    display: block;
    cursor: pointer;
    `;//PAREI AQUI

    let input = criaInput()
    input.style.cssText = `
    text-align: justify;
    border: none;
    background-color: #FFF8DC;
    `;
    nota.appendChild(input);



    return nota
});

function criaDiv(){
    let div = document.createElement('div');
    return div;
}
function criaInput(){
    let input = document.createElement('textarea');
    return input;
}
function criaP(){
    let p = document.createElement('p')
    return p;
}

function checkBox(){}
function deleteNote(){}
