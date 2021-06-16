const board = document.querySelector('#board')
const colors = ['#f50202', '#fac106', '#f6fa05', '#53fa05', '#0509fa', '#01f8f8', '#c701f8']
const SQUARES_NUMBER = 497

for(let i = 0; i < SQUARES_NUMBER; i++){
    const square = document.createElement('div')
    square.classList.add('square')
    square.addEventListener('mouseover', () => setColor(square))
    

    square.addEventListener('mouseleave', () => removeColor(square))
    board.append(square)
}

function setColor(element){
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element){
    element.style.backgroundColor = '#3b3838'
    element.style.boxShadow = '0 0 2px #000'
}

function getRandomColor(){
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}