let avancar = document.querySelector(".avancar-direita")
let retroceder = document.querySelector(".avancar-esquerda")
let sliderContainder = document.querySelector(".img-container")
let imagemTamanho = document.getElementsByClassName("img-slide")
let slider = document.getElementsByClassName("slider-container")[0]
let posicao = 1
let altura = window.innerHeight
let timeoutClear

inicializa()
function inicializa(){
    let largura = window.innerWidth
    for(i = 0; i< imagemTamanho.length; i++){
        imagemTamanho[i].setAttribute("width", `${largura/2}px`)
    }
    //sliderContainder.style.transform = `translateX(-${(largura/2)*posicao}px)`
}

avancar.addEventListener("click",avancarFunc)
function avancarFunc(){
    posicao++
    clearTimeout(timeoutClear)
    atualizaPosicao()
}
retroceder.addEventListener("click",retrocederFunc)
function retrocederFunc(){
    posicao--
    clearTimeout(timeoutClear)
    atualizaPosicao()
}

temporizador()
function temporizador(){
    timeoutClear = setTimeout(()=>{
        avancarFunc()
    }, 2000)
    setTimeout()  
}
atualizaPosicao()
function atualizaPosicao(){
    let largura = window.innerWidth
    if(imagemTamanho.length < posicao){
        posicao = 1
    }else if(posicao < 1){
        posicao = imagemTamanho.length //4
    }
    for(i = 0; i< imagemTamanho.length; i++){
        imagemTamanho[i].setAttribute("width", `${largura/2}px`)
        
    }
    sliderContainder.style.transform = `translateX(-${(largura/2)*(posicao-1)}px)`
    temporizador()
}
