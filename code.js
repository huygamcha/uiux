const showBtn = document.querySelector('.user')
const showOne = document.querySelector('.userone-show')
const showTwo = document.querySelector('.usertwo-show')
const changeBtns = document.querySelectorAll('.change-state')
const modalBtn = document.querySelector('.modalhand')
showBtn.addEventListener('click', function () {
    if (showOne.classList.contains('active') || showTwo.classList.contains('active')) {
        showTwo.classList.remove('active')
        showOne.classList.remove('active')
        modalBtn.classList.remove('active')

    }
    else if (!showTwo.classList.contains('active') && !showOne.classList.contains('active')) {
        showOne.classList.add('active')
        showTwo.classList.remove('active')
        modalBtn.classList.add('active')
    }
})
for (const changeBtn of changeBtns) {
    changeBtn.addEventListener('click', function () {
        if (showOne.classList.contains('active')) {
            showTwo.classList.add('active')
            showOne.classList.remove('active')
        }
        else if (showTwo.classList.contains('active')) {
            showOne.classList.add('active')
            showTwo.classList.remove('active')
        }
    })

}
modalBtn.addEventListener('click', function () {
    modalBtn.classList.remove('active')
    showOne.classList.remove('active')
    showTwo.classList.remove('active')
})
showTwo.addEventListener('click', function (e) {
    e.stopPropagation()
})
showOne.addEventListener('click', function (e) {
    e.stopPropagation()
})