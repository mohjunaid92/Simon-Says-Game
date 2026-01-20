let gameSeq = [];
let userSeq = [];
let colors = ["yellow", "red", "purple", "green"];
let started = false;
let level = 0;

let h3 = document.querySelector("h3");
let div5 = document.querySelector(".div5");
let body = document.querySelector("body");


document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game started");
        started = true;
        levelUp();

    }


});

function levelUp() {
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;
    let index = Math.floor(Math.random() * 3);
    let colClass = colors[index];
    console.log(colClass);
    let btn1 = document.querySelector("." + colClass);
    gameSeq.push(colClass);

    btnFlash(btn1);

}
function btnFlash(btn) {

    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");


    }, 400);
}
function userFlash(btn) {

    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");


    }, 200);
}

let btns = document.querySelectorAll(".btn");
for (bt of btns) {
    bt.addEventListener("click", function () {
        console.log("button clicked");
        console.log(this);
        userFlash(this);
      
        userSeq.push(this.classList[0]);
        checkAns(userSeq.length-1);
    });
}

function checkAns(indx){
   
    console.log(level)
    if( userSeq[indx] === gameSeq[indx]){
        if( userSeq.length == gameSeq.length){
           setTimeout(levelUp, 1000);
        }
    } else {
        bodyFlash()
        h3.innerText = `Game over! Press any key to start`;
        let newh3 = document.querySelector("h3");
        newh3.innerText = `Your score was ${level}`;
        body.append(newh3);


         }

} 
function bodyFlash() {
  

    body.classList.add("redd");
    setTimeout(function () {
        body.classList.remove("redd");


    }, 200);
}
console.log(gameSeq)

   























