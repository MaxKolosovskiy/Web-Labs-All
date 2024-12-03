let currentSlide = 0;

function showSlide(index) {
  const slidesContainer = document.querySelector('.slides-container');
  const slides = document.querySelectorAll('.slide');

  // Циклічне прокручування
  if (index >= slides.length) {
    currentSlide = 0; // Повертається на початок
  } else if (index < 0) {
    currentSlide = slides.length - 1; // Переходить до кінця
  } else {
    currentSlide = index;
  }

  // Зсуваємо контейнер, щоб показати потрібний слайд
  slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}