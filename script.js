//SONIDO DE VACA
let vaca = document.querySelector(".v")
let audioVaca = document.querySelector("audio")

vaca.addEventListener("click", () => {
  audioVaca.setAttribute("src", "/Audios/Vaca.mp3")
  audioVaca.play()
})



//SONIDO DE CABALLO
let caballo = document.querySelector(".c")
let audioCaballo = document.querySelector("audio")

caballo.addEventListener("click", () => {
  audioCaballo.setAttribute("src", "/Audios/Caballo.mp3")
  audioCaballo.play()
})



//SONIDO DE PERRO
let perro = document.querySelector(".p")
let audioPerro = document.querySelector("audio")

perro.addEventListener("click", () => {
  audioPerro.setAttribute("src", "/Audios/Perro.mp3")
  audioPerro.play()
})


//SONIDO DE GATO
let gato= document.querySelector(".g")
let audioGato = document.querySelector("audio")

gato.addEventListener("click", () => {
  audioGato.setAttribute("src", "/Audios/Gato.mp3")
  audioGato.play()
})

