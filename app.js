// duplicated code can be refactored to make the code cleaner

const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}

// const p1Button = document.querySelector('#p1Button');
// const p2Button = document.querySelector('#p2Button');
// const p1Display = document.querySelector('#p1Display');
// const p2Display = document.querySelector('#p2Display');
const numGames = document.querySelector('#games');

// let p1Score = 0;
// let p2Score = 0;
let winnerScore = 0;
let isGameOver = false;

numGames.addEventListener('change', (event) => {
    // you have to convert the value into number, otherwise it is string.
    winnerScore = parseInt(event.target.value);
    console.log(winnerScore);
    // you want to execute the function directly here cos this is a callback function to execute resetFunction() directly.
    resetFunction();
})

// You can further update the code below to take several opponents and loop through all the opponent
// Update HTML to choose how many players and add corresponding player buttons
// Ping Pang rule to win is to win by two points etc
function updateScores(player, opponent) {
    if (!isGameOver && winnerScore !== 0) {
        player.score += 1;
        if (player.score === winnerScore){
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.innerText = player.score;
    }
}

p1.button.addEventListener('click', function(){
    updateScores(p1, p2);
})

// p1Button.addEventListener('click', function (){
//     if (!isGameOver && winnerScore !== 0) {
//         p1Score += 1;
//         if (p1Score === winnerScore){
//             isGameOver = true;
//             // the code below changes the style inline which is not recommended. You can use classList here
//             // p1Display.style.color = 'green';
//             // p2Display.style.color = 'red'
//             // the method below is also inline code to change color. we can try using css to update this color
//             // p1Display.classList.add('green');
//             // p2Display.classList.add('red');
//             p1Display.classList.add('has-text-success');
//             p2Display.classList.add('has-text-danger');
//             // Bulma style has button disabled option
//             p1Button.disabled = true;
//             p2Button.disabled = true;
//         }
//         p1Display.innerText = p1Score;
//     }
// })

p2.button.addEventListener('click', function(){
    updateScores(p2, p1);
})
// p2Button.addEventListener('click', function (){
//     if (!isGameOver && winnerScore !== 0) {
//         p2Score += 1;
//         if (p2Score === winnerScore){
//             isGameOver = true;
//             p2Display.classList.add('has-text-success');
//             p1Display.classList.add('has-text-danger');
//             p1Button.disabled = true;
//             p2Button.disabled = true;
//         }
//         p2Display.innerText = p2Score;
//     }
// })


const resetButton = document.querySelector('#reset');
// the reason why you are not executing resetFunction() below is cos you are passing it to the Event Listener and it will execute when the event happens.
resetButton.addEventListener('click', resetFunction);

function resetFunction() {
    isGameOver = false;
    for (let p of [p1, p2]){
        p.score = 0;
        p.display.innerText = p.score;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
}

//  function resetFunction () {
//     isGameOver = false;
//     p1.score = 0;
//     p2.score = 0
//     p1.display.innerText = p1.score;
//     p2.display.innerText = p2.score;
//     // p1Display.style.color = 'black';
//     // p2Display.style.color = 'black';
//     // If you use classList to update the color above you have to use classList to remove the classes mentioned in css as well. Otherwise inline style change will overwrite the css style change
//     p1.display.classList.remove('has-text-success', 'has-text-danger');
//     p2.display.classList.remove('has-text-success', 'has-text-danger'); 
//     p1.button.disabled = false;
//     p2.button.disabled = false;
//  }
