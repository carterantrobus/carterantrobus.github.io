gsap.registerPlugin(ScrollTrigger);

let scroll;

const body = document.body;

const select = (e) => document.querySelector(e);
const selectAll = (e) => document.querySelectorAll(e);

initPageTransitions();

// Animation - First Page Load
function initLoaderHome() {

  var tl = gsap.timeline();

  tl.set(".loading-screen", {
    top: "0",
  });

  if ($(window).width() > 540) {
    tl.set("main .once-in", {
      y: "50vh"
    });
  } else {
    tl.set("main .once-in", {
      y: "10vh"
    });
  }

  tl.set(".loading-words", {
    opacity: 0,
    y: -50
  });

  tl.set(".loading-words .active", {
    display: "none",
  });

  tl.set(".loading-words .home-active, .loading-words .home-active-last", {
    display: "block",
    opacity: 0
  });

  tl.set(".loading-words .home-active-first", {
    opacity: 1,
  });

  if ($(window).width() > 540) {
    tl.set(".loading-screen .rounded-div-wrap.bottom", {
      height: "10vh"
    });
  } else {
    tl.set(".loading-screen .rounded-div-wrap.bottom", {
      height: "5vh",
    });
  }

  tl.set("html", {
    cursor: "wait"
  });

  tl.call(function() {
    scroll.stop();
  });

  tl.to(".loading-words", {
    duration: 0,
    opacity: 1,
    y: -50,
    ease: "Power4.easeOut",
    delay: .5
  });

  tl.to(".loading-words .home-active", {
    duration: .01,
    opacity: 1,
    stagger: .15,
    ease: "none",
    onStart: homeActive
  }, "=-.4");

  function homeActive() {
    gsap.to(".loading-words .home-active", {
      duration: .01,
      opacity: 0,
      stagger: .15,
      ease: "none",
      delay: .15
    });
  }

  tl.to(".loading-words .home-active-last", {
    duration: .01,
    opacity: 1,
    delay: .15
  });

  tl.to(".loading-screen", {
    duration: .8,
    top: "-100%",
    ease: "Power4.easeInOut",
    delay: .2
  });

  tl.to(".loading-screen .rounded-div-wrap.bottom",{
    duration: 1,
    height: "0vh",
    ease: "Power4.easeInOut"
  }, "=-.8");

  tl.to(".loading-words", {
    duration: .3,
    opacity: 0,
    ease: "linear",
  }, "=-.8");

  tl.set(".loading-screen", {
    top: "calc(-100%)"
  });

  tl.set(".loading-screen .rounded-div-wrap.bottom", {
    height: "0vh"
  });

  tl.to("main .once-in", {
    duration: 1.5,
    y: "0vh",
    stagger: .07,
    ease: "Expo.easeOut",
    clearProps: true
  }, "=-.8");

  tl.set("html", {
    cursor: "auto"
  }, "=-1.2");

  tl.call(function() {
    scroll.start();
  });

}

// Animation - First Page Load
function initLoader() {

  var tl = gsap.timeline();

  tl.set(".loading-screen", {
    top: "0",
  });

  if($(window).width() > 540) {
    tl.set("main .once-in", {
      y: "50vh"
    });
  } else {
    tl.set("main .once-in", {
      y: "10vh"
    });
  }

  tl.set(".loading-words", {
    opacity: 1,
    y: -50
  });

  if($(window).width() > 540) {
    tl.set(".loading-screen .rounded-div-wrap.bottom", {
      height: "10vh",
    });
  } else {
    tl.set(".loading-screen .rounded-div-wrap.bottom", {
      height: "5vh",
    })
  }

  tl.set("html", {
    cursor: "wait"
  });

  tl.to(".loading-screen", {
    duration: .8,
    top: "-100%",
    ease: "Power4.easeInOut",
    delay: .5
  });

  tl.to(".loading-screen .rounded-div-wrap.bottom", {
    duration: 1,
    height: "0vh",
    ease: "Power4.easeInOut",
  }, "=-.8");

  tl.to(".loading-words", {
    duration: .3,
    opacity: 0,
    ease: "linear",
  }, "=-.8");

  tl.set(".loading-screen", {
    top: "calc(-100%)"
  });

  tl.set(".loading-screen .rounded-div-wrap.bottom", {
    height: "0vh"
  });

  tl.to("main .once-in", {
    duration: 1,
    y: "0vh",
    stagger: .05,
    ease: "Expo.easeOut",
    clearProps: "true"
  }, "=-.8");

  tl.set("html", {
    cursor: "auto",
  }, "=-.8");

}

