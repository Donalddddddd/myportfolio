function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){
            menuBtn.className -= " responsive";
    }else{
            menuBtn.className = "nav-menu";
    }
}

window.onscroll = function() {headerShadow()};

function headerShadow(){
    const navHeader = document.getElementById("header");
    const navLogo = document.getElementById("nav-logo");
    const navLinks = document.querySelectorAll("#header a");
    const navMenu = document.getElementById("myNavMenu");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){

        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";
        navHeader.style.background = "linear-gradient(to bottom,rgb(220, 46, 2),rgb(222, 56, 1),rgb(225, 68, 1),rgb(227, 76, 1),rgb(229, 81, 2),rgb(231, 89, 1),rgb(233, 98, 1),rgb(235, 107, 2),rgb(237, 115, 1),rgb(240, 124, 1),rgb(242, 130, 3),rgb(244, 141, 6))";
        navHeader.style.transition = ".8s ease";

        navMenu.style.background = " linear-gradient(to bottom,rgb(220, 46, 2),rgb(222, 56, 1),rgb(225, 68, 1),rgb(227, 76, 1),rgb(229, 81, 2),rgb(231, 89, 1),rgb(233, 98, 1),rgb(235, 107, 2),rgb(237, 115, 1),rgb(240, 124, 1),rgb(242, 130, 3),rgb(244, 141, 6))";

        navLogo.style.color = "rgb(250, 250, 250)";
  

        navLinks.forEach(link => {
            link.style.color = "rgb(250, 250, 250)"; 
            link.style.transition = "color 0.3s ease";
            
        });
        

    } else {
        
        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";
        navHeader.style.background = "rgb(250, 250, 250)";

        navMenu.style.background = " rgb(250, 250, 250)";

        navLogo.style.color = "black";
        

        navLinks.forEach(link => {
            link.style.color = " #6a040f"; 
            link.style.transition = "color 0.3s ease";
            
        });

    }
}

function moveSlide(n, carouselIndex) {
    const carousels = document.querySelectorAll('.project-carousel');
    const slides = carousels[carouselIndex].querySelectorAll('.carousel-slide');
    let currentIndex = 0;
    
    // Find current active slide
    slides.forEach((slide, index) => {
        if (slide.classList.contains('active')) {
            currentIndex = index;
            slide.classList.remove('active');
        }
    });
    
    // Calculate new index
    let newIndex = currentIndex + n;
    
    // Handle wrap-around
    if (newIndex >= slides.length) {
        newIndex = 0;
    } else if (newIndex < 0) {
        newIndex = slides.length - 1;
    }
    
    // Show new slide
    slides[newIndex].classList.add('active');
}

function autoAdvanceCarousels() {
    const carousels = document.querySelectorAll('.project-carousel');
    carousels.forEach((carousel, index) => {
        moveSlide(1, index);
    });
}

setInterval(autoAdvanceCarousels, 3000);

var typingEffect = new Typed(".typedText",{
      strings : ["Frontend","Backend","Developer"],
      loop : true,
      typeSpeed : 100, 
      backSpeed : 80,
      backDelay : 2000
})

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social-icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})


sr.reveal('.project-box',{interval: 200})


sr.reveal('.top-header',{})

sr.reveal('.skill.backend',{interval: 200})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */
  /* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
})

  
srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

srLeft.reveal('.skill.frontend',{interval: 200})

srLeft.reveal('.project-card',{interval: 200})


  /* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
})
  
srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})

srRight.reveal('.image-about',{interval: 200})

srRight.reveal('.skill.database',{interval: 200})

  
/* ----- CHANGE ACTIVE LINK ----- */
  
const sections = document.querySelectorAll('section[id]')
function scrollActive() {
  const scrollY = window.scrollY;
  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')
    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 
        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
    }  else {
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)
