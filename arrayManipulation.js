
// Task One: Update Array of Numbers
// This function takes an array as input and performs specific operations on each element.

function updateMyArray (updateArray) {
    // iterate through the array
    for (let i = 0; i < updateArray.length; i++) {
        //  Check if the current element is a number
        if (typeof updateArray[i] === 'number') {
            //  If the number is even, square it; otherwise, multiply by 3
            if (updateArray[i]  % 2 === 0) {
                updateArray[i] = updateArray[i] * updateArray[i];
            } else {
                updateArray[i] = updateArray[i] * 3;
            }
        }
    }
        // return the updated array
    return updateArray;
}

// Task Two: Format Array of Strings
// This function takes two arrays as input and modifies strings in the second array based on their lengths.

function formatArrayStrings (numArray, stringArray) {
    // iterate through the array
    for (let i = 0; i < stringArray.length; i++) {
         // Check if the length of the string is even or odd and capitalize or convert to lowercase accordingly
        if (stringArray[i].length % 2 === 0) {
            stringArray[i] = stringArray[i].charAt(0).toUpperCase() + stringArray[i].slice(1)
        } else {
            stringArray[i] = stringArray[i].charAt(0).toLowerCase() + stringArray[i].slice(1)
        }
    }
        // return the updated array in a form of an obj
    return {
        numArray: numArray,
        stringArray: stringArray
    };
}

let MyArray = [1, 32, 43, 2, 3, 6, 89];
let myStringArray = ["dog", "cockroach", "leopard", " monkey", "jagua", "kiwi"]


let arrayUpdate = updateMyArray(MyArray);
let updatedStringArray = formatArrayStrings(arrayUpdate, myStringArray)

console.log(updatedStringArray.numArray);
console.log(updatedStringArray.stringArray);

