const canvasSketch = require('canvas-sketch');

const settings = {dimensions: [ 2096, 2096]};

const sketch = () => {
  return ({ context, width, height }) => {

    context.fillStyle = 'orange';
    context.fillRect(0, 0, width, height);
    context.strokeStyle = 'green';
    console.table(context);

    context.lineWidth = width / 300;
    const r = 7;
    const gap = 5;
    const shiftX = (width - (r*2+gap)*100)/2;
    const shiftY = (height - (r*2+gap)*100)/2;
    console.table({"r": r, "gap": gap, "shift": [shiftX, shiftY]});
    for (let i = 0; i < 100; i++){
      for (let j = 0; j < 100; j++) {
        let x = shiftX + (r*2 + gap) * i;
        let y = shiftY + (r*2 + gap) * j;
        context.beginPath();
        context.arc(x, y, r * (Math.random() + 0.2), 0, 2*Math.PI);
        context.stroke();
      }

    }
  };
};

canvasSketch(sketch, settings);
