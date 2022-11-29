const bannerContainer = document.querySelector(".banner-container");
const images = ['url(./images/1.jpeg)', 'url(./images/2.png)', 'url(./images/3.png)', 'url(./images/4.png)', 'url(./images/5.png)'];
let bgStartIndex = 1;

setTimeout(animateBackground, 5000);

bannerContainer.addEventListener("animationend", bgAnimationSetImages);

function animateBackground() {
    bannerContainer.classList.add("animate-background");
}

function bgAnimationSetImages(event) {
    if(event.animationName === 'bg-switch'){
        setImageStart();        
        setImageEnd();
        bgStartIndex++

        reloadAnimation();
    }
}

function checkBgStartIndex() {
    const startImageIsTheLast = bgStartIndex + 1 === images.length;

    if(startImageIsTheLast) {
        bgStartIndex = -1;
    }
}

function setImageStart() {
    document.body.style.setProperty('--bg-image-start', images[bgStartIndex]);
}

function setImageEnd() {
    checkBgStartIndex();
    document.body.style.setProperty('--bg-image-end', images[bgStartIndex + 1]);
}

function reloadAnimation() {
    bannerContainer.classList.toggle('animate-background')
    bannerContainer.offsetWidth
    bannerContainer.classList.toggle('animate-background')
}