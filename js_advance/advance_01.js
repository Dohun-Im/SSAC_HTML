// HTML 4
console.log(document.getElementById("text1"));
console.log(document.getElementById("text2"));
console.log(document.getElementsByTagName("div"));
//HTML 5
//queryselector 는 제일 위에 하나만 가져옴
console.log(document.querySelector("#text1"));
console.log(document.querySelector(".text2"));
console.log(document.querySelector("div"));
//queryselectorall 은 전체 object 가져옴
console.log(document.querySelectorAll(".text2"));
console.log(document.querySelectorAll("div"));

document.getElementById("text1").innerHTML = "hello world";

const para = document.createElement("p");
const node = document.createTextNode("hello");
para.appendChild(node);
document.querySelectorAll(".text2")[0].appendChild(para);

const para1 = document.createElement("p");
const node1 = document.createTextNode("hello");
para.appendChild(node1);
document.querySelectorAll(".text2")[1].appendChild(para1);

let text2Element = document.querySelectorAll(".text2");
for (let i = 0; i < text2Element.length; i++) {
  let p = document.createElement("p");
  let n = document.createTextNode("hello HTML5");
  let el = p.appendChild(n);
  text2Element[i].appendChild(el);
}

// document.querySelector(".text2").appendChild("<p>Append Node..</p>");

$(function () {
  $(".text2").eq(0).append("<span>Append Jquery Node</span>");
});
