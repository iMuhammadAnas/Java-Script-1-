function userAge() {
    var age = prompt("Enter Your Age !");
    if (age <= 60) {
        alert("Welcome");
    }
    else if (age > 60) {
        alert("you are not old enough");
    }
    else if (isNaN(age)) {
        alert("age is not valid");
    }
}
userAge();