const firstBoard = document.querySelector('div.first-board');
const secondBoard = document.querySelector('div.second-board');
const thirdBoard = document.querySelector('div.third-board');

const accelerateAnimation = () => {
    firstBoard.removeEventListener('mouseover', accelerateAnimation);
    console.log('Passou');
    
    firstBoard.style.animationDuration = '7s';
    secondBoard.style.animationDuration = '5s';
    thirdBoard.style.animationDuration = '3s';
}

firstBoard.addEventListener('mouseover', accelerateAnimation);