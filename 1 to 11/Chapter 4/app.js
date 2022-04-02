function userAge() {
    var userage = prompt("Enter Your Age !");
    if (userage > 18 && userage < 60) {
        alert("Welcome");
    }
    else if (isNaN(userage)) {
        alert("age is not valid");
    }
    else {
        alert("you are not old enough");
    }

}
userAge()