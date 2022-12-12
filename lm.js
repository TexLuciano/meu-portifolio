const projetos = document.querySelectorAll('.projetos');
const btnPrev = document.getElementById('prev');
const btnNext = document.getElementById('next');

let currentSlide = 0;

function hideSlide(){
  projetos.forEach(item => item.classList.remove('on'))
}
function showSlider(){
  projetos[currentSlide].classList.add('on')
}
function nextSlide(){
  hideSlide()
  if(currentSlide === projetos.length -1){
    currentSlide = 0
  }else{
    currentSlide++
  }
  showSlider()
}

function prevSlide(){
  hideSlide()
  if(currentSlide === 0){
    currentSlide = projetos.length -1
  }else{
    currentSlide--
  }
  showSlider()
}

btnNext.addEventListener('click',nextSlide)
btnPrev.addEventListener('click',prevSlide)


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




function navTab(){
const habilidades = document.querySelectorAll('.habilidades li')
const conteudo = document.querySelectorAll('.conteudo')
const textoDescricao = document.querySelector('.texto-descricao')


function element(index){
conteudo.forEach((conteudo1)=>{
  conteudo1.classList.remove('ativo')
})
conteudo[index].classList.add('ativo')
}
habilidades.forEach((itemMenu, index)=>{
  itemMenu.addEventListener('mouseover',()=>{
    textoDescricao.style.display = 'none'
    element(index)
  })
})
}
navTab()

//mensagem envio do formulario
function verificacaoForm(){
const btn = document.getElementById('btn')
const enviado = document.querySelector('.enviado')
const email = document.getElementById('email')
const msg = document.getElementById('msg')
const nome = document.getElementById('nome')


function mensagem(){
  if(email.value != '' && msg.value != '' && nome.value != ''){
enviado.textContent = 'Enviado com sucesso!'
  }else{
    enviado.textContent = 'Preencha os campos para enviar!'
  }
}
btn.addEventListener('click', mensagem)
}
verificacaoForm()



//scroll suave
function scrollSuave(){
const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')


function scrollToSection(event){
  event.preventDefault()
  const element = event.target
  const id = element.getAttribute('href')
  const section = document.querySelector(id)
  const topo = section.offsetTop
  
 window.scrollTo({
  top:topo,
  behavior: 'smooth'
})
}

linksInternos.forEach((link)=>{
  link.addEventListener('click',scrollToSection)
})
}
scrollSuave()




const sections =document.querySelectorAll('.js-scroll')
const windowMetade = window.innerHeight * 0.7

function animaScroll(){
  sections.forEach((section)=>{
    const sectionTop = section.getBoundingClientRect().top - windowMetade
      if(sectionTop < 0){
        section.classList.add('ativo-glich')
    }
  })
}
animaScroll()
window.addEventListener('scroll',animaScroll)

const details = document.querySelectorAll('.js-rotate')
function animaScrollDetail(){
  details.forEach((detail)=>{
    const detailTop = detail.getBoundingClientRect().top - windowMetade
      if(detailTop < 0){
        detail.classList.add('rotate')
      }
  })
}
animaScrollDetail()
window.addEventListener('scroll',animaScrollDetail)


const btnOpen = document.querySelector('.btn-open')
const btnClose = document.querySelector('.btn-close')
const menu = document.querySelector('.js-menu-mobile ')

function btnMenu(){
  menu.classList.add('mobile')
}

function closeMenu(){
  menu.classList.remove('mobile')
}

btnOpen.addEventListener('click',btnMenu)
btnClose.addEventListener('click',closeMenu)