let inputs = document.getElementById("input-box");
let text = document.querySelector(".umng");
let btn = document.querySelector(".btn");

let newEleArr = JSON.parse(localStorage.getItem("todoItems")) || [];

function Add() {
  if (inputs.value == "") {
    alert("please enter Task");
  } else {
    newEleArr.push(inputs.value);
    localStorage.setItem("todoItems", JSON.stringify(newEleArr));
    showData();
    inputs.value = "";
  }
}

function showData() {
  newEleArr = JSON.parse(localStorage.getItem("todoItems")) || [];
  text.innerHTML = "";
  newEleArr.forEach((item, index) => {
    let li = document.createElement("li");
    let p = document.createElement("span");
    let cross = document.createElement("button");
    cross.classList.add("cross");

    p.innerText = item;
    cross.innerText = "+";
    cross.dataset.index = index;

    li.appendChild(p);
    li.appendChild(cross);
    text.appendChild(li);
  });
}

text.addEventListener("click", (event) => {
  if (event.target.classList.contains("cross")) {
    let index = event.target.dataset.index;
    newEleArr.splice(index, 1);
    localStorage.setItem("todoItems", JSON.stringify(newEleArr));
    showData();
  }
});

showData();
