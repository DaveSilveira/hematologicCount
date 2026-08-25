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

// Variables necessary to anchoring the elements in the HTML document.
export const corpo = document.querySelector('.corpo');
export const titulo = document.querySelector('.titulo');