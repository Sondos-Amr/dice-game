'use strict';

const btnReset = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const diceImg = document.querySelector('.dice');
const currentScore0 = document.querySelector('#current--0');
const currentScore1 = document.querySelector('#current--1');
const totalScore = document.querySelector('#score--0');
let finalScores = document.querySelector('.score');
let swithBgColor = document.querySelector('.player--active');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
finalScores.textContent = 0;
let currentScore = 0;
let activePlayer = 0;
diceImg.classList.add('hidden');
btnRoll.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceImg.src = `./dices/dice-${dice}.png`;
  diceImg.classList.remove('hidden');

  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    activePlayer = activePlayer === 0 ? 1 : 0;

    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});
