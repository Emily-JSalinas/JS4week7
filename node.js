//Q 1 original array
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

//Q 1.A 
function subtraction(ages) {
    let lastElement = ages[ages.length-1];  //used named variables to help make easier to read code, put in function to be used later
    let firstElement = ages[0];//gets the first element in the ages array
    return lastElement-firstElement;  //Actual subtraction of the last element by the first element
}
console.log(subtraction(ages));

//Q 1.B
ages.push(35);  //adding a number to original array
console.log(ages);
console.log(subtraction(ages));

//Q 1.C A loop to iterate through the array and calculate the average age
function average(ages) {
        let total = 0;  //used to create a variable to store the sum of ages
    for (let i = 0; i < ages.length; i++) { //loop through ages array
        total += ages[i];  //takes "i" (the elements), loops through each one and adds them to the variable "total"
}
    return total/ages.length;  //the sum of all the elements (total) divided by the length of the ages array
}
console.log(average(ages));

//Question 2:
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

//Question 2A:
let nameContainer = 0;//container for the lengths of each element
    
for (let i = 0; i < names.length; i++) {//loops through the array, one element at a time
    nameContainer += names[i].length;//adds the length of each element to the container
}
    let calculated = nameContainer/names.length;//calculates the average by taking the lengths container and dividing it by the number of elements
    console.log(calculated);
 
//Question 2B:
let nameList = "";//a container for the list of names
for(let name of names) { //loops through each name(element) of the array "names"
    nameList += name + " ";//adds each name of the array to the variable namesList. " " adds a space
}
console.log(nameList);
 
//Question 3:
let arr = [1, 2, 3, 4, 5];
//best way to access the last element of an array: 
console.log(arr[arr.length-1]);//using arr.length(4) would get the same result, but isn't dynamic. More complicated to change if a name is added

//Question 4:
//to access the first element of an array:
console.log(arr[0]);

//Question 5:
let nameLengths = [];//container for new array
for (let name = 0; name < names.length; name++) {//loops through each element in names array
        nameLengths.push(names[name].length);//takes each element(name) in the array(names) and adds it to the variable nameLengths
};
console.log(nameLengths);

//Question 6:
let sumOfLengths = 0;//container for the lengths of each element
    
for (let length = 0; length < nameLengths.length; length++) {//Loops through nameLengths
    sumOfLengths += nameLengths[length];//adds the length of each element to the container,adds them together
}
    console.log(sumOfLengths);

//Question 7:
function wordMultiple(word, n) {
    let wordRepeat = '';  //container for the repeating word
    for (let i = 0; i < n; i++) {//loops through each element of the array up to the nth element
        wordRepeat += word;//adds the word to the variable wordRepeat "n" number of times
    }
    return wordRepeat;
}
console.log(wordMultiple('Hello', 7));

//Question 8:
function fullName(firstName, lastName) {//getting the full name based on input from calling the function
    let firstLast = `${firstName} ${lastName}`;//variable that combines the first name and last name
    return firstLast//returns the first and last name
}
console.log('John', 'Smith');

//Question 9:
let numbers = [1,7,8,15,35,30];

function sum(numbers) {//gets the sum of the numbers array
    for (let i = 0; i < numbers.length; i++) {//loops through the array
    let sumOfNums = numbers[i];//adds the sum to the variable total//returns the sum
    if (sumOfNums>100) { //takes the sum and compares it to the value of 100
    return true; //gives a boolean value of "true" if the sum is greater than 100
    } else { 
    return false; //gives a boolean value of "false" if the sum is less than 100
    }
}
}
console.log(sum(numbers));

//Question 10:
let randomNum = [1,17,20,56,42,30,5,9,4,2,3];

function numAvg(randomNum) {
    let total = 0;//container for the sum of the numbers to go
    for (let i = 0; i < randomNum.length; i++) {//loops through the array 
        total += randomNum[i];//adds the sum of the numbers to the container
}
    return total/randomNum.length;//takes the sum and divides it by the total number of elements in the array
}
console.log(numAvg(randomNum));

//Question 11:
let listOfNumOne =[1,7,45,6,37,94];
let listOfNumTwo =[5,98,4,36,2,90];

function compareArr(listOfNumOne, listOfNumTwo){
    let totalOne = 0;//container for first sum of numbers
    for (let i = 0; i < listOfNumOne.length; i++) {//loops through the first array
        totalOne += listOfNumOne[i];//adds the sum of the listOfNumOne to the first container
}
    let oneAvg = totalOne/numbers.length;//variable created to use later in function to compare two averages
    let totalTwo = 0;//container for the second sum of numbers
    for (let i = 0; i < listOfNumTwo.length; i++) {//loops through second array
        totalTwo += listOfNumTwo[i];//adds the sum of the listOfNumTwo to the second container
}
    let twoAvg = totalTwo/numbers.length;//variable created to use later in function to compare two averages

    if (oneAvg>twoAvg) {//if/else statement to compare the averages, returning true if the first average is greater than the second average. It returns false otherwise
        return true;
    }
    else {
        return false;
    }
}
console.log (compareArr(listOfNumOne, listOfNumTwo));

//Question 12:
function willBuyDrink (isHotOutside, moneyInPocket) {
   if ((isHotOutside === true) && (moneyInPocket > 10.50)) {//if/else statement to take the two parameters and compare them to the answers necessary.
        return true;//returns true if it is hot outside and there is more than $10.50 in the pocket
   } else {
        return false;//returns false if at least one of the conditions isn't met
   }
}
console.log (willBuyDrink(false, 10.51));

//Question 13:
//I wanted to create a function that used multiple functions in one, so I created a function to calculate if a student has passed a class or not
let attendance = [1,1,0,1,1,1,0,1,1,1]; //1pt per day present out of 10 days
let score = [90,74,60,95,63,70,80,50,45,95];//scores of the 10 assignments

function passingGrade (attendance, score) {
    let totalAtt = 0;//container for the attendance sum
    for (let i = 0; i < attendance.length; i++) {//loops through attendance array
        totalAtt += attendance[i];//takes sum of attendance array and adds it to the container
    }
    let att = totalAtt/attendance.length*100;//takes the average,multiplies it by 100 to get a score out of 100 to avoid decimals for "cleaner" number, variable created to compare average to necessary numbers

    let totalScr = 0;//container for the scores of the assignments
    for (let i = 0; i < score.length; i++) {//loops through score array
        totalScr += score[i];//takes sum of score array and adds it to the container
    }

    let scr = totalScr/score.length;//takes the average of the scores. variable created to compare average to the necessary numbers in an easier way
    if ((att >= 80) && (scr >= 65)) {//compares the averages to the numbers necessary to pass
        return "Congratulations! You passed!";//student passes if BOTH conditions are met
    } else {
        return "I'm sorry. You did not pass. Try again next semester!";//student fails if at least one of these conditions is not met
    }
}
    console.log (passingGrade(attendance, score)); 


