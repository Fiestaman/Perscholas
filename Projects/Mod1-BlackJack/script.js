// initialize variables
let pH = [];
let dH = [];
let balance = 100;
let bet = 1;
let maxBal = 100;

// random card picker
function pickCard() {
  return Math.floor(Math.random() * 13) + 1;
}

// deal hand function
function dealHand() {
  for (i = 1; i <= 2; i++) {
    pH.push(pickCard());
    dH.push(pickCard());
  }
}

// compare hand values to determine winner
function scoreHand() {
  let pS = 0;
  for (let i = 0; i < pH.length; i++) {
    pS += pH[i] > 10 ? 10 : pH[i];
  }
  let dS = 0;
  for (let i = 0; i < dH.length; i++) {
    dS += dH[i] > 10 ? 10 : dH[i];
  }
  if (dS > pS) {
    console.log(`Dealer had ${dS} while you had ${pS}. You lose.`);
  } else if (pS > dS) {
    console.log(`You had ${pS} while dealer had ${dS}. You win!`);
  } else if (pS == dS) {
    console.log(`You push with the dealer. Bet refunded.`);
  }
}

// deal a card function
function dealCard(player) {
  player.push(pickCard());
}

// increase bet function
function increase(amt = 1) {
  if (bet + amt > balance) {
    `You do not have enough funds to bet that much.`;
  }
  bet += amt;
}

// decrease bet function
function decrease(amt = 1) {
  if (bet + amt > balance) {
    `You do not have enough funds to bet that much.`;
  }
  bet -= amt;
}

// reset balance function
function reset() {
  balance = 100;
}

// losing parameter
if (balance <= 0) {
  console.log(`You're bankrupt. Your highest balance was: ${maxBal}`);
}

dealHand();
// dealCard(pH);
console.log(pH, dH);
scoreHand();
