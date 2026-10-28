"use strict";
let std1 = {
    id: 1,
    name: 'Andy',
    subjects: [
        {
            courseId: 101,
            courseName: "초급 일본어1",
            grade: 'A'
        },
        {
            courseId: 102,
            courseName: "기초 양자역학",
            grade: 'F'
        }
    ]
};
console.log("==== Student 1 ====");
std1.subjects.forEach(subject => console.log(`과목명: ${subject.courseName}, 등급: ${subject.grade}`));
