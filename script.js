const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2,
  }
);

document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));

const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const slides = Array.from(document.querySelectorAll(".carousel .slide"));
const prevBtn = document.querySelector(".carousel-btn.prev");
const nextBtn = document.querySelector(".carousel-btn.next");
let slideIndex = 0;

const setSlide = index => {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
};

const showNext = () => {
  slideIndex = (slideIndex + 1) % slides.length;
  setSlide(slideIndex);
};

const showPrev = () => {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  setSlide(slideIndex);
};

if (slides.length) {
  nextBtn?.addEventListener("click", showNext);
  prevBtn?.addEventListener("click", showPrev);
  setInterval(showNext, 6000);
}

