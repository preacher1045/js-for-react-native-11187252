#### STUDENT ID: 11187252
#### COURSE CODE: DCIT 202
## 
##
##
##### INTRODUCTION

In this assignment we are tasked with the creation of functions that would perfrom specific tasks.

##### THING LEARNT
   -  How to create JavaScript function 
   - How to mainpulate arrays
##  
#### EXTENSIONS

1. Github markdown preview by Matt Briener

  ###### TASK 1
  In this task we create a function that takes in an array as an argument and returns a new/updated array where each even number within the array is squared and each odd number is multiplied by 3

![code image](/screenshot/updateArray.png)

###### EXPLANATION
First we create a function called "updateArray" and within the funcition we create a for loop that would iterate through our array. And within the for loop, we have an if-statement that checks if the current element is an number if it is, we then chcek if the current element is an even or odd number and then we perform thier appropriate operation on it. 

###### TASK 2
In this task we create a function that that takes in two arrays as an argument (updateArray and stringArray) and then modifies the one of the arrays (stringArrays) based on the lenght of each element

 ![code image](/screenshot/formatStringArray.png)

###### EXPLANATION
we create a function called "formatArrayString" and within it we create a for loop to iterate through the array and then we check wether the lenght of each element is either even or odd.

When the element is even we take the first charactor of the element capitalize it and then concatenate it with the rest of the letters and this is achieved using the code below

![string concatenation](/screenshot/slice.png)

The same applies to when the lenght of the element is odd, the only thing we change is the "toUpperCase()" which becomes "toLowerCase()"

To run the code we first create the arrays and then we call the function and then we "console.log" it in order to view the output

![array](/screenshot/arrays.png)

###### OUTPUT
![output image](/screenshot/output.png)

###### TASK 3
In task 3 we create a function thata takes in two arguments namely modifiedName and originalName and then create and  object array.

![task two image](/screenshot/userprofile.png)

###### EXPLANATION
Within the function we create an empty array called "userProfile" which would be modified later. within the code we have a for loop that iterates through the array "originalName" and then creates an object array called "userProfile", then we push "userProfile" to the empty array then we return "the updated empty array.

![array](/screenshot/userprofileArray.png)

###### OUTPUT
![output](/screenshot/userProfile%20Output.png)