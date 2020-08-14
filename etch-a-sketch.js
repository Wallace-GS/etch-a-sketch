const canvas = document.querySelector('#etch-a-sketch');
const context = canvas.getContext('2d');
const shake = document.querySelector('.shake');

const SIZE = 30;
const { width, height } = canvas;
let hue = Math.random() * 360;
let x;
let y;

context.lineJoin = 'round';
context.lineCap = 'round';
context.lineWidth = SIZE;

const resetSketch = () => {
  canvas.classList.add('shake');
  canvas.addEventListener(
    'animationend',
    () => canvas.classList.remove('shake'),
    { once: true }
  );

  x = Math.floor(Math.random() * width);
  y = Math.floor(Math.random() * height);
  hue = Math.random() * 360;
  context.strokeStyle = `hsl(${hue}, 100%, 50%)`;

  context.beginPath();
  context.moveTo(x, y);
  context.lineTo(x, y);
  context.stroke();
};

const handleKey = ({ key }) => {
  if (key.includes('Arrow')) {
    draw({ key });
  }
};

const draw = ({ key }) => {
  hue += 10;
  context.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  context.beginPath();
  context.moveTo(x, y);

  switch (key) {
    case 'ArrowUp':
      y -= SIZE;
      context.lineTo(x, y);
      context.stroke();
      break;
    case 'ArrowDown':
      y += SIZE;
      context.lineTo(x, y);
      context.stroke();
      break;
    case 'ArrowLeft':
      x -= SIZE;
      context.lineTo(x, y);
      context.stroke();
      break;
    case 'ArrowRight':
      x += SIZE;
      context.lineTo(x, y);
      context.stroke();
      break;

    default:
      break;
  }
};

resetSketch();
window.addEventListener('keydown', handleKey);
shake.addEventListener('click', () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
  resetSketch();
});
