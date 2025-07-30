'use strict';

// 숫자함수는 Math() 클래스에서 가져온다
// max(), min(), ceil(): 올림, floor(): 내림, toFixed(): 반올림, 
// trunc(): 버림, power(): 거듭제곱, abs(): 절대값, sqrt(): 제곱근, random()

let su1 = 10, su2 = -20, su3 = 3.156, su4 = -3.156, su5 = 1234.5;
let str = '';

str += 'max(): ' + Math.max(su1, su2, su3, su4, su5) + '<br />';
str += 'min(): ' + Math.min(su1, su2, su3, su4, su5) + '<br />';
str += 'ceil(): ' + Math.ceil(su3) +'<br />';
str += 'ceil(): ' + Math.ceil(su4) +'<br />';
str += 'floor(): ' + Math.floor(su3) +'<br />';
str += 'floor(): ' + Math.floor(su4) +'<br />';
str += 'trunc(): ' + Math.trunc(su3) +'<br />';
str += 'trunc(): ' + Math.trunc(su4) +'<br />';
str += 'pow(a,b): ' + Math.pow(2,5) + '<br />';
str += 'abs(): ' + Math.abs(su3) +'<br />';
str += 'abs(): ' + Math.abs(su4) +'<br />';
str += 'sqrt(): ' + Math.sqrt(25) + '<br />';
str += 'toFixed(): ' + su3.toFixed(2) + '<br />';
str += 'toFixed(): ' + su4.toFixed(2) + '<br />';
str += 'toFixed(): ' + su5.toFixed(0) + '<br />';

str += 'random(): ' + Math.random() + '<br />';
str += 'random(): ' + (parseInt(Math.random()*10)+1) + '<br />';
str += 'random(): ' + (parseInt(Math.random()*(10-5+1))+5) + '<br />';
str += '' + '<br />';
str += '' + '<br />';
str += '' + '<br />';

demo.innerHTML = str;