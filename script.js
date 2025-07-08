const envelope = document.getElementById('envelope');
const music = document.getElementById('bg-music');

envelope.addEventListener('click', () => {
  envelope.classList.toggle('open');
  music.volume = 0.5;
  music.play().catch(() => {});
});
