const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
const audioMap = {};

sounds.forEach(sound => {
  const audio = new Audio(`sounds/${sound}.mp3`);
  audioMap[sound] = audio;
});

document.getElementById('buttons').addEventListener('click', (e) => {
  const buttonText = e.target.textContent.trim();
  
  if (buttonText === 'stop') {
    Object.values(audioMap).forEach(audio => {
      audio.pause();
      audio.currentTime = 0;
    });
  } else if (sounds.includes(buttonText)) {
    Object.values(audioMap).forEach(audio => {
      audio.pause();
      audio.currentTime = 0;
    });
    audioMap[buttonText].play();
  }
});