// Animation - Page Transition In
function pageTransitionIn() {

  var tl = gsap.timeline();

  tl.call(function() {
    scroll.stop();
  });

  tl.set(".loading-screen", {
    top: "100%"
  });

  tl.set(".loading-words", {
    opacity: 0,
    y: 0
  });

  tl.set("html", {
    cursor: "wait",
  });

  if($(window).width() > 540) {
    tl.set(".loading-screen .rounded-div-wrap.bottom", {
      height: "10vh"
    });
  } else {
    tl.set(".loading-screen .rounded-div-wrap.bottom", {
      height: "5vh"
    })
  }

  tl.to(".loading-screen", {
    duration: .5,
    top: "0%",
    ease: "Power4.easeIn"
  });

  if($(window).width() > 540) {
    tl.to(".loading-screen .rounded-div-wrap.top", {
      duration: .4,
      height: "10vh",
      ease: "Power4.easeIn"
    }, "=-.5");
  } else {
    tl.to(".loading-screen .rounded-div-wrap.top", {
      duration: .4,
      height: "10vh",
      ease: "Power4.easeIn"
    }, "=-.5");
  }

  tl.to(".loading-words", {
    duration: .8,
    opacity: 1,
    y: -50,
    ease: "Power4.easeOut",
    delay: .05
  });

  tl.set(".loading-screen .rounded-div-wrap.top", {
    height: "0vh"
  });

  tl.to(".loading-screen", {
    duration: .8,
    top: "-100%",
    ease: "Power3.easeOut"
  }, "=-.2");

  tl.to(".loading-words", {
    duration: .6,
    opacity: 0,
    ease: "linear"
  }, "=-.8");

  tl.to(".loading-screen .rounded-div-wrap.bottom", {
    duration: .85,
    height: "0",
    ease: "Power3.easeOut"
  }, "=-.6");

  tl.set("html", {
    cursor: "auto"
  }, "=-0.6");

  if($(window).width() > 540) {
    tl.set(".loading-screen .rounded-div-wrap.bottom", {
      height: "10vh"
    });
  } else {
    tl.set(".loading-screen .rounded-div-wrap.bottom", {
      height: "5vh"
    });
  }

  tl.set(".loading-screen", {
    top: "100%"
  });

  tl.set(".loading-words", {
    opacity: 0
  });

}

// Animation - Page Transition Out
function pageTransitionOut() {

  var tl = gsap.timeline();

  if($(window).width() > 540) {
    tl.set("main .once-in", {
      y: "50vh",
    });
  } else {
    tl.set("main .once-in", {
      y: "20vh",
    });
  }

  tl.call(function() {
    scroll.start();
  });

  tl.to("main .once-in", {
    duration: 1,
    y: "0vh",
    stagger: .05,
    ease: "Expo.easeOut",
    delay: .8,
    clearProps: "true"
  });

}

