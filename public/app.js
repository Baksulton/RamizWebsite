const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
const text = document.querySelector(".text");
const headline = document.querySelector(".headline");

const tl = new TimelineMax();

tl.fromTo(hero,1,{height:"0%"},{height:"80%",ease: Power2.easeInOut})
.fromTo(hero,1.2,{width:"100%"}, {width:"80%",ease:Power2.easeInOut})
.fromTo(slider,1.2,{x:"-100%"},{x:'0%', ease:Power2.easeInOut },"-=1.2")
fromTo(text,0.5,{opacity:0,X:100},{opacity:1,x:0},"-=0.5");


