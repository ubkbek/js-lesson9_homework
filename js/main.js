// function
function normolizeNumber(arr){
    var result = [];

    for (var i = 0; i < arr.length; i++) {
        result[i] = Math.round(arr[i]);
        if(result[i] < 0) result[i] = result[i] * -1;
    }
    return result;
}


// variables
var newArray = [];
var arraySize = prompt("Enter size of your Array");

// contitions
if(arraySize == 0) alert("iltimos 0 dan katta son kiritng")
if(arraySize < 0) alert("iltimos musbat kiritng")
if(arraySize != Math.round(arraySize)) alert("iltimos butun son kiritng")


for (let i = 0; i < arraySize; i++) {
    newArray[i] = prompt(`A[${i}] - elementni kiriting`)
}

alert(normolizeNumber(newArray));