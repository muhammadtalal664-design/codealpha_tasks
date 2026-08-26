const images = [
"https://picsum.photos/id/1015/1000/700",
"https://picsum.photos/id/1011/1000/700",
"https://picsum.photos/id/1074/1000/700",
"https://picsum.photos/id/1040/1000/700",
"https://picsum.photos/id/1031/1000/700",
"https://picsum.photos/id/593/1000/700"
];

let current = 0;

function openLightbox(index){

current = index;

document.getElementById("lightbox").style.display="flex";

document.getElementById("lightbox-img").src=images[current];

}

function closeLightbox(){

document.getElementById("lightbox").style.display="none";

}

function changeImage(step){

current += step;

if(current<0)
current=images.length-1;

if(current>=images.length)
current=0;

document.getElementById("lightbox-img").src=images[current];

}

// Keyboard Navigation

document.addEventListener("keydown",function(e){

const box=document.getElementById("lightbox");

if(box.style.display==="flex"){

if(e.key==="ArrowRight")
changeImage(1);

if(e.key==="ArrowLeft")
changeImage(-1);

if(e.key==="Escape")
closeLightbox();

}

});

// Filters

function filterImages(category){

const items=document.querySelectorAll(".item");

const buttons=document.querySelectorAll(".filters button");

buttons.forEach(btn=>btn.classList.remove("active"));

event.target.classList.add("active");

items.forEach(item=>{

if(category==="all"){

item.style.display="block";

}
else{

if(item.classList.contains(category))
item.style.display="block";
else
item.style.display="none";

}

});

}
