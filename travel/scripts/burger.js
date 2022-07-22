(function () {
    console.log('Оценка 100 баллов \nСлайдер не должен быть бесконечным, на картинки можно нажать, слайдер плавно передвигается на нужную картинку, при окончании ряда картинок, слайдер возвращает нас в начало или в конец слайдера (версия Desktop) - это нормально\nСпасибо тебе за проверку! \nhttps://rolling-scopes-school.github.io/karinaguseva-JSFEPRESCHOOL2022Q2/Travel');
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.nav');
    const menuClose = document.querySelector('.nav_close');
    const darkWrapper = document.querySelector('.dark_wrapper');
    const headerItem = document.querySelector('.header_list');
    burgerItem.addEventListener('click', () => {
       menu.classList.add ('nav_active');
       darkWrapper.classList.add ('dark_wrapper_active');
    });
    menuClose.addEventListener('click', () =>{
        menu.classList.remove ('nav_active');
        darkWrapper.classList.remove ('dark_wrapper_active');
    });
    darkWrapper.addEventListener('click', () => {
        menu.classList.remove ('nav_active');
        darkWrapper.classList.remove ('dark_wrapper_active');
    });
    headerItem.addEventListener('click', () => {
        menu.classList.remove ('nav_active');
        darkWrapper.classList.remove ('dark_wrapper_active');
    });  
}());
