// Scroll tracker for the timeline

import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';

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


// Nav scrolled class

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


// Hide and show Headlines on scroll

const observer = new IntersectionObserver((entries) => {
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



