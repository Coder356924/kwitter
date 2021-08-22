
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyBfyLBHIwNVuRocEiK-_QGPvbHf0Bg4QNE",
    authDomain: "class-fd9f0.firebaseapp.com",
    databaseURL: "https://class-fd9f0-default-rtdb.firebaseio.com",
    projectId: "class-fd9f0",
    storageBucket: "class-fd9f0.appspot.com",
    messagingSenderId: "653743332113",
    appId: "1:653743332113:web:bc4b095c912a53c4a8cab0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function addUser(){
      user_name=document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({
    purpose:"adding user"
});
  }