function initPageTransitions() {

  // do something before the transition starts
  barba.hooks.before(() => {
    select("html").classList.add("is-transitioning");
  });

  /// Do something after the transition finishes
  barba.hooks.after(() => {
    select("html").classList.remove("is-transitioning");

    scroll.init();
    scroll.stop();
  });

  // scroll to the top of the page
  barba.hooks.enter(() => {
    scroll.destroy();
  });

  //scroll to the top of the page
  barba.hooks.afterEnter(() => {
    window.scrollTo(0, 0);
    initCookieViews();
  });

  if($(window).width() > 540) {
    barba.hooks.leave(() => {
      $(".btn-hamburger, .btn-menu").removeClass('active');
      $("main").removeClass("nav-active");
    });
  }

  barba.init({
    sync: true,
    debug: false,
    timeout: 7000,
    transitions: [{
      name: 'default',
      once(data) {
        // do something once on the initial page load
        initSmoothScroll(data.next.container);
        initScript();
        initCookieViews();
        initLoader();
      },
      async leave(data) {
        // animate loading screen in
        pageTransitionIn(data.current);
        await delay(495);
        data.current.container.remove();
      },
      async enter(data) {
        // animate loading screen away
        pageTransitionOut(data.next);
        initNextWord(data);
      },
      async beforeEnter(data) {
        ScrollTrigger.getAll().forEach(t => t.kill());
        scroll.destroy();
        initSmoothScroll(data.next.container);
        initScript();
      },
    },
  {
    name: 'to-home',
    from: {
    },
    to: {
      namespace: ['home']
    },
    once(data) {
      initSmoothScroll(data.next.container);
      initScript();
      initCookieViews();
      initLoaderHome();
    },
  }]
  });

  function initSmoothScroll(container) {

    scroll = new LocomotiveScroll({
      el: container.querySelector('[data-scroll-container]'),
      smooth: true,
    });

    window.onresize = scroll.update();

    scroll.on("scroll", () => ScrollTrigger.update());

    ScrollTrigger.scrollerProxy('[data-scroll-container]', {

      scrollTop (value) { 
        return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
      },  // we don't have to define a scrollLeft because we're only scrolling vertically.

      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },

      //LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: container.querySelector('[data-scroll-container]').style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.defaults({
      scroller: document.querySelector('[data-scroll-container]'),
    });

    // Remove Old Scrollbar

    const scrollbar = selectAll('.c-scrollbar');
    const scrollbarMob = selectAll('.c-scrollbar_thumb');

    if (scrollbar.length > 1) {
      scrollbar[0].remove();
      scrollbarMob[0].remove();
    }

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener('refresh', () => scroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning.
    ScrollTrigger.refresh();

  }
}

function initNextWord(data) {
  
  //update Text Loading https://github.com/barbajs/barba/issues/507
  let parser = new DOMParser();
  let dom = parser.parseFromString(data.next.html, 'text/html');
  let nextProjects = dom.querySelector(".loading-words");
  document.querySelector(".loading-words").innerHTML = nextProjects.innerHTML; 

}

function delay(n) {

  n = n || 2000;
  return new Promise((done) => {
    setTimeout(() => {
    done();
   }, n);
  });

}

// Fire all scripts on page load
function initScript() {

  select('body').classList.remove("is-loading");
  initWindowInnerHeight();
  initCheckTouchDevice();
  initHamburgerNav();
  initButtonFill();
  initVisualFilter();
  initScrollTriggerNav();
  initScrollLetters();
  initTricksWords();
  initContactForm();
  initTimeZone();
  initLazyLoad();
  initPlayVideoInview();
  initScrollTriggerAnimations();

}

// Window Inner Height Check

function initWindowInnerHeight() {

  // https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
  $(document).ready(function() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    $('.btn-hamburger').click(function(){
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
  });

}

// Check touch device

function initCheckTouchDevice() {

  function isTouchScreenDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints;
  };

  if(isTouchScreenDevice()) {
    $('main').addClass('touch');
    $('main').removeClass('no-touch');
  } else {
    $('main').removeClass('touch');
    $('main').addClass('no-touch');
  }
  $(window).resize(function() {
    if(isTouchScreenDevice()) {
      $('main').addClass('touch');
      $('main').removeClass('no-touch');
    } else {
      $('main').removeClass('touch');
      $('main').addClass('no-touch');
    }
  });

}

