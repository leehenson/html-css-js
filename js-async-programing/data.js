export const numbers = [1, 2, 3, 4, 5, 6, 7];

// 객체 생성을 위해서 Student 클래스를 정의
export class Student {
  // 생성자에서 이름, 국어점수, 영어점수, 수학점수를 인자로 받도록 함
  constructor(name, koreanLanguage, english, mathematics) {
    // 속성으로 매개변수로 전달 받은 인자를 할당
    this.name = name;
    this.koreanLanguage = koreanLanguage;
    this.english = english;
    this.mathematics = mathematics;
  }
}

// 객체 생성
const student1 = new Student('홍길동', 95, 87, 75);
const student2 = new Student('김길동', 67, 80, 100);
const student3 = new Student('고길동', 89, 75, 80);
const student4 = new Student('최길동', 48, 52, 98);

// 객체를 담고 있는 배열을 생성
export const students = [student1, student2, student3, student4];

// 과일 정보를 담고 있는 배열을 생성하여 export
export const fruits = ['사과', '딸기', '배', '참외', '딸기', '수박'];
