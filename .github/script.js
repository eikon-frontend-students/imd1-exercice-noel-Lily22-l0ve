const goofy = document.getElementById("goofy");
const sound = document.getElementById("sound");

goofy.addEventListener("click", () => {
  goofy.classList.add("active");

  // jouer le son
  sound.currentTime = 0;
  sound.play();

  // revenir à la taille normale
  setTimeout(() => {
    goofy.classList.remove("active");
  }, 200);
});
