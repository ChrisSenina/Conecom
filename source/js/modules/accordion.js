const accordionContent = document.querySelectorAll('.accordion__content');
const accordionInput = document.querySelectorAll('.accordion__input');

export function playAccordion() {
  accordionInput.forEach((item, index) => {
    item.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowUp') {
        const prevIndex = (index - 1 + accordionInput.length) % accordionInput.length;
        accordionInput[prevIndex].focus();
        event.preventDefault();
      } else if (event.key === 'ArrowDown') {
        const nextIndex = (index + 1) % accordionInput.length;
        accordionInput[nextIndex].focus();
        event.preventDefault();
      } else if (event.key === 'Enter') {
        item.click();
        event.preventDefault();
      }
    });
  });

  accordionContent.forEach((item) => {
    const toggle = item.querySelector('button');
    toggle.addEventListener('click', () => {
      item.classList.toggle('is-opened');

      const description = item.querySelector('p');

      if (item.classList.contains('is-opened')) {
        toggle.classList.add('is-opened');
        description.style.height = `${description.scrollHeight}px`;
      } else {
        toggle.classList.remove('is-opened');
        description.style.height = '0px';
      }
    });


  });
}
