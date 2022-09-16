
const boardView = document.querySelector('.board');
let tempClass = "";

// creates a board of 16 squares
// organized / styled in css stylesheet
const initializeBoard = () => {
    for (let i = 0; i < 16; i++) {
        const newDiv = document.createElement('div');
        tempClass = 'block' + i;
        console.log('class is ' + tempClass);
        newDiv.classList.toggle(tempClass);
        boardView.appendChild(newDiv);
    }
}


initializeBoard();