
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

