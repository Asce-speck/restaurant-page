import"./style.css";
import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";
import { loadContact } from "./contact.js";


const navigation = document.createElement("nav")
const home = document.createElement("button")
home.textContent = "HOME"

const menu = document.createElement("button")
menu.textContent = "MENU"

const contacts = document.createElement("button")
contacts.textContent = "CONTACTS"


const buttons = [home, menu, contacts];

function setActive(clicked) {
  buttons.forEach((button) => button.classList.remove("active"));
  clicked.classList.add("active");
}

const content = document.querySelector("#content");
document.body.prepend(navigation);
navigation.append(home,menu,contacts);

home.addEventListener("click",()=>{
setActive(home);
content.replaceChildren();
loadHome(content);
})


menu.addEventListener("click",()=>{
    setActive(menu);
content.replaceChildren();
loadMenu(content);
})


contacts.addEventListener("click",()=>{
setActive(contacts);
content.replaceChildren();
loadContact(content);
})

setActive(home);
loadHome(content);
