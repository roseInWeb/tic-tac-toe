const block = document.querySelector('.second');
let move = 0;
let result = '';
const content = document.querySelector('#content');
const modalResult = document.querySelector('#modal-result-wrapper');
const overlay = document.querySelector('#overlay');
const btnClose = document.querySelector('#btn-close');
const audio = document.querySelector('audio');


block.addEventListener('click', e => {
    if (e.target.className = 'box') {
        move % 2 === 0 ? e.target.innerHTML = 'x' : e.target.innerHTML = '0';
        move++;
        audio.play();
        check();
    }
});

let boxes = document.getElementsByClassName('box');

const check = () => {    
    const arr = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    for (i = 0; i < arr.length; i++) {
        if (boxes[arr[i][0]].innerHTML == 'x' && boxes[arr[i][1]].innerHTML == 'x' && boxes[arr[i][2]].innerHTML == 'x') {
              result = 'Crosses';
                prepareResult(result);
        }
        else if (boxes[arr[i][0]].innerHTML == '0' && boxes[arr[i][1]].innerHTML == '0' && boxes[arr[i][2]].innerHTML == '0') {
                result = 'Zeros';
                prepareResult(result);
        }
        else if (move == 9) {
            result = 'Draw';
            prepareResult(result);
        }
    }
}


const prepareResult = winner => {
    content.innerHTML = `${winner} have won!
    Number of moves : ${move}`;
    modalResult.style.display = 'block';

}

const closeModal = () => {
    modalResult.style.display = 'none';
    location.reload();
}




btnClose.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

const reloadBtn = document.querySelector('.button');
reloadBtn.addEventListener('click', reloading => {
    location.reload();
});