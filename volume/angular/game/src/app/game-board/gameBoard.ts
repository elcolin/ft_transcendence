const canvas = document.getElementById('gameCanvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

if (!ctx) {
	console.error('Canvas 2D context not available');
}

const paddleWidth = 10, paddleHeight = 60;
let leftPaddleY = (canvas.height - paddleHeight) / 2;
let rightPaddleY = (canvas.height - paddleHeight) / 2;
const paddleSpeed = 4;

const ball = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  radius: 5,
  speedX: 3,
  speedY: 3
};

function drawPaddle(y) {
  ctx.fillStyle = 'black';
  ctx.fillRect(0, y, paddleWidth, paddleHeight);
}

function drawBall() {
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  ctx.fillStyle = 'black';
  ctx.fill();
  ctx.closePath();
}

function draw() {
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw paddles
  drawPaddle(leftPaddleY);
  drawPaddle(rightPaddleY);

  // Draw ball
  drawBall();
}

function update() {
  // Update ball position
  ball.x += ball.speedX;
  ball.y += ball.speedY;

  // Handle ball collisions with top and bottom walls
  if (ball.y - ball.radius < 0 || ball.y + ball.radius > canvas.height) {
    ball.speedY = -ball.speedY;
  }

  // Handle ball collisions with paddles
  if (
    (ball.x - ball.radius < paddleWidth && ball.y > leftPaddleY && ball.y < leftPaddleY + paddleHeight) ||
    (ball.x + ball.radius > canvas.width - paddleWidth && ball.y > rightPaddleY && ball.y < rightPaddleY + paddleHeight)
  ) {
    ball.speedX = -ball.speedX;
  }
}

function gameLoop() {
  update();
  draw();
  requestAnimationFrame(gameLoop);
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowUp' && rightPaddleY > 0) {
    rightPaddleY -= paddleSpeed;
  } else if (event.key === 'ArrowDown' && rightPaddleY < canvas.height - paddleHeight) {
    rightPaddleY += paddleSpeed;
  }
});

gameLoop();
