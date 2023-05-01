const btnMenu = document.querySelector('.header__burger');
const menu = document.querySelector('.burger__menu');
const toggleMenu = function () {
    menu.classList.toggle('active');
}

btnMenu.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleMenu();
});

document.addEventListener("click", function (e) {
    const target = e.target;
    const its_menu = target == menu || menu.contains(target);
    const its_btnMenu = target == btnMenu;
    const menu_is_active = menu.classList.contains('active');

    if (!its_menu && !its_btnMenu && menu_is_active) {
        toggleMenu();
    }
});