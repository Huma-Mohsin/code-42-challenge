// Question 124: Create a function inside an object that returns the object's own name property using the this keyword.
// Explain & TIP: The this keyword in an object's method refers to the object itself, making it straightforward to access its properties from within its methods.
//create an object first then inside an object , we have to create a function i.e
var person = {
    firstName: "HUMA",
    lastName: "MOHSIN",
    FullName: function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    }
};
console.log("Full Name Of A Person Is", person.FullName());
//Author-Huma Mohsin
