
const open_btns = document.querySelectorAll('button[data-modal]')
const close_btns = document.querySelectorAll('[data-close]')
const modal = document.querySelector('.modal')

open_btns.forEach((btn) => {
    btn.onclick = () => {
        modal.classList.add('show', 'fade')
    }
})
close_btns.forEach((btn) => {
    btn.onclick = () => {
        modal.classList.remove('show', 'fade')
    }
})



const slides = document.querySelectorAll('.offer__slide')
const next_btn = document.querySelector('.offer__slider-next')
const prev_btn = document.querySelector('.offer__slider-prev')

let total = document.querySelector('#total')
let totalJs = slides.length
let current = document.querySelector('#current')
let currentJs = 1

let slideIndex = 0

if (totalJs <= 9) {
    total.innerHTML = '0' + totalJs
} else {
    total.innerHTML = totalJs
}

slideShow(slideIndex)

function slideShow(n) {

    if (n === slides.length) {
        slideIndex = 0
    }

    if (n < 0) {
        slideIndex = slides.length - 1
    }

    slides.forEach(slide => slide.classList.add('hide', 'fade'))
    slides[slideIndex].classList.remove('hide')

    if (slideIndex + 1 <= 9) {
        current.innerHTML = '0' + (slideIndex + 1)
    } else {
        current.innerHTML = slideIndex + 1
    }
}

next_btn.onclick = () => {
    slideIndex++
    slideShow(slideIndex)
}

prev_btn.onclick = () => {
    slideIndex--
    slideShow(slideIndex)
}




const tabs = document.querySelectorAll('.tabcontent')
const tabBtns = document.querySelectorAll('.tabheader__item')

let btnIndex = 0

tabs.forEach(tab => tab.classList.add('hide', 'fade'))
tabs[btnIndex].classList.remove('hide')
tabBtns[btnIndex].classList.add('tabheader__item_active')

tabBtns.forEach((btn, idx) => {
    btn.onclick = () => {
        btnIndex = idx
        tabs.forEach(tab => tab.classList.add('hide'))
        tabBtns.forEach(btn => btn.classList.remove('tabheader__item_active'))
        tabs[btnIndex].classList.remove('hide')
        tabBtns[btnIndex].classList.add('tabheader__item_active')
    }
})




const gender_btns = document.querySelectorAll('[data-gender]')
const inputs = document.querySelectorAll('.calculating__choose_medium input')
const actions = document.querySelectorAll('.calculating__choose_big div')


gender_btns.forEach(btn => {
    btn.onclick = () => {
        gender_btns.forEach(btn => btn.classList.remove('calculating__choose-item_active'))
        btn.classList.add('calculating__choose-item_active')

        const g = btn.dataset.gender
        user_data["gender"] = g
    }
})

inputs.forEach(inp => {
   
})

let prev = 1
actions.forEach((div, idx) => {
    div.onclick = () => {
        actions[prev].classList.remove('calculating__choose-item_active')
        div.classList.add('calculating__choose-item_active')


    }
})




let deadline = '2024-02-15 00:00'

function remaining(deadline) {
    let t = Date.parse(deadline) - Date.parse(new Date());

    let seconds = Math.floor((t / 1000) % 60)
    let minutes = Math.floor((t / 1000 / 60) % 60)
    let hours = Math.floor((t / 1000 / 60 / 60) % 24)
    let days = Math.floor(t / 1000 / 60 / 60 / 24)

    return {
        total: t,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
    };
}

function updateTimer() {
    const daysView = document.querySelector('#days')
    const hoursView = document.querySelector('#hours')
    const minutesView = document.querySelector('#minutes')
    const secondsView = document.querySelector('#seconds')

    function updateTime() {
        let t = remaining(deadline);

        daysView.innerHTML = t.days;
        hoursView.innerHTML = t.hours
        minutesView.innerHTML = t.minutes
        secondsView.innerHTML = t.seconds
    }

    updateTime();
    let interval = setInterval(updateTime, 1000);
}

updateTimer()