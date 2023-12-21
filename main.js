// wall collide challenge
// setupcanvas
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 600;
// global variables

let player = {
  x: 150,
  y: 200,
  w: 70,
  h: 70,
  speed: 5,
  color: "blue",
};
let leftPressed = false;
let rightPressed = false;
let upPressed = false;
let downPressed = false;

// drawFunct
window.addEventListener("load", draw);

function draw() {
  if (rightPressed) {
    player.x += player.speed;
  } else if (leftPressed) {
    player.x += -player.speed;
  } else if (upPressed) {
    player.y += -player.speed;
  } else if (downPressed) {
    player.y += player.speed;
  }

  // Stop blue player at edges
  if (player.x >= 250 && player.x <= 350 && player.y > 50 && player.y <= 350) {
    player.x = 150;
    player.y = 200;
  }

  //   Draw a background
  ctx.fillStyle = "white ";
  ctx.fillRect(0, 0, cnv.width, cnv.height);
  // draw a square
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.w, player.h);
  // draw rectangkle
  ctx.fillStyle = "grey";
  ctx.fillRect(300, 100, 50, 250);
  // loop
  requestAnimationFrame(draw);
}
// event stufff(controlling how square moves)

document.addEventListener("keyup", keywHandler);
document.addEventListener("keydown", keysHandler);
// press mouse  and square moves

function keysHandler(event) {
  if (event.code === "ArrowLeft") {
    leftPressed = true;
  } else if (event.code === "ArrowRight") {
    rightPressed = true;
  } else if (event.code === "ArrowUp") {
    upPressed = true;
  } else if (event.code === "ArrowDown") {
    downPressed = true;
  }
}
function keywHandler(event) {
  if (event.code === "ArrowLeft") {
    leftPressed = false;
  } else if (event.code === "ArrowRight") {
    rightPressed = false;
  } else if (event.code === "ArrowUp") {
    upPressed = false;
  } else if (event.code === "ArrowDown") {
    downPressed = false;
  }
}
