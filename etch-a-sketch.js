const canvas = document.querySelector('#etch-a-sketch');
const context = canvas.getContext('2d');
const shake = document.querySelector('.shake');

const { width, height } = canvas;
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

context.lineJoin = 'round';
context.lineCap = 'round';
context.lineWidth = 30;

context.beginPath();
context.moveTo(x, y);
context.lineTo(x, y);
context.stroke();
