console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Wishes", filePath: "songs/ 1.mp3", coverPath: "Wishes cover.webp"},
    {songName: "Pehle bhi mai", filePath: "songs/2.mp3", coverPath: "pehle bhi main cover.webp"},
    {songName: "Bachke Bachke", filePath: "songs/3.mp3", coverPath: "bachke bachke cover.webp"},
    {songName: "Maharani", filePath: "songs/4.mp3", coverPath: "Maharani cover.webp"},
    {songName: "9:45", filePath: "songs/5.mp3", coverPath: "prabh singh.webp"},
    {songName: "Kasoor", filePath: "songs/6.mp3", coverPath: "Kasoor.webp"},
    {songName: "Ram Mere Sage", filePath: "songs/7.mp3", coverPath: "Ram mere sage.webp"},
    {songName: "Safar", filePath: "songs/8.mp3", coverPath: "Safar.webp"},
    {songName: "CO2", filePath: "songs/9.mp3", coverPath: "CO2.webp"},
    {songName: "white brown black", filePath: "songs/10.mp3", coverPath: "white brown black cover.webp"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
  

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})
 document.getElementById('next').addEventListener('click', ()=>{
     if(songIndex>=9){
         songIndex = 0
     }
     else{
         songIndex += 1;
     }
     audioElement.src = `songs/${songIndex+1}.mp3`;
     masterSongName.innerText = songs[songIndex].songName;
     audioElement.currentTime = 0;
     audioElement.play();
     masterPlay.classList.remove('fa-play-circle');
     masterPlay.classList.add('fa-pause-circle');

 })

 document.getElementById('previous').addEventListener('click', ()=>{
     if(songIndex<=0){
         songIndex = 0
     }
     else{
         songIndex -= 1;
     }
     audioElement.src = `songs/${songIndex+1}.mp3`;
     masterSongName.innerText = songs[songIndex].songName;
     audioElement.currentTime = 0;
     audioElement.play();
     masterPlay.classList.remove('fa-play-circle');
     masterPlay.classList.add('fa-pause-circle');
 })