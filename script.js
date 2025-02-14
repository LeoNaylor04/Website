const button = document.querySelector(".tricky-button");
const helloText = document.querySelector(".hello-text");
let lastMoveTime = Date.now();

document.addEventListener("mousemove", (event) => {
    let now = Date.now();
    let speed = Math.sqrt((event.movementX ** 2) + (event.movementY ** 2)); // Calculate mouse speed

    if (speed > 10 && (now - lastMoveTime) < 100) {
        // If moving fast, move the button away
        let newX = Math.random() * (window.innerWidth - button.offsetWidth);
        let newY = Math.random() * (window.innerHeight - button.offsetHeight);
        button.style.transform = `translate(${newX}px, ${newY}px)`;
    }
    lastMoveTime = now;
});

button.addEventListener("click", () => {
    button.style.transform = "scale(6)"; // Make the button really big
    button.style.transition = "transform 0.3s ease-in-out"; // Smooth animation
    helloText.style.fontSize = "450px"; // Show "HELLO" in big text
});
