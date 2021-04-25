var redBox = document.getElementById("red-box");
document.body.addEventListener("mousemove", (event) => {
    redBox.innerHTML = "X axis: " + event.x + " Y axis: " + event.y;
});
