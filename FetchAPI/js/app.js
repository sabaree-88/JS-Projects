document.getElementById("formValue").addEventListener('submit', e => {
    e.preventDefault();
    // alert("hi");
    let form = document.getElementById("formValue");
    // if (!validate()) {
        const data = new URLSearchParams();
        for (const p of new FormData(form)) {
            data.append(p[0], p[1]);
        }
        fetch('config/server.php', {
            method: 'POST',
            body: data
        }).then(response => response.text()).then(response => {
            document.querySelector(".msg").innerHTML = response;
        }).catch(error => console.log(error));
    // }
});

// function validate() {
//     let form = document.getElementById("formValue");
//     let isValid = true;

//     const nameField = document.querySelector('.username');
//     const emailField = document.querySelector('.email');
//     const mobileNumber = document.querySelector('.phoneNumber');
//     const passwordField = document.querySelector('.password');

//     if (nameField.value.trim() === '') {
//         document.querySelector(".nameError").innerHTML = "Please enter your name.";
//         isValid = false;
//     }
//     else{
//         isValid = true;
//         document.querySelector(".nameError").innerHTML = "";
//     }
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (emailField.value.trim() === '') {
//         document.querySelector(".emailError").innerHTML = "Please enter your email.";
//         isValid = false;
//     } else if (!emailRegex.test(emailField.value)) {
//         // Validate email format using regular expression
//         document.querySelector(".emailError").innerHTML = "Please enter a valid email address.";
//         isValid = false;
//     }else{
//         isValid = true;
//         document.querySelector(".emailError").innerHTML = "";
//     }

//     let phoneno = /^\d{10}$/;
//     if (mobileNumber.value.trim() === '') {
//         document.querySelector(".numberError").innerHTML = "Please enter mobile number.";
//         isValid = false;
//     }else if(!phoneno.test(mobileNumber.value)){
//         isValid = false;
//         document.querySelector(".numberError").innerHTML = "Please enter a valid 10 digit mobile number.";
//     }else{
//         isValid =true;
//         document.querySelector(".numberError").innerHTML = "";
//     }

//     // Custom validation for password field
//     if (passwordField.value.trim() === '') {
//         document.querySelector(".passwordError").innerHTML = "Please enter your password.";
//         isValid = false;
//     }else if(passwordField.value.length < 8){
//         document.querySelector(".passwordError").innerHTML = "Password must be at least 8 characters long.";
//         isValid = false;
//     }else{
//         isValid = true;
//     }

//     return isValid;
// }