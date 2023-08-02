let userSeq = [];
let gameSeq = [];
let btnColors = ["yellow", "purple", "red", "green"];
let h2 = document.querySelector("h2");
let btn = document.querySelector("button");

let level = 0;
let started = false;

document.addEventListener("click", function(){
    if(started == false){
        console.log("Game is started");
        started = true;
        levelup();
    }
})

function levelup() {
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;

    let randIdx = Math.floor(Math.random()*3);
    let randColor = btnColors[randIdx];
    let ranBtn = document.querySelector(`.${randColor}`)
    
    gameSeq.push(randColor);
    console.log(gameSeq)
    gameFlash(ranBtn);
}

function gameFlash(randBtn) {
    randBtn.classList.add("flash")
    setTimeout(function(){
        randBtn.classList.remove("flash")
    },250);
}
function userFlash(randBtn) {
    randBtn.classList.add("userFlash")
    setTimeout(function(){
        randBtn.classList.remove("userFlash")
    },250);
}

function checkAns(idx){
    console.log("Curr level: ", level);
    

    if(userSeq[idx] === gameSeq[idx]){
       if(userSeq.length == gameSeq.length){
        setTimeout(levelup, 1000)
       }
    } else {
        h2.innerHTML = `Game over! Your score was <b>${level}</b> <br> Please press any key to restart the game`;
        document.querySelector("body").style.backgroundColor = "red"
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white"
        }, 150)
        reset()
    }
}

function btnPress(){
    
    let btn = this;
    userFlash(btn)

    let userCol = btn.getAttribute("id");
    userSeq.push(userCol)

    checkAns(userSeq.length-1);
}
let allBtns = document.querySelectorAll('.btn');
for(btn of allBtns) {
    btn.addEventListener("click", btnPress)
}

function reset() {
    started = false;
    level=0;
    gameSeq=[]
    userSeq=[]
}