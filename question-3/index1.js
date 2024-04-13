//this problem i.e Name:undefined earns undefined..... //nestedfunction can be resolved as:-
var employee1 = {
    firstName: "John",
    lastName: "Smith",
    age: 39,
    salary: 85000,
    designation: "Engineer",
    getDetails: function () {
        var that = this; // that is used to maintain a reference to the car object within the nested function, ensuring that its properties are accessed correctly.
        console.log("Name:".concat(this.firstName, " earns ").concat(this.salary, "..... //getdetails")); //here this refers to the employee object.
        function nestedfunction() {
            console.log("Name:".concat(that.firstName, " earns ").concat(that.salary, "..... //nestedfunction")); //When this is used inside a nested function within an object's method, it does not refer to the object itself but to the global object (in a browser, window). 
        }
        nestedfunction();
    },
};
employee1.getDetails();
//Author-Huma Mohsin 
