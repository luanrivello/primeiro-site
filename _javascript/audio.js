function setVolume(){
    var audios = document.getElementsByClassName("audio");
    var videos = document.getElementsByClassName("video");

    for (let index = 0; index < audios.length; index++) {
        audios[index].volume = "0.02";
    }

    for (let index = 0; index < videos.length; index++) {
        videos[index].volume = "0.2";
    }

}
