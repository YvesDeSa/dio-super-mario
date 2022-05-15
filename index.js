const mario = document.querySelector(".mario");
const background = document.querySelector(".background");

let position = 33;
let isJumping = false;

function handleKeyUp(event) {
  if (event.keyCode === 32) {
    if (!isJumping) {
      jumpAnimation();
      jump();
    }
  };
};

function jump() {
  isJumping = true;

  let upInterval = setInterval(() => {
    if (position >= 49) {
      clearInterval(upInterval);

      let downInterval = setInterval(() => {
        if (position <= 33) {
          clearInterval(downInterval);
          isJumping = false;
          mario.classList.remove('mario-saltando');
          mario.classList.add('mario-parado');
        } else {
          position -= 3;
          mario.style.bottom = position + '%';
        }
      }, 50);

    } else {
      position += 3;
      mario.style.bottom = position + '%';
    }
  }, 50);
};


function createTube() {
  const tube = document.createElement('div');
  let tubePosition = 68;
  let randomTime = Math.random() * 5000;

  tube.classList.add('tube');
  tube.style.left = 68 + '%';
  background.appendChild(tube);

  let leftInterval = setInterval(() => {
    if (tubePosition < 20) {
      clearInterval(leftInterval);
      background.removeChild(tube);
    } else if (tubePosition > 25 && tubePosition < 27.5 && position < 40) {
      clearInterval(leftInterval);
      document.body.innerHTML = '<div class="game-over"> <h2>Game Over</h2> </div>'
    } else {
      tubePosition -= 0.4;
      tube.style.left = tubePosition + '%';
    }
  }, 20);

  setTimeout(createTube, randomTime);
}

function walkingAnimation() {
  setInterval(() => {
    if (mario.classList.contains('mario-parado')) {
      mario.classList.remove('mario-parado');
      mario.classList.add('mario-andando');
    } else {
      mario.classList.remove('mario-andando');
      mario.classList.add('mario-parado');
    }
  }, 200);
}

function jumpAnimation() {
  if (mario.classList.contains('mario-parado')) {
    mario.classList.remove('mario-parado');
    mario.classList.add('mario-saltando');
  } else {
    mario.classList.remove('mario-andando');
    mario.classList.add('mario-saltando');
  }
}

createTube();

walkingAnimation();

document.addEventListener('keyup', handleKeyUp);