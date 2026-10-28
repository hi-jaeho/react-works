// 등급
type Grade = 'A' | 'B' | 'C' | 'F';

// 과목 객체
interface Course{
    courseId: number, //과목 Id
    courseName: String, // 과목명
    grade: Grade
}

// 학생 객체 정의
interface Student{
    id: number,
    name: String,
    subjects: Course[],
}

let std1: Student = {
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
}

console.log("==== Student 1 ====");
std1.subjects.forEach(subject => console.log(`과목명: ${subject.courseName}, 등급: ${subject.grade}`));