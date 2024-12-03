//Decision Making (if-else and switch)
//Leap Year Checker
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return `${year} is a leap year.`;
    } else {
        return `${year} is not a leap year.`;
    }
}


// Ticket Pricing
let age = parseInt(prompt("Enter your age:"));

let ticketPrice;

switch (true) {
    case (age <= 12):
        ticketPrice = "$10";
        break;
    case (age >= 13 && age <= 17):
        ticketPrice = "$15";
        break;
    case (age >= 18):
        ticketPrice = "$20";
        break;
    default:
        ticketPrice = "Invalid age entered.";
}

alert(`Your ticket price is: ${ticketPrice}`);


// Weather Clothing Adviser
let temperature = parseInt(prompt("Enter the current temperature in °C please:"));

let isRaining = prompt("Is it raining? (yes/no)").toLowerCase();

if (temperature > 25) {
    if (isRaining === "yes") {
        alert("It's hot and raining. Wear light clothes and carry an umbrella!");
    } else {
        alert("It's hot. Wear light clothes !");
    }
} else if (temperature >= 15 && temperature <= 25) {
    if (isRaining === "yes") {
        alert("The weather is mild and raining. Wear a light jacket and carry an umbrella!");
    } else {
        alert("The weather is mild. Wear a jacket.");
    }
} else {
    if (isRaining === "yes") {
        alert("It's cold and raining. Wear a warm jacket, waterproof boots, and take an umbrella!");
    } else {
        alert("It's cold. Wear a warm coat, scarf, and gloves!");
    }
}



//Recursion
//Fibonacci Sequence
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2); 
  }

//Palindrome Checker
function isPalindrome(str) {
    if (str.length <= 1) return true;
    if (str[0] !== str[str.length - 1]) return false;
    return isPalindrome(str.slice(1, -1)); 
  }  

 //Power Function
 function power(base, exponent) {
    if (exponent === 0) return 1; 
    return base * power(base, exponent - 1);
  } 