// Hamburger Nav Open/Close

function initHamburgerNav() {
   
  // Open/Close navigation when clicked .btn-hamburger

  $(document).ready(function() {

    $(".btn-hamburger, .btn-menu").click(function() {
      if ($(".btn-hamburger, .btn-menu").hasClass('active')) {
          $(".btn-hamburger, .btn-menu").removeClass("active");
          $("main").removeClass("nav-active");
          scroll.start();
      } else {
        $(".btn-hamburger, .btn-menu").addClass("active");
        $("main").addClass("nav-active");
        scroll.stop();
      }
    });
    $('.fixed-nav-back').click(function() {
      $(".btn-hamburger, .btn-menu").removeClass('active');
      $("main").removeClass("nav-active");
      scroll.start();
    });
  });
  $(document).keydown(function(e) {
    if (e.keyCode == 27) {
      if ($("main").hasClass('nav-active')) {
        $(".btn-hamburger, .btn-menu").removeClass('active');
        $("main").removeClass("nav-active");
        scroll.start();
      }
    }
  });

}

// Button Fill

function initButtonFill() {

   // Mouse enter
   $(".btn-click").on('mouseenter', function() {
    if($(this).find(".btn-fill").length) {
      gsap.to($(this).find(".btn-fill"), .6, {
        startAt: {y: "76%"},
        y: "0%",
        ease: Power2.easeInOut
      });
    }
    if($(this).find(".btn-text-inner.change").length) {
      gsap.to($(this).find(".btn-text-inner.change"), .3, {
        startAt: {color: "#1C1D20"},
        color: "#FFF",
        ease: Power3.easeIn,
      });
    }
    $(this.parentNode).removeClass('not-active');
   });

   // Mouse Leave
   $('.btn-click').on('mouseleave', function() {
    if ($(this).find('.btn-fill').length) {
      gsap.to($(this).find(".btn-fill"), .6, {
        y: "-76%",
        ease: Power2.easeInOut
      });
    }
    if ($(this).find(".btn-text-inner.change").length) {
      gsap.to($(this).find(".btn-text-inner.change"), .3, {
        color: "#1C1D20",
        ease: Power3.easeOut,
        delay: .3
      });
    }
    $(this.parentNode).removeClass('not-active');
   });
}

// Visual Filter

