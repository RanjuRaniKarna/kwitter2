
const firebaseConfig = {
    apiKey: "AIzaSyAhgvYGWvVUTkUDfBQStap8YnnnVWT-rPA",
    authDomain: "kwitterdb-ce950.firebaseapp.com",
    databaseURL: "https://kwitterdb-ce950-default-rtdb.firebaseio.com",
    projectId: "kwitterdb-ce950",
    storageBucket: "kwitterdb-ce950.appspot.com",
    messagingSenderId: "670305074171",
    appId: "1:670305074171:web:bd7fbbc76a72511074e95e",
    measurementId: "G-W5R9STNMSF"
  };

firebase.initializeApp(firebaseConfig);

function addRoom(){
    var name = document.getElementById("input2").value ;
    console.log(name);
    firebase.database().ref("/").child(name).update({ purpose : "adding user name" });
}

// function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
//        Room_names = childKey;
//       //Start code

//       //End code
//       });});}
// getData();

user_name = localStorage.getItem("user_name");
document.getElementById("heading").innerHTML="Welcome " + user_name;