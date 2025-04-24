
let data = [{
        shapeName: "Circle",
        dimensionType : "Radius",
        dimensionSymbol : "r",
        areaFormula : "r * r",
        perimeterFormula : "4 * r",
        
        area: function(side){return (3.14*side*side);},
        perimeter: function(side){ return (2*3.14*side);}
    },
     {
        shapeName: "Triangle",
        dimensionType : "Side",
        dimensionSymbol : "s",
        areaFormula : "0.433 * s * s",
        perimeterFormula : "4 * s",

        area: function(side){return (0.433*side*side);},
        perimeter: function(side){ return (3*side);}
    },
     {
        shapeName: "Square",
        dimensionType : "Side",
        dimensionSymbol : "s",
        areaFormula : "s * s",
        perimeterFormula : "4 * s",

        area: function(side){return (side*side);},
        perimeter: function(side){ return (4*side);}
    }
]




let shapes = document.getElementsByClassName("shape")
console.log(shapes)
for(shape of shapes){
    shape.addEventListener("click",(event)=>chooseShape(event),true)
}


// Next button in shape selection page
let shapeSelectionButton = document.getElementById("next-button");
shapeSelectionButton.addEventListener("click",()=>selectedShape())


// Calculate Button
let calculateButton = document.getElementById("calculate-button")
calculateButton.addEventListener("click",()=>displayInformation());

// Reset Button
document.getElementById("reset-button").addEventListener("click", ()=>startAgain())

// Choose shape with click 
function chooseShape(event){
    let currentTick = event.target.firstChild;
    let selectedShape =event.target.dataset.shape;

    let ticks = document.querySelectorAll(".tick ")

    ticks.forEach((tick)=>{
        tick.classList.remove("show")
    })
    console.log(currentTick)
    currentTick.classList.toggle("show")
    
    localStorage.setItem("currentShape",JSON.stringify(selectedShape));

}

// Select shape before moving to dimensions page
function selectedShape(){
    document.getElementById("shape-section").setAttribute("style","display: none;")
    document.getElementById("dimension-section").setAttribute("style","display: flex;")
    let dimensionLabel = document.getElementById("dimension-heading");
    let shape = JSON.parse(localStorage.getItem("currentShape"));
    dimensionLabel.innerHTML += shape[0].dimensionType;
}



// Display the area and perimeter values
function displayInformation(){
    let dimensionInput = document.getElementById("dimension-input")
    let dimension = dimensionInput.value;
    let area = userSelectedShape.area(dimension)
    

    let areaElement = document.getElementById("area-value")
    areaElement.innerHTML = area;

    let dimensionSymbol = document.getElementById("dimension-symbol");
    let dimensionValue =  document.getElementById("dimension-value");
    let areaFormula =  document.getElementById("area-formula");
    let areaValue =  document.getElementById("area-value");
    let perimeterFormula =  document.getElementById("perimeter-formula");
    let perimeterValue =  document.getElementById("perimeter-value");


    dimensionSymbol.innerHTML = userSelectedShape.dimensionSymbol;
    dimensionValue.innerHTML = dimension + " cm";
    areaFormula.innerHTML = userSelectedShape.areaFormula;
    perimeterFormula.innerHTML = userSelectedShape.perimeterFormula;

    areaValue.innerHTML = userSelectedShape.area(dimension) + " sq cm";
    perimeterValue.innerHTML = userSelectedShape.perimeter(dimension) + " cm";

    document.getElementById("dimension-section").setAttribute("style","display: none;")
    document.getElementById("result-section").setAttribute("style","display: flex;")

}

// Start Again function
function startAgain(){
    userSelectedShape = {};

    document.getElementById("result-section").setAttribute("style","display: none;")
    document.getElementById("shape-section").setAttribute("style","display: flex;")
}



