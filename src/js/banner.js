let banners = document.querySelectorAll(`.banners`)

// let esconder = document.getElementsByClassName(`esconder`)
let btnVoltar = document.getElementById(`btnVoltar`)
let btnAvancar = document.getElementById(`btnAvancar`)
let imagemAtual = 0

btnAvancar.addEventListener(`click`, function () {
    let contadorBanners = banners.length - 1
    if (imagemAtual === contadorBanners) {
        return

    }

    imagemAtual++

    banners.forEach(imagem => {
        imagem.classList.remove(`mostrar`)

    })

    banners[imagemAtual].classList.add(`mostrar`)


})

//VOLTAR//



btnVoltar.addEventListener(`click`, function () {
    if (imagemAtual === 0) {
        // this.style.background = `red`
        return

    }

    imagemAtual--

    banners.forEach(imagem => {
        imagem.classList.remove(`mostrar`)

    })

    banners[imagemAtual].classList.add(`mostrar`)


})
