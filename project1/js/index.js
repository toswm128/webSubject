const card = document.querySelector(".card");

card.addEventListener("mousemove", e => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 10;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

card.addEventListener("mouseenter", () => {
  card.style.transition = `none`;
});

card.addEventListener("mouseleave", () => {
  card.style.transition = `0.5s all ease`;
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
});
