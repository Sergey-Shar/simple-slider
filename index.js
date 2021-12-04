const sliders = document.querySelectorAll('.slider')

sliders.forEach(item => {
    item.addEventListener('click', () => {
        removeClass()
        item.classList.add('activ')
    })
})

const removeClass = () => {
    sliders.forEach(item => {
        item.classList.remove('activ')
    })
}