const mario = document.querySelector(".mario");
const background = document.querySelector(".background");

let position = 30;
let isJumping = false;

function handleKeyUp(event) {
  if (event.keyCode === 32) {
    if (!isJumping)
      jump();
  };
};

function jump() {
  isJumping = true;

  let upInterval = setInterval(() => {
    if (position >= 50) {
      clearInterval(upInterval);

      let downInterval = setInterval(() => {
        if (position <= 30) {
          clearInterval(downInterval);
          isJumping = false;
        } else {
          position -= 5;
          mario.style.bottom = position + '%';
        }
      }, 50);

    } else {
      position += 5;
      mario.style.bottom = position + '%';
    }
  }, 50);
};


function createKoopa() {
  const koopa = document.createElement('div');
  let koopaPosition = 63;
  let randomTime = Math.random() * 5000;

  koopa.classList.add('koopa');
  koopa.style.left = 63 + '%';
  background.appendChild(koopa);

  let leftInterval = setInterval(() => {
    if (koopaPosition < 22) {
      clearInterval(leftInterval);
      background.removeChild(koopa);
    } else if (koopaPosition > 0 && koopaPosition < 22) {
      // clearInterval(leftInterval);
      // document.body.innerHTML = '<h1 class="game-over" >Game Over</>'
    } else {
      koopaPosition -= 0.8;
      koopa.style.left = koopaPosition + '%';
    }
  }, 20);

  setTimeout(createKoopa, randomTime);
}

createKoopa();

document.addEventListener('keyup', handleKeyUp);