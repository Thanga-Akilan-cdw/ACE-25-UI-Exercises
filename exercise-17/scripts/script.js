import {locations} from "../public/locations.js";


// Tab from Jquery UI
$( "#tabs" ).tabs();

// Accordion from Jquery UI
$( function() {
    $( "#accordion" ).accordion({
      collapsible: true,
      heightStyle: "content",
    });
  } );


// Accordion Title
$(".accordion-title").on("click",function(){
$(this).children('i').toggleClass('fa-caret-down');
})

// Base Container
let baseContainer = document.createElement("div");
baseContainer.classList.add("tab-3-base-container");

// Create Card for each location
locations.forEach(location=>{
    createCard(location);
})


// Append to root container
let root = document.getElementById("tabs-3")
root.appendChild(baseContainer)


// Create Card
function createCard(location){
    // Card div
    let card = document.createElement("div")
    card.classList.add("card")

    // Image for Flag
    let flagImage = document.createElement("img")
    flagImage.classList.add("card-image")

    // Wrapper for image flag
    let flagWrapper = document.createElement("div")
    flagWrapper.classList.add("card-wrapper")
    flagWrapper.appendChild(flagImage)


    // Set the image src for the card
    switch(location.country){
        case "United States":
            flagImage.setAttribute("src","../public/usa.jpg")
            break;
        case "India":
            flagImage.setAttribute("src","../public/india.png")
            break;
        case "Canada":
            flagImage.setAttribute("src","../public/canada.png")
            break;
        default:
            flagImage.setAttribute("src","../public/usa.png")

    }
    
    // State text
    let stateElement = document.createElement("span")
    stateElement.textContent = location.state;
    stateElement.classList.add("card-state")

    // City text
    let cityElement = document.createElement("span")
    cityElement.textContent = location.city;
    cityElement.classList.add("card-city")

    // Contact text
    let contactElement = document.createElement("span")
    contactElement.textContent = location.contact;

    // Append all cotents to card div
    card.appendChild(flagWrapper)
    card.appendChild(stateElement)
    card.appendChild(cityElement)
    card.appendChild(contactElement)

    // Append card to base container
    baseContainer.appendChild(card)
}

