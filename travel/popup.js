(function(){
    const loginPopUp = {
        title: "Login to your account",
        button: "Sign In",
        bottom: "Don't have an account?",
        link: "Register"
    }
    const signPopUp = {
        title: "Create account",
        button: "Sign Up",
        bottom: "Already have an account?",
        link: "Log in"
    }
    const headerButton = document.querySelector('.login_button')
    const popup = document.querySelector('.popup_wrapper');
    const popupReg = document.querySelector('.reg');
    const popupTitle = document.querySelector('.popup_title');
    const popupButton = document.querySelector('.sign');
    const bottomText = document.querySelector('.reg_span');
    const darkWrapperPop = document.querySelector('.dark_wrapper_pop');
    const accountBurger = document.querySelector('.account');
    const menu = document.querySelector('.nav');
    const darkWrapper = document.querySelector('.dark_wrapper');
    
    function browserAlert() {
        let loginContent = document.querySelector('.mail').value;
        let passwordContent = document.querySelector('.password').value;
        alert(`Login: ${loginContent}\nPassword: ${passwordContent}`);
    }

    function ChangePopUp(event) {
        let change = (event.target.innerHTML === "Register")?signPopUp:loginPopUp;
        popup.classList.toggle('popup_active');
        popupTitle.innerHTML = change.title;
        popupButton.innerHTML = change.button;
        bottomText.innerHTML = change.bottom;
        popupReg.innerHTML = change.link;
    }

    function callPopUp(call){
        document.querySelector('.burger').classList.remove('nav_active');
        popup.classList.remove('popup_active');
        popupTitle.innerHTML = loginPopUp.title;
        popupButton.innerHTML = loginPopUp.button;
        bottomText.innerHTML = loginPopUp.bottom;
        popupReg.innerHTML = loginPopUp.link;
        call.stopPropagation();
        popup.classList.toggle('popup_wrapper_active');
        darkWrapperPop.classList.add('dark_wrapper_pop_active');
        menu.classList.remove ('nav_active');
        darkWrapper.classList.remove ('dark_wrapper_active');
    }

    function popUpClose(event) {
        let target = event.target;
        let popupActive = popup == target || popup.contains(target);
        if (popup.classList.contains('popup_wrapper_active') && !popupActive) {
            popup.classList.remove('popup_wrapper_active');
            darkWrapperPop.classList.remove('dark_wrapper_pop_active');
          }
    }

    

    popupReg.addEventListener('click', ChangePopUp);
    headerButton.addEventListener('click', callPopUp);
    accountBurger.addEventListener('click', callPopUp);
    popupButton.addEventListener('click', browserAlert);
    document.addEventListener('click', popUpClose);
}())




/*Popupbtn это массив кнопок. Сделайте для них popupbtn.forEach((btn) => btn.classlist.toggle('block')); 
*/