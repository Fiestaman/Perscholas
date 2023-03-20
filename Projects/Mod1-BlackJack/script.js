// initialize hands
let pH = [];
let dH = [];

// random card picker
function pick() {
  return Math.floor(Math.random() * 13) + 1;
}

// deal hand function
function deal() {
  for (i = 1; i <= 2; i++) {
    pH.push(pick());
    dH.push(pick());
  }
}

function scoreHand() {
  let pS = pH[0] + pH[1];
  let dS = dH[0] + dH[1];
  if (dS > pS) {
    console.log(`Dealer had ${dS} while you ${pS}. You lose.`);
  } else if (pS > dS) {
    console.log(`You had ${pS} while dealer had ${dS}. You win!`);
  } else if (pS == dS) {
    console.log(`You push with the dealer. Bet refunded.`);
  }
}

deal();
console.log(pH, dH);
scoreHand();
