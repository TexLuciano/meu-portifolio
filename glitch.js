//glitch effect
let bg = document.getElementById('glitch')
let grey = document.querySelector('.grey')
let cont = 18;
for(let i = 0; i < cont; i++){
  let glicthBox = document.createElement('div')
  glicthBox.classList.add('box');
  bg.appendChild(glicthBox)
}
setInterval(function(){
 grey.classList.add('trasparent')
 grey.style.left = '-14px'
 setTimeout(()=>{
  grey.classList.remove('trasparent')
  setTimeout(()=>{
    grey.style.left = '50px'
    setTimeout(()=>{
      grey.style.left = '5px'
    },50)
  },70)
 },80)
},800)
//glitch effect part 2
setInterval(() => {
  grey.classList.add('trasparent')
  grey.style.left = '50px'
  grey.style.top = '20px'

  setTimeout(()=>{
    grey.classList.remove('trasparent')

    setTimeout(()=>{
      grey.style.left = '40px'
      setTimeout(()=>{
        grey.style.top = '-30px'
        grey.style.left = '50px'
      },50)
    },60)
  },200)
},600)

let glitch1 = document.getElementsByClassName('box')

setInterval(()=>{
  stop()
  for(let i = 0; i < glitch1.length; i++){
    glitch1[i].style.left = Math.floor(Math.random()*20) + 'vw'
    glitch1[i].style.top = Math.floor(Math.random()*50) + 'vh'
    glitch1[i].style.width = Math.floor(Math.random()*50) + 'px'
    glitch1[i].style.height = Math.floor(Math.random() * 30) + 'px'
    glitch1[i].style.backgroundPosition = Math.floor(Math.random() * 10) + 'px'
  }
},200)
