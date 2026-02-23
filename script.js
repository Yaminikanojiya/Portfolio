/* Scroll Reveal */
function revealOnScroll(){
document.querySelectorAll(".reveal").forEach(el=>{
if(el.getBoundingClientRect().top<window.innerHeight-100){
el.classList.add("active");
}
});
}
window.addEventListener("scroll",revealOnScroll);
window.addEventListener("load",revealOnScroll);

/* Tilt */
document.querySelectorAll(".tilt").forEach(card=>{
card.addEventListener("mousemove",e=>{
const rect=card.getBoundingClientRect();
const x=e.clientX-rect.left;
const y=e.clientY-rect.top;
const centerX=rect.width/2;
const centerY=rect.height/2;
card.style.transform=`rotateX(${(y-centerY)/20}deg) rotateY(${(centerX-x)/20}deg)`;
});
card.addEventListener("mouseleave",()=>card.style.transform="rotateX(0) rotateY(0)");
});

/* Carousel Buttons */
const carousel=document.getElementById("carousel");
document.querySelector(".right").onclick=()=>carousel.scrollLeft+=300;
document.querySelector(".left").onclick=()=>carousel.scrollLeft-=300;

/* Drag Scroll */
let isDown=false,startX,scrollLeft;
carousel.addEventListener("mousedown",e=>{
isDown=true;
startX=e.pageX-carousel.offsetLeft;
scrollLeft=carousel.scrollLeft;
});
carousel.addEventListener("mouseleave",()=>isDown=false);
carousel.addEventListener("mouseup",()=>isDown=false);
carousel.addEventListener("mousemove",e=>{
if(!isDown)return;
const x=e.pageX-carousel.offsetLeft;
const walk=(x-startX)*2;
carousel.scrollLeft=scrollLeft-walk;
});

/* Preview */
function openPreview(img){
document.getElementById("previewModal").style.display="flex";
document.getElementById("previewImage").src=img.src;
}
function closePreview(){
document.getElementById("previewModal").style.display="none";
}
