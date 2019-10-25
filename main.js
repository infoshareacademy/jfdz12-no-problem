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

const setMyCookies = function (){
    const dateCookie = new Date();
    dateCookie.setTime(dateCookie.getTime() + (30*24*60*60*1000));
    const expires = "expires="+ dateCookie.toUTCString();
    document.cookie = "username=aaa; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "cookiesAccept = yes; " + expires + "; path=/;";
    console.log("cook",document.cookie);
}
setMyCookies();

const readMyCookies= function () {
    const newCookies = document.cookie;
    const newCookiesDecode = decodeURIComponent(document.cookie);
    const newCookiesSpl = newCookies.split(';');
    console.log('newCookies', newCookies);
    console.log('newCoooDecode', newCookiesSpl);
  }

readMyCookies();

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  console.log(getCookie("cookiesAccept"));

  function showCookie(name) {
    if (document.cookie !== "") {
        const cookies = document.cookie.split(/; */);

        for (let i=0; i<cookies.length; i++) {
            const cookieName = cookies[i].split("=")[0];
            const cookieVal = cookies[i].split("=")[1];
            if (cookieName === decodeURIComponent(name)) {
                return decodeURIComponent(cookieVal);
            }
        }
    }
}

//czytamy ciastko
console.log("jskurs",showCookie("cookiesAccept"));