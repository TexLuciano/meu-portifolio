//slide
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