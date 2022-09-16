
const boardView = document.querySelector('.board');
const dimensionSetter = document.querySelector('#userButton');
const textField = document.querySelector('#text-field');
let tempClass = "";
let userInputDimension = 0;

dimensionSetter.addEventListener('click', function getInput(){
    userInputDimension = textField.value;
})


// creates a board of 16 squares
// organized / styled in css stylesheet
const initializeBoard = (userInput) => {
    for (let i = 0; i < Math.pow(userInput,2) ; i++) {
        const newDiv = document.createElement('div');
        tempClass = 'block' + i;
        console.log('class is ' + tempClass);
        newDiv.classList.toggle(tempClass);
        newDiv.addEventListener('mouseover', function changeColor() {
            newDiv.classList.toggle('active');
        });
        boardView.appendChild(newDiv);
    }
}


initializeBoard(4);