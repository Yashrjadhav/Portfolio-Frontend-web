const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
}); 

function firspageanimation(){
    var t1=gsap.timeline();
    t1.from("#nav",{
        y:'-10',
        opacity:0,
        duration:1.5,
        ease:Expo.easeInOut
    })
        .to(".boundingele",{
            y:0,
            ease:Expo.easeInOut,
            duration:2,
            delay:-1,
            stagger:.2    
        })
        .from("#homefooter",{
            y:'-10' ,
            opacity:0,
            duration:1.5,
            delay:-1,
            ease:Expo.easeInOut,
        })
    
}
function circleskew() {
  // define default scale value
  var xscale = 1;
  var yscale = 1;

  var xprev = 0;
  var yprev = 0;

  window.addEventListener("mousemove", function (dets) {
    clearTimeout(timeout);

    xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
    yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);

    xprev = dets.clientX;
    yprev = dets.clientY;

    circleMouseFollower(xscale, yscale);

    timeout = setTimeout(function () {
      document.querySelector(
        "#circle"
      ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
    }, 100);
  });
}
function circleMouseFollower(xscale, yscale) {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector(
      "#circle"
    ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
  });
}

firspageanimation();
circleMouseFollower();
circleskew();

document.querySelectorAll(".ele").forEach(function (ele) {
  var rotate = 0;
  var diffrot = 0;

  ele.addEventListener("mouseleave", function (dets) {
    gsap.to(ele.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });
  });

  ele.addEventListener("mousemove", function (dets) {
    var diff = dets.clientY - ele.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;
    gsap.to(ele.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
    });
  });
});
