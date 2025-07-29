'use strict';

let text1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
let text2 = '    ABC    BC   ABC   GHI   JKL     A AC OPQ abc op gh efg';

// length(): 길이
// substring(): 특정 문자열의 지정된 위치의 문자열을 추출한다.
// indexOf(): 문자열(문자) 검색(찾는값이 있으면 위치값 반환, 없으면 -1 반환)
// lastIndexOf(): 뒤에서부터 문자열 검색, 없으면 -1 반환
// includes(): 특정 문자열 포함 유무(true/false)
// concat(): 문자열 결합
// slice(): 지정된 인덱스 위치부터, 지정인덱스-1 까지의 문자열을 가져온다
// trim(): 문자열의 앞뒤 공백 삭제
// replace(): 특정 문자(문자열)로 치환 (첫번째 검색한 문자(문자열)만 치환한다)
// replaceAll(): 특정 문자(문자열)로 치환 (모두 검색하여 치환한다)
// charAt(): 1개 문자열 추출
// charCodeAt(): 1개 문자의 아스키 코드값을 추출
// toUpperCase()
// toLowerCase()

let str = '';

str += 'length' + text1.length + '<br />';
str += 'substring(6): ' + text1.substring(6) + '<br />';
str += 'substring(6,10): ' + text1.substring(6, 10) + '<br />';
str += "indexOf('abc'): " + text2.indexOf('abc') + '<br />';
str += "lastIndexOf('abc'): " + text2.lastIndexOf('abc') + '<br />';
str += "includes('abc'): " + text2.includes('abc') + '<br />';
str += "text1.concat(text2): " + text1.concat(text2) + '<br />';
str += "text1.concat(text2.trim()): " + text1.concat(text2.trim()) + '<br />';
str += "text1.slice(5): " + text1.slice(5) + '<br />';
str += "text1.slice(5,10): " + text1.slice(5,10) + '<br />';
str += "text1.replace('abc', 'opq'): " + text1.replace('abc', 'opq') + '<br />';
str += "text2.replace('BC', '12345'): " + text2.replace('BC', '12345') + '<br />';
str += "text2.replaceAll('BC', '12345'): " + text2.replaceAll('BC', '12345') + '<br />';
str += text1.charAt(5) + '<br />';
str += text1.charCodeAt(5) + '<br />';


demo.innerHTML = str;

let tel = '010-1234-5678';
let tels = tel.split('-');

console.log(tels[0]);
console.log(tels[1]);
console.log(tels[2]);
console.log('');

tels.forEach((data) => console.log(data));

console.log(tels.join('/'));