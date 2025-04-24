# Credentials Validation Exercise

A simple HTML, CSS (Tailwind), and JavaScript-based login form with client-side validation. This form validates credentials with hardcoded values and displays modals based on the result.

##  Features

- TailwindCSS for responsive styling
- Validation using HTML5 and JavaScript
- Modal-based feedback for valid or invalid input
- Show/hide password functionality
- Restriction on special characters in email input

##  Technologies Used

- HTML5
- Tailwind CSS (via CDN)
- JavaScript
- Ionicons for icons


## ⚙️ How It Works

1. Enter your **email** and **password**.
2. The email must match: `Haseeb2005@gmail.com`
3. The password must match: `TeST123`
4. Input fields are validated on submission:
   - If invalid: an "Invalid Input" modal appears.
   - If valid: a "Success" modal appears.

##  Note

- Email input restricts invalid characters using JavaScript:
  ```js
  inputEmail.replace(/[^a-zA-Z0-9 .@]/g, "")

 ## Credentials for Testing
Email: Haseeb2005@gmail.com
Password: TeST123

##  How to Run

-  Clone this repository:
   ```bash
   git clone https://github.com/abdulhaseebyousaf/email-javascript
