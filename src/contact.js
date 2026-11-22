export function loadContact(content){
    const contactInfo = document.createElement("div");
    contactInfo.classList.add("contact-info")
    const contactHeading = document.createElement("h1")
    contactHeading.textContent = "Our social media handles"

    const email = document.createElement("p");
    email.textContent = "email"

    const fb = document.createElement("p");
    fb.textContent = "fb"

    const ig = document.createElement("p")
    ig.textContent = "ig"


    content.appendChild(contactInfo);
    contactInfo.append(contactHeading,email,fb,ig);

}