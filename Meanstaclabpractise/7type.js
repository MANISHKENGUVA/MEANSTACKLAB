//npm install typescript - -save-dev 
//npm install typescript -g
//tsc.cmd  7type.ts
function student(name, branch, cgpa) {
    console.log("student name:" + name);
    console.log("student branch:" + branch);
    console.log("student cgpa:" + cgpa);
}
function studentdefault(name, branch, cgpa) {
    if (name === void 0) { name = "ravi"; }
    if (branch === void 0) { branch = "cse"; }
    if (cgpa === void 0) { cgpa = 95; }
    console.log("student name:" + name);
    console.log("student branch:" + branch);
    console.log("student cgpa:" + cgpa);
}
function studentdetails(name, rollno, sgpa) {
    console.log("student name:" + name);
    console.log("student rollno:" + rollno);
    console.log("student sgpa:" + sgpa);
}
function studentmarks() {
    var s = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        s[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < s.length; i++) {
        sum += s[i];
    }
    var avg = sum / s.length;
    console.log("total marks:" + sum);
    console.log("Average marks:" + avg);
}
// Function calls
student("dinesh", "cse", 89); // Function with explicit arguments
studentdefault(); // Function with default arguments
studentdetails("vamsi", "cse", 85); // Function with explicit arguments
studentmarks(94, 97, 99, 66, 89, 85); // Function with variable number of arguments
studentdetails("sandeep", "512", 80); // Function with explicit arguments
studentmarks(100, 67, 83, 76, 98); // Function with variable number of arguments
