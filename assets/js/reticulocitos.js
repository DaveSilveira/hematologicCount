/*           CONTADOR RELATIVO
            *******************
            DAVE SILVEIRA (2023)
*/
function criaDiv(){
    const criarDiv = document.createElement('div');
    return criarDiv;
}
function criaModal(){
    const modal = document.createElement('dialog');
    return modal;
}

let reticulocitos = criaDiv();
reticulocitos.innerText = 'Reticulocitos';
 reticulocitos.classList.add('botao');
 document.body.appendChild(reticulocitos);

 reticulocitos.addEventListener('click', function(){
    const painel = criaDiv(); //painel onde fica toda a contagem relativa
    painel.classList.add('painel');
    document.body.appendChild(painel);

const celulas = [
    {cel: 'Reti', valor: 0, imagem: 'URL(./assets/img/reticulocito.png)', musica: 'musica', tecla: 'r'},
];

const eritroCelula = [
    {cel: 'Campo', valor: 0, imagem: 'URL(./assets/img/campoReti.png)', musica: 'musica', tecla: 'y'}
];

 let relTotal = 0;
 let eritroTotal = 0;

    function mostraPainel(ret){

        const contagens = criaDiv(); //Aqui aparecereá a contagem relativa
        painel.appendChild(contagens);
        contagens.classList.add('valoresPainel')

        let cxBotao = criaDiv();
        cxBotao.classList.add('botaoPainel');
        contagens.appendChild(cxBotao);

        let verResul = criaDiv();
        verResul.classList.add('botao');
        verResul.innerHTML = 'Resultado';
        cxBotao.appendChild(verResul);
        
        
        let zerar = criaDiv();
        zerar.classList.add('botao');
        zerar.innerHTML = 'Zerar';
        cxBotao.appendChild(zerar);
        zerar.addEventListener('click', function(){
            eritroblasto.innerHTML = `${eritroTotal = 0} \n <div style="font-size:12px;">Eritroblastos</div>`;
            relativa.innerHTML = `${relTotal = 0} \n <div style="font-size:12px;">Leucocitos</div>`;
        });

            let relativa = criaDiv();
            relativa.classList.add('valorPainel');
            relativa.innerHTML = `${relTotal = 0} \n <div style="font-size:12px;">Reticulocitos</div>`;
            contagens.appendChild(relativa);

            let eritroblasto = criaDiv(); //Aqui o n de eritroblastos
            eritroblasto.classList.add('valorPainel');
            eritroblasto.innerHTML = `${eritroTotal = 0} \n <div style="font-size:12px;">Campos</div>`;
            contagens.appendChild(eritroblasto);

            for (let i = 0; i < celulas.length; i++ ){ //para aparecer os leucocitos no painel
                let {cel, valor, imagem, tecla} = celulas[i];
                let leucoRel = criaDiv(); //setando a div para cada item 'div:' do objeto
                    leucoRel.style.backgroundImage = imagem; //Imagem de fundo da celula
                    leucoRel.classList.add('celulas');
                    painel.appendChild(leucoRel);
                    leucoRel.dataset.idx = i;
                    
                    let valorCelula = criaDiv(); //quantidade de cada celula contada
                    leucoRel.appendChild(valorCelula);
                    valorCelula.classList.add('valorCelula');
                    valorCelula.innerText = valor;
        
                    let nomeLeuco = criaDiv();
                    leucoRel.appendChild(nomeLeuco);
                    nomeLeuco.classList.add('nomeLeuco');
                    nomeLeuco.innerText = cel;
        
                    let teclaCelula = criaDiv();
                    leucoRel.appendChild(teclaCelula);
                    teclaCelula.classList.add('teclaCelula');
                    teclaCelula.innerText = tecla;
        
                    leucoRel.addEventListener('click', function(){ //joga os valores nos leucocitos
                        valorCelula.innerText = ++celulas[this.dataset.idx]["valor"]; 
                        relativa.innerHTML = `${++relTotal} \n <div style="font-size:12px;">Reticulocitos</div>`;
                        
                    }); 
                    zerar.addEventListener('click', function(){valorCelula.innerText = 0;});
                    
            }

    for (let i = 0; i < eritroCelula.length; i++ ){ //para aparecer os eritros no painel
        let {cel, valor, imagem,tecla} = eritroCelula[i];
        let eritroRel = criaDiv(); //setando a div para cada item 'div:' do objeto
            eritroRel.style.backgroundImage = imagem; //Imagem de fundo da celula
            eritroRel.classList.add('celulas');
                painel.appendChild(eritroRel);
                eritroRel.dataset.idx = i; 
        
                let valorEritro = criaDiv(); //quantidade de cada eritrocontada
                eritroRel.appendChild(valorEritro);
                valorEritro.classList.add('valorCelula');
                valorEritro.innerText = valor;

                let nomeEritro = criaDiv();
                eritroRel.appendChild(nomeEritro);
                nomeEritro.classList.add('nomeLeuco');
                nomeEritro.innerText = cel;

                let teclaEritro = criaDiv();
                eritroRel.appendChild(teclaEritro);
                teclaEritro.classList.add('teclaCelula');
                teclaEritro.innerText = tecla;
        
                eritroRel.addEventListener('click', function(){ //joga os valores nos leucocitos
                    valorEritro.innerText = ++eritroCelula[this.dataset.idx]["valor"]; 
                    eritroblasto.innerHTML = `${++eritroTotal} \n <div style="font-size:12px;">Campos</div>`;
                    if(eritroTotal >= 10){
                        const janelaResul = criaModal();
                        document.body.appendChild(janelaResul);
                        janelaResul.showModal();
    
                        let  caixa = criaDiv();
                        let fecharResul = criaDiv();
                        janelaResul.appendChild(caixa);
                        caixa.classList.add('caixaResul');
                        caixa.appendChild(fecharResul);
    
                        fecharResul.innerText = 'X'; //
                        janelaResul.appendChild(fecharResul);
                        fecharResul.addEventListener('click', function(){janelaResul.close()
                    }
                        );
    
                        caixa.innerHTML = `${celulas[leucoRel]['cel']} ${celulas[leucoRel]['valor']}`;
                                  }   


 /*Dentro da condicional que vai finalizar criar outra que vai realizar a divisão de campos
 
 Quando o X do modal for clicado setar o zero para os componetes (valor,e totais)
 */

                
                });
                zerar.addEventListener('click', function(){valorEritro.innerText = 0;});
            }
}

    const reticulocitos = mostraPainel();

});

