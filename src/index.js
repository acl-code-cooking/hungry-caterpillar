const colors = [
    'blue',
    'green',
    'red',
    'yellow'
];

const colorButtons = document.getElementById('color-buttons');

for(let index = 0; index < colors.length; index++) {
    let color = colors[index];
    const colorButton = document.createElement('button');
    colorButton.value = color;
    colorButton.classList.add('color-button');
    colorButton.textContent = color;

    colorButton.addEventListener('click', function() {
        console.log('I\'ve been clicked!');
    });

    colorButtons.appendChild(colorButton);
}



