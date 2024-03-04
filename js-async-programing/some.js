'use strict';

// data.js를 import
import { numbers, students, fruits } from './data.js';

/**
 * some()
 * some() 메소드는 배열 안의 어떤 요소라도 주어진 판별 함수를 통과하는지 테스트함.
 * 하나라도 통과가 된다면 true를 모두 통과하지 않으면 false를 반환함
 */

// some() 메소드를 사용하여 배열에 '배'라는 데이터가 있으면 true를 출력
console.log(
  '과일 중에 배가 있나요?',
  fruits.some((fruit) => fruit === '배')
);

// some() 메소드를 사용하여 배열에 7이상인 숫자가 있으면 true를 출력
console.log(
  '숫자에 7이상인 숫자가 있나요?',
  numbers.some((number) => number >= 7)
);

// 객체 중에 객체의 수학 점수 100점이 있으면 true 출력
console.log(
  '수학 점수가 100점인 학생이 있나요?',
  students.some((student) => student.mathematics === 100)
);

// 객체 중에서 객체의 영어 점수가 50점 미만이 있으면 true 출력
console.log(
  '영어 점수가 50점 미만인 학생이 있나요?',
  students.some((student) => student.english < 50)
);

// 배열 중에서 '배'를 발견하여 true가 되기 떄문에 더 이상 계산할 이유가 없어 '배'까지만 출력됨
console.log(
  '과일 중에 배가 있나요?',
  fruits.some((fruit, index) => {
    console.log('index: ', index, 'fruit: ', fruit);
    return fruit === '배';
  })
);
