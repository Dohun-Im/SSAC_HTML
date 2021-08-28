// Array, Object, Class

const arr = ["a", "b", "c", "d", "e"];

const arr1 = new Array("가", "나", "다");
console.log(arr[0]);
console.log(arr1[0]);

arr[2] = "z";
console.log(arr[2]);

for (let i = 0; i < 5; i++) {
  console.log(arr[i]);
}

// 배열 데이터는 배열 객체 데이터 형태
// 배열 개수 확인 : 배열객체이름.lenght

console.log(arr.length);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

console.log(window);

// window.alert("hello world");

const car = {
  name: "fait",
  model: "500",
  color: "white",
  print: function () {
    console.log(this.name + this.model + this.color);
  }
};

car.name = "kia";
car["color"] = "red";
// 속성 변경시 대괄호 쓰는 경우도 있음 like array

console.log(car.name);
console.log(car["color"]);

car.print();

//class
class PersonClass {
  // property 설정
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  // method 설정
  print() {
    console.log(this.name, this.year);
  }
}

let tom = new PersonClass("Tom", "10");

console.log(tom.name, tom.year);

tom.print();
