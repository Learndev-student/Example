//use this code as a loading element for your web as ANDROID
function Load(src,div){
var y, n, i, r, x, j, m, rotate;
let img=document.createElement('img');
let svg=document.createElementNS("http://www.w3.org/2000/svg", "svg");
let arc=document.createElementNS("http://www.w3.org/2000/svg", "path");
img.class='img';
img.src=src;
img.onload=()=>{
  clearInterval(rotate);
  div.removeChild(svg);
  div.appendChild(img);
};
svg.class='img';
svg.appendChild(arc);
arc.setAttribute('stroke','red');
arc.setAttribute('stroke-width','3px');
arc.setAttribute('stroke-linecap','round');
arc.setAttribute('fill','none');
arc.style=`transform-origin:${div.getBoundingClientRect().width/2}px ${div.getBoundingClientRect().height/2}px;animation: load 1.3s linear 0s normal infinite;`;
arc.stroke='red';
arc.class='load_path';
div.appendChild(svg);
//taking 10,50 as origin
  //y ordinate
  y = 0;
  //angle
  n = 0;
  i = 4;
  //radius
  r = 20;
  //initial x ordinate
  x = 0;
  //final x ordinate
  m = 0;
  j = true;
 rotate= setInterval(load, 12);
//loader
function load() {
  if (i%4 == 0) {
    n_value();
    y = r*Math.sin(n*Math.PI/180);
    x = Math.sqrt(Math.pow(r, 2)-Math.pow(y, 2)); m = r-x;
    if (j == false) {
      arc.setAttribute("d", (`M${div.getBoundingClientRect().width/2-r},${div.getBoundingClientRect().height/2} a${r},${r} 0 1 0 ${m},${y}`));
    } else {
      arc.setAttribute("d", (`M${div.getBoundingClientRect().width/2-r},${div.getBoundingClientRect().height/2} a${r},${r} 0 0 0 ${m},${y}`));
    }
  } else if (i%4 == 1) {
    n_value();
    y = r*Math.sin(n*Math.PI/180);
    x = Math.sqrt(Math.pow(r, 2)-Math.pow(y, 2));
    m = r+x;
    if (j == false) {
      arc.setAttribute("d", (`M${div.getBoundingClientRect().width/2-r},${div.getBoundingClientRect().height/2} a${r},${r} 0 1 0 ${m},${y}`));
    } else {
      arc.setAttribute("d", (`M${div.getBoundingClientRect().width/2-r},${div.getBoundingClientRect().height/2} a${r},${r} 0 0 0 ${m},${y}`));
    }
  } else if (i%4 == 2) {
    n_value();
    y = r*Math.sin(n*Math.PI/180);
    x = Math.sqrt(Math.pow(r, 2)-Math.pow(y, 2));
    m = r+x;
    if (j == true) {
      arc.setAttribute("d", (`M${div.getBoundingClientRect().width/2-r},${div.getBoundingClientRect().height/2} a${r},${r} 0 1 0 ${m},${y}`));
    } else {
      arc.setAttribute("d", (`M${div.getBoundingClientRect().width/2-r},${div.getBoundingClientRect().height/2} a${r},${r} 0 0 0 ${m},${y}`));
    }
  } else if (i%4 == 3) {
    n_value();
    y = r*Math.sin(n*Math.PI/180);
    x = Math.sqrt(Math.pow(r, 2)-Math.pow(y, 2));
    m = r-x;
    if (j == true) {
      arc.setAttribute("d", (`M${div.getBoundingClientRect().width/2-r},${div.getBoundingClientRect().height/2} a${r},${r} 0 1 0 ${m},${y}`));
    } else {
      arc.setAttribute("d", (`M${div.getBoundingClientRect().width/2-r},${div.getBoundingClientRect().height/2} a${r},${r} 0 0 0 ${m},${y}`));
    }
  }
}
//change n's value
function n_value() {
  if (j == true) {
    n++;
  } else {
    n--;
  }
  if (n == 359) {
    i++;
    j = false;
  } else if (n == 0) {
    j = true;
  }
  if (n%90 == 0) {
    i++;
  }
}
}