// This function shows/hides password by changing type attribute 
function togglePasswordVisibility() {
    const textPassword =  document.getElementById("txtPassword");
    if(textPassword.type === "password") {
        textPassword.type = "text";
    }
    else {
        textPassword.type = "password";
    }
};
// submit button 
function submitButtonClickHandler(event) {
   event.preventDefault(); 
    const textPassword = document.getElementById("txtPassword");
    const textEmail = document.getElementById("txtEmail");
  
    const passwordValue = textPassword.value;
    const emailValue = textEmail.value;
    
    const isEmailValid = textEmail.checkValidity() && emailValue === "ahaseeb2005@gmail.com";
    
    const isPasswordEntered = passwordValue !== "";
    const isPasswordCorrect = passwordValue === "TeST123";
    
    // Hide/show incorrect label only if password is entered
    if (isPasswordEntered && (!isEmailValid || !isPasswordCorrect)) {
            document.getElementById("modal").style.display = "flex";
         console.log("email incorrect");
    } 
    else {
        document.getElementById("modal").style.display = "none";
    }   
    // Show correct label if both email and password are valid
    if (isEmailValid && isPasswordCorrect) {
            document.getElementById("secondModal").style.display = "flex";
        
        }
};
// for close modal 
function closeModal() {
        document.getElementById("modal").style.display = "none";
        location.reload();
    }
    // for close second modal 
    function closeSecondModal() {
        document.getElementById("secondModal").style.display = "none";
        location.reload();
    } 
    // for two special charater not add
    document.addEventListener('input', function(_event) {
        const inputEmail = document.getElementById("txtEmail").value;
        document.getElementById("txtEmail").value = inputEmail.replace(/[^a-zA-Z0-9 .@]/g,"");
        });

        
        