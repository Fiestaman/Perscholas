// initialize player and dealer objects
let p = {
  balance: 100,
  bet: 1,
  maxBal: 100,
  hand: [],
  splitHand: [],
  pS: 0,
  sHS: 0,
  handBet: 1,
  splitHB: 1,
};
let d = {
  hand: [],
  dS: 0,
};
let highScore = 100;

// random card picker
function pickCard() {
  return Math.floor(Math.random() * 13) + 1;
}

// deal hand function
function dealHand() {
  for (i = 1; i <= 2; i++) {
    p.hand.push(pickCard());
    d.hand.push(pickCard());
  }
}

// compare hand values to determine winner
function scoreHand() {
  if (d.dS > 21) {
    console.log(`Dealer busted. You win.`);
    p.balance += p.handBet;
  } else if (d.dS > p.pS) {
    console.log(`Dealer had ${d.dS} while you had ${p.pS}. You lose.`);
  } else if (p.pS > d.dS) {
    console.log(`You had ${p.pS} while dealer had ${d.dS}. You win!`);
    p.balance += p.handBet * 2;
  } else if (p.pS == d.dS) {
    console.log(`You push with the dealer. Bet refunded.`);
    p.balance += p.handBet;
  }
}

// deal a card function
function dealCard(player) {
  player.hand.push(pickCard());
}

// // increase bet function
// function increase(amt = 1) {
//   if (p.bet + amt > p.balance) {
//     `You do not have enough funds to bet that much.`;
//   }
//   p.bet += amt;
// }

// // decrease bet function
// function decrease(amt = 1) {
//   if (p.bet + amt > p.balance) {
//     `You do not have enough funds to bet that much.`;
//   }
//   p.bet -= amt;
// }

// reset balance function
function reset() {
  p.balance = 100;
}

// losing parameter
if (p.balance <= 0) {
  console.log(`You're bankrupt. Your highest balance was: ${p.maxBal}`);
  console.log(``);
}

// player hit function
function hit() {
  dealCard(p);
}

// split function
function split() {
  p.splitHand = [];
  p.sHS = 0;
  p.splitHand.push(p.hand.pop());
  p.splitHB = p.handBet;
}

// double down function
function double() {
  p.bet *= 2;
  dealCard(p);
}

// dealer deal own hand function
function dealerDeal() {
  while (d.dS < 17) {
    dealCard(d);
    d.dS += d.hand[d.hand.length - 1];
  }
}

// play round function
function playRound() {
  p.pS = 0;
  d.dS = 0;
  p.handBet = p.bet;
  dealHand();
  for (let i = 0; i < p.hand.length; i++) {
    p.pS += p.hand[i] > 10 ? 10 : p.hand[i];
  }
  for (let i = 0; i < d.hand.length; i++) {
    d.dS += d.hand[i] > 10 ? 10 : d.hand[i];
  }
  // if clicked element is hit
  // hit()
  // else if split

  // else if double down
  double();
  // else clicked element is stand

  scoreHand();
  console.log(p.hand, d.hand);
}

document.querySelector("#set").addEventListener("click", function () {
  p.bet = document.querySelector("#betAmt").value;
  console.log(p.bet, p.handBet);
});

// playRound();
