import {
  list
} from './list.js';
import {
  getEle
} from './accessories.js';

let [body, menu,m_button, a] = [getEle('body')[0], document.createElement('div'),getEle('#menu_button'),true];
[menu.id]= ['menu'];
m_button.innerHTML="<g stroke='black' fill='none'><path d='M5,5 h10 M5,10 h10 M5,15 h10'></path></g>";
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
let [no,url] = [-1,(document.URL).replace('http://localhost:8158/','')];
list.title.forEach(function(o) {
  no++;
  if(url==(`${list.src[no]}index.html`)){
  menu.innerHTML += (`<p>${o}</p>`);
  }else{
  menu.innerHTML += (`<a href='../${list.src[no]}index.html'>${o}</a>`);
  }
});