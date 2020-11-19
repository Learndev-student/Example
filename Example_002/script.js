const p = document.getElementById("p");
//Content
var x = "OK Here it will be like this";
var y=-1;
function write() {
  y++;
  if (y == 0) {
    p.innerHTML = "";
  };
  p.innerHTML = (`${p.innerHTML}${x[y]}`);
  var z = y+1;
  if (x.length == z) {
    clearInterval(q);
  };
}
//Speed
const speed = 40;
var q = setInterval(write, speed);