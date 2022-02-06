const player = document.querySelector('.player'),
      playBtn = document.querySelector('.play-pause'),
      prevBtn = document.querySelector('.previous-song'),
      nextBtn = document.querySelector('.next-song'),
      audio = document.querySelector('.audio'),
      progress = document.querySelector('.progress-bar'),
      songArtist = document.querySelector('.song-artist'),
      songTitle = document.querySelector('.song-title'),
      img = document.querySelector('.img'),
      imgSrc = document.querySelector('.play-pause')

// название песен
const songs = ["Don't Hurt Yourself", "Don't Start Now"]
const artist = ['Beyonce', 'Dua Lipa']
      
// песня по умолсанию
let songIndex= 0;

// Init
function loadSong (song) {
    songTitle.innerHTML = song
    audio.src = `./assets/audio/${song}.mp3`
    img.src = `./assets/img/cover${songIndex + 1}.png`
}
loadSong(songs[songIndex])

// play
function playSong () {
    player.classList.add('play')
    img.classList.add('active')
    imgSrc.src = './assets/svg/pause.png'
    audio.play()
}

// pause
function pauseSong () {
    player.classList.remove('play')
    img.classList.remove('active')
    imgSrc.src = './assets/svg/play.png'
    audio.pause()
}
playBtn.addEventListener('click', () => {
    const isPlaying = player.classList.contains('play')
    if (isPlaying) {
        pauseSong()
    }else{
        playSong()
    }
})

// next song

function nextSong() {
    songIndex++ 

    if(songIndex > songs.length - 1){
        songIndex = 0 
    }
    
    
     loadSong(songs[songIndex])
     playSong()
}
nextBtn.addEventListener('click', nextSong)

// prev song
function prevSong() {
    songIndex--

    if(songIndex < 0){
        songIndex = songs.length-1
    }

    loadSong(songs[songIndex])
     playSong()
}
prevBtn.addEventListener('click', prevSong)