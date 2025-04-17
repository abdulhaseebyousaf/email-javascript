// This function shows/hides password by changing type attribute 
function togglePasswordVisibility() {
    const txtPassword =  document.getElementById("txtPassword");
    if(txtPassword.type === "password") {
        txtPassword.type = "text";
    }
    else {
        txtPassword.type = "password";
    }
}


function submitButtonClickHandler() {
    const lblCorrect = document.getElementById("lblCorrect");
    const lblIncorrect = document.getElementById("lblIncorrect");
    const txtPassword = document.getElementById("txtPassword");
    const txtEmail = document.getElementById("txtEmail");

    const isEmailValid = txtEmail.value.includes("@");
    const isPasswordValid = txtPassword.value === "TeST123";
    
    lblIncorrect.style.display = isEmailValid&&isPasswordValid ? "none" : "flex";
    
    // TODO: Only reload page, if both Email and Password are correct
    if (txtPassword.value === "TeST123" ) {
        lblCorrect.style.display = "flex"; 
        // Set time for reload page  
        setTimeout(() => {
            location.reload();
        }, 3000);
    }
    else {
        lblIncorrect.style.display = "flex"; 
    }
};