var fartbutton = document.getElementById("fart")
var fartreverb = document.getElementById("fartreverb")
function povmewhentacobell(){
    fartreverb.play()
    fartreverb.volume = 1
    fartreverb.preservesPitch = false
    fartreverb.playbackRate = Math.random() + 1 - 0.5;
    fartreverb.currentTime = 0;
}
 fartbutton.addEventListener("click", povmewhentacobell)