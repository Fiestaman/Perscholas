// Task 5.0
// Update the menuLinksarray in script.js to this:
var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

let mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = "<h1>SEI Rocks!</h1>";
mainEl.classList.add("flex-ctr");

let topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

// use only if wiping listeners is okay
// for (let link of menuLinks) {
//   const a = `<a href="${link.href}">${link.text}</a>`;
//   topMenuEl.innerHTML += a;
// }

for (let link of menuLinks) {
  let newEl = document.createElement("a");
  newEl.setAttribute("href", link.href);
  newEl.innerText = link.text;
  // topMenuEl.innerHTML += newEl.outerHTML // old method
  topMenuEl.append(newEl);
}

// Task 4.0
// Select and cache the <nav id="sub-menu">element in a variable named subMenuEl.
let subMenuEl = document.getElementById("sub-menu");

// Task 4.1
// Set the height subMenuEl element to be 100%.
subMenuEl.style.height = "100%";

// Task 4.2
// Set the background color of subMenuEl to the value stored in the --sub-menu-bgCSS custom property.
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";

// Task 4.3
// Add the class of flex-around to the subMenuElelement.
subMenuEl.classList.add("flex-around");

// Task 4.4
// Set the CSS position property of subMenuElto the value of absolute.
subMenuEl.style.position = "absolute";

// Task 4.5
// Set the CSS top property of subMenuElto the value of 0.
subMenuEl.style.top = 0;

// Task 5.1
// Select and cache the all of the <a>elements inside of topMenuElin a variable
// named topMenuLinks.
const topMenuLinks = topMenuEl.querySelectorAll("a");

// Declare a global showingSubMenu variable and initialize it to false;
let showingSubMenu = false;

// Task 5.2
// Attach a delegated 'click' event listener to topMenuEl.

// The first line of code of the event listener function should call the event
// object's preventDefault()method.

// The second line of code function should immediately return if the element
// clicked was not an <a>element.

// console.log the content of the <a> to verify the handler is working.

// Task 5.3
// Next in the event listener, if the clicked <a> link has a class of active:

// Remove the activeclass from the clicked <a> element.
// Set the showingSubMenu to false.
// Set the CSS topproperty of subMenuEl to 0.
// return to exit the handler.

// Task 5.4
// Next, the event listener should remove a class name of active from each
// <a> element in topMenuLinks - whether the active class exists or not.

// Hint: Removing a non-existent class from an element does not cause an error,
// so just remove it!

// Task 5.5
// Next, the event listener should add a class name of active to the <a>element
// that was clicked.

// Task 5.6
// Set showingSubMenu to true if the clicked <a>element's "link" object within
// menuLinks has a subLinks property (all do, except for the "link" object for
// ABOUT), otherwise, set it to false.

// Hint: Saving the "link" object in a variable will come in handy for passing
// its subLinks array in Task 5.7

// Task 5.7
// Next in the event listener...

// If showingSubMenuis true:
// Call a buildSubMenufunction passing to it the subLinksarray for the clicked <a>element.
// Set the CSS topproperty of subMenuElto 100%.

// Otherwise (showingSubMenuis false):
// Set the CSS topproperty of subMenuElto 0.

// 5.2
topMenuEl.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.nodeName !== "A") return;
  console.log(e.target.textContent);

  // 5.3
  if (e.target.classList.contains("active")) {
    e.target.classList.remove("active");
    showingSubMenu = false;
    subMenuEl.style.top = 0;
    return;
  }

  // 5.4
  for (let a of topMenuLinks) {
    a.classList.remove("active");
  }

  // 5.5
  e.target.classList.add("active");

  // 5.6
  let link = menuLinks.find((i) => i.text == e.target.textContent);
  if (link.hasOwnProperty("subLinks")) {
    showingSubMenu = true;
  } else {
    showingSubMenu = false;
  }

  // 5.7
  if (showingSubMenu) {
    buildSubMenu(link.subLinks);
    subMenuEl.style.top = "100%";
  } else {
    subMenuEl.style.top = 0;
  }
});

// Task 5.8
// Code the buildSubMenufunction so that it:
// 1. Clears the contents of subMenuEl.
// 2. Iterates over the subLinksarray passed as an argument; and for each
// "link" object:
//    Create an <a>element.
//    On the new element, add an hrefattribute with its value set to the href
//    property of the "link" object.
//    Set the new element's content to the value of the textproperty of the
//    "link" object.
//    Append the new element to the subMenuElelement.

function buildSubMenu(arr) {
  subMenuEl.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    let newEl = document.createElement("a");
    newEl.setAttribute("href", arr[i].href);
    newEl.innerText = arr[i].text;
    subMenuEl.append(newEl);
  }
}

// Task 6.0
// Attach a delegated 'click' event listener to subMenuEl.

// The first line of code of the event listener function should call the event
// object's preventDefault()method.

// The second line of code function should immediately return if the element
// clicked was not an <a>element.

// console.log the content of the <a> to verify the handler is working.

// Task 6.1
// Next, the event listener should:

// Set showingSubMenuto false.
// Set the CSS topproperty of subMenuElto 0.

// Task 6.2
// Remove the class name of active from each <a> element in topMenuLinks -
// whether the active class exists or not.

// Task 6.3
// Update the contents of mainEl to the contents of the <a> element, within an
// <h1>, clicked within subMenuEl.

// 6.0
subMenuEl.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.nodeName !== "A") return;
  console.log(e.target.textContent);

  // 6.1
  showingSubMenu = false;
  subMenuEl.style.top = 0;

  // 6.2
  for (let a of topMenuLinks) {
    a.classList.remove("active");
  }

  // 6.3
  mainEl.innerHTML = `<h1>${e.target.textContent}</h1>`;
});
