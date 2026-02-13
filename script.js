function moveButton() {
    const btn = document.getElementById("no");
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    btn.style.left = x + "px";
    btn.style.top = y + "px";
}

function celebrate() {
    document.body.style.background = "#1a001a";
    alert("Good choice, Cheeku. You were never escaping me. ❤️");
}

function playMusic() {
    const music = document.getElementById("bgMusic");
    music.play();
}
