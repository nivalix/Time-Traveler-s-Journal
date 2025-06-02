document.querySelectorAll('.info-box').forEach(box => {
    box.addEventListener('click', () => {
        const content = box.nextElementSibling;
        const arrow = box.querySelector('.arrow');

        content.classList.toggle('active');
        arrow.classList.toggle('rotate');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const playBtn = document.getElementById('music-play-btn');
    const audio = document.getElementById('music-audio');
    const sectionImg = document.querySelector('.section-3-img');
    let isPlaying = false;
    document.getElementById('play-icon').style.display = 'block';
    document.getElementById('pause-icon').style.display = 'none';

    const style = document.createElement('style');
    document.head.appendChild(style);

    playBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        if (!isPlaying) {
            audio.play();
            isPlaying = true;
            playBtn.style.opacity = '1';
            document.getElementById('play-icon').style.display = 'none';
            document.getElementById('pause-icon').style.display = 'block';
            if (sectionImg) sectionImg.classList.add('float-animation');
        } else {
            audio.pause();
            isPlaying = false;
            playBtn.style.opacity = '1';
            document.getElementById('play-icon').style.display = 'block';
            document.getElementById('pause-icon').style.display = 'none';
            if (sectionImg) sectionImg.classList.remove('float-animation');
        }
    });

    audio.addEventListener('ended', function() {
        isPlaying = false;
        playBtn.style.opacity = '1';
        if (sectionImg) sectionImg.classList.remove('float-animation');
    });
});