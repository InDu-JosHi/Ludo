const button = document.querySelector(".btn");
button.addEventListener("click",()=>{

const dice1= Math.floor(Math.random()*6)+1;
const img1 =`img/dice${dice1}.png`;
const player1 = document.querySelector("#img1")
player1.setAttribute("src",img1);

const dice2= Math.floor(Math.random()*6)+1;
const img2 =`img/dice${dice2}.png`;
const player2 = document.querySelector("#img2")
player2.setAttribute("src",img2);

const change = document.querySelector("h1");
if (dice1 > dice2){
    change.textContent =("PLAYER:1 WON :)");
}
else if(dice1 < dice2){
    change.textContent =("PLAYER:2 WON :)");
}
else{
    change.textContent =("DRAW");
}
})
