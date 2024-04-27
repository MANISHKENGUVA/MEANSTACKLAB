//npm install typescript - -save-dev 
//npm install typescript -g
//tsc.cmd  7type.ts

function student(name: string, branch: string, cgpa: number) {
    console.log("student name:" + name);
    console.log("student branch:" + branch);
    console.log("student cgpa:" + cgpa);
}

function studentdefault(name: string = "ravi", branch: string = "cse", cgpa: number = 95) {
    console.log("student name:" + name);
    console.log("student branch:" + branch);
    console.log("student cgpa:" + cgpa);
}

function studentdetails(name: string, rollno: string, sgpa: number) {
    console.log("student name:" + name);
    console.log("student rollno:" + rollno);
    console.log("student sgpa:" + sgpa);
}

function studentmarks(...s: number[]) {
    let sum: number = 0;
    for (let i = 0; i < s.length; i++) {
        sum += s[i];
    }
    const avg: number = sum / s.length;
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
