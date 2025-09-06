const box = document.querySelector('.box').children
const image = document.createElement('img')
image.src = "./image/goblin.png";
const elementList = document.createElement("li");
elementList.appendChild(image)
const newNode = document.createElement("li");
move();
function move() {
    const randomPos = Math.floor(Math.random() * 15)
    box[Math.trunc (randomPos/4)].insertBefore(elementList, box[Math.trunc (randomPos/4)].children[randomPos%4])
}
setInterval(move, 1000)