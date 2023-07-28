// Menu
const enableMenu = () => $('header .menu ul li a').each((_,e) => $(e).attr('onclick', 'changeMenuActive(this)'))

const changeMenuActive = item => {
    $('header .menu ul li a').each((_,e) => e.classList.remove('active'))
    item.classList.add('active')
}

enableMenu()

// THEME

const changeTheme = check => {
    if(check.checked) $('body').addClass('dark')
    else $('body').removeClass('dark')
}