const bannerContainer = document.querySelector(".banner-container");
const images = ['url(./images/1.jpeg)', 'url(./images/2.png)', 'url(./images/3.png)', 'url(./images/4.png)', 'url(./images/5.png)'];
let bgStartIndex = 1;

setTimeout(animateBackground, 5000);

bannerContainer.addEventListener("animationend", (event) => {
    if(event.animationName === 'bg-switch'){
        document.body.style.setProperty('--bg-image-start', images[bgStartIndex]);

        if(bgStartIndex + 1 === images.length) {
            bgStartIndex = -1;
        }

        document.body.style.setProperty('--bg-image-end', images[bgStartIndex + 1]);
        bgStartIndex++

        bannerContainer.classList.toggle('animate-background')
        bannerContainer.offsetWidth
        bannerContainer.classList.toggle('animate-background')
    }
})

function animateBackground() {
    bannerContainer.classList.add("animate-background");
}