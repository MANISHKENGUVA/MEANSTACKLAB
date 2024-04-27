//npm install typescript - -save-dev 
//npm install typescript -g
//tsc.cmd  7type.ts
var Student = /** @class */ (function () {
    function Student(code, name, grade) {
        this.studname = name;
        this.studcode = code;
        this.grade = grade;
    }
    Student.prototype.display = function () {
        console.log("name:", this.studname);
        console.log("code:", this.studcode);
        console.log("grade:", this.grade);
    };
    return Student;
}());
var obj1 = new Student(9491825377, 'dinesh', 'A+');
obj1.display();
