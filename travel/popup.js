(function () {
    const loginBtn = document.querySelector('.login_button');
    const popUp = document.querySelector('.popup_wrapper');
    const darkWrapperPop = document.querySelector('.dark_wrapper_pop');
    const popUpSign = document.querySelector('.sign_in_popup_wrapper');
    const reg = document.querySelector('.reg');
    const account = document.querySelector('.account');

    loginBtn.addEventListener('click', () => {
        popUp.classList.add ('popup_wrapper_active');
        darkWrapperPop.classList.add ('dark_wrapper_pop_active');
    }); 
    account.addEventListener('click', () => {
        popUp.classList.add ('popup_wrapper_active');
        darkWrapperPop.classList.add ('dark_wrapper_pop_active');
    }); 
    darkWrapperPop.addEventListener('click', () => {
        popUp.classList.remove ('popup_wrapper_active');
        darkWrapperPop.classList.remove ('dark_wrapper_pop_active');
    });

    const popupTitle = document.querySelector('.popup_title');
    const buttonFsb = document.querySelector('.button_fsb');
    const buttonGoo = document.querySelector('.button_google');
    const betweenTitle = document.querySelector('.between_wrapper');
    const signButton = document.querySelector('.sign');
    const forgotPass = document.querySelector('.forgot_password');
    const regSpan = document.querySelector('.reg_span');

    reg.addEventListener('click', () => {
        popupTitle.textContent = 'Create account';
        popupTitle.classList.add('popup_title_sign');
        buttonFsb.remove ();
        buttonGoo.remove ();
        betweenTitle.remove ();
        signButton.textContent = 'Sign Up';
        signButton.classList.add('sign_up');
        forgotPass.remove ();
        regSpan.innerHTML = 'Already have an account? <a href="/" class="reg">Log in</a>';
        popUp.classList.add('popup_wrapper_sign');

    });


}());
