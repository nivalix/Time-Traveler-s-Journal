document.addEventListener('DOMContentLoaded', function() {
    const playBtn = document.getElementById('music-play-btn');
    const audio = document.getElementById('music-audio');
    let isPlaying = false;
    document.getElementById('play-icon').style.display = 'block';
    document.getElementById('pause-icon').style.display = 'none';

    playBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        if (!isPlaying) {
            audio.play();
            isPlaying = true;
            playBtn.style.opacity = '1';
            document.getElementById('play-icon').style.display = 'none';
            document.getElementById('pause-icon').style.display = 'block';
        } else {
            audio.pause();
            isPlaying = false;
            playBtn.style.opacity = '1';
            document.getElementById('play-icon').style.display = 'block';
            document.getElementById('pause-icon').style.display = 'none';
        }
    });

    audio.addEventListener('ended', function() {
        isPlaying = false;
        playBtn.style.opacity = '1';
    });
});

// section 3 - carousel of composers
document.addEventListener('DOMContentLoaded', function() {
    const composers = document.querySelectorAll('.composer');
    const totalComposers = composers.length;
    let currentIndex = 2; //start with middle composer active
      
    function updateCarousel() {
        composers.forEach((composer, index) => {
            composer.classList.remove('active');
            
            //calculate disantce
            const distance = calculateDistance(index, currentIndex, totalComposers);
            
            if (distance === 0) {
                //center composer
                composer.style.left = '50%';
                composer.style.opacity = '1';
                composer.style.transform = 'translateX(-50%) scale(1.2)';
                composer.classList.add('active');
                composer.style.zIndex = 10;
            } else if (distance === -1 || distance === 1) {
                //immediate neighbors
                const direction = distance < 0 ? -1 : 1;
                composer.style.left = 50 + (direction * 20) + '%';
                composer.style.opacity = '0.8';
                composer.style.transform = 'translateX(-50%) scale(1)';
                composer.style.zIndex = 5;
            } else if (distance === -2 || distance === 2) {
                //outer positions
                const direction = distance < 0 ? -1 : 1;
                composer.style.left = 50 + (direction * 35) + '%';
                composer.style.opacity = '0.6';
                composer.style.transform = 'translateX(-50%) scale(0.8)';
                composer.style.zIndex = 1;
            } else {
                //smooth fade out
                composer.style.opacity = '0';
                composer.style.transform = 'translateX(-50%) scale(0.7)';
                composer.style.left = '50%'; // keep them centered to avoid layout jumps
                composer.style.zIndex = 0;
            }
        });
    }
      
    function calculateDistance(index, currentIndex, total) {
        let distance = index - currentIndex;
        if (Math.abs(distance) > Math.floor(total / 2)) {
            distance = distance > 0 ? distance - total : distance + total;
        }
        return distance;
    }
      
    function nextComposer() {
        currentIndex = (currentIndex + 1) % totalComposers;
        updateCarousel();
    }
      
    function prevComposer() {
        currentIndex = (currentIndex - 1 + totalComposers) % totalComposers;
        updateCarousel();
    }
      
    //initialize carousel
    updateCarousel();
      
    //add event listeners
    document.querySelector('.next-btn').addEventListener('click', nextComposer);
    document.querySelector('.prev-btn').addEventListener('click', prevComposer);
      
    //auto rotate every 5 seconds
    //setInterval(nextComposer, 5000);

    // section 4 - animated fun fact text
      
    const sentences = [
        "• Did you know? Beethoven continued to compose music even after losing his hearing.",
        "• Beethoven initially intended to dedicate his third symphony, the “Eroica,” to Napoleon Bonaparte, but scratched out the dedication when he learned that Napoleon had declared himself emperor.",
        "• Mozart was only 6 years old when he began composing music and was already performing for European royalty at age 8.",
        "• Bach had 20 children, many of whom went on to become successful musicians themselves.",
        "• The famous composer Franz Liszt was known for his showmanship as a pianist, often leaping off the piano bench and playing with incredible speed and dexterity.",
        "• The opera “The Barber of Seville” by Rossini was originally a flop, receiving poor reviews and low ticket sales, but later became one of the most beloved operas of all time.",
        "• The legendary composer and pianist Chopin suffered from tuberculosis and died at the young age of 39.",
        "• The famous “Wedding March” by Mendelssohn, commonly played at weddings today, was originally part of his incidental music for a production of Shakespeare’s “A Midsummer Night’s Dream.”",
        "• Tchaikovsky’s “1812 Overture” includes actual cannons as part of the instrumentation and is often performed as a patriotic piece in Russia.",
        "• Beethoven’s Ninth Symphony, with its iconic “Ode to Joy” finale, was the first major symphony to include a chorus singing in addition to the orchestra.",
        "• The “Moonlight” Sonata, one of Beethoven’s most famous piano pieces, was not given its nickname by the composer himself but rather by a music critic several years after Beethoven’s death."
    ];

    const textDiv = document.getElementById("text-output");
    const textBox = document.getElementById("text-box");
    const startBtn = document.getElementById("start-btn");

    const speed = 30;
    let sentenceIndex = 0;
    let charIndex = 0;
    let currentLine;
    let typingStarted = false;

    function typeNextChar() {
        if (!currentLine) {
            currentLine = document.createElement("div");
            currentLine.classList.add("line");
            textDiv.appendChild(currentLine);
        }

        const sentence = sentences[sentenceIndex];
        if (charIndex < sentence.length) {
            const span = document.createElement("span");
            span.textContent = sentence[charIndex];
            span.classList.add("fade-in");
            currentLine.appendChild(span);
            requestAnimationFrame(() => span.classList.add("show"));
            charIndex++;
            //auto scroll
            textBox.scrollTop = textBox.scrollHeight;

            setTimeout(typeNextChar, speed);
        } else {
            sentenceIndex++;
            charIndex = 0;
            currentLine = null;
            if (sentenceIndex < sentences.length) {
            setTimeout(typeNextChar, 1000);
            }
        }
    }

    startBtn.addEventListener("click", () => {
        if (!typingStarted) {
            typingStarted = true;
            startBtn.style.display = "none";
            textBox.style.display = "block";
            textBox.classList.add("show");
            typeNextChar();
        }
    });
});