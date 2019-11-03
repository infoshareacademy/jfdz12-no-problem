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
    let cookieFrame = document.getElementById('kitchenid');
    let nextCookie = document.createElement('span');
    cookieFrame.appendChild(nextCookie);
    const randomCookie = listOfCookies[Math.abs(Math.round(Math.random()*listOfCookies.length-1))];
    const cookieEmoti = document.createTextNode(randomCookie);
    nextCookie.appendChild(cookieEmoti);
    if (randomCookie === '🍄'){
            nextCookie.classList.add('cookies-anime-blinking');
            } else {
                nextCookie.classList.add('cookies-anime');
            }
   nextCookie.addEventListener("animationend", function (){
        let cookieXPosition = 414;
        let cookieYPosition = 95;
        let idNum = Math.floor(Math.random()*1000);
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
                    cookieFrame.removeChild(nextCookie);
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
    },5000);
    
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




cookiesFlow();