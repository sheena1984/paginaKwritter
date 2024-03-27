var firebaseConfig = { apiKey: "AIzaSyBMR0iKj_L1wl0CCGMe-XhD3iQnuTLlyTk", authDomain: "kwitter-ad615.firebaseapp.com", databaseURL:
"https://kwitter-ad615-default-rtdb.firebaseio.com",
projectId: "kwitter-ad615", storageBucket: "kwitter-ad615.appspot.com", messagingSenderId: "199611934084", appId: "1:199611934084:web:fa01813a265e72005b29d1", measurementId: "G-8XE63BNQWX" };
// Inicializa Firebase
firebase.initializeApp(firebaseConfig);

function addUser() {

  user_name = document.getElementById("user_name").value;

  localStorage.setItem("user_name", user_name);
  
    window.location = "kwitter_room.html";
}

