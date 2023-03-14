const paintbrush = document.querySelector("#paintbrush");
const input = document.querySelector("input");
const canvas = document.querySelector("#canvas");

for (let i = 0; i < 8000; i++) {
  const box = document.createElement("div");
  box.className = "box";
  canvas.appendChild(box);
  box.addEventListener("mouseover", (e) => {
    // console.log('we hovered over a box')
    // console.log(e.target)
    e.target.style.backgroundColor = paintbrush.style.backgroundColor;
  });
}

input.addEventListener("keydown", (e) => {
  // console.log('hey we are typing', e.key)
  if (e.key === "Enter") {
    // console.log('we are pressing Enter')
    paintbrush.style.backgroundColor = input.value;
    input.value = "";
  }
});
