const handleDropdownInteraction = (selector, options, dropdownArr) => {
  if (options.classList.contains('active')) {
    options.classList.remove('active');
  }

  selector.addEventListener('mouseover', () => {
    dropdownArr.forEach((dropdown) => {
      const otherOptions = dropdown.querySelector('.options');
      if (otherOptions !== options) {
        otherOptions.classList.remove('active');
      }
    });
    options.classList.add('active');
  });
  selector.addEventListener('mouseleave', () => {
    if (!options.matches(':hover')) {
      options.classList.remove('active');
    }
    options.addEventListener('mouseleave', () => {
      options.classList.remove('active');
    });
  });
};

export default handleDropdownInteraction;
