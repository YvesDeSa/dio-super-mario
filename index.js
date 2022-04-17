const mario = document.querySelector(".mario");

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

document.addEventListener('keyup', handleKeyUp);