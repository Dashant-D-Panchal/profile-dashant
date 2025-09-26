function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}  

function drop(event) {
  let data = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(data))
}

window.onload = 
  function shuffle() {
  let wrap = document.getElementById("mbox1");
  let items = Array.from(wrap.children);
  let frag = document.createDocumentFragment();

  while(items.length){
    let randomIndex = Math.floor(Math.random() * items.length);
    frag.appendChild(items.splice(randomIndex, 1)[0]);
  }

  wrap.appendChild(frag)
};

