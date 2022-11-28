const imagesLinks = ['./images/1.jpeg', './images/2.png', './images/3.png', './images/4.png', './images/5.png'];

imagesLinks.forEach((e,i)=>{
    const link = document.createElement('link');
    link.setAttribute('id',('image'+(i+1)))
    link.setAttribute('rel','preload');
    link.setAttribute('as','image');
    link.setAttribute('href',e);
    document.querySelector('head').appendChild(link);
})