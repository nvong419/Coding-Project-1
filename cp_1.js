const button = document.querySelector("#submit");
const feedback = document.querySelector("#feedback-container");

button.addEventListener("click", () => {
    event.preventDefault(); // Prevent form from clearing values
    
    const username = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const comments = document.getElementById("comments").value;
    
    //Test if values are collected correctly
    alert(`Form Submitted!\nName: ${username}\nEmail: ${email}\nComments: ${comments}`);
});