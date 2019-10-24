class EmailValid {
    constructor(emailInput, emailInputSubtext){
        this.emailInput = document.getElementById(emailInput);
        this.emailInputSubtext = document.getElementById(emailInputSubtext);
    }

    emailIsValid () {
        return /\S+@\S+\.\S{2,}/.test(this.emailInput.value);
      }
    
    emailSubtextTrue(){
        this.emailInputSubtext.classList.toggle('inputEmail3SubtextFalse',false);
        this.emailInputSubtext.classList.add('inputEmail3SubtextTrue');
        this.emailInputSubtext.innerText = "poprawny email" ;
      }
    
    emailSubtextFalse(){
        this.emailInputSubtext.classList.toggle('inputEmail3SubtextTrue',false);
        this.emailInputSubtext.classList.add('inputEmail3SubtextFalse');
        this.emailInputSubtext.innerText = "wprowadź poprawny email";
      }
    
    emailSubtextEmpty(){
        this.emailInputSubtext.innerText = "";
    }

    emailInputEmpty(){
        this.emailInput.value = "";
    }

    emailCheck(){
        this.emailInput.addEventListener('input',()=>{
            if (this.emailIsValid()) {
                this.emailSubtextTrue();
            }else{
                if (this.emailInput.value ===''){
                    this.emailSubtextEmpty();
                }else{
                    this.emailSubtextFalse();
                }
            }    
        }) 
    }
        
}

class EmailModal {
    constructor (){
        this.mLeft = screen.width/2-200;
        this.mTop = screen.height/2-250;
        this.emModal = document.getElementById('emailModalId');
        this.btnPlay = document.getElementById('email-btnplay');
        this.btnExit = document.getElementById('email-btnexit');
    }

    showModalBtn = function () {
        this.btnPlay.addEventListener('click', ()=>{
            window.open('game/game.html');
            this.emModal.style.display = "none";
        })
    
        this.btnExit.addEventListener('click', ()=>{
            this.emModal.style.display = "none";
        })
      }

    showModal () {
        this.emModal.style.display = "block";
        this.emModal.style.left = this.mLeft + "px";
        this.emModal.style.top = this.mTop + "px"; 
        this.showModalBtn();
    }
}

const emailSubmit = function (){
    const emailSubmitButton = document.getElementById('btn-email-submit');
    emailSubmitButton.addEventListener('click',(event)=>{
        const emailCheck = new EmailValid('inputEmail3','inputEmail3Text');
        const emailModal = new EmailModal();

        let emailValid = emailCheck.emailIsValid();
        if (emailValid){
            event.preventDefault();
            event.stopPropagation();
            emailModal.showModal();
            emailCheck.emailSubtextEmpty();
            emailCheck.emailInputEmpty();
        }else{
            event.preventDefault();
            event.stopPropagation();
            emailCheck.emailSubtextFalse();
            emailCheck.emailCheck();
        }
    })

}

emailSubmit();