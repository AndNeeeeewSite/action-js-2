//            1.
positionX = 2
gallery = document.querySelector('.gallery')
curretImage = document.querySelector('.image[data-status="curret-image"]')
listGallery = gallery.children
document.addEventListener('keydown',event =>{
    event.preventDefault()
    key = event.code
    if (key == 'ArrowRight'){
        if(positionX < 5){
            positionX++
            curretImage.src = listGallery[positionX].children[0].src
        }
        else{
            positionX = 1
            curretImage.src = listGallery[positionX].children[0].src
        }
    }
    if (key == 'ArrowLeft'){
        if(positionX == 1){
            positionX = 5
            curretImage.src = listGallery[positionX].children[0].src
        }
        else{
            positionX--
            curretImage.src = listGallery[positionX].children[0].src
        }

    }
})
//            2.
divBoxes = document.querySelector('#boxes')
renderBut = document.querySelector('button[data-action= "render"]')
destroyBut = document.querySelector('button[data-action= "destroy"]')
cubesInput = document.querySelector('#controls').children[0]
height = 30
width= 30
function createBoxes(amount){
    divBoxes.style.display = 'flex'
    divBoxes.style.flexWrap = 'wrap'
    divBoxes.style.gap = '5px'
    for(let i = 0; i < amount;i++){
        box = document.createElement('div')
        max = 255
        box.style.backgroundColor = 'rgb('+ Math.floor(Math.random() * max) + ',' + Math.floor(Math.random() * max) +', ' + Math.floor(Math.random() * max) +')' 
        box.style.height = height + 'px'
        box.style.width = width + 'px'
        box.id = 'boxId'
        height += 10
        width += 10
        divBoxes.append(box)
    }
}

function destroyBoxes(){
    boxes = document.querySelectorAll('#boxId')
    console.log(boxes)
    for(box of boxes){
        box.remove()
    }
    height = 30
    width= 30
}

renderBut.addEventListener('click',function(){
    console.log(cubesInput)
    cubesInput_text = cubesInput.value
    createBoxes(cubesInput_text)
})

destroyBut.addEventListener('click',function(){
    destroyBoxes()
})