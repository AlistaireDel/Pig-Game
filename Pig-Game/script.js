'use strict';

// Selecting elements to manipulate:
const score0El = document.getElementById('score--0');
const currentScore0 = document.getElementById('current--0');
const score1El = document.getElementById('score--1');
const currentScore1 = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

score0El.textContent = 0;
score1El.textContent = 0;

diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  //1. Generate random dice roll.
  const dice = Math.trunc(Math.random() * 6) + 1;

  //2. Display Dice roll.
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  //3. Check if the dice is a 1 if true switch to next player if not carry on rolling.
  if (dice !== 1) {
    // Add dice to current score:
    currentScore += dice;
    currentScore0.textContent = currentScore; // CHANGE LATER
  } else {
    // Switch to next player:
    currentScore0.textContent = 0;

    currentScore += dice;
    currentScore1.textContent = currentScore;
  }
});
