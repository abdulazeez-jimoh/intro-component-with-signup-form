function inputValidation() {
    var input = document.querySelectorAll("input")
    for (let i = 0; i < input.length; i++) {
        if (input[i].value === "") {
            input[i].classList.add("invalid-input");
            input[i].nextSibling.nextSibling.style.display = "block";
        } else {
            input[i].classList.remove("invalid-input");
            input[i].nextSibling.nextSibling.style.display = "none";
        }
        
    } 
}

function formValidation() {
    var firstname = document.signUpForm.firstname;
    var lastname = document.signUpForm.lastname;
    var email = document.signUpForm.email;
    var password = document.signUpForm.password;
    var firstnameError = document.getElementById("firstname-error");
    var lastnameError = document.getElementById("lastname-error");
    var emailError = document.getElementById("email-error");
    var passwordError = document.getElementById("password-error");

    if (firstnameValidation(firstname, firstnameError)) {
        if (lastnameValidation(lastname, lastnameError)) {
            if(emailValidation(email, emailError)) {
                if(passwordValidation(password, passwordError)) {
                }
            }
        }
    }
    return false;

} 
function firstnameValidation(firstname, firstnameError) {
    if (firstname.value == "") {
        firstname.classList.add("invalid-input");
        firstnameError.style.display = "block";
        return false
    } else {
        firstname.classList.remove("invalid-input");
        firstnameError.style.display = "none";
        return true;
    }
}

function lastnameValidation(lastname, lastnameError) {
    if( lastname.value == ""){
        lastname.classList.add("invalid-input");
        lastnameError.style.display = "block";
        return false;
    } else {
        lastname.classList.remove("invalid-input");
        lastnameError.style.display = "none";
        return true; 
    }
}

function passwordValidation(password, passwordError) {
    if( password.value == ""){
        password.classList.add("invalid-input");
        passwordError.style.display = "block";
        return false;
    } else {
        password.classList.remove("invalid-input");
        passwordError.style.display = "none";
        window.location.reload()
        return true;
    }
}

function emailValidation(email, emailError) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.value.match(mailformat)) {
        email.classList.remove("invalid-input");
        emailError.style.display = "none";
        return true;
    } else {
        email.classList.add("invalid-input");
        emailError.style.display = "block";
        return false
    }
}