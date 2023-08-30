let block1 = document.getElementById("block-1");
let block2 = document.getElementById("block-2");
block1.onclick = color;
block2.onclick = color;

block1.addEventListener("click", border);
block2.addEventListener("dblclick", border);
function color() {
  this.classList.toggle("active");
}

function border() {
  this.style.borderRadius = "200px";
}
// ul.classList.add("bccg");
// ul.classList.remove("bccg");
// ul.classList.contains("bccg");
ul.classList.toggle("dd");
