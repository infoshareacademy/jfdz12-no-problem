const listOfCookies = ['🥮', '🎂', '🍥', '🍰', '🧁', '🍪', '🍄', '🥠', '🥞', '🍘', '🍩', '🍄'];

class Cook {
    constructor(cookName, cookPosition) {
        this.cookName = cookName;
        this.cookPosition = cookPosition;
        this.cookHorizontalPosition = 500;
        this.element = document.querySelector(`.${cookName}`);
        this.element.addEventListener('click', () => {
            this.enter();
        });
    }
    enter() {
        if (null !== selectedCook) {
            return;
        }

        selectedCook = this;

        this.element.classList.add(`cooks-animation-${this.cookName}`);
        this.element.classList.add('active');
        this.element.addEventListener('animationend', () => {
            this.element.classList.remove(`cooks-animation-${this.cookName}`);
            this.element.style.marginLeft = '500px';
            this.element.style.marginTop = `${this.cookPosition}px`;
            this.element.style.transform = "scale(1.6)";
        });

        window.addEventListener('keydown', (event) => {
            this.handleMove(event.key);
        })
    }

    handleMove(key) {
        if (this.element.offsetTop !== 453) {
            return
        }
        if (key === 'ArrowRight' && this.cookHorizontalPosition < 915) {
            this.move('right');
        }
        if (key === 'ArrowLeft' && this.cookHorizontalPosition > 110) {
            this.move('left');
        }
    }

    move(direction) {
        this.cookHorizontalPosition = direction === 'left' ?
            this.cookHorizontalPosition - 15 :
            this.cookHorizontalPosition + 15;
        this.element.style.marginLeft = `${this.cookHorizontalPosition}px`;
    }
}

let selectedCook = null;
const gesler = new Cook('gesler', 393);
const maklowicz = new Cook('maklowicz', 268);
const jakubiak = new Cook('jakubiak', 143);
const starmach = new Cook('starmach', 18);

let cookieFrame;
let nextCookie;

function cookieStart() {
    cookieFrame = document.getElementById('kitchenid');
    nextCookie = document.createElement('span');
    cookieFrame.appendChild(nextCookie);
    const randomCookie = listOfCookies[Math.abs(Math.round(Math.random()*listOfCookies.length-1))];
    const cookieEmoti = document.createTextNode(randomCookie);
    nextCookie.appendChild(cookieEmoti);
    if (randomCookie === '🍄'){
            nextCookie.classList.add('cookies-anime-blinking');
            } else {
                nextCookie.classList.add('cookies-anime');
            }
};

const cookiesRandomGenerator = function () {
    cookieStart();
    nextCookie.addEventListener("animationend", function (){
        let cookieXPosition = 414;
        let cookieYPosition = 95;
        let idNum = Math.floor(Math.random()*100000);
        nextCookie.setAttribute("id", idNum);
        let myCookie = document.getElementById(idNum);
        myCookie.style.left = cookieXPosition + "px";
        myCookie.style.top = cookieYPosition + "px";
        let cookieRange = Math.random()*536+414;
        let cookieMoveInterval = setInterval(function goRight() {
            if (cookieXPosition<cookieRange) {
                cookieXPosition++;
                myCookie.style.left = cookieXPosition+"px";}
            else {
                cookieYPosition++;
                myCookie.style.top = cookieYPosition+"px";
                if (cookieYPosition===550) {
                    clearInterval(cookieMoveInterval);
                    cookieFrame.removeChild(myCookie);
                }
            }
        },10);
    })};

const cookiesFlow = function(){
    const lidClase = document.querySelector('.kitchen-lid');
    setInterval(()=>{
        lidClase.classList.add('lid-up');
        cookiesRandomGenerator();        
        setTimeout(()=>{lidClase.classList.remove('lid-up')},2000);
    },1500);
    
};

//instructionModal

const instructionModal = document.getElementById("instructionModalId");
let instructionModalContent = document.getElementById("instructionModal--content");
const instructionModalBtn = document.getElementById("instructionModalBtnId");

window.addEventListener("load",function() {
    instructionModal.style.display = "block";
   
  })

instructionModalBtn.addEventListener("click", function() {
    instructionModal.style.display = "none";
   
});

let instructionFirstPoint = document.getElementById("instructionModal--firstPoint");
let instructionSecondPoint = document.getElementById("instructionModal--secondPoint");
let instructionThirdPoint = document.getElementById("instructionModal--thirdPoint");


let instructionArray = [instructionFirstPoint, instructionSecondPoint, instructionThirdPoint, instructionModalBtn];
let opacityRange=[0.2, 0.4, 0.6, 0.8, 1];


function opacityFunction() {
    let ii = 0;
    let j = 0;
    setInterval (function(){
       if (j<opacityRange.length && ii<instructionArray.length) {
        instructionArray[ii].style.opacity=opacityRange[j];
        j++}
       if (j===opacityRange.length) {
           j=0;
           ii++;
        }
    },150);
};
function moveInstructionContentUp() {
    let actualTop= parseFloat(window.getComputedStyle(instructionModalContent, null).getPropertyValue("margin-top"));
    let contentTopInterval = setInterval(function(){
        actualTop--;
        instructionModalContent.style.marginTop=actualTop+"px";
        if (actualTop<20) {
            clearInterval(contentTopInterval);
            contentHeightPlus();
            opacityFunction();}
    },10)};


function contentHeightPlus() {
        let actualHeight = parseFloat(window.getComputedStyle(instructionModalContent, null).getPropertyValue("height"));
        let contentInterval = setInterval(function(){
            actualHeight++;
            instructionModalContent.style.height=actualHeight+"px";
            if (actualHeight>350) {clearInterval(contentInterval)}
        },10)};
        
setTimeout(moveInstructionContentUp, 2000);




class Counter {
    constructor() {
        this.life = 3;
        this.lvl = 1;
        this.point = 0;
        this.pointsCookiesCounter = document.querySelector(".count-score");
        this.pointsLifeCounter = document.querySelector(".weight-text");
        this.pointsLevelCounter = document.querySelector(".pot-text");
    }
    initialScore() {
        this.pointsLifeCounter.textContent = this.life;
        this.pointsCookiesCounter.textContent = this.point;
        this.pointsLevelCounter.textContent = this.lvl;
    }
    lossLife() {
        this.life = this.life - 1;
        this.pointsLifeCounter.textContent = this.life;
    }
    levelGame() {
        this.lvl = this.lvl + 1;
        this.pointsLevelCounter.textContent = this.lvl;

    }
    pointsCookis() {
        this.point = this.point + 1;
        this.pointsCookiesCounter.textContent = this.point;
    }
}

const counter = new Counter();
counter.initialScore();