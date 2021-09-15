window.onload = game;

function game(){
    const field = document.querySelector('.field');
    const cellArr = document.querySelectorAll('.cell');
    const resultGame = document.querySelector('.resultGame');
    const btn = document.querySelector('.btn');

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
    ] 
  
    const checkWin = (position) => {
       for(let i in winCombinations) {
            let win = true;
            for(let j in winCombinations[i]) {
                if(position.includes(winCombinations[i][j]) == false) {
                    win = false
                }
            }
            if (win) return true;
        }
        return false; 
    }

    const clickMouse = (event) => {
        let positionX = [];
        let positionO = [];
        if (event.target.classList.contains('cell')){
            if (event.target.innerText) return;
            event.target.innerText = (turn%2 == 0) ? "X" : "O";

            cellArr.forEach((item, i) => {
                if(item.innerText == "X"){
                    positionX.push(+i);
                }
                if(item.innerText == "O"){
                    positionO.push(+i);
                }
            })
            if (checkWin(positionX)){
                resultGame.innerText = '1-st winner (X)';
                field.removeEventListener("click", clickMouse);
            } 
            if (checkWin(positionO)){
                resultGame.innerText = '2-nd winner (O)';
                field.removeEventListener("click", clickMouse);
            } 
            if (turn == 8 && !checkWin(positionX)){
                resultGame.innerText = 'dead heat';
            }
            turn++;
        } 
    }  
    field.addEventListener("click", clickMouse);
    btn.onclick = reset;
}

function reset(){
    window.location.href=window.location.href;
}




