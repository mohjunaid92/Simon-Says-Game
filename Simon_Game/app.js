let gameSeq = [];
let userSeq = [];


let colors = ["yellow", "red", "purple", "green"];
let h3 = document.querySelector("h3");
let started = false;
let Level = 0;
let val = 0;

document.addEventListener("keypress", function () {
    console.log("click");
    if (started == false) {
        started = true;
        levelUp();


    }
});
// Function that will start the game and generate the random color;

function levelUp() {
    userSeq = [];
    Level++;
    h3.innerText = `Level ${Level}`
    let randInd = Math.floor(Math.random() * 4);
    console.log(randInd);
    let rColor = colors[randInd];
    let btn = document.querySelector(`.${rColor}`);
    gameSeq.push(rColor);
    console.log(gameSeq)

    gameFlash(btn);




}
// Game will flash a button 
function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 200);
}

//When user will click n button then this function let blink
function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 200);
}

// user will be clicking on buttons to play game
let btns = document.querySelectorAll(".btn");
for (btnn of btns) {
    btnn.addEventListener("click", function () {
        userSeq.push(this.id);
        console.log(userSeq);
        userFlash(this);
        compare(userSeq.length - 1);

    });
}

// compare game Sequence and user sequence
function compare(index) {
    if (userSeq[index] === gameSeq[index]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }

    } else {
        h3.innerHTML = `Game Over! Your Score was <b style = "background-color:"red"> ${Level}</b> <br> Press any key to start`;
        let body = document.querySelector("body");
        bodyFlash(body);
        // let newh3 = document.createElement("h3");
        // newh3.innerText = `Your score is ${Level}`
        // body.append(newh3);
        highScore(Level);
        over();

    }


}
//when user will click on wron button
function bodyFlash(btn) {
    btn.classList.add("redd");
    setTimeout(function () {
        btn.classList.remove("redd");
    }, 200);
}

//restart your game
function over() {
   started = false;
   gameSeq = [];
   userSeq = [];
   
   Level = 0;

}

function highScore(level){
    
    if( val < level){{
        val = level;
    }

    }
    let score = document.querySelector("#score");
    score.innerText = `Highest score was ${val}`;
}



























