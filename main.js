class EmailValid {
    constructor(emailInput, emailInputSubtext){
        this.emailInput = document.getElementById(emailInput);
        this.emailInputSubtext = document.getElementById(emailInputSubtext);
        this.classTrue = 'inputEmail3SubtextTrue';
        this.classFalse = 'inputEmail3SubtextFalse';
    }

    emailIsValid () {
        return /\S+@\S+\.\S{2,}/.test(this.emailInput.value);
    }
    
    emailSubtext(subtext){
        let subtextVal = "";
        
        if(subtext !== 'Empty'){
            this.emailInputSubtext.classList.toggle(subtext === 'True' ? this.classFalse : this.classTrue , false);
            this.emailInputSubtext.classList.add(subtext === 'True' ? this.classTrue : this.classFalse , false);
            subtextVal = this.subtextValLang(subtext);
        }

        this.emailInputSubtext.innerText = subtextVal;
    }

    subtextValLang (subtext){
        const actualLang = document.getElementsByTagName('html')[0].attributes.lang.value;
        let subtextVal ="";

        if (subtext === 'True'){
            subtextVal = actualLang === 'pl' ? "poprawny email" : "valid email";
        } else {
            subtextVal = actualLang === 'pl' ? "wprowadź poprawny email" : "please enter a valid email";
        }

        return subtextVal;
    }

    emailInputEmpty(){
        this.emailInput.value = "";
    }

    emailCheck(){
        this.emailInput.addEventListener('input',()=>{
            if (this.emailIsValid()) {
                this.emailSubtext('True');
            }else{
                if (this.emailInput.value ===''){
                    this.emailSubtext('Empty');
                }else{
                    this.emailSubtext('False');
                }
            }    
        }); 
    }

    emailSaveToSesionStorage(){
        const userData = {
            name: "",
            email: this.emailInput.value
        } 

        const userDataJson = JSON.stringify(userData);
        sessionStorage.setItem('userData', userDataJson);

    }
}

class EmailModal {
    constructor (){
        this.emModal = document.getElementById('emailmodalid');
        this.btnPlay = document.getElementById('email-btnplay');
        this.btnExit = document.getElementById('email-btnexit');
        this.btnPlay.addEventListener('click',()=>{
            this.btnPlayEvent()
        });
        this.btnExit.addEventListener('click',()=>{
            this.btnExitEvent();
        });
    }

    btnPlayEvent() {
        window.open('game/game.html', '_self');
        this.emModal.style.display = "none";
    };
    
    btnExitEvent() {
        this.emModal.style.display = "none";
    };
      
    showModal() {
        this.emModal.style.display = "block";
      }
}

const emailSubmit = function (){
    const emailSubmitButton = document.getElementById('btn-email-submit');

    emailSubmitButton.addEventListener('click', (event)=>{
        
        let emailValid = emailCheck.emailIsValid();
        event.preventDefault();

        if (emailValid){
            emailModal.showModal();
            emailCheck.emailSaveToSesionStorage();
            emailCheck.emailSubtext('Empty');
            emailCheck.emailInputEmpty();
        }else{
            emailCheck.emailSubtext('False');
            emailCheck.emailCheck();
        }
    });
}

const emailCheck = new EmailValid('inputEmail3','inputEmail3Text');
const emailModal = new EmailModal();
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
        document.cookie = `${this.caName} = ${this.caValue}; expires=${expires} ; path=/; SameSite=None;`;
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
                if(cookieName === this.caName && cookieValue === this.caValue){
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
const checkCookiesBanner = new CookiesAccept ("CookiesAccept","yes",30);
checkCookiesBanner.checkCookies();


const showHideBack = function(){
    const backArrow = document.querySelector('.back-button'); 
    let showPoint = null;

    let classShow = false
    backArrow.classList.add('back-button--hide');

    window.addEventListener("scroll", (()=> {
        showPoint = window.innerHeight*0.5;
        
        if (window.scrollY > showPoint) {
            if(!classShow) {
                backArrow.classList.remove('back-button--hide');
                backArrow.classList.add('back-button--show');
                classShow = true;
            }
        }  
        if (window.scrollY <= showPoint){
            if(classShow){
                backArrow.classList.remove('back-button--show')
                backArrow.classList.add('back-button--hide');
                classShow = false;
            }
        }
    } ));
    
}

showHideBack();

class ChangeLanguage {
    constructor(){
        this.textArray = document.querySelectorAll(`[key*='lang']`); 
        this.textPlaceholder = document.getElementById('inputEmail3');
        this.langButton1 = document.getElementById('lang-option1');
        this.langButton2 = document.getElementById('lang-option2');
        this.langButton1.addEventListener('click', () => this.changeLang('pl'));
        this.langButton2.addEventListener('click', () => this.changeLang('en'));
    }

    changeLang = (lang) => {
        this.changeText(lang);
        this.changePlacecholer(lang);
        this.changeHtmlLang(lang);
    }

    changeText = (lang) => {
        this.textArray.forEach((el) =>{
            const findKey = langTable.find((key) => key.id === el.attributes.key.value);
            el.textContent = findKey[lang]; 
        });
    }

    changePlacecholer = (lang) =>{
        this.textPlaceholder.placeholder = langTable.find((key) => key.id === 'lang050')[lang];
    }

    changeHtmlLang = (lang) => {
        document.getElementsByTagName('html')[0].attributes.lang.value = lang;
    }


}

const changeLanguage = new ChangeLanguage();

