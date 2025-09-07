const box = document.createElement('div')
function paintMap(box) {
    box.append(document.createElement('div'), document.createElement('div'), document.createElement('div'), document.createElement('div'))
}
paintMap(box)
for(let i = 0;i < box.childElementCount;i++) {
    console.log(box.children[i])
    paintMap(box.children[i])
    box.children[i].classList.add('mini_box')
}
console.log(box)
document.body.append(box)
const image = document.createElement('img')
image.src = "../../src/image/goblin.png";
image.alt = 'goblin'
const newNode = document.createElement("div");
function move() {
    let randomPos = Math.floor(Math.random() * 15);
    box.children[Math.trunc (randomPos/4)].children[randomPos%4].append(image)
    return randomPos;
}
move();
setInterval(move, 1000)