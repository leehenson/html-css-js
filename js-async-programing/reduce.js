'use strict';

// data.js를 import
import { numbers, students, fruits } from './data.js';

/**
 * reduce()
 * reduce() 메소드는 배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결과값을 반환함
 *
 * 리듀서 함수는 누적 값(acc), 현재 값(cur), 현재 인덱스(idx), 원본 배열(src) 이러한 매개변수를 갖는 함수를 말함
 */

// reduce() 메소드 뒤에는 초기값을 지정할 수 있음
// 초기값을 지정하게 되면 acc는 0으로 초기화됨
// cur값은 배열 안에 있는 요소의 값
// idx는 배열의 인덱스 값
// acc는 결과로 반환한 값을 다시 acc 매개변수로 받음
const result = numbers.reduce((acc, cur, idx, src) => {
  console.log('acc: ', acc, 'cur: ', cur, 'idx: ', idx);
  return acc + cur;
}, 0);

console.log('result: ', result);

// fruits 배열의 중복 값 없애기
console.log(fruits);
// 빈 배열을 초기값으로 지정
const result2 = fruits.reduce((acc, cur) => {
  // 새로운 배열에 현재의 값이 포함되어 있는지 확인하여, 포함이 되어 있지 않다면, 새로운 배열에 현재값 추가
  console.log('acc: ', acc, 'cur: ', cur);
  if (acc.includes(cur) === false) {
    acc.push(cur);
  }
  return acc;
}, []);

console.log(result2);
