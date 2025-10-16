const button = document.querySelector("#submit");
const feedback = document.querySelector("#feedback-container");
const form = document.querySelector("#userInputForm");
const usernameBox = document.querySelector("#name");
const emailBox = document.querySelector("#email");
const commentsBox = document.querySelector("#comments");

button.addEventListener("click", (event) => {
    event.stopPropagation();
    event.preventDefault();

    const username = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const comments = document.getElementById("comments").value;
    const charCount = document.getElementById("comments-count");

    //Check if required fields are filled
    if (!username || !email || !comments) {
        alert("Please fill in all required fields.");
        return;
    }
    //Test if values are collected correctly
    //alert(`Form Submitted!\nName: ${username}\nEmail: ${email}\nComments: ${comments}`);

    //Check if comments are too long
    const currentLength = charCount.textContent;
    charCount.textContent = currentLength;
    if (currentLength > 200) {
        alert("Comments are too long! Please keep it under 200 characters.");
        return;
    }

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
    
    //Clear form and reset char count
    form.reset();
    charCount.textContent = "0";
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

    //Highlight character counter red if comment exceeds limit
    if (event.target.value.length > 200) {
        charCount.style.color = "red";
    } else {
        charCount.style.color = "black";
    }
    
});

//Event Bubbling for tooltips
form.addEventListener("mouseover", (event) => {
    if (event.target.matches("#name")) {
        event.target.setAttribute("title", "Please enter your name");
    } else if (event.target.matches("#email")) {
        event.target.setAttribute("title", "Please enter your email");
    } else if (event.target.matches("#comments")) {
        event.target.setAttribute("title", "Please enter any comments or feedback");
    }
});

// *** Deprecated Code ***

//Add tooltip to username on mouseover
// usernameBox.addEventListener("mouseover", () => {
//     usernameBox.setAttribute("title", "Please enter your name");
// });

// usernameBox.addEventListener("mouseout", () => {
//     usernameBox.removeAttribute("title");
// });


// //Add tooltip to email on mouseover
// emailBox.addEventListener("mouseover", () => {
//     emailBox.setAttribute("title", "Please enter your email");
// });

// emailBox.addEventListener("mouseout", () => {
//     emailBox.removeAttribute("title");
// });


// //Add tooltip to comments on mouseover
// commentsBox.addEventListener("mouseover", () => {
//     commentsBox.setAttribute("title", "Please enter any comments or feedback");
// });

// commentsBox.addEventListener("mouseout", () => {
//     commentsBox.removeAttribute("title");
// });