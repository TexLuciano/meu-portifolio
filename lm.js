





//habilidades 
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


//menumobile
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