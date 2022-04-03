//hello I am vince

var canvas = document.getElementById('canva');
var ctx = canvas.getContext('2d');

let color = "black";

let x = 4;
let y = 4;

let size = 4

let draw = true;

function draw_right() {
  if (draw == true) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, size, size);
    x++;
  }else{
    x++;
    ctx.fillStyle = "black";
    ctx.fillRect(x, y, size, size);
    ctx.fillStyle = "white";
    setTimeout(ctx.fillRect(x, y, size, size), 1000);
  }
}

function draw_left() {
  if (draw == true) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, size, size);
  x--;
  }
}

function draw_up() {
  if (draw == true) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, size, size);
  y--;
  }
}

function draw_down() {
  if (draw == true) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, size, size);
  y++;
  }
}


function blue() {
  color = "blue";
}

function red() {
  color = "red";
}

function green() {
  color = "green";
}

function brown() {
  color = "brown";
}

function pink() {
  color = "pink";
}

function purple() {
  color = "purple";
}

function white() {
  color = "white";
}

function black() {
  color = "black";
}

function layer() {
  if (draw == true) {
    draw = false; 
  }else{
    draw = true;
  }
}


