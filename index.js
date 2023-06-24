const proceCard = document.getElementById("explore-smiley");

proceCard.addEventListener("mouseover", () => {
    const smiley = document.getElementById("smiley");
    smiley.classList.remove("fa-face-smile");
    smiley.classList.add("fa-face-smile-wink");
});

// for swiper js
var swiper = new Swiper(".mySwiper", {
    effect: "cube",
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    }
  });