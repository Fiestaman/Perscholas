let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

document.addEventListener("DOMContentLoaded", function (event) {
  // Random quote of the day generator
  const randomQuote = function () {
    document.querySelector("#quote-of-the-day").innerText = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the document.addEventListener

  // Part 1
  // DOM's personal website title is a bit wordy. Write a JavaScript statement
  // that selects the #main-title ID element. Remember there are a couple of
  // ways to query id. Change the text of the title to something shorter.
  const mainTitle = document.querySelector("#main-title");
  mainTitle.textContent = "Dom Toretto's Familia";
  // Part 2
  // Select the body and change the background-color to a new color of your
  // choice.
  const body = document.querySelector("body");
  body.style.backgroundColor = "lightblue";

  // Part 3
  // Select DOM's Favorite Things list and remove the last list item.
  const fav = document.querySelector("#favorite-things");
  fav.removeChild(fav.lastElementChild);

  // Part 4
  // Select all .special-title class elements and change their font-size to
  // 2rem. Remember you might have to iterate through the list of elements
  const spec = document.querySelectorAll(".special-title");
  for (let a of spec) {
    a.style.fontSize = "2rem";
  }

  // Part 5
  // Turns out DOM never raced in Chicago. Access the Past Races list and
  // remove Chicago.
  const past = document.querySelector("#past-races");
  let chicago;
  for (let a of past.children) {
    if (a.textContent == "Chicago") {
      chicago = a;
    }
  }
  past.removeChild(chicago);

  // Part 6
  // Let's add to DOM's Past Races list. Create a new <li> element, change
  // the new <li> text to the name of a city, and append it to the Past Races
  // list.
  const newEl = document.createElement("a");
  const paris = "Paris";
  newEl.textContent = paris;
  past.appendChild(newEl);

  // Part 7
  // Create a new .blog-post corresponding to the new city added in Part 6.
  // You will have to create a new <div> with class of .blog-post, a new
  // <h2> with text, and a new <p> with some text. Think about what order you
  // want to create the elements, and what order you want to append them in.
  const newBP = document.createElement("div");
  newBP.classList.add("blog-post", "purple"); // only asked to add blog-post
  // but added purple as well so blog post would also have purple background
  const newHead = document.createElement("h1");
  newHead.innerText = paris;
  newBP.appendChild(newHead);
  const newP = document.createElement("p");
  newP.innerText = "I DROVE UNDER THE EIFFEL TOWER!!";
  newBP.appendChild(newP);
  console.log(document.querySelector("main"));
  document.querySelector(".main").appendChild(newBP);

  // Part 8
  // When you reload the page, the script.js file loads a random DOM quote.
  // Let's play with the included function:

  // const randomQuote = function() {
  //   document.querySelector('#quote-of-the-day').innerText =
  //      `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  // };
  // Query select the #quote-title ID element and add a click event handler.
  // That event handler should use the function randomQuote whenever
  // #quote-title is clicked.
  //
  document.querySelector("#quote-title").addEventListener("click", randomQuote);

  // Part 9
  // Select all .blog-post class elements. Iterate through the list of
  // .blog-post class elements and apply two event handlers to each node.
  // The first event handler should be listening for mouseout events while
  // the second handler should be listening for mouseenter events.

  // The mouseout handler should toggle the class .purple
  // The mouseenter handler should toggle the class .red
  const posts = document.querySelectorAll(".blog-post");
  for (let a of posts) {
    a.addEventListener("mouseout", (e) => {
      if (a !== e.target) {
        return;
      }
      e.target.classList.toggle("red");
      e.target.classList.toggle("purple"); // not necessary as red supersedes
      // purple and we always want at least a purple background. would be needed
      // if all blog posts didn't already have purple class
    });
    a.addEventListener("mouseenter", (e) => {
      if (a !== e.target) {
        return;
      }
      e.target.classList.toggle("red");
      e.target.classList.toggle("purple"); // see above
    });
  }
});
