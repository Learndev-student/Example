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
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  var perf = firebase.performance();