let person = {
  name: "Jack",
  print: function () {
    console.log(this.name);
    console.log(this);
  }
};

person.print();
// console.log(person);

// console.log(this);
