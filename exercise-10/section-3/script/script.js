
displayNumbersTill100()
displayTodaysDate()
console.log("Fahrenheit : "+convertToFahrenheit(100));
console.log("Average of Array : "+getAverage([1,2,3,4]))
console.log("Reversed String : "+ reverseString("hello"))
console.log("Reversed String : "+ reverseString(undefined))
console.log("Reversed String : "+ reverseString(null))

// Display all number from 1 to 100
function displayNumbersTill100(){
    let count = 1;
    while(count <= 100 ){
        console.log(count++);
    }
}

// Display Today's date in dd/mm/yyyy
function displayTodaysDate(){
    let today = new Date();
    let formattedDate = `${today.getDate()}/${today.getMonth()}/${today.getFullYear()}`
    console.log(`Today's Date : ${formattedDate}`);
}

// Convert celsius to fahrenheit
function convertToFahrenheit(celsius){
    return (celsius*1.8)+32;
}

// Return the average of an array
function getAverage(array){
    let sum = 0;
    for(let value of array){
        sum += value;
    }
    return sum/array.length;
}

// Return the reverse of a string
function reverseString(originalString){
    if(!originalString){
        console.log("Invalid string");
        return;
    }
    let reversedString = "";
    for(let i = originalString.length-1; i>=0;i--){
        reversedString += originalString[i];
    }
    return(reversedString);
}


// Using Recursion
function reverseString2(originalString){
    return (originalString == "")?"":reverseString2(originalString.substr(1))+originalString.charAt(0);
}

