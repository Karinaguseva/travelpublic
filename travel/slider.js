/*(function () {
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
        /*usaImg.classList.add('slider_item_third_active');
        spainImg.classList.remove('slider_item_first_active');*/
    /*    arrowLeft.classList.add('arrow_left_not');
        arrowRight.classList.remove('arrow_right_not');

    });

    secondDot.addEventListener('click', () => {
        sliderItem.classList.add ('slider_active_center');
        sliderItem.classList.remove ('slider_active_left');
        sliderItem.classList.remove ('slider_active_right');
        secondDot.classList.add ('circle_two_active');
        firstDot.classList.remove ('circle_one_active');
        thirdDot.classList.remove ('circle_three_active');
        /*usaImg.classList.remove('slider_item_third_active');
        spainImg.classList.remove('slider_item_first_active');*/
       /* arrowLeft.classList.remove('arrow_left_not');
        arrowRight.classList.remove('arrow_right_not');
    });

    thirdDot.addEventListener('click', () => {
        sliderItem.classList.add ('slider_active_right');
        sliderItem.classList.remove ('slider_active_center');
        sliderItem.classList.remove ('slider_active_left');
        thirdDot.classList.add ('circle_three_active');
        firstDot.classList.remove ('circle_one_active');
        secondDot.classList.remove ('circle_two_active');
       /* usaImg.classList.remove('slider_item_third_active');
        spainImg.classList.add('slider_item_first_active');*/
      /*  arrowRight.classList.add('arrow_right_not');
        arrowLeft.classList.remove('arrow_left_not');
    });

    spainImg.addEventListener('click', () => {
        sliderItem.classList.add ('slider_active_left');
        sliderItem.classList.remove ('slider_active_center');
        sliderItem.classList.remove ('slider_active_right');
        firstDot.classList.add ('circle_one_active');
        secondDot.classList.remove ('circle_two_active');
        thirdDot.classList.remove ('circle_three_active');
        /*usaImg.classList.add('slider_item_third_active');
        spainImg.classList.remove('slider_item_first_active');*/
    /*});

    japanImg.addEventListener('click', () => {
        sliderItem.classList.add ('slider_active_center');
        sliderItem.classList.remove ('slider_active_left');
        sliderItem.classList.remove ('slider_active_right');
        secondDot.classList.add ('circle_two_active');
        firstDot.classList.remove ('circle_one_active');
        thirdDot.classList.remove ('circle_three_active');
        /*usaImg.classList.remove('slider_item_third_active');
        spainImg.classList.remove('slider_item_first_active');*/
    /*});

    usaImg.addEventListener('click', () => {
        sliderItem.classList.add ('slider_active_right');
        sliderItem.classList.remove ('slider_active_center');
        sliderItem.classList.remove ('slider_active_left');
        thirdDot.classList.add ('circle_three_active');
        firstDot.classList.remove ('circle_one_active');
        secondDot.classList.remove ('circle_two_active');
        /*usaImg.classList.remove('slider_item_third_active');
        spainImg.classList.add('slider_item_first_active');*/
    /*});


    /*spainImg.addEventListener('click', addNew);
my_div = document.getElementById("org_div1");
function addNew(){
    const newDiv = document.createElement("div");
    newDiv.innerHTML = '<div class="slider_item slider_item_first"><img class="slider_img slider_img_first" src="./assets/img/jpg/spain.jpg" alt="Spain"><span class="slider_text">Spain</span></div>';
    my_div.appendChild(newDiv);
    my_div.classList.add('org_div1_active');
}*/

