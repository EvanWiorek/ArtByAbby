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
const afterHeader = document.querySelector(".after-header");

animateFadeInSlow.forEach(animation => {
  observer.observe(animation);
});


//make navbar logo smaller
const siteLogoObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
      // entry.target.classList.toggle("show", entry.isIntersecting)
      document.querySelector(".logo-img").classList.toggle("smaller", entry.isIntersecting)
      document.querySelector(".abby-name").classList.toggle("display-none", entry.isIntersecting)
  })
}, {
  threshold: 1,
});

siteLogoObserver.observe(afterHeader);