function initVisualFilter() {
    
  // Visual Filter
  $(document).ready(function(){

    $('.toggle-row .btn').click(function(){
      if ($(this).hasClass('active')) {
          } else {
      $('.work-tiles li, .work-items li').addClass('tile-fade-out');
      scroll.stop();
      setTimeout(function() {
          $('.work-tiles li, .work-items li').removeClass('tile-fade-out');
          $('.work-tiles li, .work-items li').addClass('tile-fade-in');
          scroll.scrollTo( 'top', {'offset': 0, 'duration': 700, 'easing': [0.7, 0.00, 0.35, 1.00], 'disableLerp': true});
      }, 300);
      setTimeout(function() {
          $('.work-tiles li, .work-items li').removeClass('tile-fade-in');
          scroll.update();
          ScrollTrigger.refresh();
          scroll.start();
      }, 700);
      setTimeout(function() {
         scroll.update();
         console.log('scroll- updated');
     }, 1000);
      }
    });
    $('.all-btn').click(function(){
      if ($(this).hasClass('active')) {
      } else {
          $('.toggle-row .btn-normal').removeClass('active');
          $('.toggle-row .btn-normal').addClass('not-active');
          $(this).addClass('active');
          $(this).removeClass('not-active');
          setTimeout(function() {
            $('.mouse-pos-list-image li, .mouse-pos-list-image-wrap li, .work-tiles li').addClass('visible');
          }, 300);
      }
    });
    $('.design-btn').click(function(){
      if ($(this).hasClass('active')) {
      } else {
          $('.toggle-row .btn-normal').removeClass('active');
          $('.toggle-row .btn-normal').addClass('not-active');
          $(this).addClass('active');
          $(this).removeClass('not-active');
          setTimeout(function() {
            $('.mouse-pos-list-image li, .mouse-pos-list-image-wrap li, .work-tiles li').removeClass('visible');
            $('.mouse-pos-list-image li.design, .mouse-pos-list-image-wrap li.design, .work-tiles li.design').addClass('visible');
          }, 300);
      }
    });
    $('.development-btn').click(function(){
      if ($(this).hasClass('active')) {
      } else {
          $('.toggle-row .btn-normal').removeClass('active');
          $('.toggle-row .btn-normal').addClass('not-active');
          $(this).addClass('active');
          $(this).removeClass('not-active');
          setTimeout(function() {
            $('.mouse-pos-list-image li, .mouse-pos-list-image-wrap li, .work-tiles li').removeClass('visible');
            $('.mouse-pos-list-image li.development, .mouse-pos-list-image-wrap li.development, .work-tiles li.development').addClass('visible');
          }, 300);
      }
    });

    $('.grid-row .btn').click(function(){
      if ($(this).hasClass('active')) {
          } else {
      $('.grid-fade').addClass('grid-fade-out');
      scroll.stop();
      scroll.scrollTo( 'top', {'offset': 0, 'duration': 700, 'easing': [0.7, 0.00, 0.35, 1.00], 'disableLerp': true});
      setTimeout(function() {
        $('.grid-fade').removeClass('grid-fade-out');
        $('.grid-fade').addClass('grid-fade-in');
      }, 300);
      setTimeout(function() {
        $('.grid-fade').removeClass('grid-fade-in');
        scroll.update();
        ScrollTrigger.refresh();
        scroll.start();
      }, 700);
      }
    });
    $('.grid-row .rows-btn').click(function(){
      if ($(this).hasClass('active')) {
      } else {
          $('.grid-row .btn-normal').removeClass('active');
          $('.grid-row .btn-normal').addClass('not-active');
          Cookies.set("view", "rows", { expires: 14 });
          $(this).addClass('active');
          $(this).removeClass('not-active');
          setTimeout(function() {
            $('.grid-columns-part').removeClass('visible');
            $('.grid-rows-part').addClass('visible');
          }, 300);
      }
    });
    $('.grid-row .columns-btn').click(function(){
      if ($(this).hasClass('active')) {
      } else {
          $('.grid-row .btn-normal').removeClass('active');
          $('.grid-row .btn-normal').addClass('not-active');
          Cookies.set("view", "columns", { expires: 14 });
          $(this).addClass('active');
          $(this).removeClass('not-active');
          setTimeout(function() {
            $('.grid-rows-part').removeClass('visible');
            $('.grid-columns-part').addClass('visible');
          }, 300);
      }
    });

  });

}

// Cookie Views

function initCookieViews() {

  //Set cookie for columns/rows view
  // Source: https://www.youtube.com/watch?v=rfwiyBoVwdQ&ab_channel=TimothyRicks
  if(Cookies.get("view") == "columns") {
    $('.grid-row .rows-btn').removeClass('active');
    $('.grid-row .columns-btn').addClass('active');
    $('#work .grid-rows-part').removeClass('visible');
    $('#work .grid-columns-part').addClass('visible');
    scroll.update();
    ScrollTrigger.refresh();
  }

}

// ScrollTrigger Scroll Check

function initScrollTriggerNav() {

  ScrollTrigger.create({
    start: 'top -30%',
    onUpdate: self => {
      $('main').addClass('scrolled');
    },
    onLeaveBack: () => {
      $('main').removeClass('scrolled');
    },
  });

}

// ScrollTrigger Scroll Letters Home

