// Map, filter, reduce - O/P based questions
// Ques 1

let students = [
    { name: "Aazim", rollNumber: 32, marks: 89 },
    { name: "Sadan", rollNumber: 5, marks: 54 },
    { name: "Faizan", rollNumber: 17, marks: 35 },
    { name: "Faisal", rollNumber: 36, marks: 59 },
];

let student = students.map((stu) => {
    return stu.name.toUpperCase();
})
// console.log(student);



// ================================================

// Return only details of those who scored more than 60 marks ann rollNumber greater than 15

let passStud = students.filter((stu) => {
    return stu.marks > 60 && stu.rollNumber > 15;
})
// console.log(passStud);



// ================================================

// Sum of marks of all students

let sumMarks = students.reduce((acc, curr) => {
    return acc + curr.marks
}, 0)
// console.log(sumMarks);




// ================================================

// Return only students name who scored more than 60

let nameStud = students.filter((stu) => stu.marks > 60).map((stu) => stu.name)
// console.log(nameStud);




// =================================================

// Return total marks for students with marks greater than 60 after 20 marks have been added to those who scored less than 60

let totalMarks = students.map((stu) => {
    if (stu.marks < 60) {
        stu.marks += 20
    }
    return stu
}).filter((stu) => stu.marks > 60).reduce((acc, curr) => acc + curr.marks, 0)
console.log(totalMarks);

