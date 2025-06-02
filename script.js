const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

function stopAllSounds() {
  sounds.forEach(sound => {
    const audio = document.getElementById(sound);
    audio.pause();
    audio.currentTime = 0;
  });
}

document.getElementById('buttons').addEventListener('click', (e) => {
  const text = e.target.textContent.trim();

  if (text === 'stop') {
    stopAllSounds();
  } else if (sounds.includes(text)) {
    stopAllSounds();
    const audio = document.getElementById(text);
    audio.play();
  }
});
