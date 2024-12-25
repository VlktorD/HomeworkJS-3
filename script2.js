function convertToHumanAge() {
    var dogAge = document.getElementById("dogAge").value;
    if (dogAge) {
        var humanAge = dogAge * 7;
        console.log("The dog's age in human years is: " + humanAge);
    } else {
        console.log("Please enter a valid dog age.");
    }
}

function convertToDogAge() {
    var humanAge = document.getElementById("humanAge").value;
    if (humanAge) {
        var dogAge = humanAge / 7;
        console.log("The human's age in dog years is: " + dogAge);
    } else {
        console.log("Please enter a valid human age.");
    }
}
