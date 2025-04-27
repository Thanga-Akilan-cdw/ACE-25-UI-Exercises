// Data for shape display
let shapeData = {
    "circle":{
        shapeName: "Circle",
        dimensionType : "Radius",
        dimensionSymbol : "r",
        areaFormula : "3.14 * r * r",
        perimeterFormula : "2 * 3.14 * r",
        
        area: function(side){return ((3.14*side*side).toFixed(2));},
        perimeter: function(side){ return (2*3.14*side).toFixed(2);}
    },
     "triangle":{
        shapeName: "Triangle",
        dimensionType : "Side (Base & Height)",
        dimensionSymbol : "s",
        areaFormula : "0.433 * s * s",
        perimeterFormula : "3 * s",

        area: function(side){return ((0.433*side*side).toFixed(2));},
        perimeter: function(side){ return (3*side);}
    },
     "square":{
        shapeName: "Square",
        dimensionType : "Side",
        dimensionSymbol : "s",
        areaFormula : "s * s",
        perimeterFormula : "4 * s",

        area: function(side){return (side*side);},
        perimeter: function(side){ return (4*side);}
    }
}

let currentShape;
let userSelectedShape = {}

// Shapes event listeners added
let shapes = document.getElementsByClassName("shape")
console.log(shapes)
for(shape of shapes){
    shape.addEventListener("click",(event)=>chooseShape(event),true)
}



// Next button in shape selection page
let shapeSelectionButton = document.getElementById("nextButton");
shapeSelectionButton.addEventListener("click",()=>selectedShape())


// Calculate Button
let calculateButton = document.getElementById("calculateButton")
calculateButton.addEventListener("click",()=>displayInformation());

// Reset Button
document.getElementById("resetButton").addEventListener("click", ()=>startAgain())


// Section elements
let shapeSection = document.getElementById("shapeSection");
let dimensionSection = document.getElementById("dimensionSection");
let resultSection = document.getElementById("resultSection");

// Dimension Label
let dimensionLabel = document.getElementById("dimensionHeading");

// initial values
resultSection.classList.add("hide")
dimensionSection.classList.add("hide")

// Choose shape with click 
function chooseShape(event){
    currentShape =event.target.dataset.shape;
    shapeSelectionButton.classList.remove("hidden")

    for(shape of shapes){
        shape.classList.remove("show")
    }
    event.target.classList.add("show")
    

}

// Select shape before moving to dimensions page
function selectedShape(){
    shapeSection.classList.add("hide")
    dimensionSection.classList.remove("hide")

    console.log(shapeData.currentShape)
    console.log(currentShape)

    userSelectedShape = shapeData[currentShape];
    console.log(userSelectedShape);
    dimensionLabel.innerText = userSelectedShape.dimensionType;
}

// dimension input
let dimensionInput = document.getElementById("dimensionInput")

// area element
let areaElement = document.getElementById("areaValue")

// Table element
let table = document.getElementById("resultTable")



// Display the area and perimeter values
function displayInformation(){

    // Getting dimension  
    let dimension = dimensionInput.value;
    

    // adding shape
    resultShape.classList.remove(...resultShape.classList)
    resultShape.classList.add((userSelectedShape.shapeName).toLowerCase());
    //Adding shape name
    resultHeading.innerHTML = userSelectedShape.shapeName;

    table.rows[0].cells[1].innerText = userSelectedShape.dimensionSymbol;
    table.rows[0].cells[2].innerText = dimension + " cm";
    table.rows[1].cells[1].innerText = userSelectedShape.areaFormula;
    table.rows[1].cells[2].innerText = userSelectedShape.area(dimension) + " sq cm";
    table.rows[2].cells[1].innerText = userSelectedShape.perimeterFormula;
    table.rows[2].cells[2].innerText = userSelectedShape.perimeter(dimension) + " cm";

    resultSection.classList.remove("hide")
    dimensionSection.classList.add("hide")

}

// Start Again function
function startAgain(){
    userSelectedShape = {};
    dimensionInput.value = "";
    shapeSelectionButton.classList.add("hidden")
    for(shape of shapes){
        shape.classList.remove("show")
    }

    resultSection.classList.add("hide")
    shapeSection.classList.remove("hide")
}



