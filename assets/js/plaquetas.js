//Contagem de plaquetas
let plaquetas = criaDiv();
 plaquetas.innerText = 'Plaquetas';
 plaquetas.classList.add('botao');
 corpo.appendChild(plaquetas);

 plaquetas.addEventListener('click', function(){
    const painel = criaDiv();
    painel.classList.add('painel')
    document.body.appendChild(painel)

    const fechar = criaDiv()
    fechar.classList.add('fechar')
    painel.appendChild(fechar)
    fechar.innerText = 'X';
    fechar.addEventListener('click', function(){painel.style.display = 'none'});

    const plaqueta = [{
        nome: 'plaq', 
        valor: '0', 
        musica:'...', 
        imagem: 'URL(./assets/img/outra.png)', 
        tecla: 'g', 
        tecla1: 'G'
    }]
    const campo = [{
        nome: 'campo', 
        valor: '0', 
        musica:'...', 
        imagem: 'URL(./assets/img/outra.png)', 
        tecla: 'h', 
        tecla1: 'H'
    }]

    let totalCampo = 0;
    let totalPlaq = 0;

    const contagens = criaDiv()
    contagens.classList.add('valoresPainel')
    painel.appendChild(contagens)
    contagens.innerText ='inserir os contadores globais aqui'

     for(let i = 0; i < plaqueta.length; i++){
        let {nome, valor, musica, imagem, tecla, tecla1} = plaqueta[i];

        let plaqCount = criaDiv()
        plaqCount.style.backgroundImage = imagem;
        plaqCount.classList.add('celulas')
        painel.appendChild(plaqCount)
        plaqCount.dataset.idx = i;

        let valorPlaq = criaDiv()
        valorPlaq.classList.add('valorCelula')
        valorPlaq.innerText = valor;
        plaqCount.appendChild(valorPlaq)

        let nomePlaq = criaDiv()
        nomePlaq.classList.add('nomeLeuco')
        nomePlaq.innerText = nome;
        plaqCount.appendChild(nomePlaq)

        let teclaPlaq = criaDiv()
        teclaPlaq.classList.add('teclaCelula')
        teclaPlaq.innerText = tecla;
        plaqCount.appendChild(teclaPlaq)

        plaqCount.addEventListener('click', function(){
            valorPlaq.innerHTML = ++plaqueta[this.dataset.idx]['valor']
        });
        document.addEventListener('keydown', function(event){
            if(event.key === tecla){
            valorPlaq.innerHTML = ++plaqueta[plaqCount.dataset.idx]['valor']
            
            }
        });
    }
    for(let i =0; i < campo.length; i++){
        let {nome, valor, musica, imagem, tecla, tecla1} = campo[i];

        let campoCount = criaDiv()
        campoCount.style.backgroundImage = imagem;
        campoCount.classList.add('celulas')
        painel.appendChild(campoCount)
        campoCount.dataset.idx = i;

        let valorCampo = criaDiv()
        valorCampo.classList.add('valorCelula')
        valorCampo.innerText = valor;
        campoCount.appendChild(valorCampo)

        let nomeCampo = criaDiv()
        nomeCampo.classList.add('nomeLeuco')
        nomeCampo.innerText = nome;
        campoCount.appendChild(nomeCampo)

        let teclaCampo = criaDiv()
        teclaCampo.classList.add('teclaCelula')
        teclaCampo.innerText = tecla;
        campoCount.appendChild(teclaCampo)

        campoCount.addEventListener('click', function(){
            valorCampo.innerHTML = ++campo[this.dataset.idx]['valor']
        });
        document.addEventListener('keydown', function(event){
            if(event.key === tecla){
            valorCampo.innerHTML = ++campo[campoCount.dataset.idx]['valor']
            }
        });
    }
 });