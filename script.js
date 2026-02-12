let message = "Happy Valentine's Day ❤️ Will You Be Mine Forever?";
let i = 0;

function openGift() {
    document.getElementById("gift").style.display = "none";
    document.getElementById("proposal").classList.remove("hidden");
    document.getElementById("bgMusic").play();
    typeWriter();
    createHearts();
}

function typeWriter() {
    if (i < message.length) {
        document.getElementById("typing").innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}

function yesClick() {
    document.getElementById("result").innerHTML = "Yay ❤️ I Love You Forever!";
    window.open("https://siddkhan07.github.io/Huzaifii/", "_blank");
}

function moveNo() {
    let btn = document.getElementById("noBtn");
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    btn.style.position = "absolute";
    btn.style.left = x + "px";
    btn.style.top = y + "px";
}

function openLink() {
    window.open("https://siddkhan07.github.io/Huzaifiii/", "_blank");
}

function createHearts() {
    setInterval(() => {
        let heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.style.position = "absolute";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "100vh";
        heart.style.fontSize = "20px";
        heart.style.animation = "floatUp 4s linear";
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 4000);
    }, 300);
}

const style = document.createElement('style');
style.innerHTML = `
@keyframes floatUp {
    0% { transform: translateY(0); opacity: 1; }
    100% { transform: translateY(-100vh); opacity: 0; }
}`;
document.head.appendChild(style);
