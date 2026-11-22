export function loadMenu(content){
    const delicacies = document.createElement("div");
    delicacies.classList.add("delicacies");
    const menuHeading = document.createElement("h1");
    menuHeading.textContent = "What's your poison"
    delicacies.appendChild(menuHeading);


    const items = ["tea","ugali","chapati","rice","fish","fries"]
    items.forEach(item=>{
       const food = document.createElement("p")
       food.textContent = item;
        delicacies.appendChild(food);
    })
   content.appendChild(delicacies);


}