const images = [
    'images/image-1.jpg',
    'images/image-2.jpg',
    'images/image-3.jpg',
    'images/image-4.jpg',
    'images/image-5.jpg',
    'images/image-6.jpg',
    'images/image-7.jpg',
    ,
];
let imgIndex = 0;
let img = document.getElementById("carusel");

setInterval(() => {
    if (imgIndex === images.length) {
        imgIndex = 0;
    }
    const showImg = images[imgIndex];
    img.setAttribute('src', showImg);
    imgIndex++;

}, 1000)