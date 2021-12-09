function novoElemento(tagName, className) {
    const elem = document.createElement(tagName)
    elem.className = className
    return elem
}

function FlappyBird() {
    let pontos = 0

    const areaDoJogo = document.querySelector('[wm-flappy]')
    const altura = areaDoJogo.clientHeight
    const largura = areaDoJogo.clientWidth

    const progresso = new Progresso()
    let espaco, distancia
    if(window.screen.width >= 1920) {
        espaco = 200
        distancia = 500
    } else {
        espaco = 150
        distancia = 400
    }
    const barreiras = new Barreiras(altura, largura, espaco, distancia, () => progresso.atualizarPontos(++pontos))
    const passaro = new Passaro(altura)

    areaDoJogo.appendChild(progresso.elemento)
    areaDoJogo.appendChild(passaro.elemento)
    barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))

    this.start = () => {
        let temporizador = setInterval(() => {
            barreiras.animar()
            passaro.animar()
            if(colidiu(passaro, barreiras)) {
                clearInterval(temporizador)
                alert('Game Over!')
                window.location.href='index.html'
            }
        }, 20)
    }
}

new FlappyBird().start()