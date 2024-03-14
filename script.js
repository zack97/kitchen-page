// Data
import { burgerdata } from "./burgerdata.js";
import { chips } from "./chipsdata.js";

const burgerdiv = document.querySelector(".burger");
console.log(burgerdiv);
//

// Function to create and populate the menu items
const ul = document.createElement("ul");

burgerdata.forEach((item, index) => {
  const li = document.createElement("li");
  const div1 = document.createElement("div");
  div1.className = `burger-${index + 1}`;
  const button = document.createElement("button");
  const icon = document.createElement("i");
  icon.className = "fa-solid fa-plus burger-btn";
  button.appendChild(icon);
  div1.appendChild(button);
  li.appendChild(div1);

  const div2 = document.createElement("div");
  div2.className = "price-menu";
  const p = document.createElement("p");
  p.textContent = item.name;
  const price = document.createElement("i");
  price.textContent = `€${item.price}`;
  div2.appendChild(p);
  div2.appendChild(price);
  li.appendChild(div2);

  ul.appendChild(li);
  burgerdiv.insertBefore(ul, burgerdiv.firstElementChild);
});

chips.forEach((item, index) => {
  const li = document.createElement("li");
  const div1 = document.createElement("div");
  div1.className = `chips-${index + 1}`;
  const button = document.createElement("button");
  const icon = document.createElement("i");
  icon.className = "fa-solid fa-plus burger-btn";
  button.appendChild(icon);
  div1.appendChild(button);
  li.appendChild(div1);

  const div2 = document.createElement("div");
  div2.className = "price-menu";
  const p = document.createElement("p");
  p.textContent = item.name;
  const price = document.createElement("i");
  price.textContent = `€${item.price}`;
  div2.appendChild(p);
  div2.appendChild(price);
  li.appendChild(div2);

  ul.appendChild(li);
  burgerdiv.insertBefore(ul, burgerdiv.firstElementChild);
});

document.addEventListener("DOMContentLoaded", function () {
  const h2Icon = document.querySelector(".head1 h2");
  let isBackgroundDark = false;

  h2Icon.addEventListener("click", function () {
    if (!isBackgroundDark) {
      document.body.style.backgroundColor = "#333";
      h2Icon.style.color = "wheat";
      isBackgroundDark = true;
    } else {
      document.body.style.backgroundColor = "";
      h2Icon.style.color = "";
      isBackgroundDark = false;
    }
  });
});
