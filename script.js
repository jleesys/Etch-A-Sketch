
const boardView = document.querySelector('.board');
const dimensionSetter = document.querySelector('#userButton');
const textField = document.querySelector('#text-field');
let tempClass = "";
let userInputDimension = 0;

dimensionSetter.addEventListener('click', function getInput() {
    userInputDimension = textField.value;
    if (userInputDimension > 100) {textField.value = "Too big! Try # below 100"; return}
    boardView.innerHTML = '';
    initializeBoard(userInputDimension);
})


// creates a board of 16 squares
// organized / styled in css stylesheet
const initializeBoard = (userInput) => {
    for (let i = 0; i < Math.pow(userInput, 2); i++) {
        const newDiv = document.createElement('div');
        tempClass = 'block' + i;
        newDiv.classList.toggle(tempClass);
        newDiv.addEventListener('mouseover', function changeColor() {
            // newDiv.classList.toggle('active');
            console.log('recoloring');
            let newColor = getRandomColor();
            newDiv.style.backgroundColor = newColor;
        });
        newDiv.style.width = 800 / userInput + "px";
        newDiv.style.height = 800 / userInput + "px";
        boardView.appendChild(newDiv);
    }
    // boardView.setAttribute('style', 'width: ' + newDiv.style.width * userInput + 'px');
}

const getRandomColor = () => {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'grey', 'white',
        'black', 'brown', 'CornflowerBlue', 'Cyan', 'DarkBlue', 'DarkCyan', 'Bisque', 'DeepPink',
        'DodgerBlue', 'ForestGreen', 'GreenYellow', 'pink'];
    const rand = Math.floor(Math.random() * 20);
    console.log(colors[rand]);
    return colors[rand];
}


initializeBoard(16);