import ListItem from "./List-item.js";
import locale from "./locale.js";
import { count } from "./task-number.js";

const $HEADER = document.querySelector(".hero");
const $DATA_INPUT = document.getElementById("task");
const $CONTENT_UL = document.querySelector(".to-do-list__container");
let valueGroup = "Optional";
$HEADER.addEventListener("pointerdown", (e) => {
  if (e.target.matches(".group")) {
    valueGroup = e.target.dataset.group;
  }
  if (e.target.closest(".hero__add")) {
    $CONTENT_UL.append(
      ListItem({
        description: $DATA_INPUT.value,
        importancia: valueGroup,
      })
    );
    count($CONTENT_UL);
    $DATA_INPUT.value = "";
    valueGroup = "Optional";
  }
});
