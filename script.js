const imagensPainel = document.querySelectorAll('.imagem-painel')
const setaAvancar = document.getElementById('btn-avancar')
const setaVoltar = document.getElementById('btn-voltar')
let imagemAtual = 0;

setaAvancar.addEventListener('click', function () {
    if(imagemAtual === imagensPainel.length -1) {

    }
    imagemAtual++;

    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    })

    imagensPainel[imagemAtual].classList.add('mostrar');
});

setaVoltar.addEventListener('click', function() {
    
    if(imagemAtual === 0) {
        console.log('Não tem mais como voltar')
        return;
    }
    
    imagemAtual--;

    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    });

    imagensPainel[imagemAtual].classList.add('mostrar');
});

