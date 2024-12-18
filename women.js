function freaky_button(image_id, sound_url, change_pitch) {
    image = document.getElementById(image_id);
  
    let audio_element = document.createElement("audio"); // Create audio element on-the-fly
  
    image.addEventListener("click", () => {
      audio_element.src = sound_url;
      audio_element.preservesPitch = false;
      if (change_pitch) {
        audio_element.playbackRate = Math.random() + 1 - 0.5;
      }
      audio_element.currentTime = 0;
      audio_element.play();
    });
  }
freaky_button("fart", "fartreverb.mp3", true)
freaky_button("helikeswomen", "women.mp3", false    )