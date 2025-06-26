const parole = document.querySelectorAll(".parole i")
let index = 0

setInterval(() => {
  parole.forEach((textElement, i) => {
    textElement.style.transform = `translateY(${(i - index) * 100}%)`
  })
  index = (index + 1) % parole.length
}, 3000)
