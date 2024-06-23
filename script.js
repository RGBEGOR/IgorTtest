class Text{
    constructor(obj){
      this.text = document.querySelector(obj)
      this.fullText = this.text.innerHTML
      this.text.innerHTML = ''
  
      this.str()
    }
    str(x = 0){
      this.text.innerHTML += this.fullText[x]
      x++
      if (x < this.fullText.length) {
        setTimeout(() => {
          this.str(x)
        }, 100);
      }
    }
  }
  const text = new Text('.introduction__title')



  

document.addEventListener('DOMContentLoaded', () => {
    const Heading = document.querySelector('.introduction');
    const header = document.querySelector('.header');
    const scrollItems = document.querySelectorAll('.scroll-item');
  
    const scrollAnimation = () => {
      let windowCenter = (window.innerHeight / 2) + window.scrollY;
      // console.log(windowCenter)
      scrollItems.forEach(el => {
        let scrollOffset = el.offsetTop + (el.offsetHeight / 4);
        console.log(scrollOffset)
        if (windowCenter >= scrollOffset) {
          el.classList.add('animation-class');
        } else {
          el.classList.remove('animation-class');
        }
      });
    };
  
    const headerFixed = () => {
      let scrollTop = window.scrollY;
      let HeadingCenter = Heading.offsetHeight / 2;
  
    };
  
    headerFixed();
    scrollAnimation();
    window.addEventListener('scroll', () => {
      headerFixed();
      scrollAnimation();
    });
});


new Swiper('.swiper', {

  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },
// navigation:{
//   // nextEl:'.swipper-button-prev',
//   // nextEl:'.swipper-button-next',
  
// },
slidesPerView:2,
spaceBetween:30
});

  
