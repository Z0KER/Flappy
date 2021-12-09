function Passaro(alturaJogo) {
    let tecla = 0

    this.elemento = novoElemento('img', 'passaro')
    this.elemento.src = 'img/passaro.png'

    this.getY = () => parseInt(this.elemento.style.bottom.split('px')[0])
    this.setY = y => this.elemento.style.bottom = `${y}px`

    window.onkeydown = e => tecla = e.keyCode
    window.onkeyup = e => tecla = 0

    this.animar = () => {
        let novoY
        if (tecla == 38) {
            novoY = this.getY() + 7
        }
        if(tecla == 40) {
            novoY = this.getY() -7
        }
       
        const alturaMaxima = alturaJogo - this.elemento.clientHeight

        if (novoY <= 0) {
            this.setY(0)
        } else if (novoY >= alturaMaxima) {
            this.setY(alturaMaxima)
        } else {
            this.setY(novoY)
        }
    }

    this.setY(alturaJogo / 2)
}