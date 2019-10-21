const emailIsValid = function(email) {
    return /\S+@\S+\.\S+/.test(email)
  }

const emailCheck = function(){
    const emailInput = document.getElementById('inputEmail3');
    emailInput.addEventListener('input',()=>{
        const emailInputText = emailInput.value;
        document.getElementById('inputEmail3Text').innerText = emailIsValid(emailInputText) ;
    })
}

emailCheck();