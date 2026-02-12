function openGift() {
    document.getElementById("proposal").classList.remove("hidden");
}

function yesClick() {
    document.getElementById("result").innerHTML = "Yay ❤️ I Love You Forever!";
    
    // Auto open your second website
    window.open("https://siddkhan07.github.io/Huzaifiii/", "_blank");
}

function moveNo() {
    const button = document.getElementById("noBtn");
    const x = Math.random() * 300;
    const y = Math.random() * 300;
    button.style.position = "absolute";
    button.style.left = x + "px";
    button.style.top = y + "px";
}

function openLink() {
    window.open("https://siddkhan07.github.io/Huzaifii/", "_blank");
}
