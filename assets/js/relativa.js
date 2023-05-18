//contador relativo
let relativa = document.createElement('div');
 relativa.innerText = 'Relativa';
 relativa.classList.add('botao');
 document.body.appendChild(relativa);


relativa.addEventListener('click', function(rel){
    const painel = document.createElement('div'); //painel onde fica toda a contagem relativa
    const valoresPainel = document.createElement('div'); // painel onde ficam os contadores
    painel.classList.add('painel');
    valoresPainel.classList.add('valoresPainel');
    document.body.appendChild(painel);
    painel.appendChild(valoresPainel);

    const celulas = [
        {div: 'blasto', valor: 0, imagem: './assets/img/img.png'},
        {div: 'promielocito', valor: 0, imagem: './assets/img/img.png'},
        {div: 'mielocito', valor: 0, imagem: './assets/img/img.png'},
        {div: 'metamielocito', valor: 0, imagem: './assets/img/img.png'},
        {div: 'bastao', valor: 0, imagem: './assets/img/img.png'},
        {div: 'segmentado', valor: 0, imagem: './assets/img/img.png'},
        {div: 'eosinofilo', valor: 0, imagem: './assets/img/img.png'},
        {div: 'monocito', valor: 0, imagem: './assets/img/img.png'},
        {div: 'linfocitoTipico', valor: 0, imagem: './assets/img/img.png'},
        {div: 'linfocitoAtipico', valor: 0, imagem: './assets/img/img.png'},
        {div: 'monocito', valor: 0, imagem: './assets/img/img.png'},
        {div: 'basofilo', valor: 0, imagem: './assets/img/img.png'},
        {div: 'eritroblasto', valor: 0, imagem: './assets/img/img.png'}
    ];


    const valores = [
        {div: 'relativa', valor: 0},
        {div: 'eritroblastos', valor: 0}
    ];
    
    for (let i = 0; i < valores.length; i++){
        let {div, valor } = valores[i];
        let valorPainel = document.createElement('div');
        valorPainel.innerHTML = valor;
        valorPainel.classList.add('valorPainel');
        valoresPainel.appendChild(valorPainel);
    }

    for (let i = 0; i < celulas.length; i++ ){
        let {div, valor, imagem} = celulas[i];
        let leucoRel = document.createElement('div'); //setando a div para cada item 'div:' do objeto
            
                let leucoImg = document.createElement('img'); //criando o elemento img para puxar
                leucoImg.src = imagem; // puxando o item imagem para a div
                leucoImg.classList.add('imagem');
            leucoRel.appendChild(leucoImg);
            leucoRel.classList.add('celulas');
        painel.appendChild(leucoRel);
    };
    
    

});