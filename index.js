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
showMenu('nav-toggle','nav-menu1')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu1')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1500,
    delay: 150,
     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home-img, .about__subtitle, .about__text, .skills__img',{delay: 150}); 
sr.reveal('.home__social-icon',{ interval: 150}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 150}); 

/*SCROLL HOME*/
sr.reveal( ".home-title", {} );
sr.reveal( ".button", {} );
sr.reveal( ".home-img", { delay: 150 } );
sr.reveal( ".home-social-icon", { interval: 150 } );

/*SCROLL ABOUT*/
sr.reveal( ".about-img", {} );
sr.reveal( ".about-subtitle", { delay: 150 } );
sr.reveal( ".about-text", { delay: 150 } );

// Scross main skills mainskills
sr.reveal( ".mainskills", { interval: 150 } );
sr.reveal( ".mskill-img", { delay: 150 } );
sr.reveal( ".mskill-text", { delay: 150 } );
/*SCROLL SKILLS*/
sr.reveal( ".skills-subtitle", {} );
sr.reveal( ".skills-text", {} );
sr.reveal( ".skills-data", { interval: 150 } );

sr.reveal(".contact-input", { interval: 150 });

/* SCROLL CONTACT */
srtop.reveal('.contact .container',{delay: 400});
srtop.reveal('.contact .container .form-group',{delay: 400});
var typing=new Typed(".text", {
    strings: ["", "FULL-STACK", "WEB", "DEVELOPER"],
    typeSpeed: 100,
    backSpeed: 40  ,
    loop: true,
});

function resumeDownload(){

    window.open('https://drive.google.com/file/d/1JhgxTCl9xgavBTx_MkL3IB1Aq2_4csHI/view?usp=sharing')

}