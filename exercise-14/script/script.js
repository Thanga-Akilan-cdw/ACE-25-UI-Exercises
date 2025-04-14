
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

// Success Function
const setSuccess = (element) => {
    let parentContainer = element.parentElement;
    let errorText = parentContainer.querySelector(".error");

    errorText.innerHTML = "";
    parentContainer.classList.remove('error');
}

// Check valid Name
const isValidName = (value) => {
    let namePattern = /^[\w]{1,30}$/
    return namePattern.test(value);
}


// Check valid Email
const isValidEmail = (emailValue) => {
    let emailPattern = /^[\w.%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(emailValue);

}


// Check valid Contact Number
const isValidContactNumber = (contactNo) => {
    let numberpattern = /^[\d]{10}$/ 
    return numberpattern.test(contactNo);
}


// Check valid Pincode
const isValidPincode = (pincodeValue) => {
    let pincodePattern = /^[1-9][\d]{5}$/
    return pincodePattern.test(pincodeValue);
}


// Check valid Card Number
const isValidCardNumber = (cardNumberValue) => {
    let cardNumberPattern = /^[\d]{16}$/;
    return cardNumberPattern.test(cardNumberValue);
} 


// Check valid Expiry Year
const isValidExpiryYear = (cardExpiryValue) => {
    let cardExpiryPattern = /^(202[5-9]|20[3-9][0-9]|2[1-9][0-9]{2}|[3-9][0-9]{3})$/;
    return cardExpiryPattern.test(cardExpiryValue);
}


// Check valid cvv
const isValidCvv = (cvvValue) => {
    let cvvPattern = /^[\d]{3,4}$/;
    return cvvPattern.test(cvvValue);
}

// Validate all inputs
function validateInputs(){
    let fnameValue = firstName.value;
    let lnameValue = lastName.value;
    let emailValue = email.value;
    let contactNumberValue = contactNumber.value;
    let pincodeValue = pincode.value;
    let cardNumberValue = cardNumber.value;
    let cardExpiryValue = cardExpiry.value;
    let cvvValue = cvv.value;

    // Firstname
    if(fnameValue === '' ){
        setError(firstName, "First Name is required");
    }else if(!isValidName(fnameValue)){
        setError(firstName,"First Name is not valid")
    }
    else{
        setSuccess(firstName);
    }

    // Lastname
    if(lnameValue === ''){
        setError(lastName, "Last Name is required")
    }else if(!isValidName(lnameValue)){
        setError(lastName,"Last Name is not valid")
    }
    else{
        setSuccess(lastName)
    }

    // Email
    if(emailValue === ''){
        setError(email, "Email Address is required")
    }else if(!isValidEmail(emailValue)){
        setError(email,"Email Address is not valid")
    }
    else{
        setSuccess(email)
    }

    // Contact number
    if(contactNumberValue === ''){
        setError(contactNumber, "Contact Number is required")
    }else if(!isValidContactNumber(contactNumberValue)){
        setError(contactNumber,"Contact Number is not valid")
    }
    else{
        setSuccess(contactNumber)
    }

    // Pincode
    if(pincodeValue === ''){
        setError(pincode, "Pincode is required")
    }else if(!isValidPincode(pincodeValue)){
        setError(pincode, "Pincode is not valid")
    }
    else{
        setSuccess(pincode)
    }

    // Card Number
    if(cardNumberValue === ''){
        setError(cardNumber, "Card Number is required")
    }else if(!isValidCardNumber(cardNumberValue)){
        setError(cardNumber,"Card Number is not valid")
    }
    else{
        setSuccess(cardNumber)
    }

    // Card Expiry
    if(cardExpiryValue === ''){
        setError(cardExpiry, "Card Expiry is required")
    }else if(!isValidExpiryYear(cardExpiryValue)){
        setError(cardExpiry, "Card Expiry is not valid")
    }
    else{
        setSuccess(cardExpiry)
    }

    // CVV
    if(cvvValue === ''){
        setError(cvv, "CVV is required")
    }else if(!isValidCvv(cvvValue)){
        setError(cvv, "CVV is not valid")
    }
    else{
        setSuccess(cvv)
    }
}