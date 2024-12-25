function calculateAge(birthYear, currentYear) {
    const age = currentYear - birthYear;
    console.log(`You are ${age} years old`);
    return age;
}

const currentYear = new Date().getFullYear();
const birthYear = parseInt(prompt("Enter your birth year:"));

if (!isNaN(birthYear)) {
    calculateAge(birthYear, currentYear);
} else {
    console.log("Invalid input. Please enter a valid year.");
}
