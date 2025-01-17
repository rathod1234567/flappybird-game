// function login(){

// let inputName=document.getElementById("userName").value.trim();
// let inputemail=document.getElementById("email").value.trim();
// let inputPassword=document.getElementById("Password").value.trim();

// let userName=localStorage.getItem("userName");
// let email=localStorage.getItem("email")
// let Password=localStorage.getItem("Password")

// if( userName === inputName &&  email === inputemail  && Password === inputPassword ){
//     alert("yah!!! you are login succefully")
//     localStorage.setItem("islogged",true)

//     window.location.href="./game.html";
// }else{
//     alert("oops !!! invalid please enter valid data");
//   window.location.href="signup.html"
// }
// document.getElementById("userName").value = "";
// document.getElementById("email").value = "";
// document.getElementById("Password").value = "";

// }

function login() {
  let inputName = document.getElementById("userName").value.trim();
  let inputemail = document.getElementById("email").value.trim();
  let inputPassword = document.getElementById("Password").value.trim();
  let userName = localStorage.getItem("userName");
  let email = localStorage.getItem("email");
  let Password = localStorage.getItem("Password");
  if (
    userName === inputName &&
    email === inputemail &&
    Password === inputPassword
  ) {
    // alert("Yay!!! You are logged in successfully");
    localStorage.setItem("isLogged", true);
    window.location.href = "../index.html";
    alert("Yay!!! You are logged in successfully");
  } else {
    alert("Oops!!! Invalid data, please enter valid data");
    window.location.href = "signup.html";
  }
  document.getElementById("userName").value = "";
  document.getElementById("email").value = "";
  document.getElementById("Password").value = "";
}
