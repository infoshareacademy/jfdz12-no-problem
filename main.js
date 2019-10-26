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

class CookiesAccept {
    constructor(caName, caValue, caExpire){
        this.caName = caName;
        this.caValue = caValue;
        this.caExpire = caExpire;
    }

    setCookies (){
        const dateCookie = new Date();
        dateCookie.setTime(dateCookie.getTime() + (this.caExpire*24*60*60*1000));
        const expires = dateCookie.toUTCString();
        document.cookie = "username=aaa; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = `${this.caName} = ${this.caValue}; expires=${expires} ; path=/;`;
    }

    cookiesBannerVisible(){
        const cookiesBanner = document.getElementById('cookiesbanner');
        cookiesBanner.style.display='block';
    }

    cookiesBannerInVisible(){
        const cookiesBanner = document.getElementById('cookiesbanner');
        cookiesBanner.style.display='none';
    }

    pressAcceptBtn(){
        const pressedBtn = document.getElementById('cookiesbtn');
        pressedBtn.addEventListener('click',()=>{
            this.setCookies (this.caName, this.caValue, this.caExpire);
            this.cookiesBannerInVisible();
        })
    }

    readThisCookies() {
        const newCookies = document.cookie.split(';');
        if (newCookies.length>0){
            for(let i=0; i<newCookies.length ; i++){
                const cookieName = newCookies[i].split("=")[0];
                const cookieValue = newCookies[i].split("=")[1];
                console.log(cookieValue,cookieName);
                if(cookieName === this.caName && cookieValue === this.caValue){
                    console.log(cookieValue);
                    return cookieValue;
                }else {return ""}
            }
        }
    }
    
    checkCookies(){
        const checkCookiecValue = this.readThisCookies();
        if (checkCookiecValue === 'yes'){
            this.cookiesBannerInVisible();
        }else{
            this.cookiesBannerVisible();
            this.pressAcceptBtn();
        }
    }
    
}

checkCookiesBanner = new CookiesAccept ("CookiesAccept","yes",30);
checkCookiesBanner.checkCookies();
