  'use strict';

  function atom1() {
    alert("atom1함수: ");
  }
  function atom2(msg) {
    alert("atom2함수: " + msg);
  }
  function atom3(su) {
    alert("atom3함수: " + (su+100));
  }
  function atom4(su1, su2) {
    alert("atom3함수: " + (su1+su2) + "\n" + (su1-su2) + "\n" + (su1*su2) + "\n" + (su1/su2));
  }
  function atom5(name, age) {
    let intAge =  parseInt(age);
    alert("atom3함수: " + "\n성명: " + name + "\n나이: " + (intAge+1));
  }