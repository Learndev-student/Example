//This script is made to alert the TITLE and DESCRIPTION element of examplar pages
  let des=(`${document.getElementsByTagName('title')[0].innerHTML}: ${document.getElementById('description').content}`);
  alert(des);