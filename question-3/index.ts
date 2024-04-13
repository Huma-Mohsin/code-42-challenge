// // Explain how the this keyword changes its value when used inside a nested function within a method.

// Explain & TIP: When this is used inside a nested function within an object's method, it does not refer to the object itself but to the global object (in a browser, window). This behavior often requires workarounds like assigning this to another variable in the outer function.

const employee = {
  firstName: "John",
  lastName: "Smith",
  age: 39,
  salary: 85000,
  designation: "Engineer",
  getDetails: function () {
    console.log(`Name:${this.firstName} earns ${this.salary}..... //getdetails`); //here this refers to the employee object.
    function nestedfunction() {
      console.log(
        `Name:${this.firstName} earns ${this.salary}..... //nestedfunction`
      ); //When this is used inside a nested function within an object's method, it does not refer to the object itself but to the global object (in a browser, window). 
    }
    nestedfunction();
  },
};
employee.getDetails();
//Author-Huma Mohsin
