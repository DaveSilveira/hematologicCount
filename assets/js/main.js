let corpo = document.querySelector('.corpo');
let titulo = document.querySelector('.titulo');
function criaDiv(){
    const criarDiv = document.createElement('div');
    return criarDiv;
}
function criaP(){
    let p = document.createElement('p')
    return p;
}
function fechar(elementoPai, classeDoBotao, textoDoBotao){
    let fechar = criaDiv()
    elementoPai.appendChild(fechar)
    fechar.classList.add(classeDoBotao)
    fechar.innerText = textoDoBotao;
    fechar.addEventListener('click', () => elementoPai.remove());
}
/*Explicaçao do programa ao usuário*/
titulo.addEventListener('click', function(){

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
    Após um periodo de tempo resolvi adicionar também um contador de células em líquidos e de sedimentos
    urinários, para atualizar meus aprendizados em javascript e também incrementar coisas novas ao aplicativo.
    A ideia da criação de um aplicativo que funcione em um computador se da pelo fato do analista de laboratório
    realizar as alterações de informações e contagens no computador, o que traria tudo para um só lugar.s
</p>
<p>
    \n <a href='https://github.com/DaveSilveira/'>Criador</a>
</p>
`;

let fechar = criaDiv()
disclaimer.appendChild(fechar)
fechar.classList.add('botao')
fechar.innerText ='Fechar';
fechar.addEventListener('click', function(){disclaimer.style.cssText = 'display:none;'});
 });