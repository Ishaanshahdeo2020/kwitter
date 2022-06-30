
var firebaseConfig = {
      apiKey: "AIzaSyCDoR1w6aOAie8qHpMKa-flWfPeun-GJhI",
      authDomain: "kwitter-74d24.firebaseapp.com",
      databaseURL: "https://kwitter-74d24-default-rtdb.firebaseio.com",
      projectId: "kwitter-74d24",
      storageBucket: "kwitter-74d24.appspot.com",
      messagingSenderId: "11475628939",
      appId: "1:11475628939:web:aaae1fe92bd68ae73c758e"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData()
 { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>"+ name +"</h4>";
message_with_tag = "<h4 class ='message_h4'>"+ message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>Likes :"+ like +"/button>"

row = name_with_tag + message_with_tag +like_button;
document.getElementById("output").innerHTML += row;

//End code
      } });  }); }
getData();


function updateLike(message_id)
{
      console.log("clicked on like button =" + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_Likes = Number(likes) + 1;
      console.log(updated_Likes);

      firebase.database().ref(room_name).child(message_id).update({
        like : updated_Likes    
      });
}


function logout()
{
      localStorage.removeItem("user name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}


user_name = localStorage.getItem("user name");
room_name = localStorage.getItem("room_name");

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name : user_name,
            message : msg,
            like : 0
      });
      document.getElementById("msg").value="";
}