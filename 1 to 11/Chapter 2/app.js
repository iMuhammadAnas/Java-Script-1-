function userAge() {
    var userage = prompt("Enter your age");

    if (userage >= 18) {
        alert("Welcome");
    }
    else if (userage < 18) {
        alert("Child is not allowed !")
    }
    else if (isNaN(userage)) {
        alert("Please Enter Number");
    }
}
userAge()

let check = isNaN("70")
console.log(check);