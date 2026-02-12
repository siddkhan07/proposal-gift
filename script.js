let text = "Will You Be Mine Forever Huzaifiii ❤️";
let i = 0;

function startLove() {
    document.getElementById("startScreen").classList.add("hidden");
    document.getElementById("proposal").classList.remove("hidden");
    document.getElementById("music").play();
    typeEffect();
    createHearts();
}

function typeEffect() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 60);
    }
}

function yesClick() {
    document.getElementById("result").innerHTML = "I Love You Forever ❤️";
    window.open("https://siddkhan07.github.io/Huzaifiii/", "_blank");
}

function moveNo() {
    let btn = document.getElementById("noBtn");

    let maxX = window.innerWidth - 100;
    let maxY = window.innerHeight - 100;

    let x = Math.random() * maxX;
    let y = Math.random() * maxY;

    btn.style.position = "absolute";
    btn.style.left = x + "px";
    btn.style.top = y + "px";
}

function createHearts() {
    setInterval(() => {
        let heart = document.createElement("div");
        heart.innerHTML = "💖";
        heart.style.position = "absolute";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "-10px";
        heart.style.fontSize = "18px";
        heart.style.animation = "fall 4s linear";
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 4000);
    }, 300);
}

const style = document.createElement("style");
style.innerHTML = `
@keyframes fall {
    0% { transform: translateY(0); opacity:1; }
    100% { transform: translateY(100vh); opacity:0; }
}`;
document.head.appendChild(style);
