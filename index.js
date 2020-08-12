/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

const votingAge = 19;
if (votingAge > 18) {
    console.log(true);
}else {
    console.log(false);
}

//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let book = "Harry Potter";
let readBefore = "yes";

if (readBefore === "yes") {
    book = "Eragon";
}
console.log(book);


//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

console.log(Number("1999"))



//Task d: Write a function to multiply a*b 

const multiplyArrow = (a, b) => a * b;
console.log(multiplyArrow(2,3));


/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

function dogAge (humanAge) {
    let dogYears = humanAge * 7;
    return dogYears
}

console.log(dogAge(19));



/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  
function dogFeeder (pounds, age) {
    let food = 0;
    if (age >= 1) {
        if (pounds <= 5) {
            food = pounds * .05;
        }else if (pounds <= 10) {
            food = pounds * .04;
        }else if (pounds <= 15) {
            food = pounds * .03;
        }else if (pounds > 15) {
            food = pounds * .02;
        }
    }else if (age < 1) {
        if (age >= .167 && age <= .333) {
            food = pounds * .1;
        }else if (age > .333 && age <= .583) {
            food = pounds * .05;
        }else if (age > .583 && age <1) {
            food = pounds * .04;
        }
    }
    return food;
}

console.log(dogFeeder(15,1));

/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

function rockPaperScissors (playerChoice) {
    let computerResult = "undecided";
    let computerChoice = Math.floor(Math.random() * (4 -1)+ 1);
    if (computerChoice === 1) {
        computerResult = "rock";
        if (playerChoice === "paper") {
            console.log("The computer selected rock, so the player wins!")
        }else if (playerChoice === "scissors") {
            console.log("The computer selected rock, so the player loses!")
        }else if (playerChoice === "rock") {
            console.log("Both player and computer selected rock, it's a tie!")
        }
    }else if (computerChoice === 2) {
        computerResult = "paper";
        if (playerChoice === "paper") {
            console.log("Both player and computer selected paper, it's a tie!")
        }else if (playerChoice === "scissors") {
            console.log("The computer selected paper, so the player wins!")
        }else if (playerChoice === "rock") {
            console.log("The computer selected paper, so the player loses!")
        }
    }else if (computerChoice === 3) {
        computerResult = "scissors";
        if (playerChoice === "paper") {
            console.log("The computer selected scissors, so the player loses!")
        }else if (playerChoice === "scissors") {
            console.log("Both player and computer selected scissors, it's a tie!")
        }else if (playerChoice === "rock") {
            console.log("The computer selected scissors, so the player wins!")
        }
    }
}

console.log(rockPaperScissors("paper"));
  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

const kmToMilesFunction = (km) => km * .621371;
console.log(kmToMilesFunction(3));



//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
const feetToCm = (feet) => feet * 30.38;
console.log(feetToCm(3));



/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  
function annoyingSong (bottleNum) {
    let bottlesLeft = bottleNum;
    while (bottlesLeft > 0) {
        bottlesLeft = bottlesLeft - 1;
        bottlesLeftWord = bottlesLeft.toString();
        bottleNumWord = bottleNum.toString();
        console.log(bottleNumWord," bottles of soda on the wall, ",bottleNumWord," bottles of soda, take one down pass it around ",bottlesLeftWord," bottles of soda on the wall!");
        bottleNum = bottlesLeft;
    }
}

console.log(annoyingSong(5));


/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  
function gradeCalculator (grade) {
    let letterGrade = "unknown";
    if (grade >= 90) {
        letterGrade = "A";
    }else if (grade >= 80) {
        letterGrade = "B";
    }else if (grade >= 70) {
        letterGrade = "C";
    }else if (grade >= 60) {
        letterGrade = "D";
    }else if (grade <60) {
        letterGrade = "F";
    }
    return letterGrade;
}

console.log("Your letter grade is",(gradeCalculator(89.75)));
  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method


function vowelCounter (string) {
    const vowel = ["a", "e", "i", "o", "u"]
    let lowerCaseString = string.toLowerCase();
    let lowerCaseArray = lowerCaseString.split("");
    let vowelCount = 0;
    for (let x = 0; x < lowerCaseArray.length; ++x) {
        if (lowerCaseArray.includes(vowel)) {
            vowelCount = vowelCount + 1;
        }
    }
    return vowelCount;
}
console.log("Number of vowels is",(vowelCounter("Hey")))


/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object

let playerChoice = prompt("Pick one: rock, paper, or scissors.")

function newRockPaperScissors (playerChoice) {
    let lowerPlayerChoice = playerChoice.toLowerCase();
    let computerResult = "undecided";
    let computerChoice = Math.floor(Math.random() * (4 -1)+ 1);
    if (computerChoice === 1) {
        computerResult = "rock";
        if (lowerPlayerChoice === "paper") {
            console.log("The computer selected rock, so the player wins!")
        }else if (lowerPlayerChoice === "scissors") {
            console.log("The computer selected rock, so the player loses!")
        }else if (lowerPlayerChoice === "rock") {
            console.log("Both player and computer selected rock, it's a tie!")
        }
    }else if (computerChoice === 2) {
        computerResult = "paper";
        if (lowerPlayerChoice === "paper") {
            console.log("Both player and computer selected paper, it's a tie!")
        }else if (lowerPlayerChoice === "scissors") {
            console.log("The computer selected paper, so the player wins!")
        }else if (lowerPlayerChoice === "rock") {
            console.log("The computer selected paper, so the player loses!")
        }
    }else if (computerChoice === 3) {
        computerResult = "scissors";
        if (lowerPlayerChoice === "paper") {
            console.log("The computer selected scissors, so the player loses!")
        }else if (lowerPlayerChoice === "scissors") {
            console.log("Both player and computer selected scissors, it's a tie!")
        }else if (lowerPlayerChoice === "rock") {
            console.log("The computer selected scissors, so the player wins!")
        }
    }
}

console.log(newRockPaperScissors(playerChoice));
