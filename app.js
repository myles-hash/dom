const body = document.querySelector("body");

const h1 = document.createElement("h1");
h1.textContent = "This is a heading!";
body.appendChild(h1);

const ul = document.createElement("ul");
ul.textContent = "";
body.appendChild(ul);

const li = document.createElement("li");
li.textContent = "item 1";
ul.appendChild(li);

const li2 = document.createElement("li");
li2.textContent = "item 2";
ul.appendChild(li2);

const li3 = document.createElement("li");
li3.textContent = "item 3";
ul.appendChild(li3);

function h1Remove() {
    const h1 = document.querySelector("h1");
h1.remove();
}