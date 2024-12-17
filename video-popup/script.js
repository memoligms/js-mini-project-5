const watchButton =document.querySelector('.watchButton');
const videoContainer =document.querySelector('.videoContainer');
const closeIcon =document.querySelector('.closeIcon');
const video =document.querySelector('video');

watchButton.addEventListener('click', function(){
    videoContainer.classList.remove('active');
});

closeIcon.addEventListener('click', function(){
    videoContainer.classList.toggle('active');
    video.pause();
    video.currentTime=0;
});