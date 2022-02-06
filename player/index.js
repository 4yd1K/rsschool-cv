const player = document.querySelector('.player'),
      playBtn = document.querySelector('.play-pause'),
      prevBtn = document.querySelector('.previous-song'),
      nextBtn = document.querySelector('.next-song'),
      audio = document.querySelector('.audio'),
      progressContainer = document.querySelector('.progress_container'),
      progress = document.querySelector('.progress'),
      songArtist = document.querySelector('.song-artist'),
      songTitle = document.querySelector('.song-title'),
      img = document.querySelector('.img'),
      imgSrc = document.querySelector('.play-pause')
      time = document.querySelector('.controls__time')

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

// progress bar

// function updateProgress(e) {
//     const {duration, currentTime} = e.srcElement
//     // console.log (duration)
//     // console.log (currentTime)
//     const progressPercent = (currentTime / duration) * 100
//     progress.style.width= `${progressPercent}%`


// }

// audio.addEventListener('timeupdate', updateProgress )


// set tprogress
// function setProgress(e) {
//     const width = this.clientWidth
//     const clickX = e.offsetX 
//     const duration = audio.duration

//     audio.currentTime = (clickX / width) * duration
   
    

// }
// progressContainer.addEventListener('click', setProgress)

// autoplay 

audio.addEventListener('ended', nextSong)

//timer
function updateProg () {
    progress.value = (audio.currentTime/audio.duration) *100

    // minutes
    let minutes = Math.floor(audio.currentTime / 60)
    if (minutes < 10){
        minutes = '0' + String(minutes)
    }
    // seconds
    let seconds = Math.floor (audio.currentTime % 60)
    if (seconds < 10){
        seconds = '0' + String(seconds)
    }

    time.innerHTML = `${minutes}:${seconds}`
}
audio.addEventListener('timeupdate', updateProg)

// setprogress 
function setProgress () {
    audio.currentTime = (progress.value * audio.duration) / 100
}
progress.addEventListener('change', setProgress)

