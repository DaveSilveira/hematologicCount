//selecao de modo
let relativa = document.getElementById('relativeCount');
let reticulocitos = document.getElementById('retuculocito');
let plaquetas = document.getElementById('plaquetas');
let restart = document.getElementById('restart');

//painel de valores
const contador = document.getElementById('celulaRel');
const eritro = document.getElementById('eritroCampo');
//Inicio das funcoes

//celulas
let celulas = document.getElementById('celulas');

function relativeCount(){ //Contagem relativa

//Comercar algoritimo de contador relativo, mostrando eritro e celRel separadas.
//Quando celRel = 100 finaliza, eritro independente

    //Contadores
    contador.innerHTML = `0`;
    const nomeCel = document.createElement('div');
    contador.appendChild(nomeCel);
    nomeCel.style.fontSize = '12px';
    nomeCel.innerText = 'Células';

    eritro.innerHTML = `0`;
    const nomeEritro = document.createElement('div');
    eritro.appendChild(nomeEritro);
    nomeEritro.style.fontSize = '12px';
    nomeEritro.innerText = 'Etritroblastos';

    //setando as celulas
    let blasto = criaCaixa();
    celulas.appendChild(blasto);

    let promielocito = criaCaixa();
    celulas.appendChild(promielocito);

    let mielocito = criaCaixa();
    celulas.appendChild(mielocito);

    let metamielocito = criaCaixa();
    celulas.appendChild(metamielocito);

    let bastao = criaCaixa();
    celulas.appendChild(bastao);

    let segmentado = criaCaixa();
    celulas.appendChild(segmentado);

    let eosinofilo = criaCaixa();
    celulas.appendChild(eosinofilo);

    let basofilo = criaCaixa();
    celulas.appendChild(basofilo);

    let monocito = criaCaixa();
    celulas.appendChild(monocito);

    let linfTipico = criaCaixa();
    celulas.appendChild(linfTipico);

    let linfAtipico = criaCaixa();
    celulas.appendChild(linfAtipico);

    let eritroblasto = criaCaixa();
    celulas.appendChild(eritroblasto);

}

function reticulocytes(){
    //A primeria casa são os reticulocitos e o segundo os campos
    //Quando chega em 10 campos finaliza a conta, divide o valor dos retis por 10

    //Contador
    contador.innerHTML = `0`; //inserir a qtd de contagem de reti aqui
    const nomeCel = document.createElement('div');
    contador.appendChild(nomeCel);
    nomeCel.style.fontSize = '12px';
    nomeCel.innerText = 'Reticulócitos';

    eritro.innerHTML = `0`; //inserir campos contados aqui
    const nomeEritro = document.createElement('div');
    eritro.appendChild(nomeEritro);
    nomeEritro.style.fontSize = '12px';
    nomeEritro.innerText = 'Campos';

    let reticulocitos = criaCaixa();
    celulas.appendChild(reticulocitos);

    let campo = criaCaixa(); //botão de campos do reti
    celulas.appendChild(campo);
    campo.style.borderRadius = '0px';
    campo.style.backgroundColor = '#1B4178';
    campo.style.color = 'white';
    campo.style.width = '150px';
    campo.style.height = '50px';
    campo.innerHTML = 'Novo campo';

    
}

function platelets(){
    window.alert("plaquetas");
    //A primeira casa são as plaquetas e a segunda os campos
    //Quando chegar em 10 campos finaliza e divide plaqueta por campos
}

function reset(){
    window.alert("Reset");
    //Quando clico em reset a contagem zera em relativo
}



function criaCaixa(){
const caixa = document.createElement('div');
caixa.classList.add('botao');
caixa.style.width = '100px';
caixa.style.height = '100px';
caixa.style.margin = '6px 6px auto';
caixa.style.borderRadius = '50px';
caixa.style.backgroundColor = '#8a2be2'

return caixa;
}