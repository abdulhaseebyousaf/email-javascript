// change input types for show password 
function showPassword() {
    const password =  document.getElementById("password");
    if(password.type === "password") {
        password.type = "text";
    }
    else {
        password.type = "password";
    }
};

function clickHandel() {
   const correct = document.getElementById("correct");
    const incorrect = document.getElementById("incorrect");
    const pas = document.getElementById("password");
    const email = document.getElementById("email");

    if (pas.value === "TeST123" ) {
        correct.style.display = "flex"; 
        // ste time  for reload page  
        setTimeout(() => {
            location.reload();
        }, 3000);
    }
    else {
        incorrect.style.display = "flex";  
    }

    if (!email.value.includes("@")) {
        incorrect.style.display = "flex";
    }
     else {
        incorrect.style.display = "none";
    }
};
