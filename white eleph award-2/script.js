gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector("#main").style.transform
    ? "transform"
    : "fixed"*/
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();


var tl=gsap.timeline();

gsap.to(".circle-2",{
  opacity:1,
  delay:2
})
gsap.to("#loader img",{
  opacity:0,
  delay:1.5
})
tl.to("#loader",{
  top:"-100%",
  delay:2,
  duration:5,
})
gsap.to("#loader-1",{
  top:"-100%",
  delay:2.25,
  duration:4
})

var img1=document.querySelector(".img-1");
var img2=document.querySelector(".img-2");
var img3=document.querySelector(".img-3");
var h2=document.querySelector("#page-3 .h2");
var h3=document.querySelector("#page-3 .h3");
var h4=document.querySelector("#page-3 .h4");
var h5=document.querySelector("#page-3 .h5");
var h6=document.querySelector("#page-3 .h6");
var pg=document.querySelector("#page-3");
var circle=document.querySelector(".circle-5")


img1.addEventListener("mouseenter",function()
{
  h4.style.opacity="1";
})
img1.addEventListener("mouseleave",function()
{
  h4.style.opacity="0";
})

img2.addEventListener("mouseenter",function()
{
  h5.style.opacity="1";
  h6.style.opacity="1";
})
img2.addEventListener("mouseleave",function()
{
  h5.style.opacity="0";
  h6.style.opacity="0";
})
img3.addEventListener("mouseenter",function()
{
  h2.style.opacity="1";
  h3.style.opacity="1";
})
img3.addEventListener("mouseleave",function()
{
  h2.style.opacity="0";
  h3.style.opacity="0";
})

pg.addEventListener("mousemove",function(dets){
  circle.style.top= dets.y +"px";
  circle.style.left= dets.x +"px";
})

// var rot=document.querySelector(".circle-2");
// rot.addEventListener("mouseenter",function()
// {
//   rot.style.rotate="0deg";
// })
// rot.addEventListener("mouseleave",function()
// {
//   rot.style.rotate="-33deg";
// })