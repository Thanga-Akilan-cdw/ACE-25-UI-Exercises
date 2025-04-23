
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


let userSelectedShape = {};


let shapes = document.getElementsByClassName("shape")

for(shape of shapes){
    shape.addEventListener("click",(event)=>chooseShape(event))
}

let shapeSelectionButton = document.getElementById("next-button");

shapeSelectionButton.addEventListener("click",()=>selectedShape())


function chooseShape(event){
    let currentTick = event.target.firstChild;
    let selectedShape =event.target.dataset.shape;

    let ticks = document.querySelectorAll(".tick ")

    ticks.forEach((tick)=>{
        tick.classList.remove("show")
    })

    currentTick.classList.add("show")
    
    localStorage.setItem("currentShape",JSON.stringify(selectedShape));

}


function selectedShape(){
    document.getElementById("shape-section").setAttribute("style","display: none;")
    document.getElementById("dimension-section").setAttribute("style","display: flex;")
    let dimensionLabel = document.getElementById("dimension-heading");
    let shape = JSON.parse(localStorage.getItem("currentShape"));
    dimensionLabel.innerHTML += shape[0].dimensionType;
}


let calculateButton = document.getElementById("calculate-button")
calculateButton.addEventListener("click",()=>displayInformation());



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

document.getElementById("reset-button").addEventListener("click", ()=>startAgain())

function startAgain(){
    userSelectedShape = {};

    document.getElementById("result-section").setAttribute("style","display: none;")
    document.getElementById("shape-section").setAttribute("style","display: flex;")
}



