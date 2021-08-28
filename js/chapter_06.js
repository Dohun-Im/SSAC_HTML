// Scope

// Global Scope(전역 범위)
let name = "tom";

function sumPrint() {
  // Function scope(함수 범위)
  let sum = 50;

  for (let i = 0; i < 3; i++) {
    // Block Scope(블럭 범위)
    let msg = "hello world"; //let을 var로 바꾸면 함수 범위에서도 사용가능

    console.log(name);
    console.log(sum);
    console.log(msg);
  }
  //함수 범위
  console.log(name);
  console.log(sum);
  // console.log(msg);
}

//전역범위
console.log(name);
// console.log(sum);
// console.log(msg);

// var : Global Scope, Function Scope만 적용가능

//this
let person = {
  name: "Jack",
  print: function () {
    console.log(this.name);
    console.log(this);
  }
};

person.print();
console.log(person);

console.log(this);

let x = this;
// x.alert("msg");

function type() {
  console.log(this);
}
type();

// alert("msg");
