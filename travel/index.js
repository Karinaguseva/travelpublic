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

(function () {
    const loginBtn = document.querySelector('.login_button');
    const popUp = document.querySelector('.popup_wrapper');
    const darkWrapperPop = document.querySelector('.dark_wrapper_pop');
    loginBtn.addEventListener('click', () => {
        popUp.classList.add ('popup_wrapper_active');
        darkWrapperPop.classList.add ('dark_wrapper_pop_active');
    }); 
    darkWrapperPop.addEventListener('click', () => {
        popUp.classList.remove ('popup_wrapper_active');
        darkWrapperPop.classList.remove ('dark_wrapper_pop_active');
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
    const arrowLeft = document.querySelector('.arrow_left');
    const arrowRight = document.querySelector('.arrow_right');

    firstDot.addEventListener('click', () => {
        sliderItem.classList.add ('slider_active_left');
        sliderItem.classList.remove ('slider_active_center');
        sliderItem.classList.remove ('slider_active_right');
        firstDot.classList.add ('circle_one_active');
        secondDot.classList.remove ('circle_two_active');
        thirdDot.classList.remove ('circle_three_active');
        usaImg.classList.add('slider_item_third_active');
        spainImg.classList.remove('slider_item_first_active');
        arrowLeft.classList.add('arrow_left_not');
        arrowRight.classList.remove('arrow_right_not');

    });

    secondDot.addEventListener('click', () => {
        sliderItem.classList.add ('slider_active_center');
        sliderItem.classList.remove ('slider_active_left');
        sliderItem.classList.remove ('slider_active_right');
        secondDot.classList.add ('circle_two_active');
        firstDot.classList.remove ('circle_one_active');
        thirdDot.classList.remove ('circle_three_active');
        usaImg.classList.remove('slider_item_third_active');
        spainImg.classList.remove('slider_item_first_active');
        arrowLeft.classList.remove('arrow_left_not');
        arrowRight.classList.remove('arrow_right_not');
    });

    thirdDot.addEventListener('click', () => {
        sliderItem.classList.add ('slider_active_right');
        sliderItem.classList.remove ('slider_active_center');
        sliderItem.classList.remove ('slider_active_left');
        thirdDot.classList.add ('circle_three_active');
        firstDot.classList.remove ('circle_one_active');
        secondDot.classList.remove ('circle_two_active');
        usaImg.classList.remove('slider_item_third_active');
        spainImg.classList.add('slider_item_first_active');
        arrowRight.classList.add('arrow_right_not');
        arrowLeft.classList.remove('arrow_left_not');
    });

    spainImg.addEventListener('click', () => {
        sliderItem.classList.add ('slider_active_left');
        sliderItem.classList.remove ('slider_active_center');
        sliderItem.classList.remove ('slider_active_right');
        firstDot.classList.add ('circle_one_active');
        secondDot.classList.remove ('circle_two_active');
        thirdDot.classList.remove ('circle_three_active');
        usaImg.classList.add('slider_item_third_active');
        spainImg.classList.remove('slider_item_first_active');
    });

    japanImg.addEventListener('click', () => {
        sliderItem.classList.add ('slider_active_center');
        sliderItem.classList.remove ('slider_active_left');
        sliderItem.classList.remove ('slider_active_right');
        secondDot.classList.add ('circle_two_active');
        firstDot.classList.remove ('circle_one_active');
        thirdDot.classList.remove ('circle_three_active');
        usaImg.classList.remove('slider_item_third_active');
        spainImg.classList.remove('slider_item_first_active');
    });

    usaImg.addEventListener('click', () => {
        sliderItem.classList.add ('slider_active_right');
        sliderItem.classList.remove ('slider_active_center');
        sliderItem.classList.remove ('slider_active_left');
        thirdDot.classList.add ('circle_three_active');
        firstDot.classList.remove ('circle_one_active');
        secondDot.classList.remove ('circle_two_active');
        usaImg.classList.remove('slider_item_third_active');
        spainImg.classList.add('slider_item_first_active');
    });


    /*spainImg.addEventListener('click', addNew);
my_div = document.getElementById("org_div1");
function addNew(){
    const newDiv = document.createElement("div");
    newDiv.innerHTML = '<div class="slider_item slider_item_first"><img class="slider_img slider_img_first" src="./assets/img/jpg/spain.jpg" alt="Spain"><span class="slider_text">Spain</span></div>';
    my_div.appendChild(newDiv);
    my_div.classList.add('org_div1_active');
}*/

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


