const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const title = document.getElementById("title");
const responseText = document.getElementById("responseText");

// Fundo animado funcionando
function createFloatingHearts() {
    const bg = document.querySelector(".background-hearts");

    setInterval(() => {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = (20 + Math.random() * 20) + "px";
        heart.style.animationDuration = (4 + Math.random() * 3) + "s";

        bg.appendChild(heart);

        setTimeout(() => heart.remove(), 7000);
    }, 300);
}
createFloatingHearts();


// Explosão de corações
function explodeHearts(x, y) {
    for (let i = 0; i < 10; i++) {
        const h = document.createElement("div");
        h.classList.add("explosion-heart");
        h.innerHTML = "💖";

        h.style.left = x + "px";
        h.style.top = y + "px";

        h.style.setProperty("--x", (Math.random() * 200 - 100) + "px");
        h.style.setProperty("--y", (Math.random() * 200 - 100) + "px");

        document.body.appendChild(h);

        setTimeout(() => h.remove(), 1000);
    }
}


// Evento BOTÃO SIM
yesBtn.addEventListener("click", (e) => {
    // Coração grande subindo
    const heart = document.createElement("div");
    heart.classList.add("big-heart");
    heart.innerHTML = "❤️";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 2000);

    // Texto que estava faltando
    responseText.innerHTML = "Eu sabia! 😍";
    responseText.style.opacity = "1";

    // Explosão de corações
    explodeHearts(window.innerWidth / 2, window.innerHeight / 2);
});


// Evento BOTÃO NÃO (desvia)
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * window.innerWidth * 0.7;
    const y = Math.random() * window.innerHeight * 0.7;

    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});
