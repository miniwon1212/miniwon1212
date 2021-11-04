/**
var str = 'Hello';
var num = 1; 
var bool = true;

var foo = 'string';
console.log(typeof foo) // string
foo = 1;
console.log(typeof foo); // number
 */

// 자료형
var integer = 10; // 정수
var double = 10.12; // 실수
var negative = -20; //음의 정수
var binary = 0b01000001; // 2진수
var octal = 0o101; // 8진수
var hex = 0x41; // 16진수

console.log(binary); //65
console.log(octal); // 65
console.log(hex); //65

// 표기법만 다를뿐 같은 값
console.log(binary === octal); // true
console.log(octal === hex);  // true

console.log(1 === 1.0); // ture

var result = 4 / 2;
console.log(result); // 2
result = 3 / 2;
console.log(result); // 1.5

//양의 무한대 음의 무한대
var pInf = 10 / 0; // 양의 무한대
console.log(pInf) // Infinity

var nInf = 10 / -0; // 음의 무한대
console.log(nInf); // -Infinity

var nan = 1 * 'string'; // 산술 연산 불가 
console.log(nan); // NaN

// string (문자열)
var str = "string"; // 큰 따옴표
str = 'string'; // 작은 따옴표
str = `string`; // 백틱(ESC 템플릿 리터럴)

str = "큰 따옴표로 감싼 문자열 내의 '작은 따옴표'는 문자열이다.";
str = '작은 따옴표로 감싼 문자열 내의 "큰 따옴표"는 문자열이다.';

var str = 'Hello';
str = 'world';

var str = 'string';
// 문자열은 유사배열이다.
for(var i = 0; i < str.length; i++){
    console.log(str[i]);
}

// 문자열을 변경할 수 없다. 
str[0] = 'S';
console.log(str); // string

var str = 'string';
console.log(str); // string

str = 'String';
console.log(str); // string

str += ' test';
console.log(str); // String test

str = str.substring(0, 3);
console.log(str); // Str

str = str.toUpperCase();
console.log(str); // STR