// Input Element variables 
let firstName = document.getElementById("first-name")
let lastName = document.getElementById("last-name")
let email = document.getElementById("email");
let contactNumber = document.getElementById("contact-number")
let pincode = document.getElementById("pincode")
let cardNumber = document.getElementById("card-number")
let cardExpiry = document.getElementById("card-expiry")
let cvv = document.getElementById("cvv")

// Error handling Elements
let firstNameError = document.getElementById("first-name-error")
let lastNameError = document.getElementById("last-name-error")
let emailError = document.getElementById("email-error");
let contactNumberError = document.getElementById("contact-number-error")
let pincodeError = document.getElementById("pincode-error")
let cardNumberError = document.getElementById("card-number-error")
let cardExpiryError = document.getElementById("card-expiry-error")
let cvvError = document.getElementById("cvv-error")

// First Name

firstName.addEventListener("invalid",(e)=>{
    e.preventDefault()
    this.style.border = "1px solid #C85F5F";
    if(this.validity.valueMissing){
        firstNameError.innerHTML = "First Name is required"
    }
})

firstName.addEventListener("input",function(){
    firstNameError.innerHTML = "";
    if (this.validity.valid) {
        this.style.border = "1px solid #CCCCCC";
      } else {
        this.style.border = "1px solid #C85F5F";
      }
})

// Last Name

lastName.addEventListener("invalid",function(e){
    e.preventDefault()
    this.style.border = "1px solid #C85F5F";
    if(this.validity.valueMissing){
        lastNameError.innerHTML = "Last Name is required"
    }
})

lastName.addEventListener("input",function(){
    lastNameError.innerHTML = "";
    if (this.validity.valid) {
        this.style.border = "1px solid #CCCCCC";
      } else {
        this.style.border = "1px solid #C85F5F";
      }
})


// EMail

email.addEventListener("invalid",function(e){
    e.preventDefault()
    this.style.border = "1px solid #C85F5F";
    if(this.validity.valueMissing){
        emailError.innerHTML = "Email Address is required"
    }else if(this.validity.typeMismatch){
        emailError.innerHTML = "Email Address is not valid"
    }
})

email.addEventListener("input",function(){
    emailError.innerHTML = "";
    if (this.validity.valid) {
        this.style.border = "1px solid #CCCCCC";
      } else {
        this.style.border = "1px solid #C85F5F";
      }
    
})

// Contact Number
contactNumber.addEventListener("invalid",function(e){
    e.preventDefault()
    this.style.border = "1px solid #C85F5F";
    if(this.validity.valueMissing){
        contactNumberError.innerHTML = "Contact Number is required"
    }else if(this.validity.patternMismatch){
        contactNumberError.innerHTML = "Contact Number is not valid"
    }
})

contactNumber.addEventListener("input",function(){
    contactNumberError.innerHTML = "";
    if (this.validity.valid) {
        this.style.border = "1px solid #CCCCCC";
      } else {
        this.style.border = "1px solid #C85F5F";
      }
})

// Pincode
pincode.addEventListener("invalid",function(e){
    e.preventDefault()
    this.style.border = "1px solid #C85F5F";
    if(this.validity.valueMissing){
        pincodeError.innerHTML = "Pincode is required"
    }else if(this.validity.patternMismatch){
        pincodeError.innerHTML = "Pincode is not valid"
    }
})

pincode.addEventListener("input",function(){
    pincodeError.innerHTML = "";
    if (this.validity.valid) {
        this.style.border = "1px solid #CCCCCC";
      } else {
        this.style.border = "1px solid #C85F5F";
      }
})

// Card Number
cardNumber.addEventListener("invalid",function(e){
    e.preventDefault()
    this.style.border = "1px solid #C85F5F";
    if(this.validity.valueMissing){
        cardNumberError.innerHTML = "Card Number is required";
    }else if(this.validity.patternMismatch){
        cardNumberError.innerHTML = "Card Number is not valid"
    }
})

cardNumber.addEventListener("input",function(){
    cardNumberError.innerHTML = "";
    if (this.validity.valid) {
        this.style.border = "1px solid #CCCCCC";
      } else {
        this.style.border = "1px solid #C85F5F";
      }
})

// Card Expiry
cardExpiry.addEventListener("invalid",function(e){
    e.preventDefault()
    this.style.border = "1px solid #C85F5F";
    if(this.validity.valueMissing){
        cardExpiryError.innerHTML = "Card Expiry is required"
    }else if(this.validity.patternMismatch){
        cardExpiryError.innerHTML = "Card Expiry is not valid"
    }
})

cardExpiry.addEventListener("input",function(){
    cardExpiryError.innerHTML = "";
    if (this.validity.valid) {
        this.style.border = "1px solid #CCCCCC";
      } else {
        this.style.border = "1px solid #C85F5F";
      }
})

// CVV
cvv.addEventListener("invalid",function(e){
    e.preventDefault()
    this.style.border = "1px solid #C85F5F";
    if(this.validity.valueMissing){
        cvvError.innerHTML = "CVV is required";
    }else if(this.validity.patternMismatch){
        cvvError.innerHTML = "CVV is not valid";
    }
})

cvv.addEventListener("input",function(){
    cvvError.innerHTML = "";
    if (this.validity.valid) {
        this.style.border = "1px solid #CCCCCC";
      } else {
        this.style.border = "1px solid #C85F5F";
      }
})