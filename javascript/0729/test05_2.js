'use strict';

// 오늘 날짜: Date()
const toDay = new Date();
const year = toDay.getFullYear(); // 연도 4자리
const month = toDay.getMonth() + 1; // 월 1자리(0월~11월)
const date = toDay.getDate(); // 일 2자리
const hour = toDay.getHours(); // 시간
const minute = toDay.getMinutes(); // 분
const second = toDay.getSeconds(); // 초

let str = '';
str += 'new Date(): ' + toDay + '<br />';
str += '오늘 년도: ' + year + '년<br />';
str += '오늘 월: ' + month + '월<br />';
str += '오늘 일: ' + date + '일<br />';
str += '오늘 시: ' + hour + '시<br />';
str += '오늘 분: ' + minute + '분<br />';
str += '오늘 초: ' + second + '초<br />';
str += '오늘 초(밀리초): ' + toDay.getMilliseconds() + '초<br />';
str += '오늘 초(국제표준시): ' + toDay.getTime() + '초<br />';

// 0: 일, 1: 월, 2: 화, 3: 수, 4: 목, 5: 금, 6: 토
let strWeek = ['일', '월', '화', '수', '목', '금', '토'];
let week = toDay.getDay();
str += '오늘 요일: ' + week + '(숫자요일)<br />';
str += '오늘 요일: ' + strWeek[week] + '요일<br />';

// 이번 달의 마지막 일자는?
// let lastDate = new Date(year, month , 0);
let lastDate = new Date(2024, 2 , 0);
str += '이번달 마지막 일자는: ' + lastDate.getDate();

demo.innerHTML = str;