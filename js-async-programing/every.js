'use strict';

// data.js를 import
import { numbers, students, fruits } from './data.js';

/**
 * every()
 * every() 메소드는 배열 안의 모든 요소가 주어진 판별 함수를 통과하는지 테스트함
 * 모든 요소가 판별 함수에 통과할 경우에만 true를 반환
 */

// numbers 배열 안에 요소들이 모두 8이하일 경우에만 true를 반환
console.log(
  '숫자가 모두 8이하 인가요?',
  numbers.every((number) => number <= 8)
);

// students 배열의 객체 중에서 객체의 수학 점수가 모두 80점 이상인 경우에만 true를 반환
console.log(
  '학생들의 수학 점수가 모두 80점 이상인가요?',
  students.every((student) => student.mathematics >= 80)
);
