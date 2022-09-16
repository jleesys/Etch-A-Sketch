
const boardView = document.querySelector('.board');
let tempClass = "";

const initializeBoard = () => {
    for (let i = 0; i < 9; i++) {
        const newDiv = document.createElement('div');
        tempClass = 'block' + i;
        console.log('class is ' + tempClass);
        newDiv.classList.toggle(tempClass);
        boardView.appendChild(newDiv);
    }
}


initializeBoard();