function login(){
    var user_name=document.getElementById("input1").value;
    console.log(user_name);
    localStorage.setItem("user_name", user_name);
    window.location="kwitter_room.html";
}