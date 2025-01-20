import './styles/style.css';
import handleDropdownInteraction from './modules/dropdown';
import {
  handleSlider, initialRendering, handleClickOnDots, updateSliderTimer,
} from './modules/slider';

window.addEventListener('load', () => {
  const dropdownArr = document.querySelectorAll('.menu-item');
  dropdownArr.forEach((dropdown) => {
    const selector = dropdown.querySelector('.selector');
    const options = dropdown.querySelector('.options');
    handleDropdownInteraction(selector, options, dropdownArr);
  });
  initialRendering();
  handleSlider();
  handleClickOnDots();
  updateSliderTimer();
});
