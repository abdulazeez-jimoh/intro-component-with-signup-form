// Select the signup form and all input element
var signUpForm = document.querySelector("#signup-form")
var userInput = document.querySelectorAll(".user-input")

//Create a Validate Function
function validateForm(event) {
    // loop through each input field and check their validity state
    userInput.forEach(input => {
        let name = input.name
        let id = input.id
        let value = input.value
        let isValid= input.validity.valid
        // Define a valid email pattern
        let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let hasSpace = input.value.includes(" ")
        let isMailValid = input.value.match(mailformat)
        if (!isValid || hasSpace) {
            // Stop all default events
            event.preventDefault()
            input.classList.add("invalid-input")
            input.placeholder = ""
            if (input.validity.valueMissing) {
                document.getElementById(`${id}-error`).innerText = `${name} cannot be empty`
            }
            if (input.validity.typeMismatch) {
                document.getElementById(`${id}-error`).innerText = `Looks like this is not an ${name}`
            }
            // Check if input value contain space
            if (hasSpace) {
                document.getElementById(`${id}-error`).innerText = `${name} cannot contain space`
            }   
        } else {
            input.classList.remove("invalid-input")
            document.getElementById(`${id}-error`).innerText = ""
        }
        // return the input field style to default when user tries to input
        input.oninput = function () {
            input.classList.remove("invalid-input")
            document.getElementById(`${id}-error`).innerText = ""
        }
        
    });
}

// run the the validation function when user tries to submit form
signUpForm.addEventListener("submit", validateForm)