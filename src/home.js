export function loadHome(content){
    const homeDiv = document.createElement("div");
    homeDiv.classList.add("home");
    const intro = document.createElement("p");
    const hours = document.createElement("p");
    const moreInfo = document.createElement("p");

    intro.textContent = "We are pleased to have you as our customers,click on the menu to see samples of our delicacies"
    hours.textContent = "We are pleased to have you as our customers,click on the menu to see samples of our delicacies"
    moreInfo.textContent = "We are pleased to have you as our customers,click on the menu to see samples of our delicacies"
    
    const homeHeading = document.createElement("h1");
    homeHeading.textContent = "Welcome To Our Restaurant"
    
    content.appendChild(homeDiv);
    homeDiv.append(homeHeading,intro,hours,moreInfo);

}