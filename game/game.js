const listOfCookies = ['🥮','🎂','🍥','🍰','🧁', '🍪', '🍄','🥠', '🥞','🍘','🍩','🍄'];

class Cook {
    constructor(cookName, cookPosition){
        this.cookName = cookName;
        this.cookPosition = cookPosition;
        this.cookHorizontalPosition = 500;
        this.element = document.querySelector(`.${cookName}`);
        this.element.addEventListener('click',()=>{
            this.enter();
        });
    }
    enter (){
        if (null !== selectedCook) {
            return;
        }

        selectedCook = this;

        this.element.classList.add(`cooks-animation-${this.cookName}`);
        this.element.classList.add('active');
        this.element.addEventListener('animationend', ()=>{
            this.element.classList.remove(`cooks-animation-${this.cookName}`);
            this.element.style.marginLeft = '500px';
            this.element.style.marginTop = `${this.cookPosition}px`;
            this.element.style.transform = "scale(1.6)";
        });

        window.addEventListener('keydown', (event) => {
            this.handleMove(event.key);
        })
    }

    handleMove(key){
        if(this.element.offsetTop !== 453){
            return
        }
        if (key === 'ArrowRight' && this.cookHorizontalPosition<915){
            this.move('right');          
        }
        if (key === 'ArrowLeft' && this.cookHorizontalPosition>110){
            this.move('left');
        }
    }

    move(direction){
        this.cookHorizontalPosition = direction === 'left' ?
            this.cookHorizontalPosition - 15 :
            this.cookHorizontalPosition + 15
        ; 
        this.element.style.marginLeft = `${this.cookHorizontalPosition}px`;
    }
}

let selectedCook = null;
const gesler = new Cook ('gesler', 393);
const maklowicz = new Cook ('maklowicz', 268);
const jakubiak = new Cook('jakubiak', 143);
const starmach = new Cook('starmach', 18);


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