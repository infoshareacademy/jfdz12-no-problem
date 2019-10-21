const emailIsValid = function(email) {
    return /\S+@\S+\.\S{2,}/.test(email)
  }

const emailCheck = function(){
    const emailInput = document.getElementById('inputEmail3');
    emailInput.addEventListener('input',()=>{
        const emailInputText = emailInput.value;
        let emailValid = emailIsValid(emailInputText);
        if (emailValid) {
            document.getElementById('inputEmail3Text').innerText = "poprawny email" ;
            document.getElementById('inputEmail3Text').style.color = "green";
        }else{
            if (emailInputText ===''){
                document.getElementById('inputEmail3Text').innerText="";
            }else{
                document.getElementById('inputEmail3Text').innerText = "wprowadź poprawny email";
                document.getElementById('inputEmail3Text').style.color = "red";
            }
        }
        
    })
}

emailCheck();