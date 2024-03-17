// Data
import { burgerdata } from "./burgerdata.js";
import { chips } from "./chipsdata.js";

const burgerdiv = document.querySelector(".burger");
console.log(burgerdiv);
//
const cart = document.querySelector(".cart");

// Function to create and populate the menu items
const ul = document.createElement("ul");
const iconeCart = document.querySelector(".icone-cart");
const dropdown = document.querySelector(" #myDropdown");
let checkdrop = false;

window.addEventListener("click", function (e) {
  if (e.target === iconeCart) {
    if (checkdrop) {
      dropdown.style.display = "none";
      checkdrop = false;
    } else {
      dropdown.style.display = "block";
      checkdrop = true;
    }
  } else {
    dropdown.style.display = "none";
    checkdrop = false;
  }
});

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

  button.addEventListener("click", function () {
    const name_target = document.createElement("p");
    name_target.textContent = item.name;
    const price_target = document.createElement("p");
    price_target.textContent = `€${item.price}`;

    const divburgerdetails = document.createElement("div");
    divburgerdetails.setAttribute("class", "divburg");
    divburgerdetails.append(name_target, price_target);
    cart.appendChild(divburgerdetails);
  });

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
  const name_target = item.name;
  const price_target = `€${item.price}`;

  button.addEventListener("click", function () {
    const divburgerdetails = document.createElement("div");
    divburgerdetails.append(name_target, price_target);
    cart.appendChild(divburgerdetails);
  });

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
