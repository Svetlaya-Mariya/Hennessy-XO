window.onload = game;

function game(){
    const field = document.querySelector('.field');
    const cellArr = document.querySelectorAll('.cell');
    const resultGame = document.querySelector('.resultGame');
    const btn = document.querySelector('.btn');
    const player = document.querySelector('.move');
    const body = document.body;

    let turn = 0;
    const winCombinations = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    
    const checkWin = (filledPositions) => winCombinations.some((item) => item.every(elem => filledPositions.includes(elem))); 
    
    const clickMouse = (event) => {
        const positionX = [];
        const positionO = [];
        if (event.target.classList.contains('cell')){
            if (event.target.innerText) return;
            event.target.innerText = (turn%2 == 0) ? "X" : "O";
            event.target.style.backgroundColor = (turn%2 == 0) ? "#5485ff" : "#f1ff54";
            cellArr.forEach((item, i) => {
                if(item.innerText == "X"){
                    positionX.push(+i);
                }
                if(item.innerText == "O"){
                    positionO.push(+i);
                }
            })
            if (checkWin(positionX)){
                resultGame.innerText = '1-st PLAYER WINS';
                turn=1;
                resultGame.style.animation =  'text 5s infinite';
                body.style.backgroundColor = '#dfe6f8';
                field.removeEventListener("click", clickMouse);
            } 
            if (checkWin(positionO)){
                resultGame.innerText = '2-nd PLAYER WINS';
                resultGame.style.animation =  'text 5s infinite';
                turn=0;
                body.style.backgroundColor = '#fffb8f';
                field.removeEventListener("click", clickMouse);
            } 
            if (turn == 8 && !checkWin(positionX)){
                resultGame.innerText = 'DEAD HEAT';
                resultGame.style.top = '30%';
                resultGame.style.color = '#05043d';

                field.removeEventListener("click", clickMouse);
            }
            turn++;
        } 
        field.style.backgroundColor = (turn%2 == 0) ? '#dfe6f8' : '#fffb8f';
        player.innerHTML = (turn%2 == 0) ? '1 plaeyr' : '2 player';
        player.style.color = (turn%2 == 0) ? '#0048ff' : '#f2ea00';
    }  
    
    field.addEventListener("click", clickMouse);
    btn.onclick = reset;
}

function reset(){
    window.location.href=window.location.href;
}




