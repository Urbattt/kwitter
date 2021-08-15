//YOUR FIREBASE LINKS
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

    var username=localStorage.getItem("username");
    var roomname=localStorage.getItem("room");
    document.getElementById("pagetitle").innerHTML=roomname+",lets chat";
function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_with_tag="<h4>"+name+"<img src='tick.png' class='user_tick'></h4>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updatelikes(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbsup'>like:"+like+"</span></button><hr>";
rowd=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=rowd;

//End code
      } });  }); }
getData();

function logout(){
      localStorage.removeItem("username");
localStorage.removeItem("room");

window.location="index.html";

}

function send(){
var message=document.getElementById("sendinput").value;
firebase.database().ref(roomname).push({
      name:username, 
      message:message,
      like:0
});

document.getElementById("sendinput").value="";
}

function back(){
      window.location="kwitter_room.html";

}
function updatelikes(firebase_message_id){
console.log(firebase_message_id);
button_id=firebase_message_id;
likes=document.getElementById(button_id).value;
updated_likes=Number(likes)+1;
console.log(updated_likes);
firebase.database().ref(roomname).child(firebase_message_id).update({
 like:updated_likes     
});
}

  
  

  

