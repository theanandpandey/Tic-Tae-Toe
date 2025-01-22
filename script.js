let turn = "X";
let gameOver = false;
moveCount = 0;


//function to change turn
const changeTurn = () => {  
    return turn === "X"?"0":"X"
}


//function to check winner
const checkWin = ()=> {
    let boxtext = document.getElementsByClassName("boxText");
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    wins.forEach(e => {
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
            document.querySelector(".info").innerText = boxtext[e[0]].innerText + " WON"
            gameOver = true;
        }
    })
}


//function to check draw
const checkDraw = () =>{
    if(moveCount === 9 && !gameOver){
        document.querySelector('.info').innerText = "its a draw";
        gameOver = true;
    }
}


//game logic 
let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach(element =>{
    let boxText = element.querySelector(".boxText")
    element.addEventListener('click',()=>{
        if(boxText.innerText === "" && !gameOver){
            boxText.innerText = turn;
            moveCount++
            checkWin();
            checkDraw();
            if(!gameOver){
                turn = changeTurn();    
                document.querySelector(".info").innerText = "Turn of " + turn;
            }
        }
    })
})


//function to reset button 
let reset = document.getElementById("reset");
reset.addEventListener('click',()=>{
    let boxTexts = document.querySelectorAll(".boxText");
    Array.from(boxTexts).forEach(element =>{
        element.innerText = "";
    });
    turn = "X";
    gameOver = false;
    moveCount = 0;
    document.querySelector(".info").innerText = "Turn of " + turn;
})