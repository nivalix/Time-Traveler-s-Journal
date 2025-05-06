const composers = [
    {
        name: "Ludwig van Beethoven",
        years: "1770-1827",
        bio: "A German composer and pianist who was a crucial figure in the transition between the Classical and Romantic eras in Western art music. His best-known compositions include 9 symphonies, 5 piano concertos, and 32 piano sonatas.",
        image: "https://th.bing.com/th/id/R.c5fea1e9315784df2f83d6d72baeefc4?rik=ejMXpDY0asc%2bRw&riu=http%3a%2f%2fimages.fineartamerica.com%2fimages-medium-large%2fludwig-van-beethoven-composing-his-missa-solemnis-joseph-carl-stieler.jpg&ehk=n%2f44OACtKAL1FvEZAaxE2SJAe2J%2fstj1%2fahUUeh9lpc%3d&risl=&pid=ImgRaw&r=0",
        music: "audio/Fur élise - RAW.mp3",
        track: "Für Elise"
    },
    {
        name: "Wolfgang Amadeus Mozart",
        years: "1756-1791",
        bio: "An Austrian composer and musician who created works that encompassed the light and graceful along with the dark and passionate. His enormous output includes works widely acknowledged as pinnacles of symphonic, chamber, piano, operatic, and choral music.",
        image: "https://trptk-com.b-cdn.net/wp-content/uploads/2023/07/Wolfgang-Amadeus-Mozart-768x768.jpeg",
        music: "audio/Symphony No. 40.mp3",
        track: "Symphony No. 40 in G Minor K 550 Molto Allegro"
    },
    {
        name: "Johann Sebastian Bach",
        years: "1685-1750",
        bio: "A German composer and musician of the late Baroque period. His works include the Goldberg Variations, the Cello Suite, and the Mass in D minor.",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Johann_Sebastian_Bach.jpg",
        music: "audio/Minuet in G.mp3",
        track: "Minuet in G Major"
    },
    {
        name: "Franz Schubert",
        years: "1797-1828",
        bio: "An Austrian composer of the late Classical and early Romantic eras despite his short lifetime. His fusion of Classical form with Romantic melody and evocative harmonies bridges the worlds of Classical and Romantic music.",
        image: "https://hellomusictheory.com/wp-content/uploads/2021/05/franz-schubert-756x1024.jpeg",
        music: "audio/Ave-Maria.mp3",
        track: "Ave Maria"
    }
];

// Elements
const composerImage = document.getElementById('composerImage');
const composerName = document.getElementById('composerName');
const composerYears = document.getElementById('composerYears');
const composerBio = document.getElementById('composerBio');
const prevButton = document.querySelector('.prev-composer');
const nextButton = document.querySelector('.next-composer');
const vinylDisc = document.getElementById('vinylDisc');
const playButton = document.getElementById('playButton');
const musicPlayer = document.getElementById('musicPlayer');
const trackInfo = document.getElementById('trackInfo');

let currentComposerIndex = 0;

function updateComposerInfo() {
    const composer = composers[currentComposerIndex];
    composerImage.src = composer.image;
    composerImage.alt = composer.name;
    composerName.textContent = composer.name;
    composerYears.textContent = composer.years;
    composerBio.textContent = composer.bio;
    musicPlayer.src = composer.music;
    trackInfo.textContent = `${composer.track} by ${composer.name}`;

    // reset vinyl state
    vinylDisc.classList.remove('spinning');
    playButton.classList.remove('paused');
    musicPlayer.pause();
    musicPlayer.currentTime = 0;
}

// navigate 
prevButton.addEventListener('click', function () {
    currentComposerIndex = (currentComposerIndex - 1 + composers.length) % composers.length;
    updateComposerInfo();
});

nextButton.addEventListener('click', function () {
    currentComposerIndex = (currentComposerIndex + 1) % composers.length;
    updateComposerInfo();
});

// play/pause music
playButton.addEventListener('click', toggleMusic);
vinylDisc.addEventListener('click', toggleMusic);

function toggleMusic() {
    if (musicPlayer.paused) {
        musicPlayer.play();
        vinylDisc.classList.add('spinning');
        playButton.classList.add('paused');
    } else {
        musicPlayer.pause();
        vinylDisc.classList.remove('spinning');
        playButton.classList.remove('paused');
    }
}

updateComposerInfo();