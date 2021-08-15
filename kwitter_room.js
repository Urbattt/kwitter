var firebaseConfig = {
      apiKey: "AIzaSyD90A1pTTJ4umsoChHhxQlb5luXAgXuHis",
      authDomain: "kwitter-235db.firebaseapp.com",
      databaseURL: "https://kwitter-235db-default-rtdb.firebaseio.com",
      projectId: "kwitter-235db",
      storageBucket: "kwitter-235db.appspot.com",
      messagingSenderId: "906261529130",
      appId: "1:906261529130:web:61209397b2ce5b3a597953"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
var username=localStorage.getItem("username");
document.getElementById("welcome").innerHTML="hey welcome, "+ username;
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room names"+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirect(this.id)'>"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();


//below function will open already created room and store it in the local storage and will take u to the chatting page//
function redirect(name){
localStorage.setItem("room",name);
window.location="kwitter_page.html";

}
//below function will create a new room and will store it in the local database and the firebase//
function addroom(){
var room=document.getElementById("roomname").value;
localStorage.setItem("room",room);
firebase.database().ref("/").child(room).update({
purpose:"room created sucess"

});
window.location="kwitter_page.html";

}

  
  
  