/*}());



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



  (function () {
    const sliderItem = document.querySelectorAll('.slider');
    const firstDot = document.querySelector('.circle_one');
    const secondDot = document.querySelector('.circle_two');
    const thirdDot = document.querySelector('.circle_three');
    const img1 = document.querySelector('.dest1');
    const img2 = document.querySelector('.dest2');
    const img3 = document.querySelector('.dest3');
    const img4 = document.querySelector('.dest4');
    const img5 = document.querySelector('.dest5');
    const arrowLeft = document.querySelector('.arrow_left');
    const arrowRight = document.querySelector('.arrow_right');

    firstDot.addEventListener('click', () => {
        img1.classList.add ('slider_active_left');
        img1.classList.remove ('slider_active_center');
        img1.classList.remove ('slider_active_right');
        img2.classList.add ('slider_active_left');
        img2.classList.remove ('slider_active_center');
        img2.classList.remove ('slider_active_right');
        img3.classList.add ('slider_active_left');
        img3.classList.remove ('slider_active_center');
        img3.classList.remove ('slider_active_right');
        img4.classList.add ('slider_active_left');
        img4.classList.remove ('slider_active_center');
        img4.classList.remove ('slider_active_right');
        img5.classList.add ('slider_active_left');
        img5.classList.remove ('slider_active_center');
        img5.classList.remove ('slider_active_right');
        firstDot.classList.add ('circle_one_active');
        secondDot.classList.remove ('circle_two_active');
        thirdDot.classList.remove ('circle_three_active');
        arrowLeft.classList.add('arrow_left_not');
        arrowRight.classList.remove('arrow_right_not');
        const sliderItem = document.querySelectorAll('.slider')
    });

    secondDot.addEventListener('click', () => {
        img1.classList.add ('slider_active_center');
        img1.classList.remove ('slider_active_left');
        img1.classList.remove ('slider_active_right');
        img2.classList.add ('slider_active_center');
        img2.classList.remove ('slider_active_left');
        img2.classList.remove ('slider_active_right');
        img3.classList.add ('slider_active_center');
        img3.classList.remove ('slider_active_left');
        img3.classList.remove ('slider_active_right');
        img4.classList.add ('slider_active_center');
        img4.classList.remove ('slider_active_left');
        img4.classList.remove ('slider_active_right');
        img5.classList.add ('slider_active_center');
        img5.classList.remove ('slider_active_left');
        img5.classList.remove ('slider_active_right');
        secondDot.classList.add ('circle_two_active');
        firstDot.classList.remove ('circle_one_active');
        thirdDot.classList.remove ('circle_three_active');
        arrowLeft.classList.remove('arrow_left_not');
        arrowRight.classList.remove('arrow_right_not');
        const sliderItem = document.querySelectorAll('.slider')
    });
    
    thirdDot.addEventListener('click', () => {
        img1.classList.add ('slider_active_right');
        img1.classList.remove ('slider_active_center');
        img1.classList.remove ('slider_active_left');
        img2.classList.add ('slider_active_right');
        img2.classList.remove ('slider_active_center');
        img2.classList.remove ('slider_active_left');
        img3.classList.add ('slider_active_right');
        img3.classList.remove ('slider_active_center');
        img3.classList.remove ('slider_active_left');
        img4.classList.add ('slider_active_right');
        img4.classList.remove ('slider_active_center');
        img4.classList.remove ('slider_active_left');
        img5.classList.add ('slider_active_right');
        img5.classList.remove ('slider_active_center');
        img5.classList.remove ('slider_active_left');
        thirdDot.classList.add ('circle_three_active');
        firstDot.classList.remove ('circle_one_active');
        secondDot.classList.remove ('circle_two_active');
        arrowRight.classList.add('arrow_right_not');
        arrowLeft.classList.remove('arrow_left_not');
        const sliderItem = document.querySelectorAll('.slider')
    });

    img1.addEventListener('click', () => {
        img1.classList.add ('slider_active_right');
        img1.classList.remove ('slider_active_center');
        img1.classList.remove ('slider_active_left');
        img2.classList.add ('slider_active_right');
        img2.classList.remove ('slider_active_center');
        img2.classList.remove ('slider_active_left');
        img3.classList.add ('slider_active_right');
        img3.classList.remove ('slider_active_center');
        img3.classList.remove ('slider_active_left');
        img4.classList.add ('slider_active_right');
        img4.classList.remove ('slider_active_center');
        img4.classList.remove ('slider_active_left');
        img5.classList.add ('slider_active_right');
        img5.classList.remove ('slider_active_center');
        img5.classList.remove ('slider_active_left');
        thirdDot.classList.add ('circle_three_active');
        firstDot.classList.remove ('circle_one_active');
        secondDot.classList.remove ('circle_two_active');
        const sliderItem = document.querySelectorAll('.slider')
    });

    img2.addEventListener('click', () => {
        img1.classList.add ('slider_active_left');
        img1.classList.remove ('slider_active_center');
        img1.classList.remove ('slider_active_right');
        img2.classList.add ('slider_active_left');
        img2.classList.remove ('slider_active_center');
        img2.classList.remove ('slider_active_right');
        img3.classList.add ('slider_active_left');
        img3.classList.remove ('slider_active_center');
        img3.classList.remove ('slider_active_right');
        img4.classList.add ('slider_active_left');
        img4.classList.remove ('slider_active_center');
        img4.classList.remove ('slider_active_right');
        img5.classList.add ('slider_active_left');
        img5.classList.remove ('slider_active_center');
        img5.classList.remove ('slider_active_right');
        firstDot.classList.add ('circle_one_active');
        secondDot.classList.remove ('circle_two_active');
        thirdDot.classList.remove ('circle_three_active');
        const sliderItem = document.querySelectorAll('.slider')
    });

    img3.addEventListener('click', () => {
        img1.classList.add ('slider_active_center');
        img1.classList.remove ('slider_active_left');
        img1.classList.remove ('slider_active_right');
        img2.classList.add ('slider_active_center');
        img2.classList.remove ('slider_active_left');
        img2.classList.remove ('slider_active_right');
        img3.classList.add ('slider_active_center');
        img3.classList.remove ('slider_active_left');
        img3.classList.remove ('slider_active_right');
        img4.classList.add ('slider_active_center');
        img4.classList.remove ('slider_active_left');
        img4.classList.remove ('slider_active_right');
        img5.classList.add ('slider_active_center');
        img5.classList.remove ('slider_active_left');
        img5.classList.remove ('slider_active_right');
        secondDot.classList.add ('circle_two_active');
        firstDot.classList.remove ('circle_one_active');
        thirdDot.classList.remove ('circle_three_active');
        const sliderItem = document.querySelectorAll('.slider')
    });
    
        
     
    img4.addEventListener('click', () => {
        img1.classList.add ('slider_active_right');
        img1.classList.remove ('slider_active_center');
        img1.classList.remove ('slider_active_left');
        img2.classList.add ('slider_active_right');
        img2.classList.remove ('slider_active_center');
        img2.classList.remove ('slider_active_left');
        img3.classList.add ('slider_active_right');
        img3.classList.remove ('slider_active_center');
        img3.classList.remove ('slider_active_left');
        img4.classList.add ('slider_active_right');
        img4.classList.remove ('slider_active_center');
        img4.classList.remove ('slider_active_left');
        img5.classList.add ('slider_active_right');
        img5.classList.remove ('slider_active_center');
        img5.classList.remove ('slider_active_left');
        thirdDot.classList.add ('circle_three_active');
        firstDot.classList.remove ('circle_one_active');
        secondDot.classList.remove ('circle_two_active');
        const sliderItem = document.querySelectorAll('.slider')
    });

    img5.addEventListener('click', () => {
        img1.classList.add ('slider_active_left');
        img1.classList.remove ('slider_active_center');
        img1.classList.remove ('slider_active_right');
        img2.classList.add ('slider_active_left');
        img2.classList.remove ('slider_active_center');
        img2.classList.remove ('slider_active_right');
        img3.classList.add ('slider_active_left');
        img3.classList.remove ('slider_active_center');
        img3.classList.remove ('slider_active_right');
        img4.classList.add ('slider_active_left');
        img4.classList.remove ('slider_active_center');
        img4.classList.remove ('slider_active_right');
        img5.classList.add ('slider_active_left');
        img5.classList.remove ('slider_active_center');
        img5.classList.remove ('slider_active_right');
        firstDot.classList.add ('circle_one_active');
        secondDot.classList.remove ('circle_two_active');
        thirdDot.classList.remove ('circle_three_active');
        const sliderItem = document.querySelectorAll('.slider')
    });

    function funonload() {
        secondDot.classList.add ('circle_two_active');
    } 
    window.onload = funonload;
    
    let length = sliderItem.classList.length;
    console.log(length);

    
    
    
        
   
    sliderMobile()
    

    /*const slide2Active = img3.classList.contains('slider_active_center');
 
    const slide3Active = slides[3].classList.contains('slider_active_right');
    */

    /*function sliderMobile(){
        let length = img3.classList.length;
console.log(length);
        /*if (img3.classList[2]){
            arrowLeft.addEventListener('click', () => {
                img1.classList.add ('slider_active_left');
                img1.classList.remove ('slider_active_center');
                img1.classList.remove ('slider_active_right');
                img2.classList.add ('slider_active_left');
                img2.classList.remove ('slider_active_center');
                img2.classList.remove ('slider_active_right');
                img3.classList.add ('slider_active_left');
                img3.classList.remove ('slider_active_center');
                img3.classList.remove ('slider_active_right');
                img4.classList.add ('slider_active_left');
                img4.classList.remove ('slider_active_center');
                img4.classList.remove ('slider_active_right');
                img5.classList.add ('slider_active_left');
                img5.classList.remove ('slider_active_center');
                img5.classList.remove ('slider_active_right');
                firstDot.classList.add ('circle_one_active');
                secondDot.classList.remove ('circle_two_active');
                thirdDot.classList.remove ('circle_three_active');
                arrowLeft.classList.add('arrow_left_not');
                arrowRight.classList.remove('arrow_right_not');
            });
        } else if(img2.classList.contains('.dest2')){
            arrowRight.addEventListener('click', () => {
                img1.classList.add ('slider_active_center');
                img1.classList.remove ('slider_active_left');
                img1.classList.remove ('slider_active_right');
                img2.classList.add ('slider_active_center');
                img2.classList.remove ('slider_active_left');
                img2.classList.remove ('slider_active_right');
                img3.classList.add ('slider_active_center');
                img3.classList.remove ('slider_active_left');
                img3.classList.remove ('slider_active_right');
                img4.classList.add ('slider_active_center');
                img4.classList.remove ('slider_active_left');
                img4.classList.remove ('slider_active_right');
                img5.classList.add ('slider_active_center');
                img5.classList.remove ('slider_active_left');
                img5.classList.remove ('slider_active_right');
                secondDot.classList.add ('circle_two_active');
                firstDot.classList.remove ('circle_one_active');
                thirdDot.classList.remove ('circle_three_active');
            });
        }
    };

    console.log(sliderMobile());*/



}());