function initScrollLetters() {
   
  // Scrolling letters Both Directions
  // Source: // https://codepen.io/GreenSock/pen/rNjvgjo

  let direction = 1;

  const roll1 = roll(".big-name .name-wrap", {duration: 18}),
        roll2 = roll(".rollingText02", {duration: 10}, true),
        scroll = ScrollTrigger.create({
          trigger: document.querySelector('[data-scroll-container]'),
          onUpdate(self) {
            if(self.direction !== direction) {
              direction *= -1;
              gsap.to([roll1, roll2], {timeScale: direction, overwrite: true});
            }
          }
        });

        // Helper function that clones the targets, places them next to the original, then animates the xPercent in a loop to make it appear to roll across the screen in a seamless loop.'
        function roll(targets, vars, reverse) {
          vars = vars || {};
          vars.ease || (vars.ease = "none");
          const tl = gsap.timeline({
            repeat: -1,
            onReverseComplete() {
              this.totalTime(this.rawTime() + this.duration * 10); // otherwise when the playhead gets back to the beginning, it'd stop. So push the playhead forward 10 iterations (it could be any number)
            }
          }),
          elements = gsap.utils.toArray(targets),
          clones = elements.map(el => {
            let clone = el.cloneNode(true);
            el.parentNode.appendChild(clone);
            return clone;
          }),
          positionClones = () => elements.forEach((el, i) => gsap.set(clones[i], {position: "absolute", overwrite: false, top: el.offsetTop, left: el.offsetLeft + (reverse ? -el.offsetWidth : el.offsetWidth)}));
          positionClones();
          elements.forEach((el, i) => tl.to([el, clones[i]], {xPercent: reverse ? 100 : -100, ...vars}, 0));
          window.addEventListener("resize", () => {
            let time = tl.totalTime(); // record the current time
            tl.totalTime(0); // rewind and clear out the timeline
            positionClones(); // reposition
            tl.totalTime(time); // jump back to the proper time
          });
          return tl;
        }

}

// ScrollTrigger Nav

function initTricksWords() {

  // Copyright start
  // © Code by T.RICKS, https://www.tricksdesign.com/
  // Tutorial: https://www.youtube.com/watch?v=xiAqTu4l3-g&ab_channel=TimothyRicks

  // Find all text with .tricks class and break each letter into a span
  var spanWord = document.getElementsByClassName("span-lines");
  for (var i = 0; i < spanWord.length; i++) {
    var wordWrap = spanWord.item(i);
    wordWrap.innerHTML = wordWrap.innerHTML.replace(/(^|<\/?[^>]+>|\s+)([^\s<]+)/g, '$1<span class="span-line"><span class="span-line-inner">$2</span></span>');
  }

}

// Contact Form

function initContactForm() {

  $('.field').on('input', function() {
    $(this).parent().toggleClass('not-empty', this.value.trim().length > 0);
  });

  $(function() {
   $('.field').focusout(function() {
      var textVal = $(this).val();
     $(this).parent().toggleClass('not-empty', textVal !== "");
    }).focusout();
  });

}

// Footer Time Zone

function initTimeZone() {

  // Sources: https://stackoverflow.com/questions/39418405/making-a-live-clock-in-javascript/67149791#67149791 | https://stackoverflow.com/questions/8207655/get-time-of-specific-timezone | https://stackoverflow.com/questions/63572780/how-to-update-intl-datetimeformat-with-new-date
  const timeSpan = document.querySelector("#timeSpan");

  const optionsTime = {
    timeZone: 'America/Toronto',
    timeZoneName: 'short',
    hour: '2-digit',
    hour12: 'true',
    minute: 'numeric',
  };

  const formatter = new Intl.DateTimeFormat([], optionsTime);
  updateTime();
  setInterval(updateTime, 1000);

  function updateTime() {
    const dateTime = new Date();
    const formattedDateTime = formatter.format(dateTime);
    timeSpan.textContent = formattedDateTime;
  }

}

