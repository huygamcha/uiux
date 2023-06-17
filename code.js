const showBtn = document.querySelector('.user')
const showOne = document.querySelector('.userone-show')
const showTwo = document.querySelector('.usertwo-show')
const changeBtns = document.querySelectorAll('.change-state')
showBtn.addEventListener('click', function () {
    if (showOne.classList.contains('active') || showTwo.classList.contains('active')) {
        showTwo.classList.remove('active')
        showOne.classList.remove('active')
    }
    else if (!showTwo.classList.contains('active') && !showOne.classList.contains('active')) {
        showOne.classList.add('active')
        showTwo.classList.remove('active')
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