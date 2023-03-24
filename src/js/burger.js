const iconMenu = document.querySelector('.header__burger');

if (iconMenu){
    const menu = document.querySelector('.header__menu');
    iconMenu.addEventListener("click",function(e){
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menu.classList.toggle('_active');
    });
}
