const wrapper=document.querySelector('.wrapper');
const LoginLink=document.querySelector('.login-link');
const registerLink=document.querySelector('.register-link');
const btnPopup=document.querySelector('.btnLogin-popup');
const iconClose=document.querySelector('.icon-close');
registerLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});
LoginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
});
btnPopup.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
});
iconClose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
});
const shopping = document.querySelector('.shopping');
const search = document.querySelector('.search');

shopping.addEventListener('click', () => {
    search.classList.toggle('active');
});
const check_menu=document.querySelector('.check-menu');
const order=document.querySelector('.cart-item-container');

check_menu.addEventListener('click',()=>{
    order.classList.toggle('active');

});;
document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector(".menu");

    function checkMenuVisibility() {
        const menuPosition = menu.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (menuPosition < screenHeight * 0.4&& menuPosition > -screenHeight * 0.8) {
            menu.classList.add("show");
        } else {
            menu.classList.remove("show"); // Ẩn đi khi nó vượt quá 80% màn hình phía trên
        }
    }

    window.addEventListener("scroll", checkMenuVisibility);
    checkMenuVisibility(); // Kiểm tra ngay khi load trang
});
document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector(".about");

    function checkMenuVisibility() {
        const menuPosition = menu.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (menuPosition < screenHeight * 0.4&& menuPosition > -screenHeight * 0.8) {
            menu.classList.add("show");
        } else {
            menu.classList.remove("show"); // Ẩn đi khi nó vượt quá 80% màn hình phía trên
        }
    }

    window.addEventListener("scroll", checkMenuVisibility);
    checkMenuVisibility(); // Kiểm tra ngay khi load trang
});
