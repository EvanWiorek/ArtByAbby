const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.target.classList.toggle("show", entry.isIntersecting)
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
    }
  })
}, {
  threshold: 1,
});

const animateFadeInSlow = document.querySelectorAll(".animate-fade-in-slow");

animateFadeInSlow.forEach(animation => {
  observer.observe(animation);
});


//make navbar logo smaller
const afterHeader = document.querySelector(".after-header");

const afterHeaderObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelector(".logo-img").classList.add("smaller", entry.isIntersecting)
      document.querySelector(".abby-name").classList.add("display-none", entry.isIntersecting)
    }
  })
}, {
  threshold: 1,
});

afterHeaderObserver.observe(afterHeader);


//default navbar logo
const beforeHeader = document.querySelector(".before-header");

const beforeHeaderObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelector(".logo-img").classList.remove("smaller", entry.isIntersecting)
      document.querySelector(".abby-name").classList.remove("display-none", entry.isIntersecting)
    }
  })
}, {
  threshold: 1,
});

beforeHeaderObserver.observe(beforeHeader);