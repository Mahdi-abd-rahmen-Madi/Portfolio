// pre loader   

var loader = document.getElementById("preloader");

window.addEventListener("load", function(){
  loader.style.display = "none";
})



// Scroll tracker for the timeline

/*import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';

const scrollTracker = document.querySelector('.scroll-tracker');

const scrollTrackingTimeline = new ScrollTimeline ( {
    source: document.scrollingElement,
    orientation: 'block',
    scrollOffsets : [CSS.percent(0), CSS.percent(100)],
})

scrollTracker.animate(
    {
       transform:["scaleX(0)", "scaleX(1)"],
    },
    {
        duration: 1000,
        fill: 'forwards',
        easing: 'ease-in-out',
        timeline: scrollTrackingTimeline,
    }
);
*/
// ======================== Dark mode ========================

var icon = document.getElementById("theme");
theme.onclick = function() {
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme")){ 
    theme.src ="img/icons/weather-night.png"
  }else{
    theme.src ="img/icons/white-balance-sunny.png"
  }

}


// ============================== Nav bg pattern ============================== // 
///

const menu = document.getElementById("menu");

Array.from(document.getElementsByClassName("nav-link"))
  .forEach((item, index) => {
    item.onmouseover = () => {
      menu.dataset.activeIndex = index;
    }
  });

// Nav scrolled class
/*
const header = document.querySelector('header');
const sectionOne = document.querySelector('#about');

const sectionOneOptions = {
    rootMargin: "-200px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver
(function(
    entries,
    sectionOneObserver
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            header.classList.add('nav-scrolled');
            header.classList.remove('active');
        } else {
            header.classList.remove('nav-scrolled');
        }
    
    });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);


// ======================== Responsive Side Menu on mobile devices ========================

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
  sidemenu.style.right = "-200px";
}



// Hide and show Headlines on scroll

/*const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry) 
      if (entry.isIntersecting) {
          entry.target.classList.add('show');
      } else {
          entry.target.classList.remove('show');
        
      }
    });
});
  
const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => {
    observer.observe(el);
});
*/


// ======================== Submit to google sheets ========================


const scriptURL = 'https://script.google.com/macros/s/AKfycbz_3bsO3nF8BAIPMNo7Bc3YEwJwqErWsDjp7HKbExNSpwR2MD5lT5EsdxD-ETCIt6IaIw/exec'
const form = document.forms['submit-to-google-sheet']

const msg = document.getElementById('msg')

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML = "Your message has been sent successfully, I'll get back to you as soon as possible."
      setTimeout(function(){msg.innerHTML = ""}, 5000);
      form.reset()
      console.log('Success!', response)
      })
    
    .catch(error => console.error('Error!', error.message))
})


