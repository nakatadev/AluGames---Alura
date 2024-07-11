
function alterandoStatus(x){
    let botao = document.getElementById('botaoInteração');
    if (botao.classList.contains('dashboard__item__button')){
        botao.classList.remove('dashboard__item__button');
        botao.classList.add('dashboard__item__button--return');
        botao.innerHTML = 'Devolver';
    }
    else {
        botao.classList.remove('dashboard__item__button--return');
        botao.classList.add('dashboard__item__button');
        botao.innerHTML = 'Alugar';
    }
    break;
}

function alterarStatus (x){
    switch (x){
        case 1:
            alterandoStatus(1);
            break;
        case 2:
            alterandoStatus(2);
            break;
        case 3:
            alterandoStatus(3);
            break;
    }
}




