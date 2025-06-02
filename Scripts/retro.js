document.addEventListener("DOMContentLoaded", function () {
    const images = [
      "Assets/image/ticket1.jpg",
      "Assets/image/ticket2.jpg",
      "Assets/image/ticket3.jpg",
      "Assets/image/ticket4.jpg",
      "Assets/image/ticket5.jpg",
      "Assets/image/ticket6.jpg",
      "Assets/image/ticket7.jpg",
      "Assets/image/ticket8.jpg",
      "Assets/image/ticket9.jpg",
      "Assets/image/ticket10.jpg",
      "Assets/image/ticket11.jpg",
      "Assets/image/ticket12.jpg",
    ];

    function createRow(id, speedClass = "") {
      const row = document.getElementById(id);
      if (!row) {
        console.warn(`Element with id "${id}" not found.`);
        return;
      }
      const scrollDiv = document.createElement('div');
      scrollDiv.className = `scroll ${speedClass}`;

      // Add two copies of the images for seamless looping
      for (let i = 0; i < 2; i++) {
        images.forEach(src => {
          const img = document.createElement('img');
          img.src = src;
          img.alt = "Panel";
          img.className = "panel";
          scrollDiv.appendChild(img);
        });
      }

      row.appendChild(scrollDiv);
    }

    createRow("row1", "normal");
    createRow("row2", "slow");
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