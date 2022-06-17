$(document).ready(function () {
    $('.nav-button').click(function () {
        $('.nav-button').toggleClass('change')
    });

    $('.gallery-list-item').click(function () {
        let value = $(this).attr('data-filter');
        if (value === 'all') {
            $('.filter').show(300);
        } else {
            $('.filter').not('.' + value).hide(300);
            $('.filter').filter('.' + value).show(300);
        }
    });

    $('.gallery-list-item').click(function () {
        $(this).addClass('active-item').siblings().removeClass('active-item');

    });

});


const nav = document.querySelector('.nav-menu')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if (window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('custom-navbar')
    } else {
        nav.classList.remove('custom-navbar')
    }
}

const imageanim = document.querySelector('.camera-img')
const textanim = document.querySelector('.mission-text')
window.addEventListener('scroll', startAnim)

function startAnim() {
    if (window.scrollY > imageanim.offsetHeight + 300) {
        imageanim.classList.add('fromLeft')
        textanim.classList.add('fromRight')
    } else {
        imageanim.classList.remove('fromLeft')
        textanim.classList.remove('fromRight')
    }
}

const cards = document.querySelectorAll('.card')
window.addEventListener('scroll', moveCards)

function moveCards() {
    if (window.scrollY > cards[1].offsetHeight + 4300) {
        cards.forEach(card => {
            card.classList.add('positioned-card')
        })
    } else {
        cards.forEach(card => {
            card.classList.remove('positioned-card')
        })
    }
}


























