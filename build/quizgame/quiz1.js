let startbtn = document.getElementById("home-btn");
let popup = document.getElementById("popup");
let b = document.getElementById("main");
let n = document.getElementById("no");
let i = "";
let btn2 = document.getElementById("btn2");

function pop() {
  if (popup.style.display === "none") {
    popup.style.display = "block"
  }
  else {
    popup.style.display = "block"
  }
}
function ext() {
  if (popup.style.display === "block") {
    popup.style.display = "none"
  }
}

let qustioncount = 0;


const nextbtn = document.querySelector(".next-btn");