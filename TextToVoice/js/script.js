let speech = new SpeechSynthesisUtterance();

document.querySelector(".btn").addEventListener('click', ()=>{
    speech.text = document.querySelector(".textarea").ariaValueMax;
    window.speechSynthesis.speak(speech);
})