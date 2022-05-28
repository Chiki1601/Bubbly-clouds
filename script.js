console.clear();

const dee = document.getElementById('waddleDee');
const deeBottom = dee.getBoundingClientRect().height + dee.getBoundingClientRect().top;
const ground = document.getElementById('ground');
const groundPos = ground.getBoundingClientRect().top + window.pageYOffset;
const offset = 50; // px on the ground

window.addEventListener('scroll', handleScroll);

function handleScroll() {
  let pos = window.pageYOffset;

  if (pos > groundPos - deeBottom + offset) {
    if (!dee.classList.contains('is-sitting')) {
      dee.classList.add('is-sitting');
      dee.style.top = `${pos + dee.getBoundingClientRect().height + offset * 2}px`;
    }
  } else {
    dee.classList.remove('is-sitting');
    dee.style.top = null;
  }
}