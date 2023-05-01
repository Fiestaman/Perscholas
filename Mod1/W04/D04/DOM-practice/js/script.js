//The DOM

// Selecting a single element by id
let titleEl = document.getElementById("title");
titleEl.style.color = "red";

console.dir(titleEl);

//Selecting an element with querySelector(), this method follows CSS selector rules
// selecting with class
let h1El = document.querySelector(".main-title");
// selecting with id
// let h1El = document.querySelector('#title');
console.log(h1El);

const pEl = document.querySelector(".cool");

console.log(pEl);

const ulEl = document.querySelector(".list");

// textContent will just add TEXT inside a element
// ulEl.textContent = 'Hey im in the list!';
// ulEl.style.color = 'green';

// This will add actual HTML and parse the given string as HTML
const name1 = "josh";
// this is concatinating the previous <li> in the HTML to our new <li>'s
ulEl.innerHTML += `<li> ${name1} </li> <li> item </li> <li> item </li>`;

/*
What naming convention is used for CSS properties in the DOM?
- camelCase

What naming convention is used for CSS properties in CSS?
- kebob-case

Why is it different?
- We want to follow convention for the specific langauge
*/

// Changing the style of an element

titleEl.style.textAlign = "center";
pEl.style.color = "blue";

// Attributes of an element

// getting an attribute's value from an element
const aEl = document.querySelector(".google");
console.log(aEl.getAttribute("href"));
// set an element's attribute value
aEl.setAttribute("data", "the dom is cool");
console.log(aEl.getAttribute("data"));

// checking if an element has a attirbute => returns false
console.log(aEl.hasAttribute("data")); // => false

const aEl2 = document.querySelector(".yahoo");
aEl2.setAttribute("href", "https://yahoo.com");

// Class list property methods

// add
aEl2.classList.add("anchor", "link");

// remove
aEl2.classList.remove("anchor");

// toggle
aEl2.classList.toggle("tree"); // this adds
aEl2.classList.toggle("tree"); // this removes

//contains
console.log(aEl2.classList.contains("anchor")); // => false

// replace
aEl2.classList.replace("link", "url"); // class getting replaced is 1st arg and 2nd arg will be the new value

//=================================

// Select multiple elements with querySelectorAll()

const commentEls = document.querySelectorAll(".comment");
console.log(commentEls);

// DOM Selection Summary
/*
getElementById: Use when you need to select a single element that has an idassigned to it.

querySelector: Use when you need to select a single element that does not have an id.

querySelectorAll: Use when you need to select multiple elements.
*/

//Iterating over a collection of elements

const colors = ["red", "blue", "green"];
const people = [{ name: "Jeffrey" }, { name: "Nikita" }, { name: "Yana" }];

for (let commentEl of commentEls) {
  commentEl.style.fontSize = "30px";
}

commentEls.forEach((comment, i) => {
  comment.style.color = colors[i];
  comment.textContent = people[i].name;
});

for (let i = 0; i < commentEls.length; i++) {
  console.log(commentEls[i]);
}
