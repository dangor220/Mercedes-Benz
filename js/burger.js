const burgerMenu = document.querySelector('.humburger-menu')
const menuElem = document.querySelector('.menu')
const menuList = document.querySelector('.menu-list')


burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('humburger-menu-active')
  menuElem.classList.toggle('menu-active')
})

menuList.addEventListener('click', (event) => {
  if (event.target.classList.contains('menu-list__link')) {
    burgerMenu.classList.remove('humburger-menu-active')
    menuElem.classList.remove('menu-active')
  }
})