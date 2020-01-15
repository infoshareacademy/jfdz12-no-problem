class EmailValid { 
    constructor(){
        this.emailInput = document.getElementById('inputEmail3');
        this.emailInputSubtextTrue = document.getElementById('inputEmail3Text');
        this.emailInputSubtextFalse = document.getElementById('inputEmail4Text');
    }

    emailIsValid () {
        return /\S+@\S+\.\S{2,}/.test(this.emailInput.value);
    }
    
    emailSubtext(subtext){
        
        if(subtext === 'Empty'){
            this.subtextToggle(this.emailInputSubtextTrue, false);
            this.subtextToggle(this.emailInputSubtextFalse, false);            
        }

        if(subtext === 'True'){
            this.subtextToggle(this.emailInputSubtextFalse, false);
            this.subtextToggle(this.emailInputSubtextTrue, true);            
       }

        if(subtext === 'False'){
            this.subtextToggle(this.emailInputSubtextTrue, false);
            this.subtextToggle(this.emailInputSubtextFalse, true);                        
        }
    }

    subtextToggle(elementChange, type){
        
        elementChange.classList.remove( type ? 'inputEmail3SubtextHidden' : 'inputEmail3SubtextVisible');
        elementChange.classList.add( type ? 'inputEmail3SubtextVisible' : 'inputEmail3SubtextHidden');
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

const emailCheck = new EmailValid();
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
//showHideBack();



class ChangeLanguage {
    constructor(){
        this.textArray = document.querySelectorAll(`[key*='lang']`); 
        this.textPlaceholder = document.getElementById('inputEmail3');
        this.langButton1 = document.getElementById('lang-option1');
        this.langButton2 = document.getElementById('lang-option2');
        this.langButton3 = document.getElementById('lang-option3');
        
        this.langButton1.addEventListener('click', () => this.changeLang('pl'));
        this.langButton2.addEventListener('click', () => this.changeLang('en'));
        this.langButton3.addEventListener('click', () => this.changeLang('sk'));

        this.activeLang = '';
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
        this.activeLang = lang;
        this.setDataToLocalStrage();
    }

    changeActiveButtonClass = (lang) =>{

        if(lang === 'pl' ){
            this.langButton1.classList.add('active');
            this.langButton2.classList.remove('active');
            this.langButton3.classList.remove('active');
        }

        if(lang === 'en' ){
            this.langButton1.classList.remove('active');
            this.langButton2.classList.add('active');
            this.langButton3.classList.remove('active');
        }

        if(lang === 'sk' ){
            this.langButton1.classList.remove('active');
            this.langButton2.classList.remove('active');
            this.langButton3.classList.add('active');
        }
    }

    getDataFromLocalStorage(){
        const test = localStorage.getItem('pageLang');
       
  //      if(test !== "" && test!== 'null'&& test !== null ){
        if(test ==='pl' || test ==='sk' || test === 'en' ){
            this.activeLang = localStorage.getItem('pageLang');
            return true;
        }
        return false;
    }

    setDataToLocalStrage(){
        if(this.activeLang === null){
            this.activeLang = 'pl';
        }
        localStorage.setItem('pageLang', this.activeLang);
    }

    startLang(){
        if(!this.getDataFromLocalStorage() ){
            this.activeLang = 'pl';
            this.changeLang(this.activeLang);
            
        }else{
            this.changeLang(this.activeLang);
            this.changeActiveButtonClass(this.activeLang);
        }
    }

}

const changeLanguage = new ChangeLanguage();
changeLanguage.startLang();


const showMenu = function(size){
    const logo = document.getElementById('nav-logo');
    logo.classList.remove(size === 'big' ? 'nav__logo--small' : 'nav__logo' )
    logo.classList.add(size === 'big' ? 'nav__logo' : 'nav__logo--small');
}


function menuBigSmall (){
    let isScrolling;
    let show = 0;
   
    window.addEventListener("scroll", (event)=> {
        clearTimeout( isScrolling );
        if(show===1){showMenu('small')}
        show ++;
        isScrolling = setTimeout(function() {
            showMenu('big');
            show = 0;
		}, 500);

    });

}

menuBigSmall();

function goToTop() {
    const elmnt = document.getElementById("toptop");
    elmnt.scrollIntoView({behavior: "smooth", block: "start"});
  }