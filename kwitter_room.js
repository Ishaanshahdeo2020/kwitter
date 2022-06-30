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

    user_name=localStorage.getItem("user name");
    document.getElementById("user_name").innerHTML="Welcome " +user_name+" ! ";

    function addRoom()
    {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
    }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name -" + Room_names);
       row = "<div class='room_name' id"+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"<?div><hr>";
       document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

function redirectToRoomName (name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
