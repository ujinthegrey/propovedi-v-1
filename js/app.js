const body = document.querySelector('body')

/* ---HEADER-BTNS------------------ */
const menuSearchBtn = document.getElementById('menu__search')
const menuSubscribeBtn = document.getElementById('menu__subscribe')
const closeModalBtn = document.getElementById('close__modal')

/* --MODALS------------------------- */
const searchModal = document.getElementById('search__modal')
const subscribehModal = document.getElementById('subscribe__modal')

/* --SCROLL-LOCK_WHILE-MODAL---------------- */
const bodyScrollLock = () => {
    setTimeout(() => body.classList.add('lock'), 700)
}
const bodyScrolUnlLock = () => {
    body.classList.remove('lock')
}

menuSearchBtn.addEventListener('click', () => {
    searchModal.classList.add('show')
    menuSubscribeBtn.classList.add('hidden') 
    menuSearchBtn.classList.add('hidden')   
    closeModalBtn.classList.remove('hidden')
})

menuSubscribeBtn.addEventListener('click', () => {
    subscribehModal.classList.add('show')
    menuSubscribeBtn.classList.add('hidden') 
    menuSearchBtn.classList.add('hidden')    
    closeModalBtn.classList.remove('hidden')
})

closeModalBtn.addEventListener('click', () => {
    searchModal.classList.remove('show')
    subscribehModal.classList.remove('show')
    closeModalBtn.classList.add('hidden')   
    menuSearchBtn.classList.remove('hidden') 
    menuSubscribeBtn.classList.remove('hidden')
})

/* ---SLIDER--------------------- */
let slideCounter = 0
const slides = document.querySelectorAll('.slide')
const sliderRightBnt = document.querySelector('.right-btn')
const sliderLeftBtn = document.querySelector('.left-btn')

const increaseCounter = () => {
    if (slideCounter === slides.length - 1) {
        slideCounter = 0
    } else {
        slideCounter++ 
    }
}

const decreaseCounter = () => {
    if (slideCounter === 0) {
        slideCounter = slides.length - 1
    } else {
        slideCounter-- 
    }
}

const moveSlider = () => {
    for (slide of slides) {
        slide.classList.remove('show')
    }
    slides[slideCounter].classList.add('show')
}

const increaseAndndMove = () => {
    increaseCounter()
    moveSlider()
}

let slideInterval = setInterval(increaseAndndMove, 5000)


sliderRightBnt.addEventListener('click', () => {
    clearInterval(slideInterval)  
    increaseCounter()
    moveSlider(slideCounter)
    slideInterval = setInterval(increaseAndndMove, 5000)
})

sliderLeftBtn.addEventListener('click', () => {
    clearInterval(slideInterval)  
    decreaseCounter()
    moveSlider()
    slideInterval = setInterval(increaseAndndMove, 5000)
})

/* ---RECOMENDED------------------------ */

// https://www.youtube.com/watch?v=7CAnJWfsulE Лелиовский проповедь
// https://www.gty.org/library/articles/ru141/доктрина-всегда-практична-russian-doctrine-is-practical статья
// https://www.youtube.com/watch?v=pux_B92ByBs Лоусее

/* --SLIDE-MENUS----------------------- */
let menuCounter = 0
const menus = document.querySelectorAll('.navigation__menu')
const slideMenuBtns = document.querySelectorAll('.navigation__input')

const turnMenu = () => {
    for (menu of menus) {
        menu.classList.remove('show')
    }
    menus[menuCounter].classList.add('show')
}

for (slideMenuBtn of slideMenuBtns) {
    slideMenuBtn.addEventListener('change', (e) =>{
        menuCounter = +e.target.getAttribute('id')
        turnMenu()
    })
}




