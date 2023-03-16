const menuLinks = [
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

// Task 1
const mainEl = document.querySelector("main");

// Task 1.2
mainEl.style.backgroundColor = "var(--main-bg)";

//Task 1.3

mainEl.innerHTML = "<h1>SEI Rocks!</h1>";

mainEl.classList.add("flex-ctr");

// Task 2.0

const topMenuEl = document.getElementById("top-menu");

topMenuEl.style.height = "100%";

topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

topMenuEl.classList.add("flex-around");

// Task 3.1

for (let link of menuLinks) {
  const aEl = document.createElement("a");
  aEl.setAttribute("href", link.href);
  aEl.textContent = link.text;
  topMenuEl.appendChild(aEl);
}
// Task 4.0
const subMenuEl = document.getElementById("sub-menu");

// Task 4.1

subMenuEl.style.height = "100%";

// Task 4.2

subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";

// Task 4.3

subMenuEl.classList.add("flex-around");

// Task 4.4
subMenuEl.style.position = "absolute";

// Task 4.5
subMenuEl.style.top = 0;

// Task 5.1
const topMenuLinks = document.querySelectorAll("#top-menu > a");

let showingSubMenu = false;

// Task 5.2

topMenuEl.addEventListener("click", (evt) => {
  evt.preventDefault();

  if (evt.target.nodeName !== "A") {
    return;
  }

  console.log(evt.target.textContent);

  //Task 5.3 // checks for a double click
  if (evt.target.classList.contains("active")) {
    evt.target.classList.remove("active");
    showingSubMenu = false;
    subMenuEl.style.top = 0;
    return;
  }

  // Task 5.4
  for (let link of topMenuLinks) {
    link.classList.remove("active");
  }

  // Task 5.5

  evt.target.classList.add("active");

  // Task 5.6
  const activeLink = menuLinks.find(
    (link) => link.text === evt.target.textContent
  );

  showingSubMenu = activeLink.hasOwnProperty("subLinks");
  // if (activeLink.hasOwnProperty("subLinks")) {
  //   showingSubMenu = true
  // } else {
  //   showingSubMenu = false
  // }

  // Task 5.7

  if (showingSubMenu) {
    buildSubMenu(activeLink.subLinks);
    subMenuEl.style.top = "100%";
  } else {
    subMenuEl.style.top = 0;
  }

  // Task 5.8
  function buildSubMenu(subLinks) {
    subMenuEl.innerHTML = "";

    for (let link of subLinks) {
      const aEl = document.createElement("a");
      aEl.setAttribute("href", link.href);
      aEl.textContent = link.text;
      subMenuEl.appendChild(aEl);
    }
  }
});

// Task 6.0
subMenuEl.addEventListener("click", (evt) => {
  evt.preventDefault();
  const target = evt.target;

  if (target.nodeName !== "A") {
    return;
  }

  console.log(target);

  // Task 6.1
  showingSubMenu = false;

  subMenuEl.style.top = 0;

  // Task 6.2

  for (let link of topMenuLinks) {
    link.classList.remove("active");
  }

  //Task 6.3
  mainEl.innerHTML = `<h1>${evt.target.textContent.toUpperCase()}</h1>`;
});
