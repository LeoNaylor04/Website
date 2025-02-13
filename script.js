document.getElementById("myButton").addEventListener("click", function () {
    // Add the 'expanded' class to start the animation
    this.classList.add("expanded");

    // Optionally, reset the animation after it completes so it can be triggered again
    setTimeout(() => {
        this.classList.remove("expanded");
    }, 2000); // 2000ms matches the duration of the animation
});
