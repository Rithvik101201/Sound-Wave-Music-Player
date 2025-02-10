window.addEventListener("DOMContentLoaded", function () {
    var banner = document.querySelector(".banner");
    var bannerImage = document.querySelector(".banner .left-img");
    var bannerHeading = document.querySelector(".banner .heading h1");
    var bannerText = document.querySelector(".banner .heading p");
  
    banner.style.backgroundImage = "url(images/banner1.svg)";
    bannerImage.setAttribute("src", "images/image.png");
    bannerHeading.textContent = "Deep Focus";
    bannerText.textContent = "Keep your focus and enjoy the serenity";
  });
  
function playAll(songNumber){
    var audioElement= document.getElementById("song");
    var playBtn=document.getElementById("play-pause");
    var songFileName = "music/"+songNumber+".mp3";
    var currentRow= document.getElementById("song"+songNumber);
    var banner = document.querySelector(".banner");
    var bannerImage = document.querySelector(".banner .left-img");
    var bannerHeading = document.querySelector(".banner .heading h1");
    var bannerText = document.querySelector(".banner .heading p");

    if(audioElement.getAttribute("src")==songFileName && !audioElement.paused){
        audioElement.pause();
        playBtn.innerHTML='<img src="images/play-button.svg">';
        
        banner.style.backgroundImage = "url(images/banner1.svg)";
        bannerImage.setAttribute("src", "images/image.png");
        bannerHeading.textContent = "Deep Focus";
        bannerText.textContent = "Keep your focus and enjoy the serenity";
    }
    else{
        audioElement.setAttribute("src",songFileName);
        audioElement.play();
        playBtn.innerHTML='<img src="images/pause-button.svg">';
       
        if (songNumber === 1) {
            bannerImage.setAttribute("src", "images/image 1.jfif");
            bannerHeading.textContent = "Asteroid II";
            bannerText.textContent = "By Rameses B";
        } else if (songNumber === 2) {
            bannerImage.setAttribute("src", "images/image 2.png");
            bannerHeading.textContent = "I Can Feel";
            bannerText.textContent = "By Syn Cole";
        }
        else if (songNumber === 3) {
            bannerImage.setAttribute("src", "images/image 3.jpg");
            bannerHeading.textContent = "Look No Further (ft Grace Luisa)";
            bannerText.textContent = "By Grace Luisa, Madison Mars";
        }
        else if (songNumber === 4) {
            bannerImage.setAttribute("src", "images/image 4.jpg");
            bannerHeading.textContent = "Why So Serious";
            bannerText.textContent = "By Eytan Peled, Roby Faye";
        }
        else if (songNumber === 5) {
            bannerImage.setAttribute("src", "images/image 5.jpg");
            bannerHeading.textContent = "Mortals x Royalty Mashup";
            bannerText.textContent = "By Egzod, Neoni, Maestro Chives, Warriyo";
        }
        else if (songNumber === 6) {
            bannerImage.setAttribute("src", "images/image 6.jpg");
            bannerHeading.textContent = "Worship";
            bannerText.textContent = "By Diamond Eyes";
        }
        else if (songNumber === 7) {
            bannerImage.setAttribute("src", "images/image 7.jpg");
            bannerHeading.textContent = "Red Lights";
            bannerText.textContent = "By Ella Rosa, Cafe Disko";
        }
        else if (songNumber === 8) {
            bannerImage.setAttribute("src", "images/image 8.jfif");
            bannerHeading.textContent = "Purpose";
            bannerText.textContent = "By Sketchez, Aeden";
        }
        else if (songNumber === 9) {
            bannerImage.setAttribute("src", "images/image 9.jpg");
            bannerHeading.textContent = "Donna";
            bannerText.textContent = "By maria kallastu, Sander Mölder, Soundy";
        }
        else if (songNumber === 10) {
            bannerImage.setAttribute("src", "images/image 10.jpg");
            bannerHeading.textContent = "Alone";
            bannerText.textContent = "By SGAR, Blooom";
        }
    }
}

function playaudio(){
    var audio=document.getElementById("song");
    var playBtn=document.getElementById("play-pause");
    if(audio.paused){
        audio.play();
        playBtn.innerHTML='<img src="images/pause-button.svg">';
    }
    else{
        audio.pause();
        playBtn.innerHTML='<img src="images/play-button.svg">';
    }
}