//contador relativo
let relativa = document.createElement('div');
 relativa.innerText = 'Relativa';
 relativa.classList.add('botao');
 relativa.style.cssText = 'font-size: 24px; text-align: center; color: #ffffff;background-color: #0c136d;width: 20%;height: 5%;margin: 10px auto;border-radius: 10px;';
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
        {cel: 'basofilo', valor: 0, imagem: 'URL(./assets/img/img.png)'},
        {cel: 'monocito', valor: 0, imagem: 'URL(./assets/img/img.png)'},
        {cel: 'linfocitoTipico', valor: 0, imagem: 'URL(./assets/img/img.png)'},
        {cel: 'linfocitoAtipico', valor: 0, imagem: 'URL(./assets/img/img.png)'},
        {cel: 'eritroblasto', valor: 0, imagem: 'URL(./assets/img/img.png)'},
        {cel: 'outras', valor: 0, imagem: 'URL(./assets/img/img.png)'},
        {cel: 'outras2', valor: 0, imagem: 'URL(./assets/img/img.png)'},
    ];


    const valores = [
        {div: 'Leucocitos', valor: 0},
        {div: 'Eritroblastos', valor: 0}
    ];
    
    for (let i = 0; i < valores.length; i++){ //para aparecer os contadores totais
        let {div, valor } = valores[i];
        let valorPainel = document.createElement('div');
        valorPainel.innerHTML = valor;
        valorPainel.classList.add('valorPainel');
        valoresPainel.appendChild(valorPainel);
        let nome = document.createElement('div');
        valorPainel.appendChild(nome);
        nome.innerText = div;
        nome.style.cssText = 'font-size: 12px; font-family: arial, sans-serif;'
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
    
            leucoRel.addEventListener('click', function(){
                alert('test');
                
                for(let i = 0; i < celulas.length; i++){
                    let adc = celulas[valor[i]]++;
                }
            });
    };
    

    

});