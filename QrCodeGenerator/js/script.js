const qrURL = document.getElementById("qrInput");
const qrImg = document.getElementById("qrImage");
const genrateBtn = document.getElementById("btn");

genrateBtn.addEventListener("click", () => {
    if (qrURL.value === "") {
        document.querySelector('.error-msg').innerHTML = "Enter URL or Text to generate QR!";
    } else {
        document.querySelector('.error-msg').innerHTML = "";
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrURL.value;
        qrURL.value = "";
    }
})




