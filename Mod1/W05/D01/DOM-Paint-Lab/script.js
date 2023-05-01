const btn = document.querySelector("button");
let color = "black";
// let root = document.documentElement;
const canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
const input = document.querySelector("input");
resize();

function resize() {
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
}

let pos = { x: 0, y: 0 };
function setPosition(e) {
  pos.x = e.clientX;
  pos.y = e.clientY - canvas.offsetTop;
}

function draw(e) {
  if (e.buttons !== 1) return;

  ctx.beginPath();
  ctx.lineWidth = 20;
  ctx.lineCap = "round";
  ctx.strokeStyle = color;

  ctx.moveTo(pos.x, pos.y);
  setPosition(e);
  ctx.lineTo(pos.x, pos.y);
  ctx.stroke();
}

btn.addEventListener("click", (event) => {
  color = input.value;
  document.querySelector("#color").style.backgroundColor = color;
  input.value = "";
});

input.addEventListener("keydown", (event) => {
  if (event.code == 13) {
    event.preventDefault();
    color = input.value;
    document.querySelector("#color").style.backgroundColor = color;
    input.value = "";
  }
});

window.addEventListener("resize", resize);

canvas.addEventListener("mousemove", draw);

canvas.addEventListener("mousedown", setPosition);

canvas.addEventListener("mouseenter", setPosition);
