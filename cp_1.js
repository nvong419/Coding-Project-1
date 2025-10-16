const button = document.querySelector("#submit");
const feedback = document.querySelector("#feedback-container");
const form = document.querySelector("#userInputForm");
const usernameBox = document.querySelector("#name");
const emailBox = document.querySelector("#email");
const commentsBox = document.querySelector("#comments");

button.addEventListener("click", (event) => {
    event.stopPropagation();

    const username = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const comments = document.getElementById("comments").value;
    
    //Check if required fields are filled
    if (!username || !email || !comments) {
        alert("Please fill in all required fields.");
        return;
    }
    //Test if values are collected correctly
    //alert(`Form Submitted!\nName: ${username}\nEmail: ${email}\nComments: ${comments}`);
    
    //Add a new section to feedback container
    const newSection = document.createElement("section");

    //Create a new line for name
    const nameP = document.createElement("p");
    nameP.textContent = `Name: ${username}`;

    //Create a new line for email
    const emailP = document.createElement("p");
    emailP.textContent = `Email: ${email}`;

    //Create a new line for comments
    const commentsP = document.createElement("p");
    commentsP.textContent = `Comments: ${comments}`;

    //Add new section to feedback container
    newSection.append(nameP, emailP, commentsP);
    feedback.appendChild(newSection);
    
    //Clear form
    form.reset();
});

//Change color of button on mouseover
button.addEventListener("mouseover", () => {
    button.style.backgroundColor = "#0056b3";
});

button.addEventListener("mouseout", () => {
    button.style.backgroundColor = "#007BFF";
});


//Add keydown listener to update char-count
document.getElementById("comments").addEventListener("input", (event) => {
    event.stopPropagation();

    const charCount = document.getElementById("comments-count");
    charCount.textContent = `${event.target.value.length}`;
})

//Add tooltip to username on mouseover
usernameBox.addEventListener("mouseover", () => {
    usernameBox.setAttribute("title", "Please enter your name");
});

usernameBox.addEventListener("mouseout", () => {
    usernameBox.removeAttribute("title");
});


//Add tooltip to email on mouseover
emailBox.addEventListener("mouseover", () => {
    emailBox.setAttribute("title", "Please enter your email");
});

emailBox.addEventListener("mouseout", () => {
    emailBox.removeAttribute("title");
});


//Add tooltip to comments on mouseover
commentsBox.addEventListener("mouseover", () => {
    commentsBox.setAttribute("title", "Please enter any comments or feedback");
});

commentsBox.addEventListener("mouseout", () => {
    commentsBox.removeAttribute("title");
});