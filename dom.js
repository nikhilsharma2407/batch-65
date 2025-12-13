const btnEl = document.getElementById("btn");

const ip = document.createElement("input");
ip.placeholder = "Enter your name";
ip.type = "text";
ip.id = "name";
const formEl = document.getElementById("form");

formEl.appendChild(ip);

btnEl.addEventListener("click", (e) => {
  const el = document.createElement("span");
  el.innerText = ip.value;
  document.body.appendChild(el);
});
