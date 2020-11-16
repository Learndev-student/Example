//This script is a part of 🔥 FIREBASE SERVICES 🔥 and should not be re-used!
const head=document.getElementsByTagName('head')[0];
function load(src){
  var script=document.createElement('script');
  script.src=src;
  head.appendChild(script);
}
load("https://www.gstatic.com/firebasejs/8.0.2/firebase-app.js");
load("https://www.gstatic.com/firebasejs/8.0.2/firebase-analytics.js");
  var firebaseConfig = {
    apiKey: "AIzaSyAF5A4g4CkHHdifI9zFmRSj21EP20nykEE",
    authDomain: "experimentforreal.firebaseapp.com",
    databaseURL: "https://experimentforreal.firebaseio.com",
    projectId: "experimentforreal",
    storageBucket: "experimentforreal.appspot.com",
    messagingSenderId: "790403378695",
    appId: "1:790403378695:web:8da91ab384c6ec5aab84a2",
    measurementId: "G-MTN59F6HBB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  firebase.performance();