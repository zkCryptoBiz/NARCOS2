
let aud = new Audio()
aud.src = 'pepscobar.mp3'

function playMusic() {

    document.querySelector('.popup').style.display = 'none'

    aud.play()
    aud.loop = true

}