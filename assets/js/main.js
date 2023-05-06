//preciso puxar cada um dos botões e o painel
let celulas = document.getElementById('celulas');

function criaCaixa(){
const caixa = document.createElement('div');
caixa.classList.add('botao');
caixa.style.width = '50px';
caixa.style.height = '50px';
caixa.style.margin = '2px 2px auto';
caixa.style.borderRadius = '50px';
caixa.style.backgroundColor = '#8a2be2'

return caixa;
}

let bastao = criaCaixa();
celulas.appendChild(bastao);

let segmentado = criaCaixa();
celulas.appendChild(segmentado);

let eosinofilo = criaCaixa();
celulas.appendChild(eosinofilo);

let linfocito = criaCaixa();
celulas.appendChild(linfocito);

let monocito = criaCaixa();
celulas.appendChild(monocito);

let basofilo = criaCaixa();
celulas.appendChild(basofilo);

let metamielocito = criaCaixa();
celulas.appendChild(metamielocito);