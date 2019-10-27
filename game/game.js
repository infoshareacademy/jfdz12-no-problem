const listOfCookies = ['🥮','🎂','🍥','🍰','🧁', '🍪', '🍄','🥠', '🥞','🍘','🍩','🍄'];

const arrowPress = function (myBox){
    let positionBox = 500;
        
    window.addEventListener('keydown', function (event) {
        const key = event.key;
        
        if (key === 'ArrowRight' && positionBox<915){
            positionBox = positionBox + 15;
            myBox.style.marginLeft = positionBox + 'px';               
        }
        if (key === 'ArrowLeft' && positionBox>110){
            positionBox = positionBox - 15;
            myBox.style.marginLeft = positionBox + 'px';
        }
    }); 
}

const addEventForCook = function(){
    const itemsCook = document.querySelectorAll('.cook');
    const topCookPosition = [393, 268, 143, 18];
    
    itemsCook.forEach((el,idx)=>{
         el.addEventListener('click',()=>{
            const itemsCookActive = document.querySelectorAll('.cook.active');
            if(itemsCookActive.length === 0){
                el.classList.add(`cooks-animation${idx}`);
                el.classList.add('active');
                el.addEventListener('animationend', ()=>{
                    el.classList.remove(`cooks-animation${idx}`);
                    el.style.marginLeft = '500px';
                    el.style.marginTop = `${topCookPosition[idx]}px`;
                    el.style.transform = "scale(1.6)";
                    arrowPress(el);
                })
            }
        })
    })

}

addEventForCook();


const cookiesRandomGenerator = function () {
    const cookieFrame = document.getElementById('kitchenid');
    const nextCookie = document.createElement('span');
    cookieFrame.appendChild(nextCookie);
    const randomCookie = listOfCookies[Math.abs(Math.round(Math.random()*listOfCookies.length-1))];
    const cookieEmoti = document.createTextNode(randomCookie);
    nextCookie.appendChild(cookieEmoti);
    if (randomCookie === '🍄'){
            nextCookie.classList.add('cookies-anime-blinking');
            } else {
                nextCookie.classList.add('cookies-anime');
            }
    nextCookie.addEventListener("animationend", function(){
            let cookieXPosition = 414;
            let cookieYPosition = 95;
            let idNum = Math.floor(Math.random()*1000);
            nextCookie.setAttribute("id", idNum);
            let myCookie = document.getElementById(idNum);
            myCookie.style.left = cookieXPosition + "px";
            myCookie.style.top = cookieYPosition + "px";
            let cookieRange = Math.random()*536+414;
            setInterval(function goRight() {
                if (cookieXPosition<cookieRange) {
                    cookieXPosition++;
                    myCookie.style.left = cookieXPosition+"px";}
                else {
                    cookieYPosition++;
                    myCookie.style.top = cookieYPosition+"px";
                    if (cookieYPosition===550) {
                        cookieFrame.removeChild(nextCookie);
                    }
                }
            },10)
})};


const cookiesFlow = function(){
    const lidClase = document.querySelector('.kitchen-lid');
    setInterval(()=>{
        lidClase.classList.add('lid-up');
        cookiesRandomGenerator();        
        setTimeout(()=>{lidClase.classList.remove('lid-up')},2000);
    },5000);
};



cookiesFlow();