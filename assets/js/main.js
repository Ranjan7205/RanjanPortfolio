{/* <script>
    var typed = new Typed('#element', {
      strings: ['Web Developer', 'Graphic Designer','Containt Editor'],
      typeSpeed: 60,
    });
  </script> */}

  const themeToggle = document.getElementById('theme__nav');
  const darkTheme = document.getElementById('dark-theme');
  const lightTheme = document.getElementById('theme-stylesheet');

  themeToggle.addEventListener('click', () => {
    const isDark = darkTheme.disabled;

    darkTheme.disabled = !isDark;
    lightTheme.disabled = isDark;

    // Optional: Save the user's theme preference in localStorage
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
  });

  // Optional: Check the user's theme preference in localStorage on page load
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    darkTheme.disabled = false;
    lightTheme.disabled = true;
  }
  
/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .skills__subtitle, .skills__text',{}); 
sr.reveal('.right, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 
sr.reveal('.about-details', {origin:'right'})
sr.reveal('.about__img', {origin:'left'})

var typed = new Typed('#element', {
    strings: ['A Graphic Designer','A Containt Editor'],
    typeSpeed: 60,
  });