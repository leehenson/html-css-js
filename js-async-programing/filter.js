'use strict';

// data.js를 import
import { numbers, students, fruits } from './data.js';

/**
 * filter()
 * filter() 메소드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열을 반환함
 */

// numbers 배열 중에서 짝수인 요소만 새로운 배열에 담아서 반환함
console.log(
  '짝수만 출력해주세요.',
  numbers.filter((number) => number % 2 === 0)
);

// numbers 배열 중에서 홀수인 요소만 새로운 배열에 담아서 반환함
console.log(
  '홀수만 출력해주세요.',
  numbers.filter((number) => number % 2 === 1)
);

// student 객체 중에서 객체의 영어 점수가 90점 이상인 객체만 새로운 배열에 담아서 반환함
console.log(
  '영어 점수가 90점 이상인 학생들은?',
  students.filter((student) => student.english >= 80)
);
