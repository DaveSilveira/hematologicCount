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
        {cel: 'blasto', valor: 0, imagem: 'URL(./assets/img/img.png)'},
        {cel: 'promielocito', valor: 0, imagem: 'URL(./assets/img/img.png)'},
        {cel: 'mielocito', valor: 0, imagem: 'URL(./assets/img/img.png)'},
        {cel: 'metamielocito', valor: 0, imagem: 'URL(./assets/img/img.png)'},
        {cel: 'bastao', valor: 0, imagem: 'URL(./assets/img/img.png)'},
        {cel: 'segmentado', valor: 0, imagem: 'URL(./assets/img/img.png)'},
        {cel: 'eosinofilo', valor: 0, imagem: 'URL(./assets/img/img.png)'},
        {cel: 'monocito', valor: 0, imagem: 'URL(./assets/img/img.png)'},
        {cel: 'linfocitoTipico', valor: 0, imagem: 'URL(./assets/img/img.png)'},
        {cel: 'linfocitoAtipico', valor: 0, imagem: 'URL(./assets/img/img.png)'},
        {cel: 'monocito', valor: 0, imagem: 'URL(./assets/img/img.png)'},
        {cel: 'basofilo', valor: 0, imagem: 'URL(./assets/img/img.png)'},
        {cel: 'eritroblasto', valor: 0, imagem: 'URL(./assets/img/img.png)'}
    ];


    const valores = [
        {div: 'relativa', valor: 0},
        {div: 'eritroblastos', valor: 0}
    ];
    
    for (let i = 0; i < valores.length; i++){ //para aparecer os contadores totais
        let {div, valor } = valores[i];
        let valorPainel = document.createElement('div');
        valorPainel.innerHTML = valor;
        valorPainel.classList.add('valorPainel');
        valoresPainel.appendChild(valorPainel);
    }

    for (let i = 0; i < celulas.length; i++ ){ //para aparecer as celulas no painel
        let {cel, valor, imagem} = celulas[i];
        let leucoRel = document.createElement('div'); //setando a div para cada item 'div:' do objeto
            leucoRel.style.backgroundImage = imagem; //Imagem de fundo da celula
            leucoRel.classList.add('celulas');
            painel.appendChild(leucoRel);
        let valorCelula = document.createElement('div'); //quantidade de cada celula contada
            leucoRel.appendChild(valorCelula);
            valorCelula.innerText = valor;
            valorCelula.style.cssText = 'background-color: red; width:20px; height:20px; border-radius:40%; color:white;';
    
            leucoRel.addEventListener('click', function(aumentar){
                alert('teste');
                valor++ //Definir valor para objeto especifico
            });
    };
    

    

});