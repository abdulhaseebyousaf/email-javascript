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
    
        const passwordValue = txtPassword.value;
    
        const isEmailValid = txtEmail.checkValidity(); 
        const isPasswordEntered = passwordValue !== "";
        const isPasswordCorrect = passwordValue === "TeST123";
    
        // Hide/show incorrect label only if password is entered
        if (isPasswordEntered && (!isEmailValid || !isPasswordCorrect)) {
            lblIncorrect.style.display = "flex";
        } 
        else {
            lblIncorrect.style.display = "none";
        }    
        // Show correct label if both email and password are valid
        if (isEmailValid && isPasswordCorrect) {
            lblCorrect.style.display = "flex";
            // TODO: reload page or redirect here if needed
        }
         else {
            lblCorrect.style.display = "none";
        }
    
    
};