/*=============== SHOW MENU ===============*/

const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
  navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
  })
}

/* Menu hidden */
if(navClose){
  navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
  })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */

/*==================== REMOVE MENU MOBILE ====================*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*==================== CHANGE BACKGROUND HEADER ====================*/

function scrollHeader() {
  const header = document.getElementById('header');
  if(this.scrollY >= 80) header.classList.add('scroll-header');
  else header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);
/*==================== SHOW SCROLL UP ====================*/

const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== ABOUT TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
  tabContents = document.querySelectorAll('[data-content]');

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const target = document.querySelector(tab.dataset.target);

      tabContents.forEach((tabContent) => {
        tabContent.classList.remove('tab__active');
      });

      target.classList.add('tab__active');

      tabs.forEach((tab) => {
        tab.classList.remove('tab__active');
      });

      tab.classList.add('tab__active');
    });
});





/*=============== CONTACT FORM =============== */
const contactForm = document.getElementById('contact-form'),
contactName = document.getElementById('contact-name'),
contactEmail = document.getElementById('contact-email'),
contactSubject = document.getElementById('contact-subject'),
contactMessage = document.getElementById('contact-message'),
errorMessage = document.getElementById('error-message');

const sendEmail = (e) => {
  e.preventDefault();

  // check if the field has a value
  if (
    contactName.value === '' || 
    contactEmail.value === '' || 
    contactSubject.value === '' || 
    contactMessage.value === ''
  ){
    //show message
    errorMessage.textContent = 'Write all the input fields'
  }

  else{
    // serviceID - templateID - #form - publickey
    emailjs.sendForm('service_3r15rzf','template_tsx13m3','#contact-form','RY2y6ubA8cGDLQU2r',)
    .then(() =>{
      // show message and add color, window + dot to open emojii
      errorMessage.classList.add('color-first');
      errorMessage.textContentn = 'Message sent ☑️';

      //remove message after 5 second
      setTimeout(() => {
        errorMessage.textContent = '';
      }, 5000);
    },(error) =>{
      alert('OOPs!  SOMETHING WENT WRONG....', error);
    });

    // clear input field
    contactName.value = '';
    contactEmail.value = '';
    contactSubject.value = '';
    contactMessage.value = '';

  }
};

contactForm.addEventListener('submit',sendEmail);



/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
  origin: 'left',
  distance: '60px',
  duration: 3000,
  delay: 400,
 // reset: true  // Animation repeat
})

sr.reveal('.home__subtitle, .home__title')
sr.reveal('.home__card',{delay:600,distance: '100px', interval: 100})
sr.reveal('.home__img, .contact__description , .contact__img',{origin:'right'})
sr.reveal('.about__image, .section__title, .contact__form',{origin:'left'})
sr.reveal('.popular__card',{interval: 200})