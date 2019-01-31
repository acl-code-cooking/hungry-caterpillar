const colors = [
    'blue',
    'green',
    'red',
    'yellow'
];

const colorButtons = document.getElementById('color-buttons');
const canvas = document.getElementById('paint-canvas');

for(let index = 0; index < colors.length; index++) {
    let color = colors[index];
    const colorButton = document.createElement('button');
    colorButton.value = color;
    colorButton.classList.add('color-button');
    colorButton.textContent = color;

    colorButton.addEventListener('click', function() {
        console.log('I\'ve been clicked!');
        paint(color);
    });

    colorButtons.appendChild(colorButton);
}

function paint(color) {
    const colorBlock = document.createElement('span');
    colorBlock.classList.add(color);
    colorBlock.classList.add('color-block');

    canvas.appendChild(colorBlock);
}


