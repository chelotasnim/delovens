const nav_toggle = document.querySelector('#nav-toggle')
const float_nav = document.querySelector('#float-nav')

nav_toggle.addEventListener(
    'click', function () {
        const status = nav_toggle.getAttribute('data-status')
        if (status === 'close') {
            nav_toggle.setAttribute('data-status', 'open')
            nav_toggle.innerHTML = "<i class='bx  bx-x'></i>"
        } else {
            nav_toggle.setAttribute('data-status', 'close')
            nav_toggle.innerHTML = "<i class='bx  bx-menu-right'></i>"
        }

        float_nav.classList.toggle('show')
    }
)