function alterarStatus(id){
    let jogo = document.getElementById(`game-${id}`);
    let ImagemDoJogo = jogo.querySelector('.dashboard__item__img');//coloca-se um . antes do query selecionado quando você quiser dizer que é uma classe
    let botaoEstado = jogo.querySelector('.dashboard__item__button');
    let jogoNome = jogo.querySelector('.dashboard__item__name');

    console.log(`O usuário clicou no botão do jogo ${jogoNome.innerHTML}.`);

    if (ImagemDoJogo.classList.contains("dashboard__item__img--rented")){
        ImagemDoJogo.classList.remove("dashboard__item__img--rented");
    } else {
        ImagemDoJogo.classList.add("dashboard__item__img--rented");
    }

    if (botaoEstado.classList.contains("dashboard__item__button--return")){
        botaoEstado.classList.remove("dashboard__item__button--return");
        botaoEstado.textContent = "Alugar";
    } else {
        botaoEstado.classList.add("dashboard__item__button--return");
        botaoEstado.textContent = "Devolver";
    }
}