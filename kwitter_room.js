var firebaseConfig = { apiKey: "AIzaSyBMR0iKj_L1wl0CCGMe-XhD3iQnuTLlyTk", authDomain: "kwitter-ad615.firebaseapp.com", databaseURL:
"https://kwitter-ad615-default-rtdb.firebaseio.com",
projectId: "kwitter-ad615", storageBucket: "kwitter-ad615.appspot.com", messagingSenderId: "199611934084", appId: "1:199611934084:web:fa01813a265e72005b29d1", measurementId: "G-8XE63BNQWX" };
// Inicializa Firebase
firebase.initializeApp(firebaseConfig);

//Añade tus enlaces de Firebase

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "¡Bienvenido" + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "añadir el nombre de la sala"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Nombre de la sala" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
