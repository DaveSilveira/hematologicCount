/*In this file, we will define utility functions for the application */
// Functions necessary to make the code smaller.
export function criaDiv() {
    const criarDiv = document.createElement('div');
    return criarDiv;
}
export function criaP() {
    let p = document.createElement('p');
    return p;
}
export function fechar(elementoPai, classeDoBotao, textoDoBotao){
    let fechar = criaDiv()
    elementoPai.appendChild(fechar)
    fechar.classList.add(classeDoBotao)
    fechar.innerText = textoDoBotao;
    fechar.addEventListener('click', () => elementoPai.remove());
}
export function cliqueEvent({
    celula, 
    valorCelula,
    valorPainel, 
    array, 
    nomePainel,
    numeroPainel,
    result,
    limiteMaximo
}) {
    const count = new Audio('./assets/sound/count.mp3')
    celula.addEventListener('click', function(){
        if(numeroPainel && numeroPainel.total >= limiteMaximo) {
            return
        }
    valorCelula.innerText = Number(++array[this.dataset.idx]["valor"]);
    //if steatment to check if the count is a relive count
    if(numeroPainel) {
        const numeroPainelTotal =  ++numeroPainel.total
        valorPainel.innerHTML = `${numeroPainelTotal} \n <div style="font-size:12px;">${nomePainel}</div>`;
        if(numeroPainelTotal === limiteMaximo){
            if(typeof result === 'function') {
                result()
            }
        }
    } else {
        valorPainel.innerHTML = `${array[this.dataset.idx]["valor"]} \n <div style="font-size:12px;">${nomePainel}</div>`;
    }
    count.currentTime = 0
    count.play()
    });
}
export function teclaEvent({
    tecla, 
    valorCelula, 
    valorPainel, 
    array, 
    celulas, 
    nomePainel,
    numeroPainel,
    result,
    limiteMaximo
}) {
    const count = new Audio('./assets/sound/count.mp3')
    document.addEventListener('keydown', function(event){
    if(event.key === tecla || event.key === tecla.toUpperCase()){
        if(numeroPainel && numeroPainel.total >= limiteMaximo){
            return
        } 
    valorCelula.innerText = Number(++array[celulas.dataset.idx]["valor"]);
    //if steatment to check if the count is a relive count
    if(numeroPainel){
        const numeroPainelTotal =  ++numeroPainel.total
        valorPainel.innerHTML = `${numeroPainelTotal} \n <div style="font-size:12px;">${nomePainel}</div>`;
        if(numeroPainelTotal === limiteMaximo){
            if(typeof result === 'function') 
                result()
        }
    } else {
    valorPainel.innerHTML = `${array[celulas.dataset.idx]["valor"]} \n <div style="font-size:12px;">${nomePainel}</div>`;
    }
    count.currentTime = 0
    count.play()
    }
});
}

// Variables necessary to anchoring the elements in the HTML document.
export const corpo = document.querySelector('.corpo');
export const titulo = document.querySelector('.titulo');/*In this file, we will define utility functions for the application */
