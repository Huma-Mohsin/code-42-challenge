// //Question 125: Modify a method in an object to use the this keyword to access another property in the same object.

// Explain & TIP: You can leverage the this keyword to interact with multiple properties within the same object, providing a cohesive way to manipulate internal data.

const student={
    firstName:"HUMA",
    lastName:"Mohsin",
    enrolledCourse:"Generative Artifical Intelligence",//add some properties
    slot:"7 PM to 10 PM",
    getdetails:function(){
return `${this.firstName} Has Enrolled In ${this.enrolledCourse} .`//to access another property in the same object.

    }
}
console.log(student.getdetails());
//Author-Huma Mohsin

