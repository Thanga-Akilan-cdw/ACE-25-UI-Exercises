import {locations} from "../public/locations.js";


// Tab from Jquery UI
$( "#tabs" ).tabs();


$( function() {
    $( "#accordion" ).accordion({
      collapsible: true,
      heightStyle: "content",
    });
  } );

$("h3").on("click",function(){
$(this).children('i').toggleClass('fa-caret-down');
})


let baseContainer = document.createElement("div");
baseContainer.classList.add("tab-3-base-container");

function createCard(location){

    let card = document.createElement("div")
    card.classList.add("card")


    let flagImage = document.createElement("img")
    flagImage.classList.add("card-image")

    let flagWrapper = document.createElement("div")
    flagWrapper.classList.add("card-wrapper")
    flagWrapper.appendChild(flagImage)


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
    
    let stateElement = document.createElement("span")
    stateElement.textContent = location.state;
    stateElement.classList.add("card-state")

    let cityElement = document.createElement("span")
    cityElement.textContent = location.city;
    cityElement.classList.add("card-city")


    let contactElement = document.createElement("span")
    contactElement.textContent = location.contact;

    card.appendChild(flagWrapper)
    card.appendChild(stateElement)
    card.appendChild(cityElement)
    card.appendChild(contactElement)

    baseContainer.appendChild(card)
}


locations.forEach(location=>{
    createCard(location);
})

let root = document.getElementById("tabs-3")
root.appendChild(baseContainer)