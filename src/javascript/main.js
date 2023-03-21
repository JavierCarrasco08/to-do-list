import ListItem from "./List-item.js";
import locale from "./locale.js";
import { count } from "./task-number.js";

const $HEADER = document.querySelector(".hero");
const $DATA_INPUT = document.getElementById("task");
const $CONTENT_UL = document.querySelector(".to-do-list__container");
let valueGroup = "Optional";
if (localStorage.getItem("MiList")) {
  $CONTENT_UL.innerHTML = localStorage.getItem("MiList");
}
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
    locale();
    $DATA_INPUT.value = "";
    valueGroup = "Optional";
  }
});
document.addEventListener("keyup", (e) => {
  if ($DATA_INPUT.value.length > 2 && e.code === "Enter") {
    $CONTENT_UL.append(
      ListItem({
        description: $DATA_INPUT.value,
        importancia: valueGroup,
      })
    );
    count($CONTENT_UL);
    locale();
    $DATA_INPUT.value = "";
    valueGroup = "Optional";
  }
});
document.addEventListener("pointerdown", (e) => {
  if (e.target.closest(".to-do-list__trash")) {
    let parent = e.target.closest("li");
    parent.remove();
    count($CONTENT_UL);
    locale();
  }
});
document.addEventListener("input", (e) => {
  if (e.target.matches(".checkbox")) {
    let checked = e.target.checked ? "checked" : false;
    e.target.setAttribute("checked", checked);
    if (!checked) {
      e.target.removeAttribute("checked");
    }
    locale();
  }
});
