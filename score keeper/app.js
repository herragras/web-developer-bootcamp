const score1 = document.querySelector("#player1-score");
const score2 = document.querySelector("#player2-score");
const player1Plus = document.querySelector("#player1-plus");
const player2Plus = document.querySelector("#player2-plus");
const reset = document.querySelector("#reset");
const winning = document.querySelector("#winning")


    
    let scoreP1 =0;
    let scoreP2 =0;
    let winningValue = 3;
    let isGameOver = true;

winning.addEventListener("change", function(){
     winningValue = parseInt(this.value);
    resetFunc()
})
  
player1Plus.addEventListener("click", function(){
   
    if(score1.textContent!=winningValue && isGameOver){
        scoreP1=scoreP1 + 1;
        score1.textContent = scoreP1;
    }  if(score1.textContent==winningValue){
        score1.classList.add("winner")
        score2.classList.add("loser")
        isGameOver = false;
    } 
})

player2Plus.addEventListener("click", function(){
    
    if(score2.textContent!=winningValue &&isGameOver){
        scoreP2=scoreP2 + 1;
        score2.textContent = scoreP2;
    }  if(score2.textContent==winningValue){
        score2.classList.add("winner")
        score1.classList.add("loser")
        isGameOver =false;
    } 
})

let resetFunc = function(){
    return (score1.textContent=0,
        scoreP1=0,
        scoreP2=0,
        score2.textContent=0,
        isGameOver = true,
        score1.classList.remove("winner", "loser"),
        score2.classList.remove("winner", "loser"));
}

reset.addEventListener("click", resetFunc)