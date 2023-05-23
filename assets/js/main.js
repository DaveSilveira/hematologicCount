function criaModal(){
    const modal = document.createElement('dialog');
    return modal;
}

const bemVindo = criaModal();


bemVindo.addEventListener('load', function(){
    bemVindo.innerHTML = 'este é um texto';
    bemVindo.classList.add('painel');
    bemVindo.style.cssText = 'width: 100px; heigth: 100px; background-color: white;';
    document.body.appendChild(bemVindo);
});