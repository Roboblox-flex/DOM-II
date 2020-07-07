
// Your code goes here

const navs = document.querySelector("a");
navs.addEventListener("click", (event) => {
  event.preventDefault();
});
const h2hide = document.querySelector("h2");
function hide(e) {
  e.target.style.visibility = "hidden";
}
h2hide.addEventListener("click", hide, false);

const container = document.querySelector(".container");
container.addEventListener("mouseenter", function (event) {
  console.log("Boom!")
});
// keydown container
const log = document.querySelector(".container");
document.addEventListener("keydown", logKey);

function logKey(e) {
  log.textContent = "hello";
}

// double click text-content
let text = document.querySelector(".intro");

document.ondblclick = dblClick;

function dblClick(e) {
  text.textContent = "Hello";
}
// doule click green
let images = document.querySelector(".img-content");
function logDoubleClick(event) {
  console.log("welcome");
  event.target.style.backgroundColor = "green";
}
// button click
const btn = document.querySelector(".btn");

btn.addEventListener("click", (event) => {
  alert("hello");
  event.stopPropagation();
});

//hide links
function hide(e) {
    e.target.style.visibility = "hidden";
  }


const load = () => {
  alert("Welcome");
};
window.onload = load;

const MouseOver = document.querySelector(" p");
MouseOver.addEventListener("mouseenter", function (event) {
  event.target.style.color = "red";
});
function logKey(e) {
    log.textContent = "hello";
  }
  

const intro = document.querySelector(".intro");
intro.addEventListener("click", (event) => {
  console.log(event.target);
 });

const h2 = document.querySelector(".intro h2");
h2.addEventListener("click", (event) => {
  console.log("Stop Bubbling");
  event.stopPropagation();
});
