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
   const icorrect = document.getElementById("missing");
    const incorrect = document.getElementById("incorrect");
    const pas = document.getElementById("password");
    const email = document.getElementById("email");

    if (pas.value === "TeST123" ) {
        correct.style.display = "flex";  
    }
    else {
        incorrect.style.display = "flex";  
    }
    if (pas.value.trim() === "") {
        document.getElementById("button").disabled = true;
    } 
    else {
        document.getElementById("button").disabled = false;
    }
    if (!email.value.includes("@")) {
        icorrect.style.display = "flex";
    }
     else {
        icorrect.style.display = "none";
    }
};
