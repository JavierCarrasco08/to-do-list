import locale from "./locale.js";
import { count } from "./task-number.js";
export default function ListItem({ description, importancia }) {
  const $CONTENT_UL = document.querySelector(".to-do-list__container");
  let group = {
    Optional: "#586ba4",
    intermediate: "#f5dd90",
    importan: "#f45b69",
  };
  const $LI = document.createElement("li");
  $LI.setAttribute("data-option", importancia);
  $LI.innerHTML = `
    <div class="to-do-list__group" style="background-color: ${group[importancia]}"></div>
  <section class="to-do-list__item">
    <label class="to-do-list__check">
      <input type="checkbox" class='checkbox' />
      <div class="to-do-list__checkmark"></div>
    </label>
    <p class="to-do-list__description">${description}</p>
    <button class="to-do-list__trash">
      <img src="./src/assets/svg/trash.svg" alt="trash" />
    </button>
  </section>
  `;
  return $LI;
}
