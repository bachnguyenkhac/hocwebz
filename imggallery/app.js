var images = document.querySelectorAll('.image img')
var prev = document.querySelector('.prev')
var next = document.querySelector('.right')
var close = document.querySelector('.close')
var galleryImg = document.querySelector('.gallery__inner img')
var gallery = document.querySelector('.gallery')

var currentIndex = 0;
function Showgallery(){
if (currentIndex ==0){
    prev.classList.add('hide')
}else{
    prev.classList.remove('hide')
}
if (currentIndex == images.length - 1){
    right.classList.add('hide')
}else{
    right.classList.remove('hide')
}

    //display
    gallery.classList.add('show')
    galleryImg.src = images[currentIndex].src
}

images.forEach((item, index)=>{
item.addEventListener('click', function(){
    currentIndex = index
    Showgallery()
   })
})
close.addEventListener('click', function(){
    gallery.classList.remove('show')
})

document.addEventListener('keydown',function(e){
if(e.keyCode == 27){
gallery.classList.remove('show')
   }
})

prev.addEventListener('click',function(){
    if(currentIndex > 0){
        currentIndex--
        Showgallery()
    }
})
right.addEventListener('click',function(){
    if(currentIndex <images.length - 1){
        currentIndex++
        Showgallery()
    }
})