// Event Listeners

// An event listener is a callback function that is called when an event fires.
// May also be referred to as event handlers

/*
// There are three different approaches for registering event listeners:

// In the HTML (inline):
// <button id="reset-btn" onclick="reset()">

// Assigning to DOM elements' properties:
// resetBtn.onclick = reset;

// Calling addEventListener() on a DOM element
*/

const btn = document.querySelector("button"); // selects button element
const ul = document.querySelector("ul"); // selects unordered list element

// Adding event listener
// Element.addEventListener("event", callbackfx, use-capture)
btn.addEventListener("click", (event) => {
  // "this" refers to the DOM object that triggered Event Listener
  // console.log(this);
  const li = document.createElement("li"); // selects li element
  const input = document.querySelector("input"); // selects input element
  li.textContent = input.value; // set textContent of new li element = input value
  // li.addEventListener('click', () => {
  //     console.log('we clicked on an li')
  // })
  ul.appendChild(li); //appends new element to ul list
  input.value = ""; // resets input value
});

// Event Delegation
// allows us to register a single event listener that is triggered by any of its
// descendants

// adds Event Listener to all ul list items
ul.addEventListener("click", handleClick);

// document.querySelector('body').addEventListener('click', () => {
//     console.log('triggered click event by pressing li')
// })

function handleClick(e) {
  if (e.target.localName === "li") {
    // will only select li items
    e.target.style.color = "blue"; // changes color of ul list item clicked
  }
}

// Removing Event Listeners
// btn.removeEventListener('click', handleClick);
