const passwordBox = document.getElementById("password");
const genBtn = document.querySelector("#btn");
const copy = document.querySelector(".copy");

let length = 12;
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = 1234567890;
const symbol = "~`!@#$%^&*()-_=+\|}]{[<>,.?/";

const allChars = uppercase + lowercase + numbers + symbol;

genBtn.addEventListener("click", ()=>{
    // password.value = 'Works!';
    let password = "";

    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password + numbers[Math.floor(Math.random() * numbers.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    passwordBox.value = password;
});

copy.addEventListener("click", ()=>{
    passwordBox.select();
    document.execCommand("copy");
    document.querySelector(".msg").innerHTML = "Copied";
})

