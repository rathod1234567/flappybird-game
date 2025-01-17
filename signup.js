// function signUp(){

//     let userName=document.getElementById("userName").value.trim();
//     let email=document.getElementById("email").value.trim();
//     let password=document.getElementById("Password").value.trim();
//     let confirmpassword=document.getElementById("confirmpassword").value.trim()

//     const UserPattern = /^[a-zA-Z0-9]{3,9}$/;
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//     const confirmPattern =/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

//     if(!UserPattern.test(userName)){
//         alert("oops invalid name")
//         return false
//     }

//     if(!emailPattern.test(email)){
//         alert("oops wrong Email id");
//         return false;

//     }

//     if(!passwordPattern.test(password)){
//         alert('oops invalid password')
//         return false
//     }

//     if(!confirmPattern.test(confirmpassword)){
//         alert("oops password does't matched")
//         return false
//     }
//     else{

//         localStorage.setItem=("userName",userName)
//         localStorage.setItem=("email",email)
//         localStorage.setItem=("Password",password)
//         localStorage.setItem=("confirmpassword",confirmpassword)
//         location.href="login.html"
//         alert(" yahh!! SingUp Successful....")

//     }

// }

function signUp() {
  let userName = document.getElementById("userName").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("Password").value.trim();
  let confirmpassword = document.getElementById("confirmpassword").value.trim();

  const userPattern = /^[a-zA-Z0-9]{3,9}$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const confirmPattern =/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!userPattern.test(userName)) {
    alert("Oops, invalid name");
    return false;
  }
  if (!emailPattern.test(email)) {
    alert("Oops, wrong Email ID");
    return false;
  }
  if (!passwordPattern.test(password)) {
    alert("Oops, invalid password");
    return false;
  }
  if (password !== confirmpassword) {
    alert("Oops, passwords don't match");
    return false;
  } else {
    localStorage.setItem("userName", userName);
    localStorage.setItem("email", email);
    localStorage.setItem("Password", password);
    localStorage.setItem("confirmpassword", confirmpassword);
    window.location.href = "./login.html";
    alert("Yay! SignUp Successful....");
    
  }
}
