const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
      const context = this;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };
  
  const target = document.querySelectorAll('[data-anime]');
  const animationClass = 'animate';
  
  function animeScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 3.2);
    target.forEach(function(element) {
      if((windowTop) > element.offsetTop) {
        element.classList.add(animationClass);
      } else {
        element.classList.remove(animationClass);
      }
    })
  }
  
  animeScroll();
  
  if(target.length) {
    window.addEventListener('scroll', debounce(function() {
      animeScroll();
    }, 100));
  }


  window.addEventListener('scroll', function(){
      var header = this.document.querySelector('header');
      header.classList.toggle('menuAnimate', this.window.scrollY > 3)
  })



// if (window.Notification&&Notification.permission!=="denied") {
//   Notification.requestPermission(function(status){
//       let n = new Notification('Title', {
//           body: 'Conteudo',
//       })
//   })
//   }


function iniciaModal(modalID) {
  if(sessionStorage.fechaModal !== modalID) {
    const modal = document.getElementById(modalID);
    if(modal) {
      modal.classList.add('mostrar');
      modal.addEventListener('click', (e) => {
        if(e.target.id == modalID || e.target.className == 'fechar') {
          modal.classList.remove('mostrar');
          sessionStorage.fechaModal = modalID;
        }
      });
    }
  }
}


document.addEventListener('scroll', () => {
  if(window.pageYOffset > 200) {
    iniciaModal('modal-promocao')
  } 
})