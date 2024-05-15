// public/js/script.js
document.getElementById('spin-button').addEventListener('click', function() {
    fetch('/spin')
        .then(response => response.json())
        .then(data => {
            document.getElementById('number-label').textContent = 'The ball landed on: ' + data.number;
            document.getElementById('color-label').textContent = 'Color: ' + data.color;
            drawCircle(data.color);
        });
});

function drawCircle(color) {
    const canvas = document.getElementById('roulette-canvas');
    const ctx = canvas.getContext('2d');

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the circle with the specified color
    ctx.beginPath();
    ctx.arc(100, 100, 50, 0, 2 * Math.PI);
    ctx.fillStyle = color.toLowerCase();
    ctx.fill();
}
