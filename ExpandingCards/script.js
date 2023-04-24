const paineis = document.querySelectorAll('.painel')

paineis.forEach((painel) => {
    painel.addEventListener('mouseover',() => {
        removeActiveClasses()
        painel.classList.add('active')
    })
})

function removeActiveClasses() {
    paineis.forEach((pan) => {
        pan.classList.remove('active')
    })
}