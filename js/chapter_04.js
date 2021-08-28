function compareOne() {
  if (1 === "1") {
    console.log("==true");
  } else {
    console.log("==false");
  }
}

//함수 사용 -> 호출(call)
compareOne();

function compareOne(number) {
  if (number === "1") {
    console.log("==true");
  } else {
    console.log("==false");
  }
}

compareOne(1); // 1 === '1'
compareOne(2); // 2 === '1'
compareOne(3); // 3 === '1'

function sum(number1, number2) {
  console.log(number1 + number2);
}

sum(1, 2);

// 함수를 호출한 위치에 값을 되돌려 주는 것 : return

function sumReturn(number1, number2) {
  let sum = number1 + number2;
  return sum;
}

let bb = sumReturn(1, 4) + 10;
console.log(bb);
console.log(bb + 10);

function hello1() {
  console.log("hello Function");
}

let hello2 = function () {
  console.log("hello Function 2");
};

let hello3 = () => {
  console.log("hello function 3");
};

let hello4 = () => console.log("hello function 4");

hello1();
hello2();
hello3();
hello4();

let hello5 = (number) => {
  console.log(number);
};

let hello6 = (number) => console.log(number);
// 매개변수가 1개일때 number의 소괄호 생략 가능!(저장하면 다시 생기긴하네)
let hello7 = (number) => console.log(number);

hello5(1);
hello6(2);
hello7(3);
