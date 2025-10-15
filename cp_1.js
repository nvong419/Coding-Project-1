const button = document.querySelector("#submit");
const feedback = document.querySelector("#feedback-container");
const form = document.querySelector("#userInputForm");
const usernameBox = document.querySelector("#name");
const emailBox = document.querySelector("#email");
const commentsBox = document.querySelector("#comments");

button.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent form from clearing values
    
    const username = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const comments = document.getElementById("comments").value;
    
    //Test if values are collected correctly
    alert(`Form Submitted!\nName: ${username}\nEmail: ${email}\nComments: ${comments}`);
});

//Change color of button on mouseover
button.addEventListener("mouseover", () => {
  button.style.backgroundColor = "#0056b3";
});

button.addEventListener("mouseout", () => {
  button.style.backgroundColor = "#007BFF";
});

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