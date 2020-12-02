import {
  list
} from './list.js';
import {
  getEle
} from './accessories.js';

let [body, menu,m_button, a] = [getEle('body')[0], document.createElement('div'),getEle('#menu_button'),true];
menu.id = 'menu';
function menu_() {
  if(a){
    body.appendChild(menu);
    a=!a;
  }else{
    body.removeChild(menu);
    a=!a;
  }
}
m_button.onclick =()=>menu_();
menu.onmouseout=()=>menu_();
let [str,no] = ["",-1];
list.title.forEach(function(o) {
  str += (`<a href='${list.src[++no]}index.html'>${o}</a>`);
});
menu.innerHTML = str;