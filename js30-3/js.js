const block = document.querySelector('.second');
let move = 0;
let result = '';
const content = document.querySelector('#content');
const modalResult = document.querySelector('#modal-result-wrapper');
const overlay = document.querySelector('#overlay');
const btnClose = document.querySelector('#btn-close');
const audio = document.querySelector('audio');


block.addEventListener('click', e => {
    if (e.target.className = 'third') {
        move % 2 === 0 ? e.target.innerHTML = 'x' : e.target.innerHTML = '0';
        move++;
        audio.play();
        check();
    }
});

let boxes = document.getElementsByClassName('third');

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
        if ( 
            boxes[arr[i][0]].innerHTML == 'x' && boxes[arr[i][1]].innerHTML == 'x' && boxes[arr[i][2]].innerHTML == 'x'
            ) {
              result = 'Crosses';
                prepareResult(result);
        }
        else if (
            boxes[arr[i][0]].innerHTML == '0' && boxes[arr[i][1]].innerHTML == '0' && boxes[arr[i][2]].innerHTML == '0'
            ) {
                result = 'Zeros';
                prepareResult(result);
            }
        // else if(
        // ) {
        //         result = 'Draw';
        //         prepareResult(result);
        //     }
    }
}


const prepareResult = winner => {
    content.innerHTML = `${winner} have won!
    Number of moves : ${move}`;
    modalResult.style.display = 'block';

}

const closeModal = () => {
    modalResult.style.display = 'none';
    // location.reload();
    // console.log(localStorage.getItem('table'))
    saveModal();
}


const table = document.getElementsByClassName('td3');

// const arrTr = [
//     [1],
//     [2],
//     [3],
//     [4],
//     [5],
//     [6],
//     [7],
//     [8],
//     [9],
//     [10]
// ];

// for (i = 0; i < arrTr.length; i++) {
//     e();
// }

let num = 0;
const e = () => {
            // localStorage.setItem('scores', result);
            // score.innerHTML = localStorage.getItem('scores');
            
                // table.innerHTML = result;
                // table.innerHTML = `${num} - ${result}`;
                table.innerHTML = result;
                // if () {
                    table[num].innerHTML = result;
                    // console.log(result);
                // }else {
                    // console.log(table);
                // }
                num++;
                // console.log(table);
}

// const my = () => {
//     if(!localStorage.getItem('tab')) {
//         console.log('no');
//       } else {
//         console.log(localStorage.getItem('tab'));
//       }
// }

// function setLocalStorage() {
//     localStorage.setItem('tab', table);
// }
// window.addEventListener('beforeunload', setLocalStorage);
// function getLocalStorage() {
//     if(localStorage.getItem('tab')) {
//       const table = localStorage.getItem('tab');
//     }
// }
// window.addEventListener('load', getLocalStorage);

// console.log(setLocalStorage);

    myStorage = window.localStorage;
    console.log(myStorage);
const saveModal = () => {
    e();
    // my();
    // localStorage.getItem('scores');
    // localStorage.setItem('scores', result);
    // score.innerHTML = localStorage.getItem('scores');
    // document.querySelector('#td3-1')
    // score.innerHTML = localStorage.getItem('scores');
    // const table = document.querySelector('.tab');
    // console.log(table);
    // console.log(boxes.length);
    // if (score.target.className == 'Zeros' || score.target.className == 'Crosses') {
    //     score++;
    // }
    // boxes = '';
    
    // boxes.innerHTML = '';
    
}

 //e = () => {
//         if (e.target.className = 'td3') {
//                 localStorage.setItem('scores', result);
//                 score.innerHTML = localStorage.getItem('scores');
//                 console.log(table);
//                 }
// }

// const showModal = () => {
//     if (e.target.className = 'td3') {
//         result == 'x' ? e.target.innerHTML = 'x' : e.target.innerHTML = '0';
//     }
// }


// my();

// const tab = document.getElementsByClassName('td3');
localStorage.setItem('table', table);
table.innerHTML = localStorage.getItem(table);
console.log(table);

btnClose.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
btnClose.addEventListener('beforeunload', saveModal);
// btnClose.addEventListener('load', showModal);

const newGame = document.querySelector('.button');

newGame.addEventListener('click', playNewGame => {
    table.innerHTML = localStorage.getItem(table);
    // location.reload();   
    console.log(table);
    // console.clear();
});
 

const reloadBtn = document.querySelector('.reload');
reloadBtn.addEventListener('click', reloading => {
    location.reload();
    localStorage.clear();
});