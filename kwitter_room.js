

const firebaseConfig = {
      apiKey: "AIzaSyCH1SJ7MbpA6sWySo1RomGjtfcd3HZ4oCw",
      authDomain: "kwitter-aea27.firebaseapp.com",
      databaseURL: "https://kwitter-aea27-default-rtdb.firebaseio.com",
      projectId: "kwitter-aea27",
      storageBucket: "kwitter-aea27.appspot.com",
      messagingSenderId: "912037315101",
      appId: "1:912037315101:web:d1724ae19fc0fef3c37cf4"
    };

    username=localStorage.getItem("username");
    document.getElementById("user_name").innerHTML=username;
    function addroom(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"adding room name"
          });
          localStorage.setItem("room_name",room_name);
          window.location="kwitter_page.html";
      
    
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      row="<div class='room_name' id="+ Room_names+"onclick='redirectToRoomName(this.id)>#"+ Room_names+"</div><hr>";
      document.getElementById("output").innerhtml+=row;

      
      });});}
getData();
function redirectToRoomName(name){
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
