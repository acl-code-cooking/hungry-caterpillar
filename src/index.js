const colors = [
    'blue',
    'green',
    'red',
    'yellow'
];

const colorButtons = document.getElementById('color-buttons');
const canvas = document.getElementById('paint-canvas');
const transformButtons = document.getElementById('transform-buttons');

// loop creates color buttons

for(let index = 0; index < colors.length; index++) {
    let color = colors[index];
    const colorButton = document.createElement('button');
    colorButton.value = color;
    colorButton.classList.add('color-button');
    colorButton.textContent = color;

    colorButton.addEventListener('click', function() {
        paint(color);
    });

    colorButtons.appendChild(colorButton);
}

// transform loop 

for(let index = 0; index < colors.length; index++) {
    let color = colors[index];
    const transformButton = document.createElement('button');
    transformButton.value = color;

    transformButton.textContent = color;

    transformButton.addEventListener('click', function() {
        resetShape();
        circleTransform(color);
    });

    transformButtons.appendChild(transformButton);
}

function paint(color) {
    const colorBlock = document.createElement('span');
    colorBlock.classList.add(color);
    colorBlock.classList.add('color-block');

    canvas.appendChild(colorBlock);
}

function circleTransform(color) {
    const selector = '.color-block.' + color;
    const colorBlocks = document.querySelectorAll(selector);

    for(let index = 0; index < colorBlocks.length; index++) {
        colorBlocks[index].classList.add('transform');
    }
}

function resetShape() {
    const colorBlocks = document.querySelectorAll('.color-block');

    for(let index = 0; index < colorBlocks.length; index++) {
        colorBlocks[index].classList.remove('transform');
    }
}

