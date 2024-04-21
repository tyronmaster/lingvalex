const buttonsContainer = document.querySelector(".content__buttons");
const buttons = Array.from(document.querySelectorAll(".whois__button"));

const bricksContainer = document.querySelector(".content__bricks");
const bricks = Array.from(document.querySelectorAll(".whois__brick"));

buttonsContainer.addEventListener("click", (e) => {
  const index = buttons.indexOf(e.target);

  if (~index) {
    ChangeClassList(index);
  }
});

bricksContainer.addEventListener("click", (e) => {
  const index = bricks.indexOf(e.target);

  if (~index) {
    ChangeClassList(index);
  }
});

function ChangeClassList(index) {
  buttons.forEach((button) => button.classList.remove("active"));
  buttons[index].classList.add("active");
  bricks.forEach((brick) => {
    brick.classList.remove("active");
    brick.classList.remove("first");
    brick.classList.remove("second");
    brick.classList.remove("third");
  });
  switch (index) {
    case 0: {
      bricks[0].classList.add("active");
      bricks[0].classList.add("first");
      bricks[1].classList.add("second");
      bricks[2].classList.add("third");
      break;
    }
    case 1: {
      bricks[1].classList.add("active");
      bricks[1].classList.add("first");
      bricks[0].classList.add("second");
      bricks[2].classList.add("third");
      break;
    }
    case 2: {
      bricks[2].classList.add("active");
      bricks[2].classList.add("first");
      bricks[1].classList.add("second");
      bricks[0].classList.add("third");
      break;
    }
  }
}
