const form = document.getElementById("loginForm");

const message = document.getElementById("message");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const username = document.getElementById("username").value;

    const password = document.getElementById("password").value;

    if(username==="admin" && password==="12345"){

        message.style.color="green";

        message.innerHTML="Login Successful...";

        setTimeout(function(){

            window.location.href="dashboard.html";

        },1200);

    }

    else{

        message.style.color="red";

        message.innerHTML="Invalid Username or Password";

    }

});