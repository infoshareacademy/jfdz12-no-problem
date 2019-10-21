const emailIsValid = function(email) {
    return /\S+@\S+\.\S{2,}/.test(email)
  }

const emailCheck = function(){
    const emailInput = document.getElementById('inputEmail3');
    const emailInputSubtext = document.getElementById('inputEmail3Text');
    emailInput.addEventListener('input',()=>{
        const emailInputText = emailInput.value;
        let emailValid = emailIsValid(emailInputText);
        if (emailValid) {
            emailInputSubtext.classList.add('inputEmail3SubtextTrue');
            emailInputSubtext.innerText = "poprawny email" ;
        }else{
            if (emailInputText ===''){
                emailInputSubtext.innerText="";
            }else{
                emailInputSubtext.classList.add('inputEmail3SubtextFalse');
                emailInputSubtext.innerText = "wprowadź poprawny email";
            }
        }
        
    })
}

const emailModalBtn = function () {
    const btnPlay = document.getElementById('email-btnplay');
    const btnExit = document.getElementById('email-btnexit');
    const emailModal = document.getElementById('emailModalId');
    
    btnPlay.addEventListener('click', ()=>{
        window.open('game/game.html');
        emailModal.style.display = "none";
    })

    btnExit.addEventListener('click', ()=>{
        emailModal.style.display = "none";
    })

  }

const emailModal = function (mLeft, mTop) {
    const emModal = document.getElementById('emailModalId');
    emModal.style.display = "block";
    emModal.style.left = mLeft + "px";
    emModal.style.top = mTop + "px"; 
    emailModalBtn();
}


const emailSubmit = function (){
    const emailSubmitButton = document.getElementById('btn-email-submit');
    emailSubmitButton.addEventListener('click',(event)=>{
        const emailInput = document.getElementById('inputEmail3');
        const emailInputText = emailInput.value;
        const emailInputSubtext = document.getElementById('inputEmail3Text');
        
        let emailValid = emailIsValid(emailInputText)
        if (emailValid){
            const winLeft = screen.width/2-200;
            const winTop = screen.height/2-250;
            emailModal(winLeft, winTop);
            event.preventDefault();
            emailInput.value = "";
            emailInputSubtext.innerText = "";
        }else{
            event.preventDefault();
            event.stopPropagation();
            emailInputSubtext.classList.add('inputEmail3SubtextFalse');
            emailInputSubtext.innerText = "wprowadź poprawny email";
            emailCheck();
        }
    })

}

emailSubmit();