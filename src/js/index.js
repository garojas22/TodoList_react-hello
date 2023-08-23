//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";


ReactDOM.render(<Home/>, document.querySelector("#app"));

const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");

addBtn.addEventListener("click", (a) => {
    a.preventDefault();

const text = input.value;

if (text !== "") {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = text;

    li.appendChild(p);
    li.appendChild(addDeleteBtn());
    ul.appendChild(li);

    input.value = "";
    empty.style.display = "none";
}
});

function addDeleteBtn() {
    const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "X";
    deleteBtn.className = "btn-delete";
    
    deleteBtn.addEventListener("click", (a) => {
        const item = a.target.parentElement;
        ul.removeChild(item);
    
        const items = document.querySelectorAll("li");
    
        if (items.length === 0) {
        empty.style.display = "block";
        }
    });
    
    return deleteBtn;
}
