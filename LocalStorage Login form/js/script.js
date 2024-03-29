document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let fullName = document.getElementById('fullName').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    const formData = {
        fullName: fullName,
        email: email,
        password: password
    };

    saveFormData(formData)
    alert("Registerd successfully!");


});

function saveFormData(formData) {
    const storedFormData = JSON.parse(localStorage.getItem('formData')) || [];

    storedFormData.push(formData);

    localStorage.setItem('formData', JSON.stringify(storedFormData));
}

document.getElementById('login').addEventListener('submit', function (event) {
    event.preventDefault();

    const loginEmail = document.getElementById('loginemail').value;
    const loginPassword = document.getElementById('loginpassword').value;

    const storedFormData = JSON.parse(localStorage.getItem('formData')) || [];

    let loginSuccessful = false;

    storedFormData.forEach(function (formData) {
        if (formData.email === loginEmail && formData.password === loginPassword) {
            loginSuccessful = true;
            return;
        }
    });

    if (loginSuccessful) {
        alert('Login successful!');
    } else {
        alert('Incorrect email or password. Please try again.');
    }
});
