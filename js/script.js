const eleGrid = document.querySelector(".grid");
const btnPlay = document.querySelector(".btn-play");
const startScreen = document.querySelector(".start-screen");


btnPlay.addEventListener("click", function(){
    startScreen.classList.add("hidden");
    eleGrid.classList.remove("hidden");
    let nCells = document.querySelector()
    let optionValue = Math.sqrt(nCells);


    
//    if(btnPlay.value == 100) {
        for (let i = 1; i <= 100; i++) {
            let eleCell = document.createElement("div");
            eleCell.classList.add("cell");
            eleCell.innerHTML = i;
            eleCell.style.width = `calc(100% / ${optionValue})`;
            eleCell.style.heigth = `calc(100% / ${optionValue})`;
            eleGrid.append(eleCell);
        }
//    }

})