// Lazy Load

function initLazyLoad() {
  // https://github.com/locomotivemtl/locomotive-scroll/issues/225
  // https://github.com/verlok/vanilla-lazyload
  var lazyLoadInstance = new LazyLoad({ 
    elements_selector: ".lazy",
  });

}

// Play Video Inview

function initPlayVideoInview() {

let allVideoDivs = gsap.utils.toArray('.playpauze');

allVideoDivs.forEach((videoDiv, i) => {

  let videoElem = videoDiv.querySelector('video')

  ScrollTrigger.create({
    scroller: document.querySelector('[data-scroll-container]'),
    trigger: videoElem,
    start: '0% 120%',
    end: '100% -20%',
    onEnter: () => videoElem.play(),
    onEnterBack: () => videoElem.play(),
    onLeave: () => videoElem.pause(),
    onLeaveBack: () => videoElem.pause(),
  });

});
}

// ScrollTrigger Animations

function initScrollTriggerAnimations() {
    
  if(document.querySelector(".footer-wrap")) {
  // ScrollTrigger Animation: Footer + hamburger
  $(".footer-wrap").each(function (index) {
    let triggerElement = $(this);
    let targetElementHamburger = $(".btn-hamburger .btn-click");

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: "50% 100%",
        end: "100% 120%",
        scrub: 0
      }
    });
    tl.from(targetElementHamburger, {
      boxShadow: "0px 0px 0px 0px rgb(0, 0, 0)",
      ease: "none"
    });
  });
  }

  // ScrollTrigger Animation: Span Lines Intro Home
  if(document.querySelector(".span-lines.animate")) {
  $(".span-lines.animate").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".span-lines.animate .span-line-inner");

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        toggleActions:'play none none reset', 
        start: "0% 100%",
        end: "100% 0%"
      }
    });
    if(targetElement) {
      tl.from(targetElement, {
        y: "100%",
        stagger: .01,
        ease: "power3.out",
        duration: 1,
        delay: 0
      });
    }
  });
  }

  if(document.querySelector(".fade-in.animate")) {
  // ScrollTrigger Animation: Fade in
  $(".fade-in.animate").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(this);

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        toggleActions:'play none none reset',
        start: "0% 110%",
        end: "100% 0%",
      }
    });
    if(targetElement) {
      tl.from(targetElement, {
        y: "2em",
        opacity: 0,
        ease: "expo.out",
        duration: 1.75,
        delay: 0
      });
    }
  });
  }

  // Disable GSAP on Mobile
  // Source: https://greensock.com/forums/topic/26325-disabling-scrolltrigger-on-mobile-with-mediamatch/
  ScrollTrigger.matchMedia({
    
    // Desktop Only Scrolltrigger 
    "(min-width: 721px)": function() {
    
      if(document.querySelector(".home-header .arrow")) {
      // ScrollTrigger Animation: Header Arrow
      $(".home-header").each(function (index) {
        let triggerElement = $(this);
        let targetElement = $(".home-header .arrow");
      
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: triggerElement,
            start: "100% 100%",
            end: "100% 0%",
            scrub: 0
          }
        });
        tl.to(targetElement, {
          rotate: 90,
          ease: "none"
        }, 0);
      });
      }
      
      if(document.querySelector(".footer-footer-wrap")) {
      // ScrollTrigger Animation: Footer General Footer
      $(".footer-footer-wrap").each(function (index) {
        let triggerElement = $(this);
        let targetElementRound = $(".footer-rounded-div .rounded-div-wrap");
        let targetElementArrow = $("footer .arrow");
      
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: triggerElement,
            start: "0% 100%",
            end: "100% 100%",
            scrub: 0
          }
        });
        tl.to(targetElementRound, {
          height: 0,
          ease: "none"
        }, 0)
        .from(targetElementArrow, {
          rotate: 15,
          ease: "none"
        }, 0);
      });
      }

      if(document.querySelector(".footer-case-wrap")) {
        // ScrollTrigger Animation: Footer Case
        $(".footer-case-wrap").each(function (index) {
          let triggerElement = $(this);
          let targetElementRound = $(".footer-rounded-div .rounded-div-wrap");
        
          let tl = gsap.timeline({
            scrollTrigger: {
              trigger: triggerElement,
              start: "0% 100%",
              end: "100% 100%",
              scrub: 0
            }
          });
          tl.to(targetElementRound, {
            height: 0,
            ease: "none"
          }, 0);
        });
        }
      
      if(document.querySelector(".about-image .single-about-image")) {
      // ScrollTrigger Animation : About 
      $(".about-image .single-about-image").each(function (index) {
        let triggerElement = $(this);
        let targetElement = $(".about-image .arrow");
      
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: triggerElement,
            start: "15% 100%",
            end: "100% 0%",
            scrub: 0,
          }
        });
        tl.to(targetElement, {
          rotate: 60,
          ease: "none"
        }, 0);
      });
      }
      
      
      if(document.querySelector(".about-services")) {
      // ScrollTrigger Animation : About Services BG
      $(".about-services").each(function (index) {
        let triggerElement = $(this);
        let targetElement = $(".about-header, .line-globe, .about-image, .about-services, .footer-rounded-div .rounded-div");
      
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: triggerElement,
            start: "-25% 100%",
            end: "100% 100%",
            scrub: 0,
          }
        });
        tl.set(targetElement, {
          backgroundColor: "#FFFFFF",
        })
        tl.to(targetElement, {
          backgroundColor: "#E9EAEB",
          ease: "none",
        });
      });
      }
      
      if(document.querySelector(".digital-ball .globe")) {
      // ScrollTrigger Animation : Globe
      $("main").each(function (index) {
        let triggerElement = $(this);
        let targetElement = $(".digital-ball .globe");
      
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: triggerElement,
            start: "100% 100%",
            end: "100% 0%",
            scrub: 0,
          }
        });
        
        tl.to(targetElement, {
          ease: "none",
          rotate: 90
        });
      });
      }
    
    }, // End Desktop Only ScrollTrigger
  
    // Mobile Only ScrollTrigger
    "(max-width: 720px)": function() {
    
      if(document.querySelector(".footer-wrap")) {
      // ScrollTrigger Animation : Footer
      $(".footer-wrap").each(function (index) {
        let triggerElement = $(this);
        let targetElementRound = $(".footer-rounded-div .rounded-div-wrap");
      
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: triggerElement,
            start: "0% 100%",
            end: "100% 100%",
            scrub: 0
          }
        });
        tl.to(targetElementRound, {
          height: 0,
          ease: "none"
        }, 0);
      });
    }
    
    } // End Mobile Only ScrollTrigger
  
  }); // End GSAP MatchMedia

}

const contact_form = document.querySelector('.form');
let name = document.getElementById("form-name");
let email = document.getElementById("form-email");
let tel = document.getElementById("form-tel");
let subject = document.getElementById("form-subject");
let message = document.getElementById("form-message");

console.log('hello');

contact_form.addEventListener('submit', (e) => {
  e.preventDefault();

  let formData = {
    name: name.value,
    email: email.value,
    tel: tel.value,
    subject: subject.value,
    message: message.value
  };

  let xhr = new XMLHttpRequest();
  xhr.open('POST', '/');
  xhr.setRequestHeader('content-type', 'application/json');
  xhr.onload = function() {
    console.log(xhr.responseText);
    if(xhr.responseText == 'success') {
      alert('Email Sent');
      name.value = '';
      email.value = '';
      tel.value = '';
      subject.value = '';
      message.value = '';
    } else {
      alert('Something Went Wrong');
    }
  }

  xhr.send(JSON.stringify(formData));
});