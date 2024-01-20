const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const slider = document.querySelector('.slider')


let currentIndex=0;
const imagesCount=slider.children.length;

function scrollToImage(index){
    if(index<0){
        index=imagesCount - 1;
    }else if(index>=imagesCount)
    {
        index=0;
    }
    slider.scrollLeft=index*slider.children[0].clientHeight;
    currentIndex=index;
}

prev.addEventListener('click', () => {
    scrollToImage(currentIndex-1);
});

next.addEventListener('click', () => {
    scrollToImage(currentIndex+1);
});
scrollToImage(currentIndex);