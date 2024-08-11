const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll('.informacoes');

botoesCarrossel.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
    desativarBotaoSelecionado();
    botao.classList.add("selecionado");

    esconderImagemAtiva();
    imagens[indice].classList.add('ativa');

    esconderInformacoesAtiva();
    informacoes[indice].classList.add('ativa');
  });
});

function esconderInformacoesAtiva() {
    const informacoesAtiva = document.querySelector('.informacoes.ativa');
    informacoesAtiva.classList.remove("ativa");
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");
}