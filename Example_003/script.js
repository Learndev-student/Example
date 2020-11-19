//use this code as a loading element for your web as ANDROID
var y, n, i, r, x, j, m;
//onload
window.onload = function() {
  var arc = document.getElementById("arc");
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
  setInterval(load, 12);
}
//loader
function load() {
  if (i%4 == 0) {
    n_value();
    y = r*Math.sin(n*Math.PI/180);
    x = Math.sqrt(Math.pow(r, 2)-Math.pow(y, 2)); m = r-x;
    if (j == false) {
      arc.setAttribute("d", (`M10,50 a${r},${r} 0 1 0 ${m},${y}`));
    } else {
      arc.setAttribute("d", (`M10,50 a${r},${r} 0 0 0 ${m},${y}`));
    }
  } else if (i%4 == 1) {
    n_value();
    y = r*Math.sin(n*Math.PI/180);
    x = Math.sqrt(Math.pow(r, 2)-Math.pow(y, 2));
    m = r+x;
    if (j == false) {
      arc.setAttribute("d", (`M10,50 a${r},${r} 0 1 0 ${m},${y}`));
    } else {
      arc.setAttribute("d", (`M10,50 a${r},${r} 0 0 0 ${m},${y}`));
    }
  } else if (i%4 == 2) {
    n_value();
    y = r*Math.sin(n*Math.PI/180);
    x = Math.sqrt(Math.pow(r, 2)-Math.pow(y, 2));
    m = r+x;
    if (j == true) {
      arc.setAttribute("d", (`M10,50 a${r},${r} 0 1 0 ${m},${y}`));
    } else {
      arc.setAttribute("d", (`M10,50 a${r},${r} 0 0 0 ${m},${y}`));
    }
  } else if (i%4 == 3) {
    n_value();
    y = r*Math.sin(n*Math.PI/180);
    x = Math.sqrt(Math.pow(r, 2)-Math.pow(y, 2));
    m = r-x;
    if (j == true) {
      arc.setAttribute("d", (`M10,50 a${r},${r} 0 1 0 ${m},${y}`));
    } else {
      arc.setAttribute("d", (`M10,50 a${r},${r} 0 0 0 ${m},${y}`));
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