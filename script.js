var arr = [
    { songName: "Shape of You", url: "./songs/Ed Sheeran - Shape of You (Official Music Video).mp3", img: "./images/shape-of-you.jpg", artist: 'Ed Sheeran', duration: "4:23" },

    { songName: "I Was Made For Lovin' You Baby", url: "./songs/YUNGBLUD - I Was Made For Lovin You (Audio  from The Fall Guy).mp3", img: "./images/fall guy.jpg", artist: 'Yung Blud', duration: "4:21" },

    { songName: "Kehne Lagaa", artist: 'Rushil Aswal', url: "./songs/Rushil Aswal - Kehne Lagaa (Official Music Video).mp3", img: "./images/kehna lagaa.jpg", artist: 'Rushil Aswal', duration: "8:31" },

    { songName: "Drivers License", url: "./songs/Olivia Rodrigo - drivers license (Official Video).mp3", img: "./images/driver license.jpg", artist: 'Olivia Rodrigo', duration: "4:07" },

    { songName: "Shut Up and Dance", url: "./songs/WALK THE MOON - Shut Up and Dance (Official Video).mp3", img: "./images/shutup and dance.jpg", artist: 'Walk The Moon', duration: "4:06" }
]

var allSongs = document.querySelector("#all-songs")
var currentSongPoster = document.querySelector("#song-image")
var currentSongDetails = document.querySelector("#song-details")

var backward = document.querySelector("#backward")
var play = document.querySelector("#play")
var forward = document.querySelector("#forward")

var audio = new Audio()

var selectedSong = 0

function mainFunction() {
    var clutter = ""
    arr.forEach(function (song, index) {
        clutter += `<div class="song-card" id="${index}">
                    <div class="part-1">
                        <h2>${song.songName}</h2>
                        <h2>${song.duration}</h2>
                    </div>
                </div>`
    })
    allSongs.innerHTML = clutter

    audio.src = arr[selectedSong].url
    currentSongPoster.style.backgroundImage = `url("${arr[selectedSong].img}")`
    currentSongDetails.innerHTML = `<h1>${arr[selectedSong].songName}</h1>
                                    <h3>${arr[selectedSong].artist}</h3>`

    if (selectedSong === 0) {
        backward.style.opacity = 0.4
    } else {
        backward.style.opacity = 1
    }

    if (selectedSong === arr.length - 1) {
        forward.style.opacity = 0.4
    } else {
        forward.style.opacity = 1
    }

}
mainFunction()

allSongs.addEventListener("click", function (dets) {
    selectedSong = dets.target.id
    
    mainFunction()
    
    flag = 1
    audio.play()
    play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
})

var flag = 0;
play.addEventListener("click", function(){
    if(flag == 0){
        play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
        mainFunction()
        audio.play()
        flag = 1
    }else{
        play.innerHTML = `<i class="ri-play-mini-fill"></i>`
        flag = 0
        mainFunction()
        audio.pause()
    }
})

forward.addEventListener("click", function(){
    if(selectedSong < arr.length-1){
        play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
        selectedSong++
        mainFunction()
        audio.play()
        flag = 1
    }else{
        forward.style.opacity = 0.4
    }
})

backward.addEventListener("click", function(){
    play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
    if(selectedSong > 0){
        selectedSong--
        mainFunction()
        audio.play()
        flag = 0
    }else{
        backward.style.opacity = 0.4
    }
})