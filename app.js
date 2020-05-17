/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/ let score = [0,0], roundScore, activePlayer, dice, isNotActivePlayer;
roundScore =0;
activePlayer = 0;



let diceDisplay = document.querySelector(".dice")
diceDisplay.style.display ='none';

//Press roll btn to display the dice
document.querySelector('.btn-roll').addEventListener('click', function(e){
 diceDisplay.style.display = 'block';
 randomNumber = Math.floor(Math.random ()*6) +1;

 //Set the random number to the dice img
diceDisplay.setAttribute('src', 'dice-' + randomNumber + '.png');
// diceDisplay.src ='dice-' + randomNumber + '.png';
if(randomNumber !==1){
    roundScore += randomNumber;
    let S =  document.querySelector('#current-' + activePlayer);
    S.textContent = roundScore;


    
}else{
nextPlayer();

}

})

document.querySelector('.btn-hold').addEventListener('click', function(e){
    score[activePlayer] += roundScore;
    document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];
    
    //Set the winner 
    if(score[activePlayer] >= 5){
       
        document.querySelector('#name-'+ activePlayer).textContent = 'YOU WIN!'
        diceDisplay.style.display ='none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active')
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner')
        document.querySelector('.btn-roll').style.display ='none';
        document.querySelector('.btn-hold').style.display ='none';
        

         
        activePlayer===0? isNotActivePlayer = 1 : isNotActivePlayer = 0;

        document.querySelector('.player-' + isNotActivePlayer + '-panel').style.backgroundColor = 'black';
        document.querySelector('#score-' + isNotActivePlayer).style.color ='white';
      
      
    }else{
        nextPlayer();
    }
})

function nextPlayer(){
    activePlayer=== 0? activePlayer= 1 : activePlayer= 0
    roundScore =0;
    let S =  document.querySelector('#current-' + activePlayer);
    S.textContent = roundScore;
    document.querySelector('.player-0-panel').classList.toggle('active')
    document.querySelector('.player-1-panel').classList.toggle('active');
  
  
setTimeout(function(){
diceDisplay.style.display ='none';
}, 1000)
  
}

let newGame = document.querySelector('.btn-new')

if(newGame.addEventListener('click', function(){
location.reload();
}));
