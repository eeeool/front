  'use strict';

    // 클래스 만들기
    class Member {
      // 필드명
      // name;
      // age;

      // 기본 생성자
      // constructor() {}

      // 사용자 정의 생성자
      constructor(name, age) {
        this.name = name;
        this.age = age;
      }

      // getter/setter
      get name() {
        return this._name;
      }
      set name(name) {
        this._name = name;
      }

      get age() {
        return this._age;
      }
      set age(age) {
        if (age < 1) age = 1;
        this._age = age;
      }

      // 메소드
      memberPrint() {
        let job = '학생';
        console.log(`1. 성명: ${name} 나이: ${this.age}, 직업: ${job}`);
      }
      memberPrint(job) {
        // let job = '학생';
        console.log(`1. 성명: ${name} 나이: ${this.age}, 직업: ${job}`);
      }

      // 삼각형 면적 구하는 메소드
      getArea(r) {
        return r * r * 3.14;
      }
    }