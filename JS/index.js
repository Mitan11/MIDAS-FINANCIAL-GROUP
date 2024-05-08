// Recently Closed Loan Section SWIPER JS
let swiperCards = new Swiper(".card__content", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    },
  },
});

// Our Team Section SWIPER JS

var swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  loop: true,
  direction: "horizontal",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    220: {
      slidesPerView: 1,
    },
    575: {
      slidesPerView: 1,
    },
    767: {
      slidesPerView: 2,
    },
    1092: {
      slidesPerView: 3,
    },
  },
});

// side nav close in click
const navLinks = document.querySelectorAll(
  "#navbarSupportedContent2 .nav-link"
);
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // Hide the offcanvas menu
    const offcanvas = document.getElementById("navbarSupportedContent2");
    const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvas);
    offcanvasInstance.hide();
  });
});

// Using GSAP (GreenSock Animation Platform) to create a timeline for animating elements on the webpage

function checkScreenWidth() {
  var screenWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  if (screenWidth > 768) {
    gsap.registerPlugin();
    var tl = gsap.timeline();

    tl.from(".container-fluid .img ,.navbar-toggler, .wrap-mb .f-s,#ani-butt", {
      y: -80,
      opacity: 0,
      duration: 0.5,
      delay: 0.5,
      stagger: 0.3,
    });

    gsap.from(".offcanvas-body #f-s", {
      y: -80,
      opacity: 0,
      ease: "power2.out",
      duration: 0.5,
      delay: 0.5,
      stagger: 0.3,
    });

    tl.from("#main", {
      opacity: 0,
      ease: "power2.out",
      duration: 0.3,
      delay: 0.5,
    });

    gsap.from("#About .title", {
      x: -100,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      scrollTrigger: {
        scroller: "#main",
        trigger: "#About .title",
        scrub: 1,
        // markers: true,
        end: "top 25%",
      },
    });
    gsap.from("#About #img", {
      x: 100,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      scrollTrigger: {
        scroller: "#main",
        trigger: "#About #img",
        scrub: 1,
        // markers: true,
        end: "top 25%",
      },
    });

    gsap.from("#About #about-head ,#About #a-b", {
      y: 100,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      scrollTrigger: {
        scroller: "#main",
        trigger: "#About #about-head,#About #a-b",
        scrub: 1,
        // markers: true,
        end: "top 40%",
      },
    });

    gsap.from("#CRITERIA .u-l", {
      y: -50,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      scrollTrigger: {
        scroller: "#main",
        trigger: "#CRITERIA .u-l",
        scrub: 1,
        // markers: true,
        end: "top 60%",
      },
    });
    tl.from("#CRITERIA .card__article", {
      y: 100,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      scrollTrigger: {
        scroller: "#main",
        trigger: "#CRITERIA .card__article",
        scrub: 1,
        // markers: true,
        end: "top 30%",
      },
    });

    gsap.from("#News .u-l", {
      y: -50,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      scrollTrigger: {
        scroller: "#main",
        trigger: "#News .u-l",
        scrub: 1,
        // markers: true,
        end: "top 60%",
      },
    });

    gsap.from("#News .left", {
      x: -250,
      opacity: 0,
      duration: 1,
      ease: "bounce.out",
      delay: 0.3,
      scrollTrigger: {
        scroller: "#main",
        trigger: "#News .left",
        // scrub: 1,
        // markers: true,
        end: "top 25%",
      },
    });
    gsap.from("#News .right", {
      x: 250,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      ease: "bounce.out",
      scrollTrigger: {
        scroller: "#main",
        trigger: "#News .right",
        // scrub: 1,
        // markers: true,
        end: "top 50%",
      },
    });

    gsap.from("#loan .u-l", {
      y: -50,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      scrollTrigger: {
        scroller: "#main",
        trigger: "#loan .u-l",
        scrub: 1,
        // markers: true,
        end: "top 60%",
      },
    });

    tl.from(".grid .gap-4", {
      x: -200,
      opacity: 0,
      ease: "power2.out",
      duration: 1,
      delay: 2,
      stagger: 1,
      scrollTrigger: {
        scroller: "#main",
        trigger: ".grid .gap-4",
        scrub: 1,
        // markers: true,
        end: "top 50%",
      },
    });

    gsap.from("#team .u-l", {
      y: -50,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      scrollTrigger: {
        scroller: "#main",
        trigger: "#team .u-l",
        scrub: 1,
        // markers: true,
        end: "top 60%",
      },
    });

    tl.from("#team .swiper", {
      y: 100,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      scrollTrigger: {
        scroller: "#main",
        trigger: "#team .swiper",
        scrub: 1,
        // markers: true,
        end: "top 30%",
      },
    });

    gsap.from("#Contact .u-l", {
      y: -50,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      scrollTrigger: {
        scroller: "#main",
        trigger: "#Contact .u-l",
        scrub: 1,
        // markers: true,
        end: "top 60%",
      },
    });

    gsap.from("#Contact .left", {
      x: -100,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      scrollTrigger: {
        scroller: "#main",
        trigger: "#Contact .left",
        scrub: 1,
        // markers: true,
        end: "top 25%",
      },
    });
    gsap.from("#Contact .right", {
      x: 100,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      scrollTrigger: {
        scroller: "#main",
        trigger: "#Contact .right",
        scrub: 1,
        // markers: true,
        end: "top 50%",
      },
    });

    gsap.from("#location", {
      opacity: 0,
      duration: 1,
      delay: 0.3,
      scrollTrigger: {
        scroller: "#main",
        trigger: "#location",
        scrub: 1,
        // markers: true,
        end: "top 60%",
      },
    });
  }
}

window.addEventListener("resize", checkScreenWidth);

checkScreenWidth();
