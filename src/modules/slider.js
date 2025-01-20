const images = document.querySelectorAll('.slider-image');
const dots = document.querySelectorAll('.dot');

export function initialRendering() {
  images[0].classList.add('active');
  dots[0].classList.add('active');
}

function updateSlider(counter) {
  images.forEach((image) => image.classList.remove('active'));
  dots.forEach((dot) => dot.classList.remove('active'));

  images[counter].classList.add('active');
  dots[counter].classList.add('active');
}
export function handleSlider() {
  const arrowNext = document.getElementById('arrow-next');
  const arrowPrev = document.getElementById('arrow-prev');
  let sliderCounter = 0;

  arrowNext.addEventListener('click', () => {
    if (sliderCounter === images.length - 1) {
      sliderCounter = 0;
    } else {
      sliderCounter += 1;
    }
    updateSlider(sliderCounter);
  });
  arrowPrev.addEventListener('click', () => {
    if (sliderCounter === 0) {
      sliderCounter = images.length - 1;
    } else {
      sliderCounter -= 1;
    }
    updateSlider(sliderCounter);
  });
  window.addEventListener('keydown', (event) => {
    switch (event.key) {
      case 'ArrowLeft': {
        if (sliderCounter === 0) {
          sliderCounter = images.length - 1;
        } else {
          sliderCounter -= 1;
        }
        updateSlider(sliderCounter);
        break;
      }
      case 'ArrowRight': {
        if (sliderCounter === images.length - 1) {
          sliderCounter = 0;
        } else {
          sliderCounter += 1;
        }
        updateSlider(sliderCounter);
        break;
      }
      default:
        break;
    }
  });
}
export function handleClickOnDots() {
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      dots.forEach((activeDot) => activeDot.classList.remove('active'));
      images.forEach((image) => image.classList.remove('active'));
      dot.classList.add('active');
      images[index].classList.add('active');
    });
  });
}
export function updateSliderTimer() {
  let sliderCounter = 0;
  setInterval(() => {
    if (sliderCounter === images.length - 1) {
      sliderCounter = 0;
    } else {
      sliderCounter += 1;
    }
    updateSlider(sliderCounter);
  }, 5000);
}
