const BURGER_OPENED_CLASSNAME = 'burger__open';
const BURGER_BTN_OPENED_CLASSNAME = 'burger__btn';
const BODY_FIXED_CLASSNAME_2 = 'body__fixed';

const bodyNode2 = document.querySelector('body');
const burgerNode = document.querySelector('.js__burger');
const burgerBtnNode = document.querySelector('.js__burger__btn');
const burgerContentNode = document.querySelector('.js__burger__content')

burgerBtnNode.addEventListener('click', toggleBurger);

burgerNode.addEventListener('click', (event) => {
    const isClickOutsideContent = !event.composedPath().includes(burgerContentNode)

    if (isClickOutsideContent) {
        toggleBurger();
    }
})

function toggleBurger() {
    burgerNode.classList.toggle(BURGER_OPENED_CLASSNAME);
    bodyNode2.classList.toggle(BODY_FIXED_CLASSNAME_2);
    burgerBtnNode.classList.toggle(BURGER_BTN_OPENED_CLASSNAME);
}
