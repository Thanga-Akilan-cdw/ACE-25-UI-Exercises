
let form = document.getElementById("billing-form");

// Input Element variables 
let firstName = document.getElementById("first-name")
let lastName = document.getElementById("last-name")
let email = document.getElementById("email");
let contactNumber = document.getElementById("contact-number")
let pincode = document.getElementById("pincode")
let cardNumber = document.getElementById("card-number")
let cardExpiry = document.getElementById("card-expiry")
let cvv = document.getElementById("cvv")


//REGEX Patterns
let namePattern = /^[\w]{1,30}$/;
let emailPattern = /^[\w.%+-]+@(sirius)+\.(com)$/i;
let numberpattern = /^[\d]{10}$/;
let pincodePattern = /^[1-9][\d]{5}$/;
let cardNumberPattern = /^[\d]{16}$/;
let cardExpiryPattern = /^(202[5-9]|20[3-9][0-9]|2[1-9][0-9]{2}|[3-9][0-9]{3})$/;
let cvvPattern = /^[\d]{3,4}$/;


// Event listener for the form
form.addEventListener("submit", (e)=> {
    e.preventDefault();
    validateInputs();

})

// Error function 
const setError = (element, message) => {
    let parentContainer = element.parentElement;
    let errorText = parentContainer.querySelector(".error");
    errorText.innerHTML = message;
    parentContainer.classList.add('error');
}

// Clear error message
const clearErrorMessages = ()=>{
    let errorElements = form.querySelectorAll("div.error");
    if(errorElements.length !=0){
        errorElements.forEach((errorInfoElement)=>{
            errorInfoElement.lastElementChild.innerHTML = "";
            errorInfoElement.classList.remove('error');
        })}
}


// Validate the regex
const validatePattern = (value, pattern) => {
    return pattern.test(value);
}


// return the name of the field
const getName = (field) =>{
    let parent = field.parentElement;
    return (parent.querySelector("label").innerHTML);
}


// Validate the field
function validateField(field, fieldPattern){
    if(field.value === '' ){
        setError(field, `${getName(field)} is required`);
    }else if(!validatePattern(field.value, fieldPattern)){
        setError(field,`${getName(field)} is not valid`);
    }
}


// Validate all inputs
function validateInputs(){

    // Clear error messages
    clearErrorMessages();

    // validate all the fields with the pattern
    validateField(firstName, namePattern);
    validateField(lastName, namePattern);
    validateField(email, emailPattern);
    validateField(contactNumber, numberpattern);
    validateField(pincode, pincodePattern);
    validateField(cardNumber, cardNumberPattern);
    validateField(cardExpiry, cardExpiryPattern);
    validateField(cvv, cvvPattern);

}
