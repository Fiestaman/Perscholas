// initialize player and dealer objects
let p = {
  nick: "player",
  balance: 100,
  bet: 1,
  maxBal: 100,
  hand: [],
  splitHand: [],
  hS: 0,
  sHS: 0,
  handBet: 1,
  splitHB: 1,
};
let d = {
  nick: "dealer",
  hand: [],
  hS: 0,
};
let highScore = 100;
let inRound = false;

// random card picker
function pickCard() {
  return Math.floor(Math.random() * 13) + 1;
}

// deal hand function
function dealHand() {
  for (i = 1; i <= 2; i++) {
    dealCard(p);
    dealCard(d);
  }
}

// compare hand values to determine winner
function scoreHand() {
  // if (p.hS > 21) {
  //   console.log(`You busted. You lose.`);
  // } else
  if (d.hS > 21) {
    console.log(`Dealer busted. You win.`);
    p.balance += p.handBet;
  } else if (d.hS > p.hS) {
    console.log(`Dealer had ${d.hS} while you had ${p.hS}. You lose.`);
  } else if (p.hS > d.hS) {
    console.log(`You had ${p.hS} while dealer had ${d.hS}. You win!`);
    p.balance += p.handBet * 2;
  } else if (p.hS == d.hS) {
    console.log(`You push with the dealer. Bet refunded.`);
    p.balance += p.handBet;
  }
  inRound = false;
  return;
}

// deal a card function
function dealCard(player) {
  player.hand.push(pickCard());
  player.hS += player.hand[player.hand.length - 1];
  const newCard = document.createElement("div");
  newCard.classList.add("card");
  newCard.setAttribute("id", `${player.name}Card${player.hand.length - 1}`);
  newCard.textContent = player.hand[player.hand.length - 1];
  document.querySelector(`#${player.nick}Cards`).appendChild(newCard);
}

// reset balance function
function reset() {
  p.balance = 100;
  document.querySelector("#balance").innerHTML = 100;
}

// losing parameter
if (p.balance <= 0) {
  console.log(`You're bankrupt. Your highest balance was: ${p.maxBal}`);
  console.log(``);
}

// player hit function
function hit() {
  if (inRound) {
    if (p.hS > 21) {
      console.log(`You've already busted. Click stand to continue.`);
    } else {
      dealCard(p);
    }
  }
}

function stand() {
  if (inRound) {
    dealerDeal();
    scoreHand();
  }
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
  stand();
}

// dealer deal own hand function
function dealerDeal() {
  while (d.hS < 17) {
    dealCard(d);
  }
}

// play round function
function playRound() {
  inRound = true;
  p.hS = 0;
  d.hS = 0;
  p.handBet = p.bet;
  p.hand = [];
  d.hand = [];
  document.querySelector("#playerCards").innerHTML = "";
  document.querySelector("#dealerCards").innerHTML = "";
  dealHand();
  // for (let i = 0; i < p.hand.length; i++) {
  //   p.hS += p.hand[i] > 10 ? 10 : p.hand[i];
  //   document.querySelector(`#pCard${i}`).textContent = p.hand[i];
  // }
  // for (let i = 0; i < d.hand.length; i++) {
  //   d.hS += d.hand[i] > 10 ? 10 : d.hand[i];
  //   document.querySelector(`#dCard${i}`).textContent = d.hand[i];
  // }
  console.log(p.hand, d.hand);
}

document.querySelector("#set").addEventListener("click", function () {
  if (!inRound && document.querySelector("#betAmt").value <= p.balance) {
    p.bet = document.querySelector("#betAmt").value;
    // console.log(p.bet, p.handBet);
  } else if (document.querySelector("#betAmt").value > p.balance) {
    console.log(`You do not have enough funds to bet that amount.`);
  }
});

document.querySelector("#deal").addEventListener("click", function () {
  if (!inRound) {
    p.handBet = p.bet;
    playRound();
  }
});

document.querySelector("#hit").addEventListener("click", hit());

document.querySelector("#stand").addEventListener("click", stand());

document.querySelector("#reset").addEventListener("click", reset());

// playRound();
