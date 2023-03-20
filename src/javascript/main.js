import locale from "./locale.js";

const $HEADER = document.querySelector(".hero");
const $DATA_INPUT = document.getElementById("task");
let valueGroup = "Optional";
$HEADER.addEventListener("pointerdown", (e) => {
  if (e.target.matches(".group")) {
    valueGroup = e.target.dataset.group;
  }
  if (e.target.closest(".hero__add")) {
    locale({
      description: $DATA_INPUT.value,
      group: valueGroup,
    });
    valueGroup = "Optional";
  }
});
