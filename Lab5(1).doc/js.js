  const tab = document.querySelectorAll(".noactive");
  const slides = document.querySelector(".slider").children;
  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");
  const indicator = document.querySelector(".indicator");
  let index = 0;

  prev.addEventListener("click", function () {
    prevSlide();
    updateCircleIndicator();
    resetTimer();
  });

  next.addEventListener("click", function () {
    nextSlide();
    updateCircleIndicator();
    resetTimer();
  });



  tab.forEach(function(tabItem) {
    tabItem.addEventListener("click", function() {
      tab.forEach(function(tabItem) {
        tabItem.classList.remove("active");
      });
      this.classList.add("active");
    });
  });