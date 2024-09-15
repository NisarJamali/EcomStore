

document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    // Target the card elements
    gsap.to(".left",{
      y:0,
      ease: Expo.easeInOut,
      duration : 3,
      delay : -1,
      opacity: 1
    })
    gsap.to(".rightCards", {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.4, 
      scrollTrigger: {
        trigger: ".reasons", 
        start: "top 80%", 
        toggleActions: "play none none none",
      }
    });
    gsap.to(".leftCards", {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.4, 
      scrollTrigger: {
        trigger: ".reasons", 
        start: "top 80%", 
        toggleActions: "play none none none",
      }
    });
    gsap.to(".section2", {
      opacity: 1,
      y: 0,
      duration: 1.5,
      stagger: 0.4, 
      scrollTrigger: {
        trigger: ".reasons", 
        start: "top 80%", 
        toggleActions: "play none none none",
      }
    });
  });


function firstPageAnim(){
    var tl = gsap.timeline();
    tl.to(".heroImage",{
        y:0,
        ease: Expo.easeInOut,
        duration : 3,
        delay : -1,
        opacity: 1
    })
}

firstPageAnim();