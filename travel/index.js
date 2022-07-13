(function () {
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


/*let slides = document.querySelectorAll('.slider_item');
let slider = []
for (let i=0; i< slides.length; i++){
    slider[i] = slides[i].img;
    slides[i].remove();
}

let step = 0;
let offset = 0;

function draw (){
    let img = document.createElement('.slider_item');
    img.img = slider[step];
    img.classList.add('slider_item');
    img.style.left = offset*860 + 'px';
    document.querySelector('#slider').appendChild(img);
}

draw()*/


(function () {
    const sliderItem = document.querySelector('.slider');
    const firstDot = document.querySelector('.circle_one');
    const secondDot = document.querySelector('.circle_two');
    const thirdDot = document.querySelector('.circle_three');
    const spainImg = document.querySelector('.slider_item_first');
    const japanImg = document.querySelector('.slider_item_second');
    const usaImg = document.querySelector('.slider_item_third');
    firstDot.addEventListener('click', () => {
        sliderItem.classList.add ('slider_active_left');
        sliderItem.classList.remove ('slider_active_center');
        sliderItem.classList.remove ('slider_active_right');
        firstDot.classList.add ('circle_one_active');
        secondDot.classList.remove ('circle_two_active');
        thirdDot.classList.remove ('circle_three_active');

    });

    secondDot.addEventListener('click', () => {
        sliderItem.classList.add ('slider_active_center');
        sliderItem.classList.remove ('slider_active_left');
        sliderItem.classList.remove ('slider_active_right');
        secondDot.classList.add ('circle_two_active');
        firstDot.classList.remove ('circle_one_active');
        thirdDot.classList.remove ('circle_three_active');
    });

    thirdDot.addEventListener('click', () => {
        sliderItem.classList.add ('slider_active_right');
        sliderItem.classList.remove ('slider_active_center');
        sliderItem.classList.remove ('slider_active_left');
        thirdDot.classList.add ('circle_three_active');
        firstDot.classList.remove ('circle_one_active');
        secondDot.classList.remove ('circle_two_active');
    });

    spainImg.addEventListener('click', () => {
        sliderItem.classList.add ('slider_active_left');
        sliderItem.classList.remove ('slider_active_center');
        sliderItem.classList.remove ('slider_active_right');
        firstDot.classList.add ('circle_one_active');
        secondDot.classList.remove ('circle_two_active');
        thirdDot.classList.remove ('circle_three_active');
        var my_div = newDiv = null;
        var newDiv = document.createElement("div");
        newDiv.innerHTML = "<h1>Привет!</h1>";

    // Добавляем только что созданный элемент в дерево DOM

    my_div = document.getElementById("org_div1");
    document.spainImg.insertBefore(newDiv, my_div);
    });

    japanImg.addEventListener('click', () => {
        sliderItem.classList.add ('slider_active_center');
        sliderItem.classList.remove ('slider_active_left');
        sliderItem.classList.remove ('slider_active_right');
        secondDot.classList.add ('circle_two_active');
        firstDot.classList.remove ('circle_one_active');
        thirdDot.classList.remove ('circle_three_active');
    });

    usaImg.addEventListener('click', () => {
        sliderItem.classList.add ('slider_active_right');
        sliderItem.classList.remove ('slider_active_center');
        sliderItem.classList.remove ('slider_active_left');
        thirdDot.classList.add ('circle_three_active');
        firstDot.classList.remove ('circle_one_active');
        secondDot.classList.remove ('circle_two_active');
    });

}());


/*
document.body.onload = addElement;
  var my_div = newDiv = null;

  function addElement() {

    // Создаём новый элемент div
    // и добавляем в него немного контента

    var newDiv = document.createElement("div");
        newDiv.innerHTML = "<h1>Привет!</h1>";

    // Добавляем только что созданный элемент в дерево DOM

    my_div = document.getElementById("org_div1");
    document.body.insertBefore(newDiv, my_div);
  } ;*/


