function confirmarDevolucao(jogo){
    confirmar = prompt(`Tem certeza que gostaria de devolver o jogo ${jogo}(1 - SIM, 2 - NÃO)?`);
    if (confirmar == 1){
        return true;
    } else {
        return false;
    }
}

function foiOuForam(){
    if (jogosAlugados==1){
        return "foi";
    } else {
        return "foram";
    }
}

function alterarStatus(id){
    let jogo = document.getElementById(`game-${id}`);
    let ImagemDoJogo = jogo.querySelector('.dashboard__item__img');//coloca-se um . antes do query selecionado quando você quiser dizer que é uma classe
    let botaoEstado = jogo.querySelector('.dashboard__item__button');
    let jogoNome = jogo.querySelector('.dashboard__item__name');

    console.log(`O usuário clicou no botão do jogo ${jogoNome.innerHTML}.`);

    

    if (ImagemDoJogo.classList.contains("dashboard__item__img--rented")){
        let confirma = confirmarDevolucao(jogoNome.innerHTML);
        if (confirma==true){
            ImagemDoJogo.classList.remove("dashboard__item__img--rented");
            botaoEstado.classList.remove("dashboard__item__button--return");
            botaoEstado.textContent = "Alugar";
        } else {
            return;
        }
    } else {
        ImagemDoJogo.classList.add("dashboard__item__img--rented");
        botaoEstado.classList.add("dashboard__item__button--return");
        botaoEstado.textContent = "Devolver";
        jogosAlugados++;
        console.log(`${jogosAlugados} ${foiOuForam()} alugados.`);
    }
}

let jogosAlugados = 1;
console.log(`${jogosAlugados} ${foiOuForam()} alugado.`);