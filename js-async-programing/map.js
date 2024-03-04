'use strict';

// data.js를 import
import { numbers, students } from './data.js';

/**
 * map()
 * map() 메소드는 배열 내의 모든 요소에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환함
 */

// map() API는 인자로 콜백함수를 넘겨줄 수 있음
// 콜백함수의 인자로 배열의 요소를 하나씩 전달해줌
// 콜백함수에서 반환하는 결과를 새로운 배열로 반환함
const result = numbers.map((number) => number * 2);
console.log(result);

// map() API로 객체의 영어점수만 배열로 반환하여 출력
console.log(
  '영어 점수',
  students.map((student) => student.english)
);

// map() API로 객체의 이름만 배열로 반환하여 출력
console.log(
  '학생 이름',
  students.map((student) => student.